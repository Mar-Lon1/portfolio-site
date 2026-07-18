import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Layout, Layers } from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="flex-1 w-full max-w-4xl mx-auto px-6 py-12 z-10">
      <Link 
        to="/projects" 
        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white mb-8 group transition-colors"
      >
        <div className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </div>
        Back to all projects
      </Link>

      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20"
            >
              <Layers className="w-3.5 h-3.5" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full rounded-2xl overflow-hidden border border-neutral-800 mb-12 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-auto object-cover max-h-[500px]"
        />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Layout className="w-5 h-5 text-indigo-400" />
              Project Overview
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
          
          <div className="pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                "Responsive design for mobile and desktop",
                "Modern user interface with Tailwind CSS",
                "React functional components and hooks",
                "Interactive elements and smooth animations"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-400">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Role</h4>
              <p className="text-neutral-200 font-medium">Front-End Developer</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">Platform</h4>
              <p className="text-neutral-200 font-medium">Web</p>
            </div>

            {project.liveUrl ? (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full mt-4 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-indigo-500/20"
              >
                View Live Demo
              </a>
            ) : (
              <button className="w-full mt-4 bg-neutral-800 text-neutral-400 font-medium py-3 rounded-xl cursor-not-allowed">
                Live Demo Unavailable
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
