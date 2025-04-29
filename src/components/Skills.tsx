import React, { useEffect, useRef } from "react";
import Section from "./ui/Section";
import { SKILLS } from "../lib/constants";

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const frontendSkills = SKILLS.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = SKILLS.filter((skill) => skill.category === "backend");
  const otherSkills = SKILLS.filter(
    (skill) => skill.category === "design" || skill.category === "other"
  );

  return (
    <Section id="skills" className="bg-secondary-50 dark:bg-secondary-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-4 text-secondary-900 dark:text-white">
          My Skills
        </h2>
        <div className="w-20 h-1 bg-accent-500 mx-auto mb-12 rounded-full"></div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {/* Frontend Skills */}
          <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-6">
              Frontend Development
            </h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary-800 dark:text-secondary-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {skill.level * 20}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5">
                    <div
                      className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level * 20}%`,
                        transitionDelay: "300ms",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-6">
              Backend Development
            </h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary-800 dark:text-secondary-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {skill.level * 20}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5">
                    <div
                      className="bg-accent-500 dark:bg-accent-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level * 20}%`,
                        transitionDelay: "600ms",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-6">
              Tools & Others
            </h3>
            <div className="space-y-5">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary-800 dark:text-secondary-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {skill.level * 20}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5">
                    <div
                      className="bg-secondary-600 dark:bg-secondary-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level * 20}%`,
                        transitionDelay: "900ms",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
