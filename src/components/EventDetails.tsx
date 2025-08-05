import { Calendar, Clock, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EventDetails = () => {
  const events = [
    {
      title: "Wedding Ceremony",
      time: "4:00 PM",
      location: "Rose Garden Pavilion",
      description: "Join us as we exchange vows in a beautiful outdoor setting surrounded by blooming roses and loved ones."
    },
    {
      title: "Cocktail Hour",
      time: "5:30 PM",
      location: "Garden Terrace",
      description: "Celebrate with signature cocktails and canapés while we capture some photos."
    },
    {
      title: "Reception & Dinner",
      time: "7:00 PM",
      location: "Grand Ballroom",
      description: "Dance the night away with dinner, toasts, and celebration under the stars."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Celebration Details
          </h2>
          <div className="w-16 h-px bg-gradient-romantic mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our wedding day timeline to help you plan and celebrate with us
          </p>
        </div>

        {/* Wedding Date Card */}
        <div className="mb-12 stagger-item">
          <Card className="card-interactive card-glow bg-gradient-romantic text-white border-0 shadow-floating max-w-md mx-auto overflow-hidden">
            <CardContent className="p-8 text-center relative">
              <Heart className="w-10 h-10 mx-auto mb-4 animate-heart-beat text-primary-foreground/90" />
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3 text-shimmer">Save the Date</h3>
              <div className="flex items-center justify-center gap-3 text-lg md:text-xl mb-2">
                <Calendar className="w-6 h-6 animate-glow-pulse" />
                <span className="font-medium">Saturday, June 15, 2024</span>
              </div>
              <p className="mt-3 opacity-90 text-base md:text-lg">A day to remember forever</p>
              <div className="absolute inset-0 bg-shimmer opacity-20 pointer-events-none"></div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="grid gap-8 md:gap-12">
          {events.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 stagger-item hover-reveal group`} style={{ animationDelay: `${(index + 2) * 0.2}s` }}>
              {/* Time Circle */}
              <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-romantic flex items-center justify-center text-white shadow-floating magnetic animate-glow-pulse">
                <div className="text-center">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 group-hover:animate-spin transition-transform duration-300" />
                  <div className="font-semibold text-base md:text-lg">{event.time}</div>
                </div>
              </div>

              {/* Event Details */}
              <Card className="flex-1 card-interactive card-glow glass-card border-border/30 shadow-soft hover:shadow-elegant group-hover:scale-[1.02] transition-all duration-500">
                <CardContent className="p-6 md:p-8 relative overflow-hidden">
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    <MapPin className="w-4 h-4 group-hover:animate-bounce" />
                    <span className="font-medium text-sm md:text-base">{event.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300">
                    {event.description}
                  </p>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-romantic/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="bg-wedding-blush border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-semibold mb-4">Important Notes</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>🌿 <strong>Dress Code:</strong> Garden Party Elegant</p>
                <p>🎶 <strong>Music:</strong> Dancing until midnight</p>
                <p>📸 <strong>Photography:</strong> Please keep phones away during ceremony</p>
                <p>🎁 <strong>Gifts:</strong> Your presence is the only present we need</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;