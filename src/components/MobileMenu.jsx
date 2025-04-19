export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-30 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 text-white text-5xl focus:outline-none cursor-pointer hover:text-[#0ea5e9] transition-colors"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <div className="flex flex-col items-center space-y-8 mt-16">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl md:text-4xl font-bold text-white transform transition-all duration-300 hover:text-[#0ea5e9]
            ${
              menuOpen
                ? "opacity-100 translate-y-0 delay-100"
                : "opacity-0 translate-y-5"
            }
          `}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl md:text-4xl font-bold text-white transform transition-all duration-300 hover:text-[#0ea5e9]
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-5"
            }
          `}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl md:text-4xl font-bold text-white transform transition-all duration-300 hover:text-[#0ea5e9]
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-5"
            }
          `}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-3xl md:text-4xl font-bold text-white transform transition-all duration-300 hover:text-[#0ea5e9]
            ${
              menuOpen ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-5"
            }
          `}
        >
          Contact
        </a>
      </div>
    </div>
  );
};