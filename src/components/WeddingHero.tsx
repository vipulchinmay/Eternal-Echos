import { useEffect, useRef } from 'react';
import heroImage from '@/assets/wedding-hero.jpg';

interface WeddingHeroProps {
  brideName?: string;
  groomName?: string;
  weddingDate?: string;
}

const WeddingHero = ({ 
  brideName = "Sarah", 
  groomName = "Michael", 
  weddingDate = "June 15, 2024" 
}: WeddingHeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        ref={heroRef}
        className="absolute inset-0 w-full h-110 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 animate-scale-in">
            {brideName} & {groomName}
          </h1>
          <div className="w-24 h-px bg-gradient-romantic mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Together with their families
          </p>
          <p className="text-lg md:text-xl mt-2 opacity-90">
            request the pleasure of your company
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mx-auto max-w-md shadow-glow">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-2">
            Wedding Celebration
          </h2>
          <p className="text-xl font-medium text-primary-glow">
            {weddingDate}
          </p>
          <div className="mt-4 w-16 h-px bg-gradient-romantic mx-auto"></div>
        </div>
        
        <div className="mt-12 animate-float">
          <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;