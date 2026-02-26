import { motion } from 'framer-motion';
import { ChevronRight, Star, MapPin, Clock, Phone, Wine } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Multi-layer Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ru.jpg"
          alt="Rü Craft Bar Interior"
          className="w-full h-full object-cover"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/50 to-dark-900/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/70 via-transparent to-dark-900/70" />
        {/* Radial accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,dark-900_100%)]" />
      </div>

      {/* Animated Background Elements - Neon Effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold-300/5 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating Cocktail Elements */}
      <motion.div
        className="absolute top-32 right-20 text-gold-300/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Wine className="w-24 h-24" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="badge-luxury inline-flex items-center gap-2">
            <Star className="w-3 h-3 fill-current" />
            Premium Craft Bar & Fine Dining
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-4 text-shadow"
        >
          <span className="text-white">RÜ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-gold-300 font-light tracking-wider mb-2"
        >
          Craft Bar • Art Cuisine
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-4 font-light"
        >
          Where Art Meets Mixology
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-sm md:text-base text-white/40 max-w-xl mx-auto mb-12 tracking-[0.2em] uppercase"
        >
          Premium Cocktails • Modern Indian Cuisine • Luxury Nights
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={() => scrollToSection('#reservation')}
            className="btn-primary flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reserve Your Table
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('#menu')}
            className="btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Menu
          </motion.button>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Star, label: 'Rating', value: '4.3/5', subtext: '531+ reviews' },
            { icon: MapPin, label: 'Location', value: 'Jubilee Hills', subtext: 'Hyderabad' },
            { icon: Clock, label: 'Hours', value: '12 PM - 12 AM', subtext: 'Open Daily' },
            { icon: Phone, label: 'Contact', value: '073311 17812', subtext: 'Call Now' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass rounded-lg p-4 text-center cursor-pointer hover:border-gold-300/30 transition-colors"
              whileHover={{ y: -5, borderColor: 'rgba(201, 169, 98, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="w-5 h-5 text-gold-300 mx-auto mb-2" />
              <p className="text-xs text-white/40 uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm font-semibold text-white">{item.value}</p>
              <p className="text-xs text-white/30">{item.subtext}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-gold-300 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
