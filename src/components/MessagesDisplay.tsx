import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Quote } from 'lucide-react';

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

// Sample messages - in a real app, these would come from your backend
const sampleMessages: Message[] = [
  {
    id: '1',
    name: 'Priya & Raj',
    message: 'Wishing you both a lifetime of love and happiness! Your journey together is truly inspiring. May your marriage be blessed with joy, laughter, and endless love.',
    timestamp: '2024-01-15'
  },
  {
    id: '2',
    name: 'Anita Sharma',
    message: 'So excited to celebrate with you both! You make such a beautiful couple and we cannot wait to witness your special day. Lots of love and blessings!',
    timestamp: '2024-01-20'
  },
  {
    id: '3',
    name: 'The Kumar Family',
    message: 'Congratulations on finding your perfect match! May your love story continue to be filled with beautiful moments and cherished memories.',
    timestamp: '2024-01-25'
  },
  {
    id: '4',
    name: 'Deepika & Arjun',
    message: 'Two hearts becoming one! We are so happy for you both and wish you all the love and happiness in the world. Can\'t wait to dance at your wedding!',
    timestamp: '2024-01-30'
  },
  {
    id: '5',
    name: 'Grandmother Lata',
    message: 'Beta, seeing you both together brings so much joy to my heart. May you always find strength in each other and may your home be filled with laughter and love.',
    timestamp: '2024-02-02'
  }
];

const MessagesDisplay = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // In a real app, fetch messages from your backend
    setMessages(sampleMessages);
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [messages.length]);

  if (messages.length === 0) return null;

  return (
    <section className="py-20 px-6 bg-gradient-soft relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-romantic rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-elegant rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Messages from Loved Ones
            </h2>
            <Heart className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <div className="w-24 h-px bg-gradient-romantic mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Beautiful wishes and heartfelt messages from our family and friends
          </p>
        </div>

        {/* Messages Carousel */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          {messages.map((message, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + messages.length) % messages.length;
            const isNext = index === (currentIndex + 1) % messages.length;
            
            return (
              <Card
                key={message.id}
                className={`absolute transition-all duration-700 ease-in-out transform max-w-2xl ${
                  isActive
                    ? 'opacity-100 scale-100 z-20 translate-x-0'
                    : isPrev
                    ? 'opacity-40 scale-95 z-10 -translate-x-full'
                    : isNext
                    ? 'opacity-40 scale-95 z-10 translate-x-full'
                    : 'opacity-0 scale-90 z-0 translate-x-0'
                } bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 shadow-elegant`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Quote className="w-8 h-8 text-primary/60 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-foreground mb-6 italic">
                        "{message.message}"
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-primary text-lg">
                          — {message.name}
                        </p>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <Heart
                              key={i}
                              className="w-4 h-4 text-primary/60 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to message ${index + 1}`}
            />
          ))}
        </div>

        {/* Message Count */}
        <p className="text-sm text-muted-foreground mt-6">
          {currentIndex + 1} of {messages.length} messages
        </p>
      </div>
    </section>
  );
};

export default MessagesDisplay;