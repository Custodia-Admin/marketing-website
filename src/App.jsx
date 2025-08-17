import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CustodiaDev from './pages/CustodiaDev'
import CustodiaPrivacy from './pages/CustodiaPrivacy'
import CustodiaCohort from './pages/CustodiaCohort'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Careers from './pages/Careers'
import CaseStudies from './pages/CaseStudies'
import Resources from './pages/Resources'
import Support from './pages/Support'
import Accessibility from './pages/Accessibility'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custodia-dev" element={<CustodiaDev />} />
            <Route path="/custodia-privacy" element={<CustodiaPrivacy />} />
            <Route path="/custodia-cohort" element={<CustodiaCohort />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
