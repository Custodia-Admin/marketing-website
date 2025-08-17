import React from 'react'
import { motion } from 'framer-motion'
import { Users, Heart, Globe, Zap, Mail, Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

const Careers = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours that suit your lifestyle.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in sustainable work practices and supporting your personal well-being.'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Projects',
      description: 'Work on innovative AI governance and privacy solutions that shape the future.'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Join a team that values deep collaboration and shared learning experiences.'
    }
  ]

  const values = [
    {
      title: 'Viribus Unitis',
      description: 'Strength through unity - we believe in deep collaboration across all aspects of data privacy, governance, and security.'
    },
    {
      title: 'Propter Se',
      description: 'We value privacy for its own intrinsic worth, not just as a compliance requirement.'
    },
    {
      title: 'Continuous Learning',
      description: 'The privacy and AI landscape evolves rapidly - we invest in continuous education and growth.'
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by how well we help our clients achieve their privacy and governance goals.'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our <span className="gradient-text">Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Help shape the future of AI governance and data privacy
              </p>
              <p className="text-lg text-gray-400">
                Be part of a mission-driven team that's making data privacy as smooth as butter
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 mb-12">
              <Bell className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Currently Not Hiring
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We're not actively recruiting at the moment, but we're always interested in connecting with talented individuals who share our passion for data privacy and AI governance.
              </p>
              <p className="text-gray-400">
                If you'd like to be notified when positions become available, please reach out to us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-400 font-semibold text-sm uppercase tracking-wide">
                Why Custodia
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're building a company culture that values expertise, collaboration, and meaningful impact in the privacy and AI governance space.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl p-8 hover:bg-dark-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do, from client work to team collaboration.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900 rounded-xl p-8 border border-dark-700"
              >
                <h3 className="text-xl font-bold mb-4 text-primary-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Opportunities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Future Opportunities
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              While we're not hiring now, we're always growing. Here are the types of roles we might look for in the future:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="font-bold mb-2">Privacy Engineers</h3>
                <p className="text-gray-400 text-sm">Technical experts in privacy-by-design implementation</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="font-bold mb-2">AI Governance Consultants</h3>
                <p className="text-gray-400 text-sm">Specialists in AI ethics and regulatory compliance</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="font-bold mb-2">Product Managers</h3>
                <p className="text-gray-400 text-sm">Leaders for privacy and governance tooling</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Interested in Future Opportunities?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We'd love to hear from you. Send us your information and we'll keep you in mind for future openings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Get In Touch
              </Link>
              <a
                href="mailto:contact@custodia-privacy.com?subject=Future Career Opportunities"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200 whitespace-nowrap inline-flex items-center justify-center"
              >
                Send Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers