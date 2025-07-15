import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiExpress, SiMongodb, SiMysql,
  SiGit, SiDocker, SiCanva 
} from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

const skills = {
  development: [
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
    { name: "React", icon: <SiReact className="w-6 h-6" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: "Express", icon: <SiExpress className="w-6 h-6" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
    { name: "MySQL", icon: <SiMysql className="w-6 h-6" /> },
    { name: "React Native", icon: <FaMobileAlt className="w-6 h-6" /> }
  ],
  tools: [
    { name: "Git", icon: <SiGit className="w-6 h-6" /> },
    { name: "Docker", icon: <SiDocker className="w-6 h-6" /> },
    { name: "Canva", icon: <SiCanva className="w-6 h-6" /> },
    { name: "Assignment Help", icon: <FaBook className="w-6 h-6" /> }
  ]
};

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-b from-primary-50 to-white dark:from-secondary-950 dark:to-secondary-900 relative overflow-hidden pt-20 md:pt-24"
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
            MERN Stack Developer & Ads Manager
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I create beautiful, functional websites and applications with a
            focus on user experience. Passionate about clean code and elegant
            design solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="px-4 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <div className="space-y-8">
              {/* Development Skills */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                  Development Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {skills.development.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-white dark:bg-secondary-800 rounded-xl shadow-sm"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring"
                      }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-700 flex items-center justify-center mb-2">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-secondary-800 dark:text-secondary-200">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools & Others */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                  Tools & Others
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {skills.tools.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="p-4 bg-white dark:bg-secondary-800 rounded-xl shadow-sm"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring"
                      }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-700 flex items-center justify-center mb-2">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-secondary-800 dark:text-secondary-200">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
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
