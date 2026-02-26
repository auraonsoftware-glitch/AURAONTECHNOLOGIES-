import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  CheckCircle2, 
  ArrowLeft, 
  Clock, 
  Mail, 
  Phone,
  FileText,
  Sparkles,
  Zap,
  MessageCircle,
  Calendar
} from 'lucide-react'
import './Confirmation.css'

function Confirmation() {
  const [inquiryData, setInquiryData] = useState(null)

  useEffect(() => {
    const data = localStorage.getItem('inquiryData')
    if (data) {
      setInquiryData(JSON.parse(data))
    }
  }, [])

  const steps = [
    {
      icon: <Clock size={22} />,
      title: 'Quick Review',
      time: 'Within 2 hours',
      desc: 'Our team reviews your requirements'
    },
    {
      icon: <Zap size={22} />,
      title: 'Expert Analysis',
      time: 'Within 24 hours',
      desc: 'We prepare a detailed proposal'
    },
    {
      icon: <Mail size={22} />,
      title: 'Quote Delivery',
      time: 'Via email',
      desc: 'Comprehensive quote with timeline'
    },
    {
      icon: <MessageCircle size={22} />,
      title: 'Strategy Call',
      time: 'Scheduled',
      desc: 'Discuss project details together'
    }
  ]

  return (
    <div className="confirmation-page">
      <div className="confirmation-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>

      <div className="confirmation-container">
        <motion.div 
          className="confirmation-card glass-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="success-section">
            <motion.div 
              className="success-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <CheckCircle2 size={64} />
              <div className="success-ring"></div>
            </motion.div>

            <div className="success-badge">
              <Sparkles size={14} />
              <span>Request Submitted</span>
            </div>

            <h1>Thank You!</h1>
            <p className="confirmation-message">
              Your project inquiry has been received. Our team is already reviewing your requirements and will get back to you shortly.
            </p>
          </div>

          {inquiryData && (
            <motion.div 
              className="inquiry-summary glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="summary-header">
                <FileText size={20} />
                <h3>Inquiry Details</h3>
              </div>
              <div className="summary-grid">
                <div className="summary-item">
                  <span className="label">Project</span>
                  <span className="value">{inquiryData.service}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Budget</span>
                  <span className="value">{inquiryData.budget || 'To be discussed'}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Inquiry ID</span>
                  <span className="value id">#{localStorage.getItem('lastInquiryId')?.slice(-6)}</span>
                </div>
              </div>
            </motion.div>
          )}

          <div className="next-steps">
            <h3>What Happens Next?</h3>
            <div className="steps-timeline">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="timeline-icon">{step.icon}</div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{step.title}</h4>
                      <span className="timeline-time">
                        <Calendar size={12} />
                        {step.time}
                      </span>
                    </div>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-secondary">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <Link to="/quote" className="btn btn-primary btn-glow">
              New Inquiry
            </Link>
          </div>

          <div className="contact-section">
            <p>Questions? Reach out directly</p>
            <div className="contact-links">
              <a href="mailto:contact@auraon.com" className="contact-link">
                <Mail size={16} />
                contact@auraon.com
              </a>
              <a href="tel:+919010988498" className="contact-link">
                <Phone size={16} />
                +91 90109 88498
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Confirmation
