import { Project, Skill, SocialLink, NavItem } from './types';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    link: 'https://example.com/ecommerce',
    github: 'https://github.com/username/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app that helps teams organize tasks, set deadlines, and track progress on projects efficiently.',
    image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    link: 'https://example.com/taskapp',
    github: 'https://github.com/username/taskapp',
  },
  {
    id: 3,
    title: 'Travel Blog',
    description: 'A blog website showcasing travel stories, photography, and destination guides with a beautiful, responsive design.',
    image: 'https://images.pexels.com/photos/4132436/pexels-photo-4132436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Contentful CMS', 'Tailwind CSS'],
    link: 'https://example.com/travelblog',
    github: 'https://github.com/username/travelblog',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio website with smooth animations and a clean design to showcase projects and skills.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://example.com/portfolio',
    github: 'https://github.com/username/portfolio',
  },
];

export const SKILLS: Skill[] = [
  { name: 'HTML & CSS', level: 5, category: 'frontend' },
  { name: 'JavaScript', level: 5, category: 'frontend' },
  { name: 'TypeScript', level: 4, category: 'frontend' },
  { name: 'React', level: 5, category: 'frontend' },
  { name: 'Next.js', level: 4, category: 'frontend' },
  { name: 'Tailwind CSS', level: 5, category: 'frontend' },
  { name: 'Node.js', level: 4, category: 'backend' },
  { name: 'Express', level: 4, category: 'backend' },
  { name: 'MongoDB', level: 3, category: 'backend' },
  { name: 'MySQL', level: 3, category: 'backend' },
  { name: 'Python', level: 3, category: 'backend' },
  { name: 'Assignment Help', level: 4, category: 'design' },
  { name: 'Canva', level: 3, category: 'design' },
  { name: 'Git', level: 4, category: 'other' },
  { name: 'Docker', level: 3, category: 'other' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/ksudip17',
    icon: 'Github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sudip-khatiwada17/',
    icon: 'Linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/SUDIIP__17',
    icon: 'Twitter',
  },
];