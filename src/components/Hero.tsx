import React, { useEffect } from 'react';
import { Play, Calendar, ShoppingBag } from 'lucide-react';
import { useMouseParallax } from '../hooks/useScrollAnimation';

const Hero = () => {
  useMouseParallax();

  useEffect(() => {
    // Add staggered animation to hero elements
    const heroElements = document.querySelectorAll('.hero-animate');
    heroElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('animate');
      }, index * 200);
    });
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax mouse-parallax"
        data-speed="0.5"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/10 rounded-full blur-lg float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8">
          <span className="block hero-animate animate-on-scroll hero-text-1 opacity-0">Experience the Art</span>
          <span className="block hero-animate animate-on-scroll hero-text-2 opacity-0">of</span>
          <span className="block text-amber-400 hero-animate animate-on-scroll hero-text-3">Fine Dining</span>
        </h1>
        <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed hero-animate animate-on-scroll opacity-0" style={{ animationDelay: '0.8s' }}>
          From farm to table, every dish tells a story. Crafted with passion, served with love.
        </p>

        {/* CTA Buttons with 3D Effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center hero-animate animate-on-scroll opacity-0" style={{ animationDelay: '1s' }}>
          <button className="group btn-3d bg-amber-400 hover:bg-amber-500 text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 glow">
            <span className="flex items-center gap-3">
              <Play className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              View Menu
            </span>
          </button>
          <button className="group btn-3d glass border-2 border-white/30 hover:border-amber-400/50 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110">
            <span className="flex items-center gap-3">
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Reserve a Table
            </span>
          </button>
          <button className="group btn-3d glass-dark border border-amber-400/50 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110">
            <span className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Order Online
            </span>
          </button>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center glass">
          <div className="w-2 h-4 bg-amber-400 rounded-full mt-2 animate-pulse glow"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-amber-400/50 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default Hero;