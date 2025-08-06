import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Heart, Calendar, Users, Camera } from 'lucide-react';

const WeddingGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  const weddingEvents = [
    {
      id: 1,
      title: "Bridal Ceremony",
      description: "Traditional bridal preparations with beautiful red lehenga",
      image: "/lovable-uploads/44299f3a-68c4-4d96-be53-2cc2e86b63de.png",
      date: "Day 1",
      category: "Ceremony"
    },
    {
      id: 2,
      title: "Wedding Ritual",
      description: "Sacred wedding ceremony in traditional attire",
      image: "/lovable-uploads/db6fdfc4-8274-462c-84ff-2e287f33ea58.png",
      date: "Day 2",
      category: "Ritual"
    },
    {
      id: 3,
      title: "Haldi Ceremony",
      description: "Beautiful haldi ceremony with traditional decorations",
      image: "/lovable-uploads/4619b836-6037-4035-add6-bad860b1aa5c.png",
      date: "Day 1",
      category: "Ceremony"
    },
    {
      id: 4,
      title: "Family Celebration",
      description: "Joyful moments with family in vibrant traditional wear",
      image: "/lovable-uploads/2c148f4d-c37e-4796-be3d-8cec14eb9ba9.png",
      date: "Day 3",
      category: "Celebration"
    },
    {
      id: 5,
      title: "Group Photo",
      description: "Happy moments with friends and family",
      image: "/lovable-uploads/8634c715-d247-438b-b35f-0524e4948b90.png",
      date: "Day 3",
      category: "Celebration"
    },
    {
      id: 6,
      title: "Traditional Setup",
      description: "Beautiful traditional wedding setup with marigold decorations",
      image: "/lovable-uploads/b4015d6b-5446-4a75-a34b-f1ec2f26af86.png",
      date: "Day 2",
      category: "Decor"
    },
    {
      id: 7,
      title: "Flower Ceremony",
      description: "Magical moment with rose petals during ceremony",
      image: "/lovable-uploads/fb09aa6d-16f5-4be7-a481-651644dbb975.png",
      date: "Day 2",
      category: "Ceremony"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2000);

    // Clear interval on user interaction
    const handlePointerDown = () => {
      clearInterval(intervalId);
      setTimeout(() => {
        // Restart autoplay after 3 seconds of inactivity
        const newIntervalId = setInterval(() => {
          if (api.canScrollNext()) {
            api.scrollNext();
          } else {
            api.scrollTo(0);
          }
        }, 2000);
        
        return () => clearInterval(newIntervalId);
      }, 5000);
    };

    api.on('pointerDown', handlePointerDown);

    return () => {
      clearInterval(intervalId);
      api.off('pointerDown', handlePointerDown);
    };
  }, [api]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-accent/5 to-secondary/10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-romantic rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-sunset rounded-full blur-3xl opacity-30 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-golden rounded-full blur-2xl opacity-25 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Camera className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Wedding Gallery</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-romantic bg-clip-text text-transparent mb-6">
            Captured Moments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every moment of our special day, preserved in beautiful memories that tell our love story
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-16">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {weddingEvents.map((event) => (
                <CarouselItem key={event.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="group cursor-pointer hover-reveal bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-700 hover:shadow-elegant"
                    
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Floating badge */}
                        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {event.category}
                        </div>

                        {/* Heart icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary/90 hover:scale-110">
                          <Heart className="w-5 h-5 text-white" />
                        </div>

                        {/* Bottom overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-4 text-white/90 text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              <span>Family</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-primary/90 border-primary text-primary-foreground hover:bg-primary" />
            <CarouselNext className="right-4 bg-primary/90 border-primary text-primary-foreground hover:bg-primary" />
          </Carousel>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {weddingEvents.slice(0, 4).map((event, index) => (
            <div 
              key={`grid-${event.id}`}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(event.image)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-32 md:h-48 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium truncate">{event.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
              <img
                src={selectedImage}
                alt="Wedding moment"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WeddingGallery;