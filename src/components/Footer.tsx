import React from "react";
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { NAV_ITEMS } from "../lib/constants";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              Sudip<span className="text-accent-500">Khatiwada</span>
            </h3>
            <p className="text-secondary-300 mb-6 max-w-xs">
              Creating beautiful, functional websites and applications with a
              focus on user experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <ul className="space-y-2 text-secondary-300">
              <li>Dhangadhi Kailali, Nepal</li>
              <li>ksudip121@gmail.com</li>
              <li>(977) 9767692482</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ksudip17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sudip-khatiwada17/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/SUDIIP__17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://www.facebook.com/sudip.khatiwada.353"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/sudiiip.17/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8">
          <p className="text-center text-secondary-400">
            &copy; {year} Sudip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
