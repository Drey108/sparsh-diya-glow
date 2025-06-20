
import React, { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { X, Upload } from 'lucide-react';
import { toast } from 'sonner';

interface GalleryItemEditorProps {
  item?: any;
  onClose: () => void;
  onSave: () => void;
}

const GalleryItemEditor = ({ item, onClose, onSave }: GalleryItemEditorProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'image' as 'image' | 'video',
    category_id: '',
    alt_text: '',
    tags: [] as string[],
    is_featured: false,
    display_order: 0,
    status: 'active' as 'active' | 'inactive' | 'draft'
  });
  const [tagInput, setTagInput] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const { data: categories = [] } = useQuery({
    queryKey: ['gallery-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (error) throw error;
      return data || [];
    }
  });

  useEffect(() => {
    if (item) {
      setFormData({
        title: item.title || '',
        description: item.description || '',
        type: item.type || 'image',
        category_id: item.category_id || '',
        alt_text: item.alt_text || '',
        tags: item.tags || [],
        is_featured: item.is_featured || false,
        display_order: item.display_order || 0,
        status: item.status || 'active'
      });
      setPreviewUrl(item.thumbnail_url || item.file_url || '');
    }
  }, [item]);

  const saveMutation = useMutation({
    mutationFn: async () => {
      let file_url = item?.file_url || '';
      let thumbnail_url = item?.thumbnail_url || '';

      // Handle file upload if there's a new file
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `${formData.type}s/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('gallery-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('gallery-images')
          .getPublicUrl(filePath);

        file_url = publicUrl;
        thumbnail_url = publicUrl; // For now, use same URL for thumbnail
      }

      const itemData = {
        ...formData,
        file_url,
        thumbnail_url,
        updated_at: new Date().toISOString()
      };

      if (item) {
        // Update existing item
        const { error } = await supabase
          .from('gallery_items')
          .update(itemData)
          .eq('id', item.id);
        if (error) throw error;
      } else {
        // Create new item
        const { error } = await supabase
          .from('gallery_items')
          .insert([{
            ...itemData,
            created_by: (await supabase.auth.getUser()).data.user?.id
          }]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(item ? 'Item updated successfully' : 'Item created successfully');
      onSave();
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to save item');
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.error('Please enter a title');
      return;
    }
    if (!item && !file) {
      toast.error('Please select a file');
      return;
    }
    saveMutation.mutate();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {item ? 'Edit Gallery Item' : 'Add New Gallery Item'}
        </h2>
        <Button variant="ghost" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Column - Form Fields */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter item title"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Enter item description"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="type">Type</Label>
              <Select value={formData.type} onValueChange={(value: 'image' | 'video') => 
                setFormData(prev => ({ ...prev, type: value }))
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Image</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category_id} onValueChange={(value) => 
                setFormData(prev => ({ ...prev, category_id: value }))
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category: any) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="alt_text">Alt Text</Label>
              <Input
                id="alt_text"
                value={formData.alt_text}
                onChange={(e) => setFormData(prev => ({ ...prev, alt_text: e.target.value }))}
                placeholder="Describe the image for accessibility"
              />
            </div>

            <div>
              <Label>Tags</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Add a tag"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <Button type="button" onClick={handleAddTag}>Add</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer">
                    {tag}
                    <X 
                      className="ml-1 h-3 w-3" 
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="display_order">Display Order</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData(prev => ({ ...prev, display_order: parseInt(e.target.value) || 0 }))}
                />
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: 'active' | 'inactive' | 'draft') => 
                  setFormData(prev => ({ ...prev, status: value }))
                }>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_featured"
                checked={formData.is_featured}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
              />
              <Label htmlFor="is_featured">Featured Item</Label>
            </div>
          </div>

          {/* Right Column - File Upload & Preview */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>File Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="file">Select File</Label>
                    <Input
                      id="file"
                      type="file"
                      accept={formData.type === 'image' ? 'image/*' : 'video/*'}
                      onChange={handleFileChange}
                    />
                  </div>

                  {previewUrl && (
                    <div className="border rounded-lg p-4">
                      <Label>Preview</Label>
                      <div className="mt-2">
                        {formData.type === 'image' ? (
                          <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-w-full h-48 object-cover rounded"
                          />
                        ) : (
                          <video
                            src={previewUrl}
                            controls
                            className="max-w-full h-48 rounded"
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={saveMutation.isPending}>
            {saveMutation.isPending ? 'Saving...' : (item ? 'Update Item' : 'Create Item')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GalleryItemEditor;
