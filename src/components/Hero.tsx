import React, { useEffect, useState } from "react";
import Button from "./ui/Button";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-primary-50 to-white dark:from-secondary-950 dark:to-secondary-900 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent-600 dark:text-accent-400 font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-6">
            Sudip Khatiwada
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary-700 dark:text-secondary-300 mb-8">
            Web Developer & Ads Manager
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I create beautiful, functional websites and applications with a
            focus on user experience. Passionate about clean code and elegant
            design solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="#projects" variant="primary" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
};

export default Hero;
