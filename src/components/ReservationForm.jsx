import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Phone, User, Check } from 'lucide-react';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2',
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="reservation" className="relative py-32 bg-dark-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,98,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,98,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge-luxury mb-6 inline-flex items-center gap-2">
              <Calendar className="w-3 h-3" />
              Reservations
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Reserve Your <span className="gold-text">Experience</span>
            </h2>
            
            <div className="divider-gold ml-0 mb-8" />
            
            <p className="text-white/60 text-lg mb-8">
              Book your table at Rü for an unforgettable evening of premium cocktails, 
              art-inspired cuisine, and luxury ambience. Perfect for celebrations, 
              date nights, and special gatherings.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {[
                { icon: Clock, title: 'Opening Hours', text: '12:00 PM - 12:00 AM Daily' },
                { icon: Users, title: 'Best for', text: 'Celebrations, Date Nights, Premium Dining' },
                { icon: Phone, title: 'For Groups', text: 'Call 073311 17812 for large parties' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-lg p-4 flex items-center gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold-300/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gold-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gold-300/20 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-gold-300" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-white/50">
                    We'll send you a confirmation message shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-display font-bold text-white mb-6">
                    Book Your Table
                  </h3>

                  {/* Name */}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="input-luxury w-full pl-12"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        required
                        className="input-luxury w-full pl-12"
                      />
                    </div>
                  </div>

                  {/* Guests & Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="input-luxury w-full pl-12 appearance-none cursor-pointer"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                            <option key={num} value={num} className="bg-dark-800">
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="input-luxury w-full pl-12 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="input-luxury w-full pl-12 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-dark-800">Select Time</option>
                        {['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', 
                          '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', 
                          '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM'].map((time) => (
                          <option key={time} value={time} className="bg-dark-800">{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Reserve Table
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
