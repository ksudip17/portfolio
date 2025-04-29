import React, { useEffect, useRef } from 'react';
import Section from './ui/Section';
import { PROJECTS } from '../lib/constants';
import Card from './ui/Card';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.project-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('animate-slide-up');
                (el as HTMLElement).classList.remove('opacity-0');
              }, index * 150);
            });
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
    <Section id="projects" className="bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-4 text-secondary-900">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-accent-500 mx-auto mb-12 rounded-full"></div>
        
        <div 
          ref={sectionRef} 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {PROJECTS.map((project) => (
            <Card 
              key={project.id} 
              className="project-card opacity-0 transform translate-y-8"
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                {project.title}
              </h3>
              <p className="text-secondary-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Live
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 text-sm text-secondary-700 hover:text-secondary-900 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;