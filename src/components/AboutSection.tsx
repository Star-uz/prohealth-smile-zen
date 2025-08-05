import { Award, Users, Heart, Clock, GraduationCap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import drRahulImage from '@/assets/dr-rahul-sharma.jpg';

const AboutSection = () => {
  const credentials = [
    { icon: GraduationCap, text: 'DDS from Harvard School of Dental Medicine' },
    { icon: Award, text: 'Certified in Cosmetic & Restorative Dentistry' },
    { icon: Shield, text: 'Member of American Dental Association' },
    { icon: Users, text: 'Fellow of International College of Dentists' }
  ];

  const achievements = [
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '500+', label: 'Satisfied Patients', icon: '😊' },
    { number: '98%', label: 'Success Rate', icon: '✨' },
    { number: '24/7', label: 'Emergency Care', icon: '🚨' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-50/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              <img
                src={drRahulImage}
                alt="Dr. Rahul Sharma - Lead Dentist at ProHealth Dental Clinic"
                className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 medical-card animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">15+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 medical-card animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 inline-block">
                👨‍⚕️ Meet Dr. Rahul Sharma
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                15+ Years of Dental Excellence
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Dr. Rahul Sharma brings over 15 years of specialized experience in comprehensive 
                dental care, combining advanced technology with a compassionate approach to 
                ensure every patient receives the highest quality treatment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Committed to painless procedures and exceptional patient care, Dr. Sharma 
                has helped hundreds of patients achieve their perfect smile through innovative 
                cosmetic and restorative dentistry techniques.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Education & Certifications
              </h3>
              <div className="space-y-3">
                {credentials.map((credential, index) => {
                  const IconComponent = credential.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{credential.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Cosmetic Dentistry',
                  'Restorative Procedures',
                  'Implant Dentistry',
                  'Root Canal Therapy',
                  'Oral Surgery',
                  'Emergency Care'
                ].map((specialty, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 animate-fade-in-up"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-foreground">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div className="medical-card bg-gradient-to-r from-primary/5 to-secondary/5">
              <p className="text-foreground font-medium mb-2">Personal Philosophy:</p>
              <p className="text-muted-foreground italic">
                "Every patient deserves to feel confident about their smile. My goal is to 
                provide gentle, comprehensive care that not only improves oral health but 
                also enhances quality of life."
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="medical-button-secondary">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="hover-lift">
                <Clock className="w-4 h-4 mr-2" />
                View Availability
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center medical-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <div className="text-5xl mb-4">{achievement.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-2">
                {achievement.number}
              </div>
              <div className="text-muted-foreground">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section Preview */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Supported by a Caring Team
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Dr. Sharma works alongside a dedicated team of dental professionals, 
            hygienists, and support staff who share his commitment to providing 
            exceptional patient care in a comfortable, welcoming environment.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-2xl">
              👩‍⚕️
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-2xl">
              👨‍⚕️
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-success to-green-400 rounded-full flex items-center justify-center text-2xl">
              👩‍💼
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-warning to-yellow-400 rounded-full flex items-center justify-center text-2xl">
              👨‍💼
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;