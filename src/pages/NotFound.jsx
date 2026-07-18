import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center z-10">
      <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 drop-shadow-2xl">
        404
      </h1>
      <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
      <p className="text-neutral-400 max-w-md mx-auto mb-10 text-lg">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:-translate-y-1"
      >
        <Home className="w-4 h-4" />
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
