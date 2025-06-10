
const Gallery = () => {
  const galleryImages = [
    { id: 1, title: 'Yoga Studio Interior', description: 'Our peaceful practice space' },
    { id: 2, title: 'Morning Session', description: 'Early morning yoga class' },
    { id: 3, title: 'Group Practice', description: 'Community yoga session' },
    { id: 4, title: 'Meditation Corner', description: 'Quiet space for reflection' },
    { id: 5, title: 'Yoga Equipment', description: 'Props and accessories' },
    { id: 6, title: 'Outdoor Session', description: 'Yoga in nature' },
    { id: 7, title: 'Instructor Teaching', description: 'Personalized guidance' },
    { id: 8, title: 'Studio Entrance', description: 'Welcome to Sparsh Yoga' },
    { id: 9, title: 'Practice Session', description: 'Students in action' },
  ];

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

      {/* Gallery Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="glass-panel-warm rounded-2xl p-6 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-muted-foreground font-medium">
                      [Placeholder Image {image.id}]
                    </p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-muted-foreground">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
