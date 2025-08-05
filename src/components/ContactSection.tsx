import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['(555) 123-4567', 'Emergency: (555) 123-4568'],
      action: 'Call Now',
      urgent: false
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@prohealthdental.com', 'emergency@prohealthdental.com'],
      action: 'Send Email',
      urgent: false
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Health Street', 'Wellness City, WC 12345'],
      action: 'Get Directions',
      urgent: false
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 3:00 PM', 'Sun: Emergency Only'],
      action: 'View Schedule',
      urgent: true
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-blue-50/30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 inline-block">
            📞 Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contact ProHealth Dental
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey to better dental health? Get in touch with us today 
            to schedule your appointment or ask any questions about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our friendly team is here to help you with any questions or to schedule 
                your appointment. We're committed to providing you with the best dental 
                care experience.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className={`medical-card hover-lift group ${
                      info.urgent ? 'border-l-4 border-warning' : ''
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        info.urgent 
                          ? 'bg-warning text-warning-foreground animate-pulse-gentle' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Emergency Banner */}
            <div className="medical-card bg-gradient-to-r from-warning/10 to-orange-100/50 border-warning/30 animate-pulse-gentle">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-warning-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Dental Emergency?</h4>
                  <p className="text-muted-foreground">Call our emergency line: (555) 123-4568</p>
                  <p className="text-sm text-warning font-medium">Available 24/7 for urgent care</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="medical-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in-up">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        required
                        className="focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, subject: value }))}>
                        <SelectTrigger className="focus:ring-2 focus:ring-primary/20 transition-all duration-300">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="appointment">Schedule Appointment</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                          <SelectItem value="emergency">Emergency Care</SelectItem>
                          <SelectItem value="insurance">Insurance Questions</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                      className="focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full medical-button-secondary text-lg py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Visit Our Modern Facility
            </h3>
            <p className="text-lg text-muted-foreground">
              Conveniently located in the heart of Wellness City with ample parking
            </p>
          </div>
          
          <div className="medical-card overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Interactive Map
                </h4>
                <p className="text-muted-foreground mb-4">
                  123 Health Street, Wellness City, WC 12345
                </p>
                <Button className="medical-button">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;