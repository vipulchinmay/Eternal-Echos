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
      <div className="relative z-10 text-center text-white px-6">
        <div className="mb-8 stagger-item">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-bounce-in text-shimmer">
            {brideName} & {groomName}
          </h1>
          <div className="w-32 h-0.5 bg-gradient-romantic mx-auto mb-8 animate-glow-pulse"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-2 animate-slide-up">
            Together with their families
          </p>
          <p className="text-base sm:text-lg md:text-xl opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            request the pleasure of your company
          </p>
        </div>
        
        <div className="glass-card card-interactive p-6 sm:p-8 mx-auto max-w-md shadow-floating animate-scale-in mb-12" style={{ animationDelay: '0.4s' }}>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 animate-romantic-pulse">
            Wedding Celebration
          </h2>
          <p className="text-lg sm:text-xl font-medium text-primary-glow mb-4">
            {weddingDate}
          </p>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto animate-shimmer"></div>
        </div>
        
        <div className="animate-float magnetic cursor-pointer" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block p-4 rounded-full glass-card hover:shadow-glow transition-all duration-500 hover:scale-110 group">
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;