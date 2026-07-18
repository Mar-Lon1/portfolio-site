import { NavLink } from "react-router-dom";
import { Briefcase, Code2, Home, Mail } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/projects", label: "Projects", icon: <Code2 className="w-4 h-4" /> },
    { to: "/contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4 pointer-events-none">
      <nav className="bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 rounded-full px-4 py-2 shadow-2xl pointer-events-auto flex items-center gap-1 sm:gap-2">
        <div className="flex items-center justify-center mr-4 pr-4 border-r border-neutral-800 hidden sm:flex">
          <Briefcase className="w-5 h-5 text-indigo-400" />
          <span className="ml-2 font-semibold text-neutral-200 tracking-wide text-sm">Portfolio</span>
        </div>
        
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-400 shadow-[inset_0_0_0_1px_rgba(99,102,241,0.2)]"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/50"
              }`
            }
          >
            {link.icon}
            <span className="hidden sm:inline">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
