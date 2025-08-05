import { useState, useEffect } from 'react';
import { Calendar, Phone, Star, Users, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dentalHeroImage from '@/assets/dental-clinic-hero.jpg';

const HeroSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    successRate: 0,
  });

  useEffect(() => {

    // Counter animations
    const animateCounters = () => {
      const duration = 2000;
      const interval = 50;
      const steps = duration / interval;
      
      const targets = { patients: 500, experience: 15, successRate: 98 };
      
      let step = 0;
      const counterInterval = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          patients: Math.floor(targets.patients * progress),
          experience: Math.floor(targets.experience * progress),
          successRate: Math.floor(targets.successRate * progress),
        });
        
        if (step >= steps) {
          clearInterval(counterInterval);
          setCounters(targets);
        }
      }, interval);
    };

    // Start counter animation after a delay
    const counterTimeout = setTimeout(animateCounters, 1000);

    return () => {
      clearTimeout(counterTimeout);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/30 to-blue-100/20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold animate-fade-in-up">
                  ✨ Award-Winning Dental Care
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in-up">
                Where Beautiful Smiles Begin
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                Experience comprehensive dental care with Dr. Rahul Sharma and the ProHealth team - where advanced technology meets compassionate care
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              {[
                '15+ Years of Excellence',
                'State-of-the-Art Equipment',
                'Painless Procedures',
                '24/7 Emergency Care'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              <Button className="medical-button-secondary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 123-4567
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 animate-fade-in-up" style={{ animationDelay: '2s' }}>
              <div className="text-center animate-count-up">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">{counters.patients}+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              
              <div className="text-center animate-count-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">{counters.experience}+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              
              <div className="text-center animate-count-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">{counters.successRate}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              
              <div className="text-center animate-count-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-warning mr-2" />
                  <span className="text-3xl font-bold text-foreground">24/7</span>
                </div>
                <p className="text-sm text-muted-foreground">Emergency Care</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right" style={{ animationDelay: '1.2s' }}>
            <div className="relative">
              <img
                src={dentalHeroImage}
                alt="Modern ProHealth Dental Clinic"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute -top-6 -left-6 medical-card animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">4.9/5</p>
                    <p className="text-sm text-muted-foreground">Patient Rating</p>
                  </div>
                </div>
              </div>
              
              {/* Emergency Badge */}
              <div className="absolute -bottom-6 -right-6 medical-card bg-warning text-warning-foreground animate-pulse-gentle">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">24/7 Emergency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;