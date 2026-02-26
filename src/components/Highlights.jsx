import { motion } from 'framer-motion';
import { Wine, Utensils, Music, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Wine,
    title: 'Craft Cocktails',
    description: 'Our master mixologists create signature cocktails with precision and passion, including the famous "Monday Morning Breakfast" Matcha-based cocktail.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Utensils,
    title: 'Art Cuisine',
    description: 'Modern Indian cuisine presented as edible art. From Gulab Jamun with Rabdi to Palak Chatpat, every dish is a masterpiece.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Music,
    title: 'Live Music Nights',
    description: 'Experience electrifying house music and live performances in our luxury cocktail bar vibe.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Sparkles,
    title: 'Premium Ambience',
    description: 'Elegant interiors with luxury cocktail bar vibe, perfect for celebratory dinners and premium date nights.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="relative py-32 bg-dark-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.08)_0%,transparent_50%)]" />
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
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Signature <span className="gold-text">Highlights</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-6">
            Discover what makes Rü the finest craft bar and dining destination in Hyderabad
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="card-luxury rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 glass rounded-full p-3">
                    <item.icon className="w-6 h-6 text-gold-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Mention - Bar Kin-Rü */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass-card rounded-2xl p-8 md:p-12 border-gold-300/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="badge-luxury mb-4 inline-flex items-center gap-2">
                <Sparkles className="w-3 h-3" />
                Special Feature
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Bar Kin-Rü by Rü
              </h3>
              <p className="text-white/50 mb-6">
                An exclusive cocktail-focused experience inside Rü. Known for serving the best 
                cocktails in Hyderabad with an impressive selection of signature clarified drinks 
                and craft cocktails.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-display font-bold text-gold-300">4.8</span>
                  <div>
                    <div className="flex text-gold-300">★★★★★</div>
                    <p className="text-xs text-white/40">Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bar Kin-Rü"
                className="rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-300/20 rounded-full blur-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
