import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Gift, Music } from 'lucide-react';

const SpecialOffers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const offers = [
    {
      id: 1,
      title: 'Jazz Nights',
      description: 'Experience smooth jazz with dinner every Friday',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      time: '7:00 PM - 11:00 PM',
      days: 'Every Friday',
      type: 'event',
      icon: Music
    },
    {
      id: 2,
      title: 'Happy Hour Special',
      description: 'Enjoy 30% off all appetizers and cocktails',
      image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      time: '4:00 PM - 6:00 PM',
      days: 'Daily',
      type: 'offer',
      icon: Gift
    },
    {
      id: 3,
      title: 'Chef\'s Special Tasting',
      description: '7-course tasting menu with wine pairing',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      time: '6:00 PM - 9:00 PM',
      days: 'Saturday & Sunday',
      type: 'special',
      icon: Calendar
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [offers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Special Offers & Events
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Spice Up Your Evenings with <span className="text-amber-400">Live Music & Happy Hours!</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't miss out on our exclusive offers and special events
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {offers.map((offer) => {
                const IconComponent = offer.icon;
                return (
                  <div key={offer.id} className="w-full flex-shrink-0 relative">
                    <div className="relative h-96 bg-gradient-to-r from-black/60 to-transparent">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center">
                        <div className="text-white p-12 max-w-2xl">
                          <div className="flex items-center gap-2 mb-4">
                            <IconComponent className="w-5 h-5 text-amber-400" />
                            <span className="bg-amber-400 text-black px-2 py-1 rounded-full text-xs font-semibold uppercase">
                              {offer.type}
                            </span>
                          </div>
                          <h3 className="text-4xl font-bold mb-4">{offer.title}</h3>
                          <p className="text-xl mb-6 text-gray-300">{offer.description}</p>
                          <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-amber-400" />
                              <span>{offer.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-amber-400" />
                              <span>{offer.days}</span>
                            </div>
                          </div>
                          <button className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-6 rounded-full transition-colors duration-200 transform hover:scale-105">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-amber-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-6 rounded-2xl text-black">
            <Gift className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Order Above $50</h3>
            <p className="mb-4">Get a dessert free with orders over $50!</p>
            <button className="bg-black/20 hover:bg-black/30 text-black font-semibold py-2 px-4 rounded-full transition-colors duration-200">
              Order Now
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-2xl text-white">
            <Calendar className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Wine Tasting</h3>
            <p className="mb-4">Join us for exclusive wine tastings every month</p>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200">
              Register
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-2xl text-white">
            <Clock className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Early Bird</h3>
            <p className="mb-4">15% off all orders placed before 6 PM</p>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;