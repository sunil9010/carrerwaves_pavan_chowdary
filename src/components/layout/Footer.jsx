
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img  src="/career-waves-logo-footer.png" alt="Career Waves Logo" className="h-10 w-auto filter brightness-0 invert" src="https://images.unsplash.com/photo-1553617404-15336282ed77" />
              <span className="text-2xl font-bold gradient-text">Career Waves</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering careers, shaping futures. Your success is our mission. We have over 4 years of experience in placements.
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-white mb-6">Quick Links</p>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/jobs" className="hover:text-sky-400 transition-colors">Job Postings</Link></li>
              <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-semibold text-white mb-6">Contact Info</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-sky-400 flex-shrink-0" />
                <span>123 Placement Drive, Success City, India</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-sky-400 flex-shrink-0" />
                <a href="mailto:info@careerwaves.com" className="hover:text-sky-400 transition-colors">info@careerwaves.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-sky-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-sky-400 transition-colors">+91 12345 67890</a>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="text-xl font-semibold text-white mb-6">Connect With Us</p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 rounded-full hover:bg-sky-500 transition-colors">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm">Follow us on social media for the latest updates and job openings.</p>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Career Waves. All rights reserved. Designed by Pavan Chowdary.
          </p>
          <p className="text-xs mt-2 text-slate-500">
            Website developed by Hostinger Horizons.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  