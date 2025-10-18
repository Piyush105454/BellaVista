import React, { useState } from 'react';
import { Star, Crown, Heart, Leaf } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('dinner');
  const sectionRef = useScrollAnimation();

  const categories = [
    { id: 'breakfast', label: 'Breakfast 🌅' },
    { id: 'lunch', label: 'Lunch 🥗' },
    { id: 'dinner', label: 'Dinner 🍽️' },
    { id: 'beverages', label: 'Beverages ☕' },
    { id: 'dessert', label: 'Desserts 🍰' },
  ];

  const menuItems = {
    breakfast: [
      {
        id: 1,
        name: 'Truffle Eggs Benedict',
        description: 'Poached eggs on English muffin with hollandaise and truffle oil',
        price: '$28',
        image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isChefsPick: true,
        rating: 4.9
      },
      {
        id: 2,
        name: 'Avocado Toast Supreme',
        description: 'Multigrain bread with smashed avocado, feta, and microgreens',
        price: '$18',
        image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isMostLoved: true,
        rating: 4.8
      },
    ],
    lunch: [
      {
        id: 3,
        name: 'Vegan Buddha Bowl',
        description: 'Quinoa, roasted veggies, avocado & tahini dressing',
        price: '$24',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isVegan: true,
        rating: 4.7
      },
      {
        id: 4,
        name: 'Grilled Salmon',
        description: 'Atlantic salmon with roasted vegetables and lemon butter',
        price: '$32',
        image: 'https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.7
      },
    ],
    dinner: [
      {
        id: 5,
        name: 'Truffle Mushroom Risotto',
        description: 'Creamy arborio rice with white truffle oil and wild mushrooms',
        price: '$42',
        image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isChefsPick: true,
        rating: 4.9
      },
      {
        id: 6,
        name: 'Signature Butter Chicken',
        description: 'A royal blend of spices in creamy tomato gravy with basmati rice',
        price: '$38',
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isMostLoved: true,
        rating: 4.8
      },
      {
        id: 7,
        name: 'Wagyu Beef Tenderloin',
        description: 'Premium wagyu beef with truffle mashed potatoes and seasonal vegetables',
        price: '$85',
        image: 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isChefsPick: true,
        rating: 5.0
      },
    ],
    beverages: [
      {
        id: 8,
        name: 'Signature Cocktail',
        description: 'House special with premium spirits and fresh ingredients',
        price: '$16',
        image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isChefsPick: true,
        rating: 4.9
      },
      {
        id: 9,
        name: 'Wine Selection',
        description: 'Carefully curated wine list from around the world',
        price: '$12-85',
        image: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.7
      },
    ],
    dessert: [
      {
        id: 10,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center and vanilla ice cream',
        price: '$14',
        image: 'https://images.pexels.com/photos/1833306/pexels-photo-1833306.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        isMostLoved: true,
        rating: 4.9
      },
      {
        id: 11,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers',
        price: '$12',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        rating: 4.8
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="text-center mb-16 animate-on-scroll"
        >
          <div className="inline-block bg-amber-400 text-black px-6 py-3 rounded-full text-sm font-semibold mb-6 transform hover:scale-110 transition-all duration-300 glow">
            Our Menu
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Explore Our <span className="text-amber-400 glow">Signature Dishes</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Each dish is crafted with passion and precision using the finest ingredients
          </p>
        </div>

        {/* Category Navigation with 3D Effects */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`btn-3d px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-110 ${
                activeCategory === category.id
                  ? 'bg-amber-400 text-black shadow-2xl glow'
                  : 'glass text-white hover:bg-white/10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items with Staggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={item.id}
              className={`menu-item card-3d bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-400/20 transition-all duration-500 stagger-${(index % 5) + 1}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover transform hover:scale-125 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.isChefsPick && (
                    <div className="bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 glow">
                      <Crown className="w-3 h-3" />
                      Chef's Pick
                    </div>
                  )}
                  {item.isMostLoved && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Most Loved
                    </div>
                  )}
                  {item.isVegan && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Vegan
                    </div>
                  )}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 glass text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  {item.rating}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white hover:text-amber-400 transition-colors duration-300">{item.name}</h3>
                  <span className="text-amber-400 font-bold text-xl glow">{item.price}</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                <button className="w-full btn-3d bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 glow">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;