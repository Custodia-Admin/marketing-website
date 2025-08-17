import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Shield, 
  FileText, 
  Search, 
  Lock, 
  ArrowRight, 
  CheckCircle,
  Eye,
  AlertTriangle,
  BookOpen,
  Users,
  Globe,
  Award
} from 'lucide-react'

const CustodiaPrivacy = () => {
  const services = [
    {
      icon: Search,
      title: 'AI Risk Assessment',
      description: 'Comprehensive evaluation of AI systems to identify potential risks and compliance gaps.',
      features: ['Risk Identification', 'Impact Analysis', 'Mitigation Strategies', 'Compliance Mapping']
    },
    {
      icon: FileText,
      title: 'GDPR Compliance Consulting',
      description: 'Expert guidance to ensure your organization meets all GDPR requirements.',
      features: ['Compliance Audits', 'Policy Development', 'Training Programs', 'Ongoing Support']
    },
    {
      icon: Eye,
      title: 'Privacy Impact Assessments',
      description: 'Detailed assessments to evaluate privacy risks in your data processing activities.',
      features: ['DPIA Frameworks', 'Risk Evaluation', 'Stakeholder Consultation', 'Remediation Plans']
    },
    {
      icon: Lock,
      title: 'Data Mapping & Inventory',
      description: 'Complete mapping of your data flows and creation of comprehensive data inventories.',
      features: ['Data Discovery', 'Flow Mapping', 'Classification', 'Inventory Management']
    },
    {
      icon: Shield,
      title: 'Privacy by Design Implementation',
      description: 'Embed privacy principles into your systems and processes from the ground up.',
      features: ['Design Principles', 'Technical Safeguards', 'Process Integration', 'Monitoring Systems']
    },
    {
      icon: BookOpen,
      title: 'Regulatory Training',
      description: 'Comprehensive training programs to educate your team on privacy regulations.',
      features: ['Custom Curricula', 'Interactive Workshops', 'Certification Programs', 'Ongoing Education']
    }
  ]

  const regulations = [
    { name: 'GDPR', region: 'European Union', status: 'Active' },
    { name: 'CCPA', region: 'California, USA', status: 'Active' },
    { name: 'AI Act', region: 'European Union', status: 'Coming 2025' },
    { name: 'PIPEDA', region: 'Canada', status: 'Active' },
    { name: 'LGPD', region: 'Brazil', status: 'Active' },
    { name: 'DPA', region: 'United Kingdom', status: 'Active' }
  ]

  const stats = [
    { number: '700+', label: 'AI Risks Identified Globally', icon: AlertTriangle },
    { number: '5000+', label: 'Privacy Incidents Tracked', icon: Shield },
    { number: '1000+', label: 'AI Standards & Policies', icon: FileText },
    { number: '43+', label: 'AI Risk Frameworks', icon: Award }
  ]

  const process = [
    {
      step: '01',
      title: 'Assessment & Discovery',
      description: 'We conduct a thorough assessment of your current AI systems, data processing activities, and privacy practices.'
    },
    {
      step: '02',
      title: 'Gap Analysis',
      description: 'Identify gaps between your current practices and regulatory requirements, prioritizing areas of highest risk.'
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Create a comprehensive privacy and AI governance strategy tailored to your organization\'s needs.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute the strategy with detailed implementation plans, policies, and technical safeguards.'
    },
    {
      step: '05',
      title: 'Monitoring & Maintenance',
      description: 'Ongoing monitoring and updates to ensure continued compliance as regulations evolve.'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Stay ahead of evolving regulations with proactive compliance strategies.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Navigate complex international privacy laws with our global regulatory knowledge.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified privacy professionals and AI governance specialists.'
    },
    {
      icon: Award,
      title: 'Proven Methodology',
      description: 'Benefit from our tested frameworks and industry best practices.'
    }
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Custodia Privacy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                AI Governance & Data Privacy Consulting
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                Navigate the complex landscape of AI regulations and data privacy with expert guidance. 
                We help organizations build comprehensive governance frameworks and ensure compliance 
                with evolving global privacy laws.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Governance by the Numbers
              </h2>
            </motion.div>
          </div>

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
                  <div className="text-green-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
                Comprehensive Privacy Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end privacy and AI governance services to ensure your organization 
                stays compliant and secure.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-700 rounded-2xl p-8 border border-dark-600 card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regulations */}
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
                Regulatory Landscape
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Stay Ahead of Regulations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We help you navigate the complex and evolving landscape of global privacy regulations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulations.map((regulation, index) => (
              <motion.div
                key={regulation.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-lg p-6 border border-dark-700 hover:border-green-600/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg">{regulation.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    regulation.status === 'Active' 
                      ? 'bg-green-600/20 text-green-400' 
                      : 'bg-yellow-600/20 text-yellow-400'
                  }`}>
                    {regulation.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{regulation.region}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
                Our Approach
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Privacy by Design Methodology
              </h2>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1 bg-dark-700 rounded-xl p-6 border border-dark-600">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                The Custodia Privacy Advantage
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Secure Your AI Future?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let's discuss your privacy and AI governance needs and create a comprehensive 
              compliance strategy for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CustodiaPrivacy