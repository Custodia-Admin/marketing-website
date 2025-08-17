import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Code, 
  Shield, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  Cloud,
  Database,
  Lock,
  FileText,
  BarChart3,
  Calendar,
  MessageSquare,
  Settings
} from 'lucide-react'

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: 'Custodia Dev',
      subtitle: 'Custom Software Development',
      description: 'End-to-end software development solutions tailored to your business needs.',
      href: '/custodia-dev',
      color: 'from-blue-500 to-cyan-500',
      services: [
        'Full-Stack Web Development',
        'Mobile App Development',
        'API Development & Integration',
        'Cloud Solutions & DevOps',
        'Legacy System Modernization',
        'Technical Consulting'
      ]
    },
    {
      icon: Shield,
      title: 'Custodia Privacy',
      subtitle: 'AI Governance & Data Privacy',
      description: 'Navigate AI regulations and data privacy compliance with expert guidance.',
      href: '/custodia-privacy',
      color: 'from-green-500 to-emerald-500',
      services: [
        'AI Risk Assessment',
        'GDPR Compliance Consulting',
        'Privacy Impact Assessments',
        'Data Mapping & Inventory',
        'Privacy by Design Implementation',
        'Regulatory Training'
      ]
    },
    {
      icon: Users,
      title: 'Custodia Cohort',
      subtitle: 'Project Management Solutions',
      description: 'Streamline workflows with advanced project management tools and methodologies.',
      href: '/custodia-cohort',
      color: 'from-purple-500 to-pink-500',
      services: [
        'Agile & Scrum Implementation',
        'Project Planning & Strategy',
        'Team Collaboration Tools',
        'Resource Management',
        'Progress Tracking & Reporting',
        'Process Optimization'
      ]
    }
  ]

  const additionalServices = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with optimized architecture.'
    },
    {
      icon: Database,
      title: 'Data Architecture',
      description: 'Design and implement scalable data solutions and analytics platforms.'
    },
    {
      icon: Lock,
      title: 'Security Audits',
      description: 'Comprehensive security assessments and vulnerability testing.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Technical documentation, API docs, and compliance documentation.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Business intelligence solutions and data visualization dashboards.'
    },
    {
      icon: Calendar,
      title: 'Project Planning',
      description: 'Strategic project planning and roadmap development.'
    },
    {
      icon: MessageSquare,
      title: 'Consulting',
      description: 'Expert technology and strategy consulting for digital transformation.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business needs, challenges, and goals through detailed consultation.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Our experts develop a comprehensive strategy tailored to your specific requirements and constraints.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, keeping you informed throughout the development process.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'We deliver high-quality solutions on time, with thorough testing and documentation.'
    },
    {
      step: '05',
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure your solutions continue to perform optimally.'
    }
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive technology solutions designed to accelerate your business 
                growth and ensure compliance in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
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
                Core Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Three Pillars of Excellence
              </h2>
            </motion.div>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-primary-400 font-medium text-lg mb-6">{service.subtitle}</p>
                    <p className="text-gray-300 text-lg mb-8">{service.description}</p>
                    <Link
                      to={service.href}
                      className="inline-flex items-center btn-primary"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-dark-700 rounded-2xl p-8 border border-dark-600">
                      <h4 className="text-xl font-bold mb-6">What's Included:</h4>
                      <ul className="space-y-3">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
                Additional Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Specialized Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond our core services, we offer specialized solutions to address 
                specific technology challenges and opportunities.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700 hover:border-primary-600/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                How We Work
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery from 
                initial consultation to ongoing support.
              </p>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-600/30 transform -translate-y-1/2"></div>
                  )}
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 to-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project requirements and find the perfect solution 
              for your business needs.
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

export default Services