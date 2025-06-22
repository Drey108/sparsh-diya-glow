
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { X, Upload, FileUp, Check } from 'lucide-react';
import { toast } from 'sonner';
import { put } from '@vercel/blob';

interface FileWithPreview extends File {
  preview?: string;
  id: string;
  progress: number;
  status: 'pending' | 'uploading' | 'completed' | 'error';
  error?: string;
}

interface FileUploaderProps {
  onClose: () => void;
  onUploadComplete: () => void;
}

const FileUploader = ({ onClose, onUploadComplete }: FileUploaderProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: FileWithPreview[] = acceptedFiles.map(file => ({
      ...file,
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file),
      progress: 0,
      status: 'pending'
    }));
    
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
      'video/*': ['.mp4', '.webm', '.mov', '.avi']
    },
    multiple: true
  });

  const removeFile = (fileId: string) => {
    setFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const uploadToVercelBlob = async (file: File) => {
    try {
      const blob = await put(file.name, file, {
        access: 'public',
        token: import.meta.env.VITE_BLOB_READ_WRITE_TOKEN
      });
      return blob.url;
    } catch (error) {
      console.error('Vercel Blob upload error:', error);
      throw new Error('Failed to upload to Vercel Blob');
    }
  };

  const uploadToSupabaseStorage = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
    const filePath = `images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('gallery-images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('gallery-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const uploadMutation = useMutation({
    mutationFn: async (file: FileWithPreview) => {
      // Update file status
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'uploading', progress: 25 } : f
      ));

      let file_url = '';
      let thumbnail_url = '';

      try {
        // Check if file.type exists and is a string before calling startsWith
        const fileType = file.type || '';
        
        if (fileType.startsWith('video/')) {
          // Upload videos to Vercel Blob Storage
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, progress: 50 } : f
          ));
          
          file_url = await uploadToVercelBlob(file);
          thumbnail_url = file_url; // For now, use same URL for thumbnail
          
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, progress: 75 } : f
          ));
        } else {
          // Upload images to Supabase Storage
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, progress: 50 } : f
          ));
          
          file_url = await uploadToSupabaseStorage(file);
          thumbnail_url = file_url;
          
          setFiles(prev => prev.map(f => 
            f.id === file.id ? { ...f, progress: 75 } : f
          ));
        }

        // Create gallery item record in Supabase
        const { error: insertError } = await supabase
          .from('gallery_items')
          .insert([{
            title: file.name.split('.')[0],
            type: fileType.startsWith('image/') ? 'image' : 'video',
            file_url: file_url,
            thumbnail_url: thumbnail_url,
            status: 'draft',
            created_by: (await supabase.auth.getUser()).data.user?.id
          }]);

        if (insertError) throw insertError;

        // Update file status to completed
        setFiles(prev => prev.map(f => 
          f.id === file.id ? { ...f, status: 'completed', progress: 100 } : f
        ));
      } catch (error) {
        console.error('Upload error:', error);
        throw error;
      }
    },
    onError: (error: any, file: FileWithPreview) => {
      setFiles(prev => prev.map(f => 
        f.id === file.id ? { ...f, status: 'error', error: error.message } : f
      ));
      toast.error(`Failed to upload ${file.name}: ${error.message}`);
    }
  });

  const handleUploadAll = async () => {
    setIsUploading(true);
    const pendingFiles = files.filter(f => f.status === 'pending');
    
    try {
      await Promise.all(pendingFiles.map(file => uploadMutation.mutateAsync(file)));
      toast.success('All files uploaded successfully');
      onUploadComplete();
      onClose();
    } catch (error) {
      toast.error('Some files failed to upload');
    } finally {
      setIsUploading(false);
    }
  };

  const completedCount = files.filter(f => f.status === 'completed').length;
  const totalCount = files.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upload Files</h2>
        <Button variant="ghost" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Upload Strategy Info */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <p className="text-sm text-blue-800">
            <strong>Upload Strategy:</strong> Videos are uploaded to Vercel Blob Storage, images to Supabase Storage. All URLs are stored in Supabase database.
          </p>
        </CardContent>
      </Card>

      {/* Dropzone */}
      <Card>
        <CardContent className="p-8">
          <div
            {...getRootProps()}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary'}
            `}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            {isDragActive ? (
              <p className="text-lg">Drop the files here...</p>
            ) : (
              <div>
                <p className="text-lg mb-2">Drag & drop files here, or click to select files</p>
                <p className="text-sm text-gray-500">
                  Supports images (JPG, PNG, WebP) and videos (MP4, WebM, MOV)
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Files ({completedCount}/{totalCount})</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setFiles([])}
                  disabled={isUploading}
                >
                  Clear All
                </Button>
                <Button
                  onClick={handleUploadAll}
                  disabled={isUploading || files.length === 0}
                >
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload All
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {files.map((file) => {
                const fileType = file.type || '';
                return (
                  <div key={file.id} className="flex items-center gap-4 p-3 border rounded-lg">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {file.preview && fileType.startsWith('image/') ? (
                        <img
                          src={file.preview}
                          alt={file.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <FileUp className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{file.name}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        <span>•</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {fileType.startsWith('video/') ? 'Vercel Blob' : 'Supabase Storage'}
                        </span>
                      </div>
                      
                      {file.status === 'uploading' && (
                        <Progress value={file.progress} className="mt-2 h-2" />
                      )}
                      
                      {file.status === 'error' && (
                        <p className="text-sm text-red-500 mt-1">{file.error}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          file.status === 'completed' ? 'default' :
                          file.status === 'error' ? 'destructive' :
                          file.status === 'uploading' ? 'secondary' : 'outline'
                        }
                      >
                        {file.status === 'completed' && <Check className="mr-1 h-3 w-3" />}
                        {file.status}
                      </Badge>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(file.id)}
                        disabled={file.status === 'uploading'}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FileUploader;
