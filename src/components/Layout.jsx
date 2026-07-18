import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500/30">
      <Navbar />
      <main className="flex-grow flex flex-col relative w-full pt-20">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
