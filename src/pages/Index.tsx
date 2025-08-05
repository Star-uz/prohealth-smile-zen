import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import EmergencyBanner from '@/components/EmergencyBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <ServicesSection />
      <AboutSection />
      <EmergencyBanner />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
