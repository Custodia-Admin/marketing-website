import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Shield, Brain, CheckCircle, Mail, ArrowRight, Star } from 'lucide-react'

const Resources = () => {
  const [email, setEmail] = useState('')
  const [downloadRequested, setDownloadRequested] = useState(false)

  const handleDownload = (e) => {
    e.preventDefault()
    if (email) {
      setDownloadRequested(true)
      // In a real implementation, this would trigger the download and email capture
    }
  }

  const resources = [
    {
      id: 1,
      title: 'AI Risk Classification Template',
      description: 'Comprehensive template to classify the risk of your AI systems, identify gaps and blindspots, and prepare for audits.',
      type: 'Template',
      format: 'Excel/PDF',
      featured: true,
      icon: Brain,
      benefits: [
        'Understand your AI systems risk levels',
        'Identify compliance gaps early',
        'Prepare for regulatory audits',
        'Align with EU AI Act requirements'
      ]
    },
    {
      id: 2,
      title: 'GDPR Compliance Checklist',
      description: 'Step-by-step checklist to ensure your organization meets GDPR requirements.',
      type: 'Checklist',
      format: 'PDF',
      featured: false,
      icon: Shield,
      benefits: [
        'Complete GDPR compliance overview',
        'Actionable implementation steps',
        'Regular audit framework',
        'Risk mitigation strategies'
      ]
    },
    {
      id: 3,
      title: 'Privacy Impact Assessment Guide',
      description: 'Detailed guide for conducting thorough privacy impact assessments.',
      type: 'Guide',
      format: 'PDF',
      featured: false,
      icon: FileText,
      benefits: [
        'Structured PIA methodology',
        'Risk assessment frameworks',
        'Stakeholder engagement templates',
        'Compliance documentation'
      ]
    }
  ]

  const additionalResources = [
    {
      title: 'Data Privacy Blog',
      description: 'Stay updated with the latest insights on AI governance and data privacy regulations.',
      link: '/blog',
      type: 'Blog'
    },
    {
      title: 'Regulatory Templates',
      description: 'Access our collection of templates for AI regulations and data privacy requirements.',
      link: '/custodia-privacy',
      type: 'Service'
    },
    {
      title: 'Privacy Chatbot',
      description: 'Get instant answers to your AI governance and data privacy questions.',
      link: '/custodia-privacy',
      type: 'Tool'
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Free <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Templates, guides, and tools to streamline your privacy operations
              </p>
              <p className="text-lg text-gray-400">
                Get ahead of AI regulations with our expert-crafted resources
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 md:p-12">
              <div className="flex items-center mb-6">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Featured Resource</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Free AI Risk Classification Template
                  </h2>
                  <p className="text-xl text-gray-300 mb-6">
                    Access our comprehensive AI Classification template to get ahead of AI regulations. Use our assessment to classify the risk of your AI systems, identify gaps and blindspots, and prepare for audits.
                  </p>
                  <div className="space-y-3 mb-8">
                    {resources[0].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-dark-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Download Your Free Template</h3>
                  {!downloadRequested ? (
                    <form onSubmit={handleDownload} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Get Free Template
                      </button>
                      <p className="text-xs text-gray-400 text-center">
                        An email with the file will be sent immediately to the address provided.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h4 className="text-xl font-bold mb-2 text-green-400">Request Submitted!</h4>
                      <p className="text-gray-300 mb-4">
                        Check your email for the download link. If you don't see it, check your spam folder.
                      </p>
                      <p className="text-sm text-gray-400">
                        Need help? Contact us at admin@custodia-privacy.com
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
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
                More Resources
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Additional Tools & Guides
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of privacy and AI governance resources.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {resources.slice(1).map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900 rounded-xl p-8 border border-dark-700 hover:border-primary-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold mr-3">{resource.title}</h3>
                  <span className="bg-primary-600/20 text-primary-400 px-2 py-1 rounded text-sm">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{resource.description}</p>
                <div className="space-y-2 mb-6">
                  {resource.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Coming Soon
                </button>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 rounded-lg p-6 hover:bg-dark-600 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">{resource.title}</h4>
                  <span className="bg-dark-600 text-gray-300 px-2 py-1 rounded text-xs">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our free resources are just the beginning. Get personalized privacy and AI governance solutions tailored to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap inline-flex items-center justify-center"
              >
                Get Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:admin@custodia-privacy.com?subject=Custom Privacy Solutions"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200 whitespace-nowrap inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Resources