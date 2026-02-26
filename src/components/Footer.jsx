import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, Wine, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative">
                <Wine className="w-10 h-10 text-gold-300" />
                <Sparkles className="w-4 h-4 text-gold-100 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-white">RÜ</h2>
                <p className="text-[10px] text-gold-300 tracking-[0.3em] uppercase">
                  Craft Bar • Art Cuisine
                </p>
              </div>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Where Art Meets Mixology. Experience premium craft cocktails and 
              art-inspired modern Indian cuisine in the heart of Jubilee Hills.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gold-300 hover:bg-gold-300/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Highlights', 'Menu', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-gold-300 text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-300 mt-1" />
                <div>
                  <p className="text-white/70">Monday - Sunday</p>
                  <p className="text-gold-300">12:00 PM - 12:00 AM</p>
                </div>
              </li>
              <li className="pt-4">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Best Time to Visit</p>
                <p className="text-white/70">Evening & Dinner Hours</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-300 mt-1 flex-shrink-0" />
                <p className="text-white/50 text-sm">
                  377, Road No. 10, near Navayuga Engg,<br />
                  Jawahar Colony, Venkatagiri,<br />
                  Jubilee Hills, Hyderabad – 500033
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-300 flex-shrink-0" />
                <a href="tel:07331117812" className="text-white/50 hover:text-gold-300 text-sm transition-colors">
                  073311 17812
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Rü – Craft Bar • Art Cuisine. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Premium Cocktails • Modern Indian Cuisine • Luxury Nights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
