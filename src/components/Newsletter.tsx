import React, { useState } from 'react';
import { Mail, Gift, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowSuccess(true);
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-400 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Newsletter
          </div>
          <h2 className="text-4xl font-bold text-black mb-4">
            Get <span className="text-white">10% Off Your First Order!</span>
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive exclusive deals, events, and chef specials
          </p>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-white/20 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 flex items-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Get 10% Off
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-lg flex items-center gap-2 animate-pulse">
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! Check your email for your 10% discount code.</span>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Gift className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Exclusive Offers</h3>
              <p className="text-black/70 text-sm">Special discounts and promotions only for subscribers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Menu Updates</h3>
              <p className="text-black/70 text-sm">Be the first to know about new dishes and seasonal specials</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <CheckCircle className="w-8 h-8 text-black mx-auto mb-3" />
              <h3 className="font-semibold text-black mb-2">Event Invites</h3>
              <p className="text-black/70 text-sm">Priority access to wine tastings and special events</p>
            </div>
          </div>

          <p className="text-sm text-black/60 mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;