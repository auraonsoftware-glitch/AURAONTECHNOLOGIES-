import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.06)_0%,transparent_50%)]" />
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
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Find <span className="gold-text">Us</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 text-lg max-w-2xl mx-auto mt-6">
            Visit us at our location in the heart of Jubilee Hills, Hyderabad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <motion.div
              className="glass-card rounded-xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-300/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Address</h3>
                  <p className="text-white/50 leading-relaxed">
                    377, Road No. 10, near Navayuga Engg,<br />
                    Jawahar Colony, Venkatagiri,<br />
                    Jubilee Hills, Hyderabad – 500033
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="glass-card rounded-xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-300/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Phone</h3>
                  <a
                    href="tel:07331117812"
                    className="text-gold-300 text-lg hover:underline"
                  >
                    073311 17812
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="glass-card rounded-xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-300/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Hours</h3>
                  <p className="text-white/50">
                    Monday - Sunday: 12:00 PM - 12:00 AM
                  </p>
                  <p className="text-gold-300 text-sm mt-1">Best time to visit: Evening & Dinner hours</p>
                </div>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div
              className="glass-card rounded-xl p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-300/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-gold-300" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-300 hover:underline"
                  >
                    @ru.craftbar
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.335864897869!2d78.4058!3d17.4256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb969ddfd9e4e7%3A0x5a5a5a5a5a5a5a5a!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert contrast-125"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
