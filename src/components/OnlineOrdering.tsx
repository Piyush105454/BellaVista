import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, X, CreditCard, Smartphone } from 'lucide-react';

const OnlineOrdering = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const popularItems = [
    {
      id: 1,
      name: 'Truffle Mushroom Risotto',
      price: 42,
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Creamy arborio rice with white truffle oil'
    },
    {
      id: 2,
      name: 'Signature Butter Chicken',
      price: 38,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'A royal blend of spices in creamy tomato gravy'
    },
    {
      id: 3,
      name: 'Vegan Buddha Bowl',
      price: 24,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Quinoa, roasted veggies, avocado & tahini dressing'
    },
  ];

  const addToCart = (item: any) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <section id="order" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Online Ordering
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Deliciousness Delivered <span className="text-amber-400">to Your Door</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Craving comfort food at home? Browse our online menu, customize your order, and enjoy seamless 
            delivery or takeaway. Secure payments and real-time updates included.
          </p>
        </div>

        {/* Popular Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularItems.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-400">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-4 rounded-full transition-colors duration-200 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl p-8 text-center text-black mb-12">
          <h3 className="text-2xl font-bold mb-2">🎁 Order above $50 and get a dessert free!</h3>
          <p className="text-lg">Limited time offer - Free delivery on orders over $30</p>
        </div>

        {/* Cart Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart ({getTotalItems()})
          </button>
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex">
            <div className="ml-auto w-full max-w-md bg-white h-full overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Your Order</h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-amber-600 font-bold">${item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {cartItems.length > 0 && (
                <div className="p-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">Total: ${getTotalPrice()}</span>
                  </div>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 rounded-lg transition-colors duration-200"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Checkout</h3>
                <p className="text-gray-600">Choose your payment method</p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-amber-400 transition-colors duration-200">
                  <CreditCard className="w-6 h-6" />
                  <span>Credit Card</span>
                </button>
                <button className="w-full flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-amber-400 transition-colors duration-200">
                  <Smartphone className="w-6 h-6" />
                  <span>Digital Wallet</span>
                </button>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowCheckout(false);
                    setIsCartOpen(false);
                    setCartItems([]);
                  }}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OnlineOrdering;