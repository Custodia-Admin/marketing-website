import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Layers,
  GitBranch,
  Server
} from 'lucide-react'

const CustodiaDev = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Modern web applications built with the latest technologies and best practices.',
      features: ['React, Vue, Angular', 'Node.js, Python, .NET', 'Responsive Design', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Deployment']
    },
    {
      icon: Database,
      title: 'API Development & Integration',
      description: 'Robust APIs and seamless third-party integrations for your applications.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Third-party Integrations']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines.',
      features: ['AWS, Azure, GCP', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code']
    },
    {
      icon: Server,
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, efficient applications.',
      features: ['System Assessment', 'Migration Planning', 'Data Migration', 'Training & Support']
    },
    {
      icon: GitBranch,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology strategy and architecture decisions.',
      features: ['Architecture Review', 'Technology Selection', 'Code Audits', 'Performance Optimization']
    }
  ]

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: '.NET', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' }
  ]

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We dive deep into your business needs and technical requirements to create a comprehensive project scope.'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Our architects design scalable, secure, and maintainable solutions tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Agile Development',
      description: 'We build your solution using agile methodologies with regular updates and feedback cycles.'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'Comprehensive testing ensures your application meets the highest standards of quality and performance.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We handle deployment and provide ongoing support to ensure your application runs smoothly.'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Fast delivery without compromising on quality using modern development practices.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Built-in security measures and best practices to protect your applications and data.'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Applications designed to grow with your business and handle increasing demands.'
    },
    {
      icon: Layers,
      title: 'Modern Architecture',
      description: 'Clean, maintainable code following industry best practices and design patterns.'
    }
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Custodia Dev</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Custom Software Development Solutions
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                From concept to deployment, we build robust, scalable software solutions 
                that drive your business forward. Our expert developers use cutting-edge 
                technologies to create applications that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Start Your Project
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
                Comprehensive Development Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer end-to-end software development services to bring your ideas to life.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
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

      {/* Technologies */}
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
                Technologies
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Cutting-Edge Tech Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies to ensure your applications are 
                modern, efficient, and future-proof.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-lg p-6 text-center border border-dark-700 hover:border-primary-600/50 transition-all duration-300"
              >
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-primary-400 text-sm">{tech.category}</p>
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
                Our Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                How We Build Your Solution
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
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
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
                The Custodia Dev Advantage
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
      <section className="section-padding bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CustodiaDev