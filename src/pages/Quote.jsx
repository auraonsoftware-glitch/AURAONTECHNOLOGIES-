import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import {
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ArrowLeft,
  Briefcase,
  Wallet,
  Code2,
  Smartphone,
  Brain,
  Cloud,
  Palette,
  Database,
  Wrench,
  FileText,
  Upload
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './Quote.css'

function Quote() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    resume: '',
    message: ''
  })

  const services = [
    { name: 'Web Development', icon: Code2, desc: 'Custom websites & web apps' },
    { name: 'Mobile App Development', icon: Smartphone, desc: 'iOS & Android apps' },
    { name: 'AI & Machine Learning', icon: Brain, desc: 'Intelligent automation' },
    { name: 'Cloud Services', icon: Cloud, desc: 'Cloud migration & DevOps' },
    { name: 'UI/UX Design', icon: Palette, desc: 'User-centered design' },
    { name: 'Database Solutions', icon: Database, desc: 'Data management' },
    { name: 'Other', icon: Wrench, desc: 'Custom requirements' }
  ]

  const budgets = [
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    '₹10,00,000+',
    'Not sure yet'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    try {
      const { data, error } = await supabase.from('quote_requests').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || '',
        service: formData.service,
        budget: formData.budget || '',
        resume: formData.resume || '',
        message: formData.message
      }]).select().single()
      if (error) throw error
      const inquiryId = 'INQ-' + data.id
      localStorage.setItem('lastInquiryId', inquiryId)
      localStorage.setItem('inquiryData', JSON.stringify(formData))
      navigate('/confirmation')
    } catch {
      setSubmitError('Submission failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="quote-page">
      <div className="quote-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1>Get a Free Quote</h1>
          <p>Tell us about your project and we'll create a tailored solution</p>
        </div>
      </div>

      <div className="container">
        <form className="quote-form" onSubmit={handleSubmit}>
          {/* Personal Information */}
          <div className="form-section">
            <h3 className="section-title">
              <User size={20} />
              Personal Information
            </h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company (Optional)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="form-section">
            <h3 className="section-title">
              <Briefcase size={20} />
              Project Details
            </h3>

            <div className="form-group">
              <label>Select Service *</label>
              <div className="service-grid">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div
                      key={index}
                      className={`service-option ${formData.service === service.name ? 'selected' : ''}`}
                      onClick={() => setFormData(prev => ({ ...prev, service: service.name }))}
                    >
                      <IconComponent size={24} className="service-icon" />
                      <div className="service-info">
                        <strong>{service.name}</strong>
                        <span>{service.desc}</span>
                      </div>
                      {formData.service === service.name && (
                        <CheckCircle2 size={20} className="check-icon" />
                      )}
                    </div>
                  )
                })}
              </div>
              <input type="hidden" name="service" value={formData.service} required />
            </div>

            <div className="form-group">
              <label htmlFor="budget">
                <Wallet size={18} />
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select your budget range</option>
                {budgets.map((budget, index) => (
                  <option key={index} value={budget}>{budget}</option>
                ))}
              </select>
            </div>

            {/* Resume Upload Option */}
            <div className="form-group">
              <label htmlFor="resume">
                <FileText size={18} />
                Resume/CV (Optional)
              </label>
              <div className="resume-input-wrapper">
                <Upload size={20} className="upload-icon" />
                <input
                  type="url"
                  id="resume"
                  name="resume"
                  value={formData.resume}
                  onChange={handleChange}
                  placeholder="Link to your resume (Google Drive, LinkedIn, or portfolio)"
                />
              </div>
              <p className="resume-hint">If you're looking for a job or internship, you can attach your resume link here</p>
            </div>
          </div>

          {/* Project Description */}
          <div className="form-section">
            <h3 className="section-title">
              <MessageSquare size={20} />
              Project Description
            </h3>
            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project requirements, goals, timeline, and any specific features you need..."
                rows={5}
                required
              />
            </div>
          </div>

          {submitError && (
            <p style={{ color: '#ef4444', textAlign: 'center', marginBottom: '1rem' }}>❌ {submitError}</p>
          )}
          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="spin" />
                Sending Request...
              </>
            ) : (
              <>
                <Send size={20} />
                Submit Quote Request
              </>
            )}
          </button>

          <p className="form-note">
            By submitting this form, you agree to our privacy policy.
            We respect your privacy and will never share your information.
          </p>
        </form>
      </div>
    </div>
  )
}

export default Quote

