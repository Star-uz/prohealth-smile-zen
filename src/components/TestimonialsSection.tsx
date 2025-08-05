import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'Dr. Sharma transformed my smile completely. The process was painless and the results exceeded my expectations! The entire team made me feel comfortable throughout.',
      rating: 5,
      location: 'Local Resident',
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Professional, caring, and modern facility. My family has been coming here for 5 years and we wouldn\'t trust our dental care to anyone else!',
      rating: 5,
      location: 'Family Patient',
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      text: 'Emergency care at 2AM - they were there when I needed them most. Dr. Sharma personally took care of my dental emergency. Truly grateful!',
      rating: 5,
      location: 'Emergency Patient',
      image: '👩‍🎓'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      text: 'The cosmetic work done here is incredible. I got veneers and couldn\'t be happier with my new smile. Professional service from start to finish.',
      rating: 5,
      location: 'Cosmetic Patient',
      image: '👨‍🔬'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      text: 'My kids actually look forward to their dental visits now! The pediatric care here is exceptional and Dr. Sharma is amazing with children.',
      rating: 5,
      location: 'Parent',
      image: '👩‍👧‍👦'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-warning fill-current' : 'text-muted-foreground'
        } transition-colors duration-300`}
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-primary/5">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 inline-block">
            💝 Patient Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who trusted us with their dental health
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="medical-card text-center p-8 lg:p-12 relative overflow-hidden">
              <Quote className="w-16 h-16 text-primary/20 mx-auto mb-6" />
              
              <div key={currentIndex} className="animate-fade-in-up">
                <p className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex justify-center mb-6 space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full"></div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full hover-lift bg-background/80 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full hover-lift bg-background/80 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Autoplay Toggle */}
          <div className="text-center mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-muted-foreground hover:text-primary"
            >
              {isAutoPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {[
            { number: '500+', label: 'Happy Patients', icon: '😊' },
            { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
            { number: '15+', label: 'Years Experience', icon: '🏆' },
            { number: '98%', label: 'Satisfaction Rate', icon: '💯' }
          ].map((stat, index) => (
            <div key={index} className="text-center medical-card hover-lift">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;