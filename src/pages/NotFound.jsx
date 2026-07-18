import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = ({ 
  errorCode = "404", 
  title = "Lost in cyberspace?", 
  message = "The page you're looking for has drifted into the digital void. Let's get you back to familiar territory." 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Calculate normalized mouse position from -1 to 1
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center z-10 relative overflow-hidden min-h-[80vh]"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Background Elements */}
      <div 
        className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)` }}
      />
      <div 
        className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)` }}
      />

      {/* Main Content with Parallax */}
      <div 
        className="relative z-10 transition-transform duration-200 ease-out flex flex-col items-center"
        style={{ transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` }}
      >
        {/* Interactive 3D Glitch Text */}
        <div className="relative mb-8">
          <h1 className="text-[8rem] md:text-[15rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-neutral-700 to-neutral-900 opacity-50 relative z-0">
            {errorCode}
          </h1>
          
          <span 
            className="absolute top-0 left-0 w-full text-[8rem] md:text-[15rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 drop-shadow-2xl mix-blend-screen transition-transform duration-200 ease-out pointer-events-none z-10" 
            style={{ transform: `translate(${mousePosition.x * 15 + 8}px, ${mousePosition.y * 15 - 8}px)` }}
          >
            {errorCode}
          </span>
          
          <span 
            className="absolute top-0 left-0 w-full text-[8rem] md:text-[15rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-400 opacity-60 mix-blend-screen transition-transform duration-200 ease-out pointer-events-none z-20" 
            style={{ transform: `translate(${mousePosition.x * -15 - 8}px, ${mousePosition.y * -15 + 8}px)` }}
          >
            {errorCode}
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-neutral-400 max-w-md mx-auto mb-10 text-lg">
          {message}
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-1 relative overflow-hidden group"
        >
          {/* Button Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
          <Home className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Return Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
