
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  description: string | null;
  type: 'image' | 'video';
  file_url: string;
  thumbnail_url: string | null;
  is_featured: boolean | null;
  display_order: number | null;
}

interface GalleryCategory {
  id: string;
  name: string;
  description: string | null;
  display_order: number | null;
  gallery_items: GalleryItem[];
}

const Gallery = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ['gallery-categories-with-items'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_categories')
        .select(`
          *,
          gallery_items (
            id,
            title,
            description,
            type,
            file_url,
            thumbnail_url,
            is_featured,
            display_order
          )
        `)
        .eq('is_active', true)
        .eq('gallery_items.status', 'active')
        .order('display_order', { ascending: true })
        .order('display_order', { foreignTable: 'gallery_items', ascending: true });

      if (error) throw error;
      return data as GalleryCategory[];
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Take a glimpse into our peaceful studio space and vibrant yoga community.
            </p>
          </div>
        </section>
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="glass-panel-warm rounded-2xl p-6 shadow-xl animate-pulse">
                  <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
            Take a glimpse into our peaceful studio space and vibrant yoga community.
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="px-4 space-y-16">
        <div className="max-w-7xl mx-auto">
          {categories.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Gallery content is being updated. Please check back soon!
              </p>
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Category Items */}
                {category.gallery_items && category.gallery_items.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.gallery_items.map((item) => (
                      <Card key={item.id} className="glass-panel-warm rounded-2xl p-6 shadow-xl group hover:shadow-2xl transition-shadow">
                        <CardContent className="p-0">
                          <div className="aspect-square rounded-xl mb-4 overflow-hidden relative">
                            {item.type === 'image' ? (
                              <img
                                src={item.thumbnail_url || item.file_url}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            ) : (
                              <div className="relative w-full h-full">
                                <video
                                  src={item.file_url}
                                  className="w-full h-full object-cover"
                                  controls
                                  preload="metadata"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                  <Play className="h-12 w-12 text-white" />
                                </div>
                              </div>
                            )}
                            {item.is_featured && (
                              <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-foreground">
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {item.type}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      No items in this category yet.
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
