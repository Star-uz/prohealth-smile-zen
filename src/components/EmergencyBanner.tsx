import { Phone, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyBanner = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-warning to-orange-500">
        <div className="absolute inset-0 bg-gradient-to-r from-warning/90 to-orange-500/90"></div>
        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-white rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Alert Icon */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse-gentle">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Don't Let Your Health Take a Backseat!
          </h2>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Schedule an appointment with one of our experienced dental professionals today! 
            Whether it's a routine checkup or an emergency, we're here to help.
          </p>

          {/* Emergency Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Emergency Care</h3>
              <p className="text-white/80 text-sm">Round-the-clock urgent dental care when you need it most</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Immediate Response</h3>
              <p className="text-white/80 text-sm">Quick response times for all emergency calls and urgent needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <AlertTriangle className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Pain Relief</h3>
              <p className="text-white/80 text-sm">Fast and effective pain management for all dental emergencies</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Button
              size="lg"
              className="bg-white text-warning hover:bg-white/90 font-semibold px-8 py-4 text-lg animate-pulse-gentle"
            >
              <Phone className="w-5 h-5 mr-2" />
              CALL NOW: (555) 123-4567
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-warning font-semibold px-8 py-4 text-lg backdrop-blur-sm"
            >
              Schedule Online
            </Button>
          </div>

          {/* Emergency Note */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-white/90 text-sm">
              <strong>For Life-Threatening Emergencies:</strong> Call 911 immediately. 
              For dental emergencies, we're available 24/7 at (555) 123-4568.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;