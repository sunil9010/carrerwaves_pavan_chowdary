
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, Users, Mail, Info, FolderHeart as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Services', path: '/services', icon: Briefcase },
    { name: 'Job Postings', path: '/jobs', icon: Users },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
              <img  src="/career-waves-logo.png" alt="Career Waves Logo" className="h-10 w-auto" src="https://images.unsplash.com/photo-1689245696621-3d2503e0903d" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tight gradient-text">Career Waves</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-sky-500 hover:text-slate-900 ${
                    isActive ? 'bg-sky-600 text-white' : 'text-slate-200'
                  }`
                }
              >
                <motion.span whileHover={{ y: -2 }} className="flex items-center">
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </motion.span>
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon" className="text-slate-200 hover:text-sky-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-slate-800 absolute w-full shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.div variants={itemVariants} key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-sky-500 hover:text-slate-900 ${
                        isActive ? 'bg-sky-600 text-white' : 'text-slate-200'
                      }`
                    }
                  >
                    <span className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
  