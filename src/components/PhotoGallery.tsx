import { Heart } from 'lucide-react';

const PhotoGallery = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-wedding-gold"></div>
            <Heart className="w-6 h-6 text-wedding-gold animate-romantic-pulse" />
            <div className="w-12 h-px bg-wedding-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From our first meeting to this beautiful moment, here's a glimpse into our journey together
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Large Featured Photo */}
          <div className="md:col-span-2 lg:row-span-2 stagger-item">
            <div className="relative group overflow-hidden rounded-2xl shadow-floating h-80 lg:h-full magnetic hover:shadow-elegant transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Bride and Groom - Main Photo"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-shimmer opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-serif text-xl font-semibold mb-1 animate-shimmer">Sarah & Michael</p>
                <p className="text-sm opacity-90">Engagement Session</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <Heart className="w-6 h-6 text-white animate-heart-beat" />
              </div>
            </div>
          </div>

          {/* Smaller Photos */}
          <div className="stagger-item relative group overflow-hidden rounded-2xl shadow-floating h-36 md:h-40 magnetic cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Bride Portrait"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-romantic/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          <div className="stagger-item relative group overflow-hidden rounded-2xl shadow-floating h-36 md:h-40 magnetic cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Groom Portrait"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          <div className="stagger-item relative group overflow-hidden rounded-2xl shadow-floating h-36 md:h-40 magnetic cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Couple Together"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-gold/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>

          <div className="stagger-item relative group overflow-hidden rounded-2xl shadow-floating h-36 md:h-40 magnetic cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Wedding Preparation"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:-rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-pearl/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Love Quote */}
        <div className="text-center stagger-item">
          <div className="glass-card card-interactive p-6 md:p-8 shadow-floating max-w-3xl mx-auto hover:shadow-elegant group">
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground italic mb-4 group-hover:text-primary transition-colors duration-500 leading-relaxed">
              "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
            </p>
            <p className="text-wedding-gold font-semibold text-sm md:text-base group-hover:text-accent transition-colors duration-300">— Maya Angelou</p>
            <div className="absolute inset-0 bg-gradient-romantic/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-wedding-blush/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-wedding-gold/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default PhotoGallery;