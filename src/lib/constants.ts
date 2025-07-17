import { Project, Skill, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Movie app',
    description: 'MovieMagnet: A modern React Native mobile app for discovering movies with real-time search, trending movies, and detailed movie information using TMDB API and Appwrite backend.',
    image: 'https://images.unsplash.com/photo-1634157703702-3c124b455499?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vdmllJTIwYXBwfGVufDB8fDB8fHww',
    tags: ['React Native', 'TypeScript', 'Tailwind CSS', 'Appwrite'],
    link: '',
    github: 'https://github.com/ksudip17/MovieApp.git',
  },
  {
    id: 2,
    title: 'Habit Tracker',
    description: 'Habit Tracker is a modern web application that helps users build and maintain positive habits. It features an intuitive interface for adding, tracking, and analyzing daily routines, making it easy to visualize progress and stay motivated. Built with React and TypeScript, it offers a responsive design and a seamless user experience.',
    image: 'https://images.unsplash.com/photo-1644946959578-8ec8db9cc98b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://habit-tracker-xi-ashy.vercel.app/',
    github: 'https://github.com/ksudip17/Habit-Tracker.git',
  },
  {
    id: 3,
    title: 'Due Payment System',
    description: 'A modern web application for managing customer payments and outstanding dues. The system allows users to add and edit customer profiles, record transactions, and track payment histories in a clean, intuitive dashboard. Built with Next.js, React, and Tailwind CSS, it features responsive design, modular components, and a focus on usability for small businesses or personal finance management.',
    image: 'https://images.unsplash.com/photo-1615775036480-f0cff4e2ff6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://due-payment-tracker.vercel.app/',
    github: 'https://github.com/ksudip17/due-payment-tracker.git',
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'This is a simple app provides current weather information for a searched location using a simple and intuitive interface.',
    image: 'https://images.unsplash.com/photo-1534068731687-d70176c2e7d5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'TypeScript', 'Material UI', 'Vite'],
    link: 'https://app-weather-ruddy.vercel.app/',
    github: 'https://github.com/ksudip17/weather-app.git',
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
  { name: 'Assignment Help', level: 4, category: 'Tools' },
  { name: 'Canva', level: 3, category: 'Tools' },
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