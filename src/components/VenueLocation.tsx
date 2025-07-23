import { useState } from 'react';
import { MapPin, Phone, Globe, Car, Utensils } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import venuePhoto from '@/assets/venue-photo.jpg';

const VenueLocation = () => {
  const [showMap, setShowMap] = useState(false);

  // Note: Replace with actual Google Maps API key when backend is set up
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682145527963!2d-73.99668908459444!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1645564756835!5m2!1sen!2sus";

  const venueInfo = {
    name: "Rosewood Manor Gardens",
    address: "123 Garden Lane, Bloomfield Hills, MI 48302",
    phone: "(248) 555-0123",
    website: "www.rosewoodmanor.com",
    description: "A stunning estate featuring manicured gardens, elegant ballrooms, and breathtaking outdoor ceremony spaces."
  };

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Venue & Location
          </h2>
          <div className="w-16 h-px bg-gradient-romantic mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Join us at this magical location for our special day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Photo */}
          <div className="relative overflow-hidden rounded-2xl shadow-romantic group">
            <img
              src={venuePhoto}
              alt="Wedding Venue"
              className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Venue Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                {venueInfo.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {venueInfo.description}
              </p>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Address & Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{venueInfo.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{venueInfo.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{venueInfo.website}</span>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setShowMap(!showMap)}
                className="flex-1 bg-gradient-romantic hover:shadow-glow transition-all duration-300"
              >
                <MapPin className="w-4 h-4 mr-2" />
                {showMap ? 'Hide Map' : 'View Map'}
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open(`https://maps.google.com/search/${encodeURIComponent(venueInfo.address)}`, '_blank')}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        {showMap && (
          <div className="mt-16 animate-fade-in">
            <Card className="overflow-hidden shadow-romantic">
              <CardContent className="p-0">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Location Map"
                />
              </CardContent>
            </Card>
          </div>
        )}

        {/* Additional Venue Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Car className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Parking</h4>
              <p className="text-sm text-muted-foreground">
                Complimentary valet parking available for all guests
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <Utensils className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Catering</h4>
              <p className="text-sm text-muted-foreground">
                Award-winning cuisine with vegetarian and gluten-free options
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-soft transition-all duration-300">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-primary" />
              <h4 className="font-semibold mb-2">Accessibility</h4>
              <p className="text-sm text-muted-foreground">
                Fully accessible venue with elevator and wheelchair access
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VenueLocation;