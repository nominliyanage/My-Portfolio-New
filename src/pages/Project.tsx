import { useState, useEffect } from 'react';
import { Github, ExternalLink, Play, Code, Palette, Server, Database, Globe, Smartphone, Zap, Eye } from 'lucide-react';

// Import local images

import smsImg from './../image/sms.png';
import personalWebsiteImg from './../image/portfolio.png';
import hotelImg from './../image/hotel.png';
import studioWebImg from './../image/studioweb.png';
import ecommerceImg from './../image/e-commerce.png';
import chatAppImg from './../image/chatApp.png';
import calculatorImg from './../image/calculator.png';
import cookNestImg from './../image/cooknest.png';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubLink?: string;
  youtubeLink?: string;
  liveLink?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  featured?: boolean;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // Backend
    
    {
      id: 2,
      title: "Studio Management System",
      description: "Studio Management System backend using Java and MySQL",
      longDescription: "A backend service for scheduling and planning, digital asset management, post-production management, and financial management.",
      tags: ["Java", "JavaFx", "MySQL"],
      image: smsImg,
      githubLink: "https://github.com/nominliyanage/First-Sem-Final-Project-Studio-Management-System.git",
      category: "backend"
    },

    // Frontend
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "Portfolio website using ReactJS, JavaScript and Tailwind CSS",
      longDescription: "A personal website showcasing projects, skills, and contact information. Built with ReactJS for dynamic rendering and smooth animations.",
      tags: ["ReactJS", "Tailwind CSS", "JavaScript"],
      image: personalWebsiteImg,
      githubLink: "https://github.com/nominliyanage/My-Portfolio-New.git",
      //liveLink: "https://nominliyanage.github.io/My-Portfolio-New/",
      category: "frontend"
    },
    {
      id: 4,
      title: "Hotel Website",
      description: "Hotel website built using Bootstrap for a clean and responsive design.",
      longDescription: "A user-friendly Hotel Management system interface built with HTML, CSS, JavaScript, and Bootstrap.",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      image: hotelImg,
      githubLink: "https://github.com/nominliyanage/Hotel-Management-System.git",
      category: "frontend"
    },

    {
      id: 12,
      title: "Calculator",
      description: "Simple calculator built with HTML, CSS, and JavaScript",
      longDescription: "A fully functional web-based calculator using HTML, CSS, and JavaScript. Supports basic arithmetic operations and a clean, responsive UI.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: calculatorImg, 
      githubLink: "https://github.com/nominliyanage/Web-Calculator.git",
      category: "frontend"
    },


    // Full Stack
    {
      id: 5,
      title: "Studio Website",
      description: "Online booking and planning platform",
      longDescription: "A full-stack web application for booking and planning shoot packages, and real-time availability. Backend built with Spring Boot and frontend with HTML, CSS, JS.",
      tags: ["Spring Boot", "MySQL", "Hibernate", "JS", "HTML", "CSS"],
      image: studioWebImg,
      githubLink: "https://github.com/nominliyanage/Glamor_Shot_Studio.git",
      liveLink: "https://youtu.be/xZ8UnTW0Ook",
      category: "fullstack",
      featured: true
    },
    {
      id: 6,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution for a camera shop.",
      longDescription: "A comprehensive e-commerce platform built with Java EE (JSP, Servlets) and MySQL. Features include product management, shopping cart, user authentication, and secure payment processing. Frontend uses HTML, CSS, Bootstrap, and JavaScript.",
      tags: ["Java EE", "JSP", "Servlets", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
      image: ecommerceImg,
      githubLink: "https://github.com/nominliyanage/Ecommerce-pos.git",
      category: "fullstack"
    },
    {
      id: 7,
      title: "Chat Application",
      description: "Real-time chat with JavaFX and Sockets",
      longDescription: "A desktop chat application built using Java and JavaFX. Supports real-time messaging using Socket programming.",
      tags: ["Java", "JavaFX", "Socket"],
      image: chatAppImg,
      githubLink: "https://github.com/nominliyanage/Chat-Application.git",
      category: "fullstack"
    },
    

    // Mobile
    {
      id: 10,
      title: "Cook Nest Mobile",
      description: "React Native mobile app for recipe finder & meal planner",
      longDescription: "A mobile app built with Expo that helps users plan, manage, and organize their meals efficiently",
      tags: ["React Native", "Expo", "Firebase"],
      image: cookNestImg,
      githubLink: "https://github.com/nominliyanage/Cook-Nest.git",
      liveLink: "https://youtube.com/shorts/BKERLDohECU?si=FXZ33ZhlDXopbLUy",
      category: "mobile"
    }
    // 
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <Globe size={20} /> },
    { id: 'frontend', label: 'Frontend', icon: <Palette size={20} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={20} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code size={20} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={20} /> }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.longDescription}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors">
                <Github size={20} />
                View Code
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all">
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
            {project.youtubeLink && (
              <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors">
                <Play size={20} />
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to code, every project showcases my dedication to building efficient, scalable, 
            and user-focused solutions through innovation, precision, and a mindset of continuous growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800/60 border border-gray-600 text-gray-300 hover:bg-gray-700/60 hover:border-purple-400'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className={`transition-colors ${selectedCategory === category.id ? 'text-white' : 'text-purple-400 group-hover:text-pink-400'}`}>
                {category.icon}
              </span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category indicator */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full p-2">
                  {project.category === 'frontend' && <Palette size={16} className="text-pink-400" />}
                  {project.category === 'backend' && <Server size={16} className="text-green-400" />}
                  {project.category === 'fullstack' && <Code size={16} className="text-purple-400" />}
                  {project.category === 'mobile' && <Smartphone size={16} className="text-blue-400" />}
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                         className="bg-gray-900/80 hover:bg-gray-800 text-white p-2 rounded-full transition-colors"
                         onClick={(e) => e.stopPropagation()}>
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                         className="bg-purple-600/80 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
                         onClick={(e) => e.stopPropagation()}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.youtubeLink && (
                      <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer"
                         className="bg-red-600/80 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                         onClick={(e) => e.stopPropagation()}>
                        <Play size={16} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-blue-600/80 hover:bg-blue-700 text-white p-2 rounded-full transition-colors ml-auto"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 hover:from-purple-600 hover:to-pink-600 hover:text-white font-medium py-2 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap size={16} />
                  View Details
                </button>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-24 transition-all duration-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Projects Built", value: "10+", icon: <Code size={24} />, gradient: "from-purple-500 to-pink-500" },
              { title: "Technologies Used", value: "15+", icon: <Zap size={24} />, gradient: "from-pink-500 to-red-500" },
              { title: "Lines of Code", value: "50K+", icon: <Database size={24} />, gradient: "from-blue-500 to-purple-500" },
              { title: "Client Satisfaction", value: "100%", icon: <Globe size={24} />, gradient: "from-green-500 to-blue-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">{stat.title}</p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-24 text-center transition-all duration-2000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Let’s work together to bring your ideas to life. 
            I’m passionate about creating impactful digital solutions that truly make a difference.
          </p>
          <button className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl flex items-center mx-auto">
            Get In Touch
            <Zap className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Smooth scrolling for modal */
        .modal-content {
          scrollbar-width: thin;
          scrollbar-color: #6b46c1 #374151;
        }
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: #374151;
          border-radius: 3px;
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #6b46c1, #ec4899);
          border-radius: 3px;
        }
        
        /* Enhanced animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;