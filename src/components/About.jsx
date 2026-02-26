import { motion } from 'framer-motion';
import { Sparkles, Wine, Palette, Music } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-300/5 to-transparent"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge-luxury mb-6 inline-flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              About Rü
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Where Art Meets <span className="gold-text neon-gold">Mixology</span>
            </h2>
            
            <div className="divider-gold ml-0 mb-8" />
            
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Rü is a modern craft bar and art-inspired dining destination in the heart of 
              Jubilee Hills, Hyderabad. Known for signature cocktails, creative plating, and 
              premium ambience, it delivers a high-end culinary experience perfect for 
              celebrations and evening outings.
            </p>
            
            <p className="text-white/50 leading-relaxed mb-8">
              Our master mixologists craft each cocktail with precision and passion, while 
              our chefs present modern Indian cuisine as edible art. Every dish is a 
              masterpiece, every drink a revelation.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Wine, title: 'Signature Cocktails', desc: 'Crafted by experts' },
                { icon: Palette, title: 'Art Cuisine', desc: 'Creative plating' },
                { icon: Music, title: 'Live Music', desc: 'House music events' },
                { icon: Sparkles, title: 'Premium Ambience', desc: 'Luxury vibes' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card rounded-lg p-4"
                  whileHover={{ y: -5 }}
                >
                  <item.icon className="w-6 h-6 text-gold-300 mb-2" />
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="img-luxury rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Craft Cocktail"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="img-luxury rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Bar Interior"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  className="img-luxury rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Fine Dining"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="img-luxury rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Cocktail Presentation"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -left-8 top-1/2 glass-card rounded-lg p-6 text-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-4xl font-display font-bold text-gold-300">4.3</p>
              <p className="text-xs text-white/50 uppercase tracking-wider">Rating</p>
              <div className="flex justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-300 text-xs">★</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
