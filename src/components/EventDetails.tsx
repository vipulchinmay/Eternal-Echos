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
        <div className="mb-12">
          <Card className="bg-gradient-romantic text-white border-0 shadow-romantic max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 animate-romantic-pulse" />
              <h3 className="font-serif text-2xl font-semibold mb-2">Save the Date</h3>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Calendar className="w-5 h-5" />
                <span>Saturday, June 15, 2024</span>
              </div>
              <p className="mt-2 opacity-90">A day to remember forever</p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="grid gap-8 md:gap-12">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
              {/* Time Circle */}
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-romantic flex items-center justify-center text-white shadow-glow">
                <div className="text-center">
                  <Clock className="w-6 h-6 mx-auto mb-1" />
                  <div className="font-semibold text-lg">{event.time}</div>
                </div>
              </div>

              {/* Event Details */}
              <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-romantic transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
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