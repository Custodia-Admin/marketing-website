import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Code, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Globe, 
  Award,
  TrendingUp,
  Lock,
  Cpu
} from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Custodia Dev',
      subtitle: 'Custom Software Development',
      description: 'End-to-end software development solutions tailored to your business needs. From web applications to enterprise systems.',
      features: ['Full-Stack Development', 'API Integration', 'Cloud Solutions', 'Mobile Apps'],
      href: '/custodia-dev',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Custodia Privacy',
      subtitle: 'AI Governance & Data Privacy',
      description: 'Navigate AI regulations and data privacy compliance with comprehensive governance frameworks and expert consulting.',
      features: ['AI Risk Assessment', 'GDPR Compliance', 'Privacy by Design', 'Regulatory Mapping'],
      href: '/custodia-privacy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Custodia Cohort',
      subtitle: 'Project Management Solutions',
      description: 'Streamline your project workflows with advanced management tools and methodologies for maximum efficiency.',
      features: ['Agile Methodologies', 'Team Collaboration', 'Resource Planning', 'Progress Tracking'],
      href: '/custodia-cohort',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: TrendingUp },
    { number: '50+', label: 'Happy Clients', icon: Award },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Zap },
    { number: '24/7', label: 'Support Available', icon: Globe }
  ]

  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge AI technology to automate processes and gain competitive advantages.'
    },
    {
      icon: Lock,
      title: 'Security First',
      description: 'Built-in security measures and compliance frameworks to protect your data and operations.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support capabilities.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation and deployment cycles to get your solutions up and running quickly.'
    }
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Technology Solutions{' '}
                <span className="gradient-text">Streamlined</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                From custom software development to AI governance and project management - 
                we provide comprehensive technology solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/services" className="btn-primary text-lg px-8 py-4">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                  Get Started
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Three Pillars of Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and ensure compliance in the digital age.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card-hover"
                >
                  <div className="bg-dark-700 rounded-2xl p-8 h-full border border-dark-600">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-primary-400 font-medium mb-4">{service.subtitle}</p>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-white mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
                Why Choose Custodia
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Built for the Future
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven methodologies to deliver 
                solutions that scale with your business.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-dark-800 to-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Custodia can help you achieve your technology goals 
              with our comprehensive suite of services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Start Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home