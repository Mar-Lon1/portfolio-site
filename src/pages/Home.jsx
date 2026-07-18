import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import marlonImage from "../assets/marlon-image.jpg";

const Home = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 z-10">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start text-left space-y-6 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Marlon</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-lg">
            A passionate React developer building modern, interactive, and beautiful web applications. Welcome to my portfolio!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link 
              to="/projects" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] w-full sm:w-auto justify-center"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-white font-medium transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        
        {/* Image / Graphic */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            {/* Background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Profile Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-neutral-800 p-2 bg-neutral-900 shadow-2xl">
              <img 
                src={marlonImage} 
                alt="Marlon" 
                className="w-full h-full object-cover rounded-full filter hover:grayscale-[20%] transition-all duration-500"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-neutral-900 border border-neutral-800 rounded-xl p-3 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <span className="text-xl font-bold text-indigo-400">React</span>
            </div>
            <div className="absolute top-8 -right-4 bg-neutral-900 border border-neutral-800 rounded-xl p-3 shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
              <span className="text-xl font-bold text-purple-400">Vite</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
