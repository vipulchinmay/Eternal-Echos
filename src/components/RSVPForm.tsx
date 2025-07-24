import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart } from 'lucide-react';

interface RSVPFormData {
  name: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no' | '';
  guestCount: number;
  dietaryRestrictions: string;
  message: string;
}

const RSVPForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    email: '',
    phone: '',
    attending: '',
    guestCount: 1,
    dietaryRestrictions: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof RSVPFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.attending) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "RSVP Received! 🎉",
        description: "Thank you for your response. We can't wait to celebrate with you!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        attending: '',
        guestCount: 1,
        dietaryRestrictions: '',
        message: ''
      });

      // Close modal
      setOpen(false);

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-2xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            RSVP
          </h2>
          <div className="w-16 h-px bg-gradient-romantic mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground mb-8">
            Please let us know if you'll be joining us for our special day
          </p>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-romantic hover:shadow-glow transition-all duration-300 text-white font-semibold py-3 px-8 text-lg rounded-full group">
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Respond Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl text-center">
                  Your Response
                </DialogTitle>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                {/* Attendance */}
                <div className="space-y-4">
                  <Label>Will you be attending? *</Label>
                  <RadioGroup 
                    value={formData.attending} 
                    onValueChange={(value) => handleInputChange('attending', value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="cursor-pointer">
                        Yes, I'll be there! 🎉
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="cursor-pointer">
                        Sorry, can't make it 😔
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Guest Count (only show if attending) */}
                {formData.attending === 'yes' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="guestCount">Number of Guests</Label>
                    <Input
                      id="guestCount"
                      type="number"
                      min="1"
                      max="5"
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange('guestCount', parseInt(e.target.value) || 1)}
                      className="border-border/50 focus:border-primary"
                    />
                    <p className="text-sm text-muted-foreground">
                      Including yourself (maximum 5 guests)
                    </p>
                  </div>
                )}

                {/* Dietary Restrictions (only show if attending) */}
                {formData.attending === 'yes' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="dietary">Dietary Restrictions or Allergies</Label>
                    <Textarea
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                      placeholder="Please let us know about any dietary restrictions..."
                      className="border-border/50 focus:border-primary resize-none"
                      rows={3}
                    />
                  </div>
                )}

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Special Message (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Share your excitement or well wishes..."
                    className="border-border/50 focus:border-primary resize-none"
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-romantic hover:shadow-glow transition-all duration-300 text-white font-semibold py-3 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending RSVP...
                    </div>
                  ) : (
                    'Send RSVP'
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;