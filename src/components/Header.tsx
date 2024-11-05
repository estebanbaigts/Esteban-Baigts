import { motion } from 'framer-motion';
import { Code2, Laptop, Moon, Palette, Sun, User } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Esteban Baigts
            </span>
          </motion.div>

          <div className="flex items-center space-x-8">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: 'About', icon: User },
                { name: 'Projects', icon: Laptop },
                { name: 'Skills', icon: Code2 },
                { name: 'Design', icon: Palette },
              ].map((item) => (
                <motion.a
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  href={`#${item.name.toLowerCase()}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300 mb-1.5" />
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-gray-300" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            {[
              { name: 'About', icon: User },
              { name: 'Projects', icon: Laptop },
              { name: 'Skills', icon: Code2 },
              { name: 'Design', icon: Palette },
            ].map((item) => (
              <motion.a
                key={item.name}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                href={`#${item.name.toLowerCase()}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}