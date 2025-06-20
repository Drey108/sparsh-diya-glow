
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Grid2x2, Grid3x3, Upload, Edit, Trash } from 'lucide-react';
import { toast } from 'sonner';
import GalleryItemEditor from './GalleryItemEditor';
import FileUploader from './FileUploader';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video';
  file_url: string;
  thumbnail_url: string;
  category_id: string;
  status: 'active' | 'inactive' | 'draft';
  is_featured: boolean;
  created_at: string;
  gallery_categories?: { name: string };
}

const GalleryManager = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [showUploader, setShowUploader] = useState(false);

  const queryClient = useQueryClient();

  const { data: items = [], isLoading } = useQuery({
    queryKey: ['gallery-items', searchTerm, filterType, filterStatus],
    queryFn: async () => {
      let query = supabase
        .from('gallery_items')
        .select(`
          *,
          gallery_categories (name)
        `)
        .order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.ilike('title', `%${searchTerm}%`);
      }
      if (filterType !== 'all') {
        query = query.eq('type', filterType);
      }
      if (filterStatus !== 'all') {
        query = query.eq('status', filterStatus);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    }
  });

  const deleteItemMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('gallery_items')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gallery-items'] });
      toast.success('Item deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete item');
    }
  });

  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      const { error } = await supabase
        .from('gallery_items')
        .delete()
        .in('id', ids);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gallery-items'] });
      setSelectedItems([]);
      toast.success('Items deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete items');
    }
  });

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map(item => item.id));
    }
  };

  if (showUploader) {
    return (
      <FileUploader 
        onClose={() => setShowUploader(false)}
        onUploadComplete={() => {
          setShowUploader(false);
          queryClient.invalidateQueries({ queryKey: ['gallery-items'] });
        }}
      />
    );
  }

  if (editingItem) {
    return (
      <GalleryItemEditor
        item={editingItem}
        onClose={() => setEditingItem(null)}
        onSave={() => {
          setEditingItem(null);
          queryClient.invalidateQueries({ queryKey: ['gallery-items'] });
        }}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="image">Images</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid2x2 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>

          <Button onClick={() => setShowUploader(true)}>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedItems.length > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              {selectedItems.length} item(s) selected
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedItems([])}
              >
                Clear Selection
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => bulkDeleteMutation.mutate(selectedItems)}
                disabled={bulkDeleteMutation.isPending}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete Selected
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Gallery Items */}
      {isLoading ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="aspect-video bg-gray-200 rounded-lg mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : items.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">No gallery items found</p>
          <Button onClick={() => setShowUploader(true)}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Your First Item
          </Button>
        </Card>
      ) : viewMode === 'grid' ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item: GalleryItem) => (
            <Card key={item.id} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="absolute top-2 left-2 z-10"
                  />
                  <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    {item.thumbnail_url ? (
                      <img
                        src={item.thumbnail_url}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-400">
                        {item.type === 'image' ? <Grid3x3 className="h-8 w-8" /> : <Grid2x2Check className="h-8 w-8" />}
                      </div>
                    )}
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setEditingItem(item)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteItemMutation.mutate(item.id)}
                      >
                        <Trash className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium line-clamp-1">{item.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline">{item.type}</Badge>
                    <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                    {item.is_featured && <Badge variant="secondary">Featured</Badge>}
                  </div>
                  {item.gallery_categories && (
                    <p className="text-sm text-muted-foreground">
                      {item.gallery_categories.name}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // List view
        <div className="space-y-2">
          <div className="flex items-center p-3 bg-gray-50 rounded-lg font-medium text-sm">
            <input
              type="checkbox"
              checked={selectedItems.length === items.length}
              onChange={handleSelectAll}
              className="mr-4"
            />
            <div className="flex-1 grid grid-cols-6 gap-4">
              <span>Title</span>
              <span>Type</span>
              <span>Category</span>
              <span>Status</span>
              <span>Created</span>
              <span>Actions</span>
            </div>
          </div>
          
          {items.map((item: GalleryItem) => (
            <Card key={item.id}>
              <CardContent className="p-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="mr-4"
                  />
                  <div className="flex-1 grid grid-cols-6 gap-4 items-center">
                    <span className="font-medium">{item.title}</span>
                    <Badge variant="outline">{item.type}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {item.gallery_categories?.name || 'Uncategorized'}
                    </span>
                    <Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setEditingItem(item)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteItemMutation.mutate(item.id)}
                      >
                        <Trash className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
