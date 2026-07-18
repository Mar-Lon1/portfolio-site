import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 z-10">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Projects</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl">
          A collection of my recent work focusing on React, modern styling, and interactive user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            to={`/projects/${project.id}`}
            className="group flex flex-col bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-indigo-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Project Image */}
            <div className="w-full h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-neutral-800/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 right-3 z-20 bg-neutral-900/80 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-neutral-400 text-sm mb-6 line-clamp-2 flex-1">
                {project.description}
              </p>
              
              {/* Tech Stack Preview */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-medium px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs font-medium px-2 py-1 rounded-md bg-neutral-800 text-neutral-400 border border-neutral-700/50">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* View Details Link */}
              <div className="flex items-center text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors mt-auto">
                View Project Details
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
