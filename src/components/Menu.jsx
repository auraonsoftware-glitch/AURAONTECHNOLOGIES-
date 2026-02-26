import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wine, Coffee, Utensils } from 'lucide-react';

const menuCategories = [
  {
    id: 'starters',
    name: 'Signature Starters',
    icon: Utensils,
    items: [
      { id: 1, name: 'Palak Chatpat', description: 'Crispy spinach with tangy chutney, a delightful chatpat experience', price: '₹350' },
      { id: 2, name: 'Chicken Starters', description: 'Premium chicken appetizers crafted to perfection', price: '₹450' },
      { id: 3, name: 'Tandoori Platter', description: 'Assorted tandoor-grilled specialties', price: '₹550' },
      { id: 4, name: 'Crispy Veg Starters', description: 'Assorted crunchy vegetable appetizers', price: '₹320' },
    ]
  },
  {
    id: 'mains',
    name: 'Main Course',
    icon: Utensils,
    items: [
      { id: 5, name: 'Premium Dal Makhani', description: 'Slow-cooked black lentils in rich gravy', price: '₹380' },
      { id: 6, name: 'Chicken Curry Premium', description: 'Signature chicken curry with exotic spices', price: '₹520' },
      { id: 7, name: 'Paneer Tikka Masala', description: 'Cottage cheese in creamy tomato gravy', price: '₹450' },
      { id: 8, name: 'Biryani Special', description: 'Fragrant rice with choice of protein', price: '₹480' },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: Coffee,
    items: [
      { id: 9, name: 'Gulab Jamun with Rabdi', description: 'Classic Indian dessert with rich rabdi', price: '₹250' },
      { id: 10, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: '₹320' },
      { id: 11, name: 'Mango Kulfi', description: 'Traditional ice cream with mango', price: '₹200' },
      { id: 12, name: 'Tiramisu', description: 'Italian coffee-flavored layered dessert', price: '₹350' },
    ]
  },
  {
    id: 'cocktails',
    name: 'Craft Cocktails',
    icon: Wine,
    items: [
      { id: 13, name: 'Monday Morning Breakfast', description: 'Matcha-based signature cocktail - our specialty', price: '₹650' },
      { id: 14, name: 'Signature Clarified Drink', description: 'House-made clarified cocktail with unique flavors', price: '₹750' },
      { id: 15, name: 'Classic Old Fashioned', description: 'Bourbon, bitters, sugar - timeless elegance', price: '₹550' },
      { id: 16, name: 'Spiced Mango Martini', description: 'Vodka with fresh mango and spices', price: '₹600' },
    ]
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <section id="menu" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,169,98,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-luxury mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3 h-3" />
            Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Culinary <span className="gold-text">Masterpieces</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-6">
            Explore our carefully curated menu featuring modern Indian cuisine and signature craft cocktails
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-gold-300 text-dark-900 font-semibold'
                  : 'glass text-white/60 hover:text-white hover:border-gold-300/30'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {menuCategories
              .find((cat) => cat.id === activeCategory)
              ?.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 hover:border-gold-300/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-display font-semibold text-white group-hover:text-gold-300 transition-colors">
                      {item.name}
                    </h4>
                    <span className="text-gold-300 font-semibold">{item.price}</span>
                  </div>
                  <p className="text-white/40 text-sm">{item.description}</p>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary inline-flex items-center gap-2">
            View Full Menu
            <Sparkles className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
