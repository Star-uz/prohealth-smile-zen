import { Calendar, Building, UserCheck, Heart } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule your visit online or call our friendly staff. We offer flexible scheduling including evenings and weekends.',
      details: ['Online scheduling available 24/7', 'Same-day appointments for emergencies', 'Flexible payment options', 'Insurance verification']
    },
    {
      number: 2,
      icon: Building,
      title: 'Visit Our Facility',
      description: 'Experience our modern, comfortable dental office equipped with the latest technology in a welcoming environment.',
      details: ['State-of-the-art equipment', 'Comfortable waiting areas', 'Digital X-rays and imaging', 'Complimentary refreshments']
    },
    {
      number: 3,
      icon: UserCheck,
      title: 'Meet Our Team',
      description: 'Receive personalized consultation and treatment from Dr. Rahul Sharma and our experienced dental professionals.',
      details: ['Comprehensive oral examination', 'Personalized treatment plan', 'Pain-free procedures', 'Clear cost explanations']
    },
    {
      number: 4,
      icon: Heart,
      title: 'Ongoing Care',
      description: 'Enjoy continued dental health support with follow-up care, maintenance schedules, and preventive guidance.',
      details: ['Regular checkup reminders', 'Preventive care planning', 'Emergency support', 'Oral health education']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-blue-50/20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 inline-block">
            ⚡ How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Journey to Better Dental Health
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From your first appointment to ongoing care, we've designed a seamless 
            experience that puts your comfort and health first.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="lg:w-1/2 space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center animate-count-up" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                      <span className="text-2xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center space-x-3 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2 + 0.5 + detailIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-success rounded-full flex-shrink-0"></div>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2 relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.2}s` }}>
                  <div className="relative">
                    {/* Main Card */}
                    <div className="medical-card p-8 text-center relative overflow-hidden group">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-12 h-12 text-primary" />
                        </div>
                        
                        <h4 className="text-2xl font-bold text-foreground mb-4">
                          Step {step.number}
                        </h4>
                        
                        <div className="text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                          {step.number === 1 ? '📅' : step.number === 2 ? '🏥' : step.number === 3 ? '👨‍⚕️' : '🦷'}
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                    </div>

                    {/* Connection Line (except for last step) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-6">
                        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.8}s` }}></div>
                        <div className="w-3 h-3 bg-primary rounded-full -mt-6 ml-0.5 animate-pulse-gentle" style={{ animationDelay: `${index * 0.2 + 1}s` }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-4 mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {steps.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-primary/20 relative overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <div
                className="absolute inset-0 bg-primary rounded-full transform scale-x-0 origin-left animate-fade-in-right"
                style={{
                  animationDelay: `${1.5 + index * 0.2}s`,
                  animationDuration: '0.8s',
                  animationFillMode: 'forwards'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <div className="medical-card max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Your journey to optimal dental health is just one appointment away. 
              Join hundreds of satisfied patients who trust ProHealth Dental Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="medical-button-secondary">
                Schedule Your First Visit
              </button>
              <button className="medical-button">
                Learn More About Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;