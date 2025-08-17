# Custodia Marketing Website

A comprehensive, modern marketing website for Custodia - a Swiss-based technology consulting firm specializing in three core areas: custom software development, AI governance & data privacy, and project management solutions.

## 🌟 Features

### Three Service Divisions
- **Custodia Dev**: Custom Software Development Solutions
- **Custodia Privacy**: AI Governance & Data Privacy Consulting  
- **Custodia Cohort**: Project Management Solutions

### Modern Design & UX
- ✨ Sleek, modern design matching the existing Custodia Privacy brand
- 📱 Fully responsive design for all devices
- 🎨 Beautiful animations and transitions using Framer Motion
- 🎯 Professional navigation with dropdown menus
- 🌙 Dark theme with carefully crafted color palette

### Comprehensive Pages
- **Homepage**: Overview of all services with compelling hero section
- **About**: Company mission, values, team, and milestones
- **Services**: Detailed overview of all service offerings
- **Individual Service Pages**: In-depth information for each division
- **Contact**: Professional contact form with service selection
- **Footer**: Complete site navigation and company information

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Development**: ESLint for code quality

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marketing-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:12000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header with dropdown
│   └── Footer.jsx      # Site footer with links
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with service overview
│   ├── About.jsx       # Company information
│   ├── Services.jsx    # All services overview
│   ├── Contact.jsx     # Contact form and information
│   ├── CustodiaDev.jsx # Software development services
│   ├── CustodiaPrivacy.jsx # AI governance & privacy
│   └── CustodiaCohort.jsx  # Project management
├── App.jsx             # Main app component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Dark Theme**: Various shades of slate/gray
- **Service Colors**:
  - Custodia Dev: Blue to Cyan gradient
  - Custodia Privacy: Green to Emerald gradient  
  - Custodia Cohort: Purple to Pink gradient

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with proper hierarchy
- **Body**: Clean, readable text with good contrast

### Components
- Custom button styles (primary/secondary)
- Card hover effects
- Gradient text effects
- Responsive containers
- Professional form styling

## 🌐 Deployment

The website is configured to run on port 12000 and accepts connections from any host, making it suitable for various deployment environments.

### Environment Configuration
- **Development**: `npm run dev` (port 12000)
- **Production**: `npm run build` then serve the `dist` folder
- **Preview**: `npm run preview`

## 📧 Contact Information

- **Email**: hello@custodia.com
- **Location**: Switzerland
- **Website**: [Live Demo](https://work-1-evogyacifgodvaxo.prod-runtime.all-hands.dev)

## 🤝 Contributing

This is a marketing website for Custodia. For contributions or modifications, please contact the development team.

## 📄 License

© 2025 Custodia. All rights reserved.

---

Built with ❤️ by the Custodia team using modern web technologies.
