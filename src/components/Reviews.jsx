import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Best cocktails in Hyderabad! The Monday Morning Breakfast is absolutely divine. The ambience is perfect for a premium date night. Highly recommend!',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Rahul Reddy',
    rating: 5,
    text: 'Amazing experience at Rü! The art-inspired food presentation is outstanding. The Gulab Jamun with Rabdi is a must-try. Staff is very attentive.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Anjali Menon',
    rating: 4,
    text: 'Great place for celebrations! The Bar Kin-Rü inside is fantastic. Premium ambience with live music. Slightly pricey but worth it for special occasions.',
    date: '1 month ago'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    rating: 5,
    text: 'The craft cocktails here are next level! Master mixologists really know their stuff. Modern Indian cuisine is presented beautifully. Will visit again!',
    date: '2 months ago'
  },
  {
    id: 5,
    name: 'Sneha Kapoor',
    rating: 4,
    text: 'Perfect lounge vibe for evening outings. The signature clarified drinks are unique. Great place to hang out with friends.',
    date: '2 months ago'
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="relative py-32 bg-dark-800 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08)_0%,transparent_50%)]" />
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
            <Star className="w-3 h-3 fill-current" />
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            What Our <span className="gold-text">Guests Say</span>
          </h2>
          <div className="divider-gold" />
          
          {/* Rating Summary */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
              <span className="text-6xl font-display font-bold text-gold-300">4.3</span>
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'text-gold-300 fill-gold-300' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <p className="text-white/50 text-sm">531+ Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-gold-300/30 mb-6" />
              
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8">
                "{reviews[currentIndex].text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-white/40 text-sm">{reviews[currentIndex].date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < reviews[currentIndex].rating ? 'text-gold-300 fill-gold-300' : 'text-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevReview}
              className="glass rounded-full p-3 hover:border-gold-300/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-gold-300 w-8' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextReview}
              className="glass rounded-full p-3 hover:border-gold-300/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
