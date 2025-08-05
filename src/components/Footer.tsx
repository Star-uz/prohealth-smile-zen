import { Phone, Mail, MapPin, Calendar, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { label: 'About Dr. Sharma', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Patient Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Emergency Care', href: '#emergency' },
    { label: 'Appointment Booking', href: '#booking' }
  ];

  const services = [
    'Preventive Care',
    'Cosmetic Dentistry',
    'Restorative Dentistry',
    'Oral Surgery',
    'Pediatric Dentistry',
    'Emergency Care'
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 3:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-foreground to-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-float">
                  <span className="text-primary-foreground font-bold text-xl">P</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl">ProHealth</h1>
                  <p className="text-sm text-gray-300">Dental Clinic</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Experience exceptional dental care with Dr. Rahul Sharma and our dedicated team. 
                We're committed to providing comprehensive, compassionate dental services for 
                your entire family.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Caring for your smile since 2008</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300 flex items-center space-x-2">
                    <span className="w-1 h-1 bg-secondary rounded-full"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">(555) 123-4567</p>
                    <p className="text-sm text-gray-300">Main Line</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-warning mt-1 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-white font-medium">(555) 123-4568</p>
                    <p className="text-sm text-warning">Emergency Line (24/7)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">info@prohealthdental.com</p>
                    <p className="text-sm text-gray-300">General Inquiries</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">123 Health Street</p>
                    <p className="text-sm text-gray-300">Wellness City, WC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Hours Section */}
        <div className="border-t border-gray-700 py-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Office Hours</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {officeHours.map((schedule, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-white font-semibold mb-1">{schedule.day}</p>
                <p className="text-gray-300 text-sm">{schedule.hours}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Schedule Your Visit?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Take the first step towards better dental health. Book your appointment today 
              and experience the ProHealth difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300 text-sm">
                © 2024 ProHealth Dental Clinic. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Designed with care for your dental health and comfort.
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;