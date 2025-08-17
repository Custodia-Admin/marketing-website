import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Users, 
  Calendar, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle,
  Clock,
  MessageSquare,
  Settings,
  TrendingUp,
  Zap,
  Award,
  Globe,
  Layers
} from 'lucide-react'

const CustodiaCohort = () => {
  const services = [
    {
      icon: Target,
      title: 'Agile & Scrum Implementation',
      description: 'Transform your team with proven agile methodologies and scrum frameworks.',
      features: ['Scrum Master Training', 'Sprint Planning', 'Daily Standups', 'Retrospectives']
    },
    {
      icon: Calendar,
      title: 'Project Planning & Strategy',
      description: 'Comprehensive project planning with strategic roadmaps and milestone tracking.',
      features: ['Strategic Roadmaps', 'Milestone Planning', 'Resource Allocation', 'Risk Management']
    },
    {
      icon: MessageSquare,
      title: 'Team Collaboration Tools',
      description: 'Implement and optimize collaboration tools for seamless team communication.',
      features: ['Tool Selection', 'Workflow Design', 'Integration Setup', 'Training & Support']
    },
    {
      icon: BarChart3,
      title: 'Resource Management',
      description: 'Optimize resource allocation and capacity planning for maximum efficiency.',
      features: ['Capacity Planning', 'Workload Balancing', 'Skill Mapping', 'Performance Tracking']
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking & Reporting',
      description: 'Real-time project tracking with comprehensive reporting and analytics.',
      features: ['KPI Dashboards', 'Progress Reports', 'Performance Analytics', 'Stakeholder Updates']
    },
    {
      icon: Settings,
      title: 'Process Optimization',
      description: 'Continuous improvement of workflows and processes for better outcomes.',
      features: ['Process Analysis', 'Bottleneck Identification', 'Workflow Optimization', 'Automation']
    }
  ]

  const methodologies = [
    { name: 'Agile', description: 'Iterative development with continuous feedback' },
    { name: 'Scrum', description: 'Framework for managing product development' },
    { name: 'Kanban', description: 'Visual workflow management system' },
    { name: 'Lean', description: 'Eliminate waste and maximize value' },
    { name: 'DevOps', description: 'Integration of development and operations' },
    { name: 'SAFe', description: 'Scaled Agile Framework for enterprises' }
  ]

  const tools = [
    { name: 'Jira', category: 'Project Management' },
    { name: 'Confluence', category: 'Documentation' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Trello', category: 'Task Management' },
    { name: 'Asana', category: 'Project Planning' },
    { name: 'Monday.com', category: 'Workflow Management' },
    { name: 'Microsoft Teams', category: 'Collaboration' },
    { name: 'Notion', category: 'All-in-One Workspace' }
  ]

  const process = [
    {
      step: '01',
      title: 'Current State Assessment',
      description: 'Evaluate your existing project management practices, tools, and team dynamics.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized project management strategy aligned with your business goals.'
    },
    {
      step: '03',
      title: 'Tool Implementation',
      description: 'Select and implement the right tools and platforms for your team\'s needs.'
    },
    {
      step: '04',
      title: 'Team Training',
      description: 'Comprehensive training programs to ensure successful adoption of new processes.'
    },
    {
      step: '05',
      title: 'Continuous Improvement',
      description: 'Ongoing optimization and refinement based on performance metrics and feedback.'
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Delivery',
      description: 'Reduce project timelines with optimized workflows and efficient processes.'
    },
    {
      icon: Users,
      title: 'Better Collaboration',
      description: 'Improve team communication and collaboration with the right tools and practices.'
    },
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Boost team productivity through streamlined processes and clear accountability.'
    },
    {
      icon: Award,
      title: 'Quality Outcomes',
      description: 'Deliver higher quality results with structured methodologies and continuous feedback.'
    }
  ]

  const stats = [
    { number: '40%', label: 'Faster Project Delivery', icon: Zap },
    { number: '60%', label: 'Improved Team Efficiency', icon: TrendingUp },
    { number: '85%', label: 'Client Satisfaction Rate', icon: Award },
    { number: '24/7', label: 'Support & Monitoring', icon: Globe }
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Custodia Cohort</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Project Management Solutions
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                Transform your project management with advanced methodologies, cutting-edge tools, 
                and expert guidance. We help teams deliver projects faster, more efficiently, 
                and with better outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                  All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Project Management Impact
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
                  <div className="text-purple-100 font-medium">
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
                Complete Project Management Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From strategy to execution, we provide comprehensive project management 
                services to streamline your workflows.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
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

      {/* Methodologies */}
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
                Methodologies
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Proven Project Management Frameworks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We implement industry-leading methodologies tailored to your team's needs and project requirements.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-lg p-6 border border-dark-700 hover:border-purple-600/50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg mb-3">{methodology.name}</h3>
                <p className="text-gray-400 text-sm">{methodology.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
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
                Tools & Platforms
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Best-in-Class Project Management Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We help you select and implement the right tools for your team's workflow and collaboration needs.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-dark-700 rounded-lg p-6 text-center border border-dark-600 hover:border-purple-600/50 transition-all duration-300"
              >
                <h3 className="font-bold mb-2">{tool.name}</h3>
                <p className="text-purple-400 text-sm">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
                Our Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                How We Transform Your Projects
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
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="flex-1 bg-dark-800 rounded-xl p-6 border border-dark-700">
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
                Benefits
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                The Custodia Cohort Advantage
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
      <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Projects?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss your project management challenges and create a customized 
              solution that drives results for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-medium py-3 px-8 rounded-lg transition-all duration-200 whitespace-nowrap">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CustodiaCohort