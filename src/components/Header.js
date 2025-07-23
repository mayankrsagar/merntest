"use client";
import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const linkVariants = {
  hover: { scale: 1.1, rotate: 5, transition: { duration: 0.2 } },
  tap: { scale: 0.95, rotate: -5, transition: { duration: 0.2 } }
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: 'Products', href: 'https://github.com/mayankrsagar' },
    { label: 'Road map', href: 'https://github.com/mayankrsagar' },
    { label: 'Our mission', href: 'https://github.com/mayankrsagar' },
    { label: 'For devs', href: 'https://github.com/mayankrsagar' },
    { label: 'Contact us', href: 'https://github.com/mayankrsagar' },
  ];

  return (
    <motion.header
      className="w-full bg-[#F7FF5C] fixed top-0 z-50 shadow-md md:shadow-none"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">APURA</div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="hover:underline"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-900" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>
      {mobileOpen && (
        <motion.nav
          className="md:hidden bg-[#F7FF5C] px-4 pb-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium hover:underline"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
}
