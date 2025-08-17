import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  Zap
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Privacy and security are at the core of everything we build and recommend.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for the highest quality in every project and interaction.'
    }
  ]

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: 'Former tech executive with 15+ years in software development and AI governance.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Full-stack architect specializing in scalable cloud solutions and data privacy.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Marcus Weber',
      role: 'Head of Privacy',
      bio: 'Data protection expert with deep knowledge of European and global privacy regulations.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Project Director',
      bio: 'Agile methodology expert with a track record of delivering complex projects on time.',
      image: '/api/placeholder/300/300'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started as a boutique consulting firm in Switzerland'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Delivered comprehensive AI governance framework for Fortune 500 company'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew to 25+ specialists across development, privacy, and project management'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded services to clients across Europe, North America, and Asia'
    },
    {
      year: '2024',
      title: 'Innovation Hub',
      description: 'Launched R&D division focusing on AI ethics and privacy-preserving technologies'
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
                About <span className="gradient-text">Custodia</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                We're a Swiss-based technology consulting firm at the intersection of 
                innovation, privacy, and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with cutting-edge technology solutions while ensuring 
                the highest standards of privacy, security, and ethical practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading technology partner for businesses navigating the 
                complex landscape of digital transformation and regulatory compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
              <p className="text-gray-300">
                To create technology solutions that not only drive business success but 
                also contribute to a more secure and privacy-conscious digital world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our core values guide every decision we make and every solution we deliver.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
                Our Journey
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Milestones & Growth
              </h2>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-primary-400">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mr-8 relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-primary-600/30 last:hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                Our Team
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                Meet the Experts
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team brings together decades of experience in technology, 
                privacy, and project management.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-primary-100">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-primary-100">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-primary-100">Team Members</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-primary-100">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About