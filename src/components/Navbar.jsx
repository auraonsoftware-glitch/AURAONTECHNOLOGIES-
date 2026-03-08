import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault()
      const element = document.querySelector(path.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#services', label: 'Services' },
    { path: '/#process', label: 'Process' },
    { path: '/careers', label: 'Careers' },
    { path: '/#founder', label: 'Founder' },
  ]

  const isActive = (path) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1)
    }
    return location.pathname === path
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-glow"></div>
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img src="/logo.jpg" alt="AURAON Logo" className="logo-img" />
          </div>
          <span className="logo-text">AURAON</span>
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.path)}
            >
              <span className="link-text">{link.label}</span>
              <span className="link-glow"></span>
            </Link>
          ))}
          <Link to="/quote" className="btn btn-primary btn-nav">
            Get Quote
          </Link>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
