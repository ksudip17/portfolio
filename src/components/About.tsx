import React, { useEffect, useRef } from "react";
import Section from "./ui/Section";
import myPhoto from "./image.jpg";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
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

  return (
    <Section id="about" className="bg-white dark:bg-secondary-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-4 text-secondary-900 dark:text-white">
          About Me
        </h2>
        <div className="w-20 h-1 bg-accent-500 mx-auto mb-12 rounded-full"></div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center opacity-0 transform translate-y-8"
        >
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={myPhoto}
                alt="Sudip Khatiwada"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-primary-300 dark:border-primary-700 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 dark:bg-accent-900/30 rounded-xl -z-10"></div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
              Web Developer & Ads Manager
            </h3>
            <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              I'm a passionate web developer with over 1 years of experience
              creating beautiful, functional websites and applications.I also
              create and manage Meta ads that maximize ROI and help your brand
              reach the right audience.
            </p>
            <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
              My journey began with a fascination for how design and technology
              intersect. Now, I combine my technical skills and creative
              problem-solving to build digital products that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-secondary-900 dark:text-white font-medium mb-2">
                  Name: Sudip Khatiwada
                </h4>
                <p className="text-secondary-700 dark:text-secondary-300"></p>
              </div>
              <div>
                <h4 className="text-secondary-900 dark:text-white font-medium mb-2">
                  Email:
                </h4>
                <p className="text-secondary-700 dark:text-secondary-300">
                  ksudip121@gmail.com
                </p>
              </div>
              <div>
                <h4 className="text-secondary-900 dark:text-white font-medium mb-2">
                  Based in:
                </h4>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Dhangadhi Kailali, Nepal
                </p>
              </div>
              <div>
                <h4 className="text-secondary-900 dark:text-white font-medium mb-2">
                  Experience:
                </h4>
                <p className="text-secondary-700 dark:text-secondary-300">
                  1+ Years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
