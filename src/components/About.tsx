import React from 'react';
import { Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const sectionRef = useScrollAnimation();
  const contentRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const mapRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className="space-y-8 animate-on-scroll animate-slide-left"
          >
            <div className="inline-block bg-amber-400 text-black px-6 py-3 rounded-full text-sm font-semibold transform hover:scale-110 transition-all duration-300 glow">
              Our Story
            </div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              A Culinary Journey
              <span className="text-amber-400 block"> Worth Savoring</span>
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p className="transform hover:translate-x-2 transition-all duration-300">
                Welcome to Bella Vista, where food meets artistry. Nestled in the heart of New York City, 
                our restaurant blends tradition with innovation to create unforgettable culinary experiences. 
                Led by award-winning Chef Marco Antonelli, we believe in sourcing local, cooking seasonal, 
                and delivering flavor that lingers.
              </p>
              <p className="transform hover:translate-x-2 transition-all duration-300">
                Whether you're here for a family dinner, a date night, or a corporate event, we invite you 
                to dine, connect, and celebrate with us.
              </p>
            </div>
            
            {/* Stats with 3D Animation */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { icon: Award, number: '15+', label: 'Awards', delay: '0.1s' },
                { icon: Users, number: '50K+', label: 'Happy Customers', delay: '0.2s' },
                { icon: Clock, number: '8', label: 'Years', delay: '0.3s' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center card-3d p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-10 h-10 text-amber-400 transform hover:scale-125 hover:rotate-12 transition-all duration-300" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chef Image with 3D Effect */}
          <div 
            ref={imageRef}
            className="relative animate-on-scroll animate-slide-right"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl card-3d">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Chef Marco Antonelli"
                className="w-full h-[500px] object-cover transform hover:scale-110 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Chef Marco Antonelli</h3>
                <p className="text-amber-400 text-lg">Head Chef & Owner</p>
              </div>
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold float glow">
                Award Winner
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Section with 3D Effects */}
        <div 
          ref={mapRef}
          className="mt-32 animate-on-scroll animate-zoom"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Visit Our Location</h3>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden card-3d">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-2 h-96 bg-gray-200 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459418!3d40.75889497932685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full hover:scale-105 transition-all duration-500"
                ></iframe>
              </div>
              <div className="p-10 bg-gradient-to-br from-gray-900 to-black text-white">
                <h4 className="text-2xl font-bold mb-8 text-amber-400">Visit us at:</h4>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Address', content: '123 Culinary Street\nNew York, NY 10001' },
                    { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
                    { icon: Mail, title: 'Email', content: 'info@bellavista.com' },
                    { icon: Clock, title: 'Hours', content: 'Mon–Sun | 10 AM – 11 PM' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 transform hover:translate-x-2 transition-all duration-300"
                    >
                      <item.icon className="w-6 h-6 text-amber-400 mt-1 transform hover:scale-125 hover:rotate-12 transition-all duration-300" />
                      <div>
                        <p className="font-semibold text-lg mb-1">{item.title}</p>
                        <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;