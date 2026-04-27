import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = (e, path) => {
    if (path === '/careers#top') {
      e.preventDefault()
      navigate('/careers')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
      setMenuOpen(false)
      return
    }
    if (path.startsWith('/#')) {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(path.substring(1))
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      setMenuOpen(false)
    }
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/#services', label: 'Services' },
    { path: '/#process', label: 'Process' },
{ path: '/careers#top', label: 'Careers' },
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

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
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

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
