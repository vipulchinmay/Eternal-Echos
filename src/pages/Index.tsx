import WeddingHero from '@/components/WeddingHero';
import ParticleBackground from '@/components/ParticleBackground';
import EventDetails from '@/components/EventDetails';
import RSVPForm from '@/components/RSVPForm';
import VenueLocation from '@/components/VenueLocation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <WeddingHero />
      
      {/* Event Details Section */}
      <EventDetails />
      
      {/* RSVP Form Section */}
      <RSVPForm />
      
      {/* Venue Location Section */}
      <VenueLocation />
      
      {/* Footer */}
      <footer className="bg-gradient-romantic text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl font-semibold mb-4">
            We Can't Wait to Celebrate With You!
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Thank you for being such an important part of our lives
          </p>
          <div className="w-16 h-px bg-white/50 mx-auto mb-6"></div>
          <p className="text-sm opacity-75">
            For questions, contact us at wedding@sarahandmichael.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
