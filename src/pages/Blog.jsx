import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'AI Governance: Built on the Bedrock of Data Privacy',
      slug: 'ai-governance-built-on-the-bedrock-of-data-privacy',
      excerpt: 'AI governance is fundamentally linked to data privacy. Learn how evolving privacy principles, data quality, and ethical frameworks form the foundation of responsible AI implementation.',
      author: 'Federico Brooks',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI Governance',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: "Privacy-First AI: Canada's Biometric Rules as a Blueprint for AI Governance",
      slug: 'privacy-first-ai-canada-s-biometric-rules-as-a-blueprint-for-ai-governance',
      excerpt: "Canada's biometric privacy guidelines are key to AI governance, emphasizing privacy-by-design, bias mitigation, and transparent data handling practices.",
      author: 'Federico Brooks',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Privacy Regulations',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Biometric Privacy Guidelines: A Blueprint for AI Governance',
      slug: 'biometric-privacy-guidelines-a-blueprint-for-ai-governance',
      excerpt: 'Canadian biometric guidelines offer a blueprint for AI governance, emphasizing Privacy by Design, AI bias mitigation, and comprehensive data protection strategies.',
      author: 'Thomas Brooks',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'Data Protection',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'The Child Privacy Blueprint for Responsible AI Governance',
      slug: 'the-child-privacy-blueprint-for-responsible-ai-governance',
      excerpt: 'Exploring how child privacy regulations provide essential frameworks for building ethical AI systems that protect vulnerable populations.',
      author: 'Federico Brooks',
      date: '2024-12-28',
      readTime: '9 min read',
      category: 'Ethics & Compliance',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: "Bridging the Gap: Data Privacy's Role in Effective AI Governance",
      slug: 'bridging-the-gap-data-privacy-s-role-in-effective-ai-governance',
      excerpt: 'Understanding the critical intersection between data privacy principles and AI governance frameworks for sustainable technology implementation.',
      author: 'Thomas Brooks',
      date: '2024-12-20',
      readTime: '5 min read',
      category: 'AI Governance',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    }
  ]

  const categories = ['All', 'AI Governance', 'Privacy Regulations', 'Data Protection', 'Ethics & Compliance']
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Custodia <span className="gradient-text">Blog</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay ahead of AI Governance news and insights from our experts
              </p>
              <p className="text-lg text-gray-400">
                Explore the latest developments in AI governance, data privacy, and regulatory compliance
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-dark-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated on AI Governance
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest insights on AI governance, data privacy regulations, and compliance best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-dark-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-dark-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-dark-800 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog