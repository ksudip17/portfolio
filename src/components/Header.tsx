import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_ITEMS } from "../lib/constants";
import Button from "./ui/Button";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-secondary-900 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-display font-bold text-primary-700 dark:text-primary-400"
          >
            Sudip<span className="text-accent-500">Khatiwada</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun
                  className="text-secondary-700 dark:text-secondary-300"
                  size={20}
                />
              ) : (
                <Moon className="text-secondary-700" size={20} />
              )}
            </button>
            <Button href="#contact" variant="primary">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun
                  className="text-secondary-700 dark:text-secondary-300"
                  size={20}
                />
              ) : (
                <Moon className="text-secondary-700" size={20} />
              )}
            </button>
            <button
              className="text-secondary-700 dark:text-secondary-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-100 dark:border-secondary-800 py-4 px-4 animate-slide-down">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-secondary-700 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Button
                href="#contact"
                variant="primary"
                className="w-full text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
