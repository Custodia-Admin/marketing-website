import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, Mail, MessageCircle, Book, Clock, Phone, ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Support = () => {
  const supportOptions = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed answers to your privacy and AI governance questions.',
      action: 'Send Email',
      link: 'mailto:contact@custodia-privacy.com',
      responseTime: '24-48 hours'
    },
    {
      icon: MessageCircle,
      title: 'Consultation Request',
      description: 'Schedule a free consultation to discuss your specific needs.',
      action: 'Book Consultation',
      link: '/contact',
      responseTime: 'Same day'
    },
    {
      icon: Book,
      title: 'Documentation',
      description: 'Access our comprehensive guides and resources.',
      action: 'Browse Resources',
      link: '/resources',
      responseTime: 'Instant'
    }
  ]

  const faqCategories = [
    {
      title: 'AI Governance',
      questions: [
        {
          q: 'How do I classify my AI systems under the EU AI Act?',
          a: 'Use our free AI Risk Classification Template to systematically evaluate your AI systems. The template guides you through risk assessment criteria and helps identify which systems fall under different regulatory categories.'
        },
        {
          q: 'What documentation do I need for high-risk AI systems?',
          a: 'High-risk AI systems require comprehensive documentation including risk management systems, data governance measures, technical documentation, and conformity assessments. We provide templates and guidance for all required documentation.'
        },
        {
          q: 'How often should I review my AI governance framework?',
          a: 'We recommend quarterly reviews of your AI governance framework, with immediate reviews when deploying new AI systems or when regulations change. Our ongoing support helps maintain compliance.'
        }
      ]
    },
    {
      title: 'Data Privacy',
      questions: [
        {
          q: 'How do I conduct a Privacy Impact Assessment?',
          a: 'A PIA involves identifying privacy risks, assessing their likelihood and impact, and implementing mitigation measures. Our PIA guide provides a step-by-step methodology and templates.'
        },
        {
          q: 'What are the key GDPR compliance requirements?',
          a: 'Key requirements include lawful basis for processing, data subject rights, privacy by design, data protection impact assessments, and breach notification. Our GDPR checklist covers all essential elements.'
        },
        {
          q: 'How do I handle cross-border data transfers?',
          a: 'Cross-border transfers require adequate protection mechanisms like adequacy decisions, standard contractual clauses, or binding corporate rules. We help assess and implement appropriate safeguards.'
        }
      ]
    },
    {
      title: 'Services & Pricing',
      questions: [
        {
          q: 'What services does Custodia offer?',
          a: 'We offer three main service areas: Custom Software Development (Custodia Dev), AI Governance & Data Privacy Consulting (Custodia Privacy), and Project Management Solutions (Custodia Cohort).'
        },
        {
          q: 'How is pricing structured?',
          a: 'Pricing varies based on project scope, complexity, and duration. We offer both project-based and retainer arrangements. Contact us for a customized quote based on your specific needs.'
        },
        {
          q: 'Do you offer ongoing support after project completion?',
          a: 'Yes, we provide ongoing support and maintenance options to ensure your privacy and governance frameworks remain effective and compliant as regulations evolve.'
        }
      ]
    }
  ]

  const [openFaq, setOpenFaq] = React.useState(null)

  const toggleFaq = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenFaq(openFaq === key ? null : key)
  }

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
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support <span className="gradient-text">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Get help with privacy, AI governance, and our services
              </p>
              <p className="text-lg text-gray-400">
                Find answers, get support, and access resources to streamline your privacy operations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
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
                Get Help
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                How Can We Assist You?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that best fits your needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl p-8 hover:bg-dark-700 transition-colors duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                <p className="text-gray-300 mb-6">{option.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-400 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  Response time: {option.responseTime}
                </div>
                <Link
                  to={option.link}
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  {option.action}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and privacy compliance.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-400">{category.title}</h3>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <div
                      key={questionIndex}
                      className="bg-dark-900 rounded-lg border border-dark-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-dark-700 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-medium">{faq.q}</span>
                        <div className={`transform transition-transform duration-200 ${
                          openFaq === `${categoryIndex}-${questionIndex}` ? 'rotate-180' : ''
                        }`}>
                          <ArrowRight className="w-5 h-5 rotate-90" />
                        </div>
                      </button>
                      {openFaq === `${categoryIndex}-${questionIndex}` && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
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
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Explore our comprehensive resources to help with your privacy and AI governance needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/blog"
                className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors duration-300 group"
              >
                <Book className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2 group-hover:text-primary-400 transition-colors">Blog</h4>
                <p className="text-gray-400 text-sm">Latest insights and updates</p>
              </Link>
              
              <Link
                to="/resources"
                className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors duration-300 group"
              >
                <Search className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2 group-hover:text-primary-400 transition-colors">Resources</h4>
                <p className="text-gray-400 text-sm">Free templates and guides</p>
              </Link>
              
              <Link
                to="/services"
                className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors duration-300 group"
              >
                <HelpCircle className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2 group-hover:text-primary-400 transition-colors">Services</h4>
                <p className="text-gray-400 text-sm">Our complete service offering</p>
              </Link>
              
              <Link
                to="/contact"
                className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors duration-300 group"
              >
                <Phone className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold mb-2 group-hover:text-primary-400 transition-colors">Contact</h4>
                <p className="text-gray-400 text-sm">Get in touch with our team</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our team of privacy and AI governance experts is here to help you navigate complex compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@custodia-privacy.com?subject=Support Request"
                className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Support
              </a>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium py-3 px-8 rounded-lg transition-all duration-200 whitespace-nowrap inline-flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Support