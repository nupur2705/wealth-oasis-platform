
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { CustomButton } from "../ui/CustomButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Investments", path: "/investments" },
    { name: "Insurance", path: "/insurance" },
    { name: "Loans", path: "/loans" },
    { name: "Emergency Fund", path: "/emergency" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center text-gradient"
        >
          <span className="relative">
            <span className="absolute -inset-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 blur"></span>
            <span className="relative">AquaWealth</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <CustomButton variant="outline" size="sm">
            Sign In
          </CustomButton>
          <CustomButton variant="gradient" size="sm">
            Get Started
          </CustomButton>
        </div>

        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4 border-b" : "max-h-0 py-0 overflow-hidden"
        }`}
      >
        <nav className="container flex flex-col space-y-3 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 rounded-lg text-base ${
                location.pathname === link.path
                  ? "text-primary font-medium bg-primary/10"
                  : "text-foreground/70"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col space-y-3">
            <CustomButton variant="outline">Sign In</CustomButton>
            <CustomButton variant="gradient">Get Started</CustomButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
