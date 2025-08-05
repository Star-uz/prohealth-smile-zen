import { Shield, Wrench, Sparkles, Stethoscope, Baby, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Regular cleanings, checkups, fluoride treatments, and dental sealants to maintain optimal oral health.',
      features: ['Routine Cleanings', 'Oral Examinations', 'Fluoride Treatments', 'Dental Sealants'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      price: 'From $80'
    },
    {
      icon: Wrench,
      title: 'Restorative Dentistry',
      description: 'Comprehensive solutions to restore damaged teeth including fillings, crowns, bridges, and implants.',
      features: ['Dental Fillings', 'Crowns & Bridges', 'Dental Implants', 'Root Canal Therapy'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      price: 'From $150'
    },
    {
      icon: Sparkles,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with professional whitening, veneers, and complete smile makeovers.',
      features: ['Teeth Whitening', 'Porcelain Veneers', 'Smile Makeovers', 'Bonding & Contouring'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      price: 'From $300'
    },
    {
      icon: Stethoscope,
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including extractions, wisdom teeth removal, and bone grafting.',
      features: ['Tooth Extractions', 'Wisdom Teeth', 'Bone Grafting', 'Pre-Prosthetic Surgery'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      price: 'From $200'
    },
    {
      icon: Baby,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children with a gentle, friendly approach to ensure comfort.',
      features: ['Kids Cleanings', 'Fluoride Applications', 'Dental Education', 'Early Intervention'],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      price: 'From $60'
    },
    {
      icon: AlertCircle,
      title: 'Emergency Care',
      description: '24/7 urgent dental care for pain relief, trauma, and dental emergencies when you need it most.',
      features: ['Pain Management', 'Trauma Care', 'Urgent Repairs', 'After-Hours Service'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      price: 'Emergency Rates Apply'
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-blue-50/30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 inline-block">
            ⚡ Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine cleanings to complex procedures, we provide complete dental solutions 
            for patients of all ages with the latest technology and techniques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group medical-card hover:scale-105 transition-all duration-500 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.bgColor} rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="medical-card max-w-2xl mx-auto text-center p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a consultation with Dr. Rahul Sharma and let us help you determine 
              the best treatment plan for your dental health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="medical-button-secondary">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="hover-lift">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: '🏆',
              title: 'Latest Technology',
              description: 'State-of-the-art equipment and advanced techniques for optimal results'
            },
            {
              icon: '💊',
              title: 'Painless Procedures',
              description: 'Advanced pain management and sedation options for comfortable treatment'
            },
            {
              icon: '📅',
              title: 'Flexible Scheduling',
              description: 'Convenient appointment times including evenings and weekends'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;