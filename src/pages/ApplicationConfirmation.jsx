import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, FileText, Calendar } from 'lucide-react'
import './Confirmation.css'

function ApplicationConfirmation() {
  const [applicantData, setApplicantData] = useState(null)

  useEffect(() => {
    const aData = localStorage.getItem('applicantData')
    if (aData) setApplicantData(JSON.parse(aData))
  }, [])

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
              <span>Application Submitted</span>
            </div>

            <h1>Thank You!</h1>
            <p className="confirmation-message">
              Your application has been received. We'll review your application and contact you soon.
            </p>
          </div>

          {applicantData && (
            <motion.div 
              className="inquiry-summary glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="summary-header">
                <FileText size={20} />
                <h3>Application Details</h3>
              </div>
              <div className="summary-grid">
                <div className="summary-item">
                  <span className="label">Name</span>
                  <span className="value">{applicantData.name}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Position</span>
                  <span className="value">{applicantData.position}</span>
                </div>
                <div className="summary-item">
                  <span className="label">Applicant ID</span>
                  <span className="value id">#{localStorage.getItem('lastApplicantId')?.slice(-6)}</span>
                </div>
              </div>
            </motion.div>
          )}

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-secondary">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            <Link to="/careers" className="btn btn-primary btn-glow">
              View Open Roles
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ApplicationConfirmation
