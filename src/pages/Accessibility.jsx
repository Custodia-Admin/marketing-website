import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Keyboard, Mouse, Volume2, Mail, MapPin, CheckCircle } from 'lucide-react'

const Accessibility = () => {
  const features = [
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Full keyboard navigation support for all interactive elements and pages.'
    },
    {
      icon: Eye,
      title: 'Screen Reader Compatible',
      description: 'Semantic HTML and ARIA labels for screen reader accessibility.'
    },
    {
      icon: Mouse,
      title: 'Focus Indicators',
      description: 'Clear visual focus indicators for keyboard and mouse navigation.'
    },
    {
      icon: Volume2,
      title: 'Alternative Text',
      description: 'Descriptive alt text for all images and visual content.'
    }
  ]

  const standards = [
    {
      standard: 'WCAG 2.1 Level AA',
      description: 'We strive to meet Web Content Accessibility Guidelines 2.1 Level AA standards.',
      status: 'In Progress'
    },
    {
      standard: 'Section 508',
      description: 'Compliance with Section 508 of the Rehabilitation Act for federal accessibility.',
      status: 'In Progress'
    },
    {
      standard: 'EN 301 549',
      description: 'European standard for accessibility requirements for ICT procurement.',
      status: 'In Progress'
    }
  ]

  const improvements = [
    'Enhanced color contrast ratios across all interface elements',
    'Improved keyboard navigation flow and focus management',
    'Better screen reader support with semantic HTML structure',
    'Alternative text for all informational images',
    'Accessible form labels and error messaging',
    'Consistent heading hierarchy for better navigation'
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Accessibility <span className="gradient-text">Statement</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Our commitment to digital accessibility for everyone
              </p>
              <p className="text-lg text-gray-400">
                Last updated: January 17, 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Commitment
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Custodia is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
              </p>
              <p className="text-gray-300 mb-6">
                We believe that everyone should have equal access to information and functionality on our website, regardless of their abilities or the technologies they use to access the web.
              </p>
              <p className="text-gray-300">
                As a company specializing in data privacy and AI governance, we understand the importance of inclusive design and are dedicated to making our digital presence accessible to all users.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accessibility Features */}
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
                Features
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have implemented various features to improve accessibility across our website.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900 rounded-xl p-8 border border-dark-700"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Standards & Compliance
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              We are working towards compliance with recognized accessibility standards.
            </p>
            
            <div className="space-y-6">
              {standards.map((item, index) => (
                <motion.div
                  key={item.standard}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-800 rounded-lg p-6 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{item.standard}</h3>
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Improvements */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Ongoing Improvements
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              We are continuously working to improve the accessibility of our website. Recent and planned improvements include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {improvements.map((improvement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{improvement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Feedback & Support
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please let us know.
            </p>
            
            <div className="bg-dark-800 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Contact Us About Accessibility</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>admin@custodia-privacy.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Switzerland</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                When contacting us about accessibility, please include:
              </p>
              <ul className="text-gray-400 text-sm mt-4 space-y-2 text-left max-w-md mx-auto">
                <li>• The specific page or feature you're having trouble with</li>
                <li>• The assistive technology you're using (if any)</li>
                <li>• A description of the problem you encountered</li>
                <li>• Your suggestions for improvement</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Formal Complaints
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                We aim to respond to accessibility feedback within 5 business days. If you are not satisfied with our response, you may file a formal complaint with the relevant accessibility authority in your jurisdiction.
              </p>
              <p className="text-gray-300">
                This accessibility statement was created on January 17, 2025, and will be reviewed and updated regularly as we continue to improve our website's accessibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Accessibility