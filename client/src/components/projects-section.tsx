import { ExternalLink, Github, Zap, Brain, BarChart3, MessageSquare, Bot, Lock } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration, user authentication, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      techColors: ["bg-blue-600", "bg-green-600", "bg-purple-600", "bg-indigo-600"],
      icon: <Zap className="w-5 h-5" />,
      github: "#",
      demo: "#",
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive visualization tool for sorting algorithms and pathfinding with real-time animations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "React", "Canvas API", "D3.js"],
      techColors: ["bg-yellow-600", "bg-blue-600", "bg-red-600", "bg-orange-600"],
      icon: <Brain className="w-5 h-5" />,
      github: "#",
      demo: "#",
    },
    {
      title: "Data Analytics Dashboard",
      description: "Python-based dashboard for data analysis with machine learning insights and visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pandas", "Flask", "Plotly"],
      techColors: ["bg-green-600", "bg-orange-600", "bg-purple-600", "bg-pink-600"],
      icon: <BarChart3 className="w-5 h-5" />,
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat App",
      description: "WebSocket-based chat application with rooms, file sharing, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Socket.io", "React", "Express", "JWT"],
      techColors: ["bg-green-600", "bg-blue-600", "bg-gray-600", "bg-red-600"],
      icon: <MessageSquare className="w-5 h-5" />,
      github: "#",
      demo: "#",
    },
    {
      title: "ML Model Deployment",
      description: "Machine learning model deployment with REST API and interactive web interface for predictions.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "TensorFlow", "FastAPI", "Docker"],
      techColors: ["bg-green-600", "bg-orange-600", "bg-purple-600", "bg-blue-600"],
      icon: <Bot className="w-5 h-5" />,
      github: "#",
      demo: "#",
    },
    {
      title: "Blockchain DApp",
      description: "Decentralized application on Ethereum with smart contracts and Web3 integration.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Solidity", "Web3.js", "Ethereum", "MetaMask"],
      techColors: ["bg-purple-600", "bg-blue-600", "bg-gray-600", "bg-orange-600"],
      icon: <Lock className="w-5 h-5" />,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="font-orbitron text-4xl font-bold text-center mb-16">
          <span className="text-blue-400">🚀</span> FEATURED PROJECTS
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/70 p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${project.techColors[techIndex]} text-xs px-2 py-1 rounded font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
