import WeddingHero from '@/components/WeddingHero';
import ParticleBackground from '@/components/ParticleBackground';
import CountdownTimer from '@/components/CountdownTimer';
import EventDetails from '@/components/EventDetails';
import WeddingGallery from '@/components/WeddingGallery';
import PhotoManager from '@/components/PhotoManager';
import MessagesDisplay from '@/components/MessagesDisplay';
import RSVPForm from '@/components/RSVPForm';
import VenueLocation from '@/components/VenueLocation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <WeddingHero />
      
      {/* Countdown Section */}
      <CountdownTimer />
      
      {/* Event Details Section */}
      <EventDetails />
      
      {/* Wedding Gallery Section */}
      <WeddingGallery />
      
      {/* Photo Manager Section */}
      <PhotoManager />
      
      {/* Messages Display Section */}
      <MessagesDisplay />
      
      {/* Venue Location Section */}
      <VenueLocation />
      
      {/* RSVP Floating Button */}
      <RSVPForm />
      
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
