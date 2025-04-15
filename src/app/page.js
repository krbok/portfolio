
"use client";
import React, { useState } from 'react';
import {
  Github, Linkedin, Mail, MenuIcon, X, ChevronRight,
  ExternalLink, Code, Database, Brain, Terminal, XCircle
} from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Stock Prediction & Community Platform",
      description: "MERN application with practice zone and community chat. Features LSTM-based stock prediction using Yahoo Finance data.",
      tags: ["MERN Stack", "LSTM", "ML", "Socket.io"],
      icon: (
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-cyan-400/10 rounded-lg"></div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-8 h-8 text-cyan-400"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 21H4.6c-.6 0-1.1-.4-1.1-1V3"/>
            <path d="M3.5 13.5l4-4 4 4 9-9"/>
          </svg>
        </div>
      ),
      details: {
        overview: "A comprehensive platform that combines stock market prediction with a community-driven learning environment.",
        features: [
          "Real-time stock predictions using LSTM neural networks",
          "Live community chat for market discussions",
          "Interactive practice zone for beginners",
          "Personal portfolio tracking"
        ],
        tech: [
          "MongoDB for database management",
          "Express.js & Node.js backend",
          "React.js frontend",
          "Socket.io for real-time communications"
        ],
        screenshots: [
          "/images/stock1.jpg",
          "/images/stock2.jpg",
          "/images/stock3.jpg",
          "/images/stock4.jpg",
          "/images/stock5.jpg"
        ]
      }
    },
    // Add other projects similarly
    {
      id: 2,
      title: "IPL Match Predictor",
      description: "Advanced prediction system utilizing match statistics and player performances to calculate winning probabilities.",
      link: "https://imaster-74hmwxqtwrfmeq9n3sk9puiplpredicter-kritik.streamlit.app/",
      tags: ["Python", "ML", "Streamlit"],
      icon: <Code className="w-12 h-12 text-purple-400" />,
      details: {
        overview: "A sophisticated cricket match prediction system that analyzes historical data and real-time match conditions.",
        features: [
          "Live match probability updates",
          "Historical match data integration",
          "Interactive visualization dashboard"
        ],
        tech: [
          
          "Streamlit for web interface",
          "Machine Learning algorithms",
          "Logistc Regressiojn",
          
        ],
        screenshots: [
          "/images/ipl1.jpg",
          "/images/ipl2.jpg",
          "/images/ipl3.jpg"
        ]
      }
    },
    {
      id: 3,
    title: "Hospital Management System",
    description: "Comprehensive system for streamlining administrative, clinical, and financial operations in healthcare facilities.",
    tags: ["PL/SQL", "Database"],
    icon: (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-emerald-400/10 rounded-lg"></div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8 text-emerald-400"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M22 12h-6m-8 0H2"/>
          <path d="M12 2v6m0 8v6"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </div>
    )
    }
  

  ];

  const skills = {
    "Programming": ["Python", "C/C++", "R", "MATLAB"],
    "Development": ["HTML", "SQL", "Bootstrap", "JavaScript", "MongoDB", "Express", "Node"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"],
    "Technologies": ["GitHub", "Kaggle", "Arduino", "Auto-CAD", "Linux/Unix"],
    "CS Core": ["Operating System", "DBMS", "Networking", "OOPs", "Algorithms"]
  };

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/80 backdrop-blur-sm">
        <div className="min-h-screen px-4 flex items-center justify-center">
          <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl shadow-xl">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-cyan-400"
            >
              <XCircle size={24} />
            </button>
            
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                {project.icon}
                <div>
                  <h2 className="text-3xl font-bold text-cyan-400">{project.title}</h2>
                  <p className="text-gray-400 mt-2">{project.details.overview}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {project.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <ChevronRight className="mt-1 text-cyan-400" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technologies Used</h3>
                    <ul className="space-y-2">
                      {project.details.tech.map((tech, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                          <ChevronRight className="mt-1 text-cyan-400" size={16} />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-cyan-300 transition-all"
                    >
                      View Live Demo
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <div className="space-y-4">
                  {project.details.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => (
    <div
      onClick={() => project.details ? setSelectedProject(project) : null}
      className={`group bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-cyan-400/30 transition-all ${project.details ? 'cursor-pointer' : ''}`}
    >
      <div className="mb-4">{project.icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-900 text-cyan-400 rounded-lg text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
  
      {project.details && (
        <button className="inline-flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
          View Details
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
  

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="text-xl font-bold text-cyan-400">Portfolio</a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-400 hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
            <div className="hidden md:flex items-center gap-6">
              {['Projects', 'Skills', 'Education'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Terminal size={24} />
                <span className="font-mono">Hello World!</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">KRITIK</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-400">
                Computer Engineering Student & Tech Enthusiast
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:kkritik_be22@thapar.edu"
                  className="group flex items-center gap-2 bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-cyan-300 transition-all"
                >
                  <Mail size={20} />
                  Contact Me
                  <ChevronRight className="transition-transform group-hover:translate-x-1" />
                </a>
                <div className="flex gap-4">
                  {[
                    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/kritik-makkar-1b26b5286" },
                    { icon: <Github size={24} />, href: "https://github.com/krbok" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-cyan-400 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute -inset-4">
                <div className="w-full h-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                  <div className="absolute top-0 -right-4 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob"></div>
                  <div className="absolute -bottom-8 left-20 w-24 h-24 bg-cyan-400 rounded-full mix-blend-multiply blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative w-72 h-72 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm">
                    <Image
                      src="/images/profile.jpg"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full transition duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/30 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-900 text-gray-300 rounded-lg text-sm hover:bg-gray-700 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-cyan-400">Education</span> & Achievements
          </h2>
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400">
                Thapar Institute of Engineering and Technology
                </h3>
                <p className="text-lg text-gray-400 mt-2">
                  B.E in Computer Engineering and Technology
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-semibold text-emerald-400">CGPA: 9.07</span>
                <span className="text-gray-500">Sep 2022 - May 2026</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-cyan-400 font-medium">Achievements:</p>
              <ul className="mt-2 space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-cyan-400" size={16} />
                  95 percentile in JEE Mains
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-cyan-400" size={16} />
                  96% in Matriculation (ICSE)
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="text-cyan-400" size={16} />
                  92% in High School (CBSE)
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Other Achievements</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <ChevronRight className="text-cyan-400" size={16} />
                First place in Blooming Buds 2018 - State level aptitude test for ICSE students
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-cyan-400" size={16} />
                AIESEC Member - Contributed to International Relations calls and marketing team
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="text-cyan-400" size={16} />
                Volunteered at Janmashtami Event (2024) - Managed guest hospitality and event coordination
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Let's Connect</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" />
                  kkritik_be22@thapar.edu
                </p>
                <p className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-cyan-400" />
                  Amritsar, Punjab, India
                </p>
                <p className="flex items-center gap-2">
                  <ChevronRight size={16} className="text-cyan-400" />
                  +91 7009981594
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              {[
                { icon: <Linkedin size={24} />, href: "https://linkedin.com" },
                { icon: <Github size={24} />, href: "https://github.com" },
                { icon: <Mail size={24} />, href: "mailto:kkritik_be22@thapar.edu" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
