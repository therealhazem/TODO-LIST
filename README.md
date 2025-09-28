<div align="center">

# 🎬 XORA

**Amazingly Simple Video Editing**

A modern video editing SaaS platform where creators can transform their content with AI-powered automation, collaborate with teams, and produce professional-quality videos effortlessly.

![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🌐 **LIVE PREVIEW**

[![🚀 View Live Demo](https://img.shields.io/badge/🚀_View_Live_Demo-FF6B6B?style=for-the-badge&logo=netlify&logoColor=white)](https://xorasass.netlify.app/)

**👉 [https://xorasass.netlify.app/](https://xorasass.netlify.app/) 👈**

*Experience the full platform with AI-powered video editing, team collaboration, and professional features*

</div>

---

## 📋 Table of Contents

- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔋 Features](#-features)
- [💰 Pricing Plans](#-pricing-plans)
- [🤸 Quick Start](#-quick-start)
- [🕸️ Project Structure](#️-project-structure)
- [🚀 Deployment](#-deployment)
- [📱 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)

---

## 🤖 Introduction

XORA is a comprehensive video editing platform designed for creators and teams, enabling users to:

- **AI-Powered Editing** - Transform raw footage into polished content automatically
- **Team Collaboration** - Work seamlessly with your team in real-time
- **Professional Results** - Studio-quality output without the complexity
- **Secure & Reliable** - Enterprise-grade security with 99.9% uptime
- **Multi-Platform** - Available on iOS, Android, Windows, and Web

Built with modern web technologies and a focus on user experience, this platform provides a seamless environment for video creation and collaboration.

---

## ⚙️ Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks and functional components
- **Vite 6.2.0** - Lightning-fast build tool and development server
- **JavaScript ES6+** - Modern JavaScript with latest features
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **React Scroll** - Smooth scrolling navigation
- **React CountUp** - Animated number counting

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Deployment
- **Netlify** - Static site hosting and deployment
- **Git** - Version control system

---

## 🔋 Features

### 🎯 Core Functionality
- **👉 AI Automated Video Editing**: Let artificial intelligence handle the heavy lifting
- **👉 Team Collaboration**: Work seamlessly with your team in real-time
- **👉 Ultra Fast Cloud Engine**: Lightning-fast processing and rendering
- **👉 24/7 Customer Support**: Round-the-clock assistance when you need it
- **👉 Real-time Analytics**: Track performance and optimize your content strategy

### 🎨 User Experience
- **👉 Responsive Design**: Mobile-first approach with TailwindCSS
- **👉 Modern UI**: Clean, minimalistic design with custom styling
- **👉 Interactive Elements**: Hover effects, animations, and smooth transitions
- **👉 Smooth Scrolling**: Seamless navigation between sections
- **👉 Loading Animations**: Engaging user feedback for all actions

### 📊 Content Management
- **👉 100+ Prompt Templates**: Jumpstart your creativity with pre-built templates
- **👉 Cloud Storage**: Secure and scalable storage solutions
- **👉 Project Management**: Organize and manage multiple video projects
- **👉 User Profiles**: Individual accounts with personalized settings

### 🔧 Technical Features
- **👉 Component Architecture**: Modular and reusable React components
- **👉 Performance Optimized**: Fast loading and smooth interactions
- **👉 SEO Ready**: Meta tags and structured data for search engines
- **👉 Cross-Platform**: Available on all major platforms
- **👉 Error Handling**: Comprehensive error boundaries and user feedback

---

## 💰 Pricing Plans

### 🎯 **Core Plan** - $19/month ($12/month annually)
*Best for solo creators*
- 100MB Cloud storage
- 100+ prompt templates
- 5 projects
- 24/7 support

### ⚡ **Overdrive Plan** - $79/month ($59/month annually)
*Most popular plan*
- All Core features
- 1TB additional storage
- Unlimited projects
- Advanced analytics

### 👥 **Team Plan** - $39/month ($29/month annually)
*Exclusively for teams*
- All Overdrive features
- 10TB additional storage
- 50% off per member
- Real-time collaboration

---

## 🤸 Quick Start

### 🌐 **Try It Live First!**

**Before setting up locally, check out the live demo:**
👉 **[https://xorasass.netlify.app/](https://xorasass.netlify.app/)** 👈

*See the platform in action with AI-powered video editing, team collaboration, and all interactive features!*

### Prerequisites

Make sure you have the following installed on your machine:

- **Git** - Version control system
- **Node.js** (v16 or higher) - JavaScript runtime
- **npm** (v8 or higher) - Package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/xora-saas.git
   cd xora-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 🕸️ Project Structure

```
xora-saas/
├── src/                          # Source code
│   ├── components/               # Reusable UI components
│   │   ├── Button.jsx           # Custom button component
│   │   ├── FaqItem.jsx          # FAQ accordion item
│   │   ├── Marker.jsx           # Section marker component
│   │   └── TestimonialItem.jsx  # Testimonial card component
│   ├── sections/                # Page sections
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── Features.jsx         # Features showcase
│   │   ├── Pricing.jsx          # Pricing plans section
│   │   ├── FAQ.jsx              # Frequently asked questions
│   │   ├── Testimonials.jsx     # Customer testimonials
│   │   ├── Download.jsx         # Download section
│   │   └── Footer.jsx           # Footer with links
│   ├── constants/               # Data and configuration
│   │   └── index.jsx            # All static data and content
│   ├── assets/                  # Static assets
│   │   └── react.svg            # React logo
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Application styles
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── public/                      # Public static assets
│   ├── images/                  # Image assets
│   │   ├── logos/              # Company logos
│   │   ├── socials/            # Social media icons
│   │   └── testimonials/       # Customer photos
│   └── favicon.ico             # Site favicon
├── dist/                       # Production build output
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # TailwindCSS configuration
├── vite.config.js              # Vite configuration
└── postcss.config.js           # PostCSS configuration
```

---

## 🚀 Deployment

### Netlify (Current)

The application is currently deployed on Netlify with automatic builds:

1. **Connect your repository** to Netlify
2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy** with automatic builds on every push

### Other Platforms

The application can be deployed to any platform that supports static sites:
- **Vercel**
- **GitHub Pages**
- **Firebase Hosting**
- **AWS S3 + CloudFront**

---

## 📱 Screenshots

<div align="center">

### Hero Section
![Hero Section](public/images/hero.png)

### Features Section
![Features Section](public/images/feature-1.png)

### Pricing Plans
![Pricing Plans](public/images/plan-1.png)

### Testimonials
![Testimonials](public/images/testimonials/jessica-saunders.png)

</div>

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all checks pass before submitting

---

<div align="center">

**Made with ❤️ by the XORA Team** 

*Fueled by Innovation & a Lot of Coffee*

**🌐 Check our [Live Demo](https://xorasass.netlify.app/)**

[⭐ Star this repo](https://github.com/yourusername/xora-saas) • [🐛 Report Bug](https://github.com/yourusername/xora-saas/issues) • [💡 Request Feature](https://github.com/yourusername/xora-saas/issues)

</div>