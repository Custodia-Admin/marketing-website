import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Users, Zap, ArrowRight, Mail, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const CaseStudies = () => {
  const capabilities = [
    {
      icon: Shield,
      title: 'Privacy Impact Assessments',
      description: 'Comprehensive evaluations of data processing activities and privacy risks'
    },
    {
      icon: Users,
      title: 'AI Governance Frameworks',
      description: 'Custom governance structures for responsible AI implementation'
    },
    {
      icon: Zap,
      title: 'Compliance Automation',
      description: 'Streamlined processes and tools for ongoing regulatory compliance'
    },
    {
      icon: FileText,
      title: 'Policy Development',
      description: 'Privacy policies, data handling procedures, and governance documentation'
    }
  ]

  const industries = [
    {
      name: 'Technology & SaaS',
      description: 'Helping tech companies navigate GDPR, AI Act, and privacy-by-design principles',
      challenges: ['Data minimization', 'Cross-border transfers', 'AI system classification']
    },
    {
      name: 'Healthcare & Life Sciences',
      description: 'Specialized privacy solutions for sensitive health data and medical AI systems',
      challenges: ['HIPAA compliance', 'Medical AI governance', 'Patient consent management']
    },
    {
      name: 'Financial Services',
      description: 'Privacy and AI governance for fintech and traditional financial institutions',
      challenges: ['PCI DSS alignment', 'Algorithmic transparency', 'Customer data protection']
    },
    {
      name: 'E-commerce & Retail',
      description: 'Consumer privacy protection and personalization AI governance',
      challenges: ['Cookie compliance', 'Recommendation systems', 'Customer profiling']
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
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Case <span className="gradient-text">Studies</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Real-world privacy and AI governance solutions
              </p>
              <p className="text-lg text-gray-400">
                Discover how we help organizations streamline their data privacy operations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-12">
              <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Detailed Case Studies Coming Soon
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We're currently working with our clients to prepare detailed case studies that showcase our privacy and AI governance solutions. Due to the sensitive nature of privacy work, we're ensuring all case studies are properly anonymized and approved.
              </p>
              <p className="text-gray-400">
                In the meantime, explore our capabilities and the types of challenges we solve below.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Capabilities */}
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
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                What We Deliver
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our case studies will showcase these core capabilities and how they solve real business challenges.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl p-8 hover:bg-dark-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
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
                Industries
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Sectors We Specialize In
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our upcoming case studies will feature solutions across these key industries.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900 rounded-xl p-8 border border-dark-700"
              >
                <h3 className="text-xl font-bold mb-4 text-green-400">{industry.name}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-200">Common Challenges:</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-center text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Results We Deliver
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              While we prepare our detailed case studies, here's what our clients typically achieve:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-800 rounded-xl p-8">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-gray-300">Reduction in compliance preparation time</div>
              </div>
              <div className="bg-dark-800 rounded-xl p-8">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Audit readiness achievement</div>
              </div>
              <div className="bg-dark-800 rounded-xl p-8">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Faster privacy impact assessments</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Let's discuss how we can help streamline your data privacy operations and prepare you for the evolving regulatory landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="mailto:admin@custodia-privacy.com?subject=Case Study Discussion"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-8 rounded-lg transition-all duration-200 whitespace-nowrap inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Discuss Your Needs
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies