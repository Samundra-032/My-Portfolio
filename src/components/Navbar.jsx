import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-9 h-9 rounded-full bg-[#0ea5e9] flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="ml-2 text-lg font-semibold text-white">
              Samundra<span className="text-[#0ea5e9]">.</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a 
                href="#home" 
                className="text-sm text-gray-300 hover:text-white px-2 py-1 transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-sm text-gray-300 hover:text-white px-2 py-1 transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-sm text-gray-300 hover:text-white px-2 py-1 transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-sm text-gray-300 hover:text-white px-2 py-1 transition-colors"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="text-sm bg-[#0ea5e9] text-white px-3 py-1.5 rounded hover:bg-[#0ea5e9]/90 transition-colors ml-2"
              >
                Hire Me
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-1 rounded-md focus:outline-none"
              aria-expanded="false"
            >
              <div className="w-8 h-6 relative flex flex-col justify-between">
                <span 
                  className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                ></span>
                <span 
                  className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};