import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Crafting beautiful web experiences with React, Tailwind, and modern
            web technologies. Let's build something amazing together. Im also
            doing a lot of data and software engineering.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              href="https://github.com/estebanbaigts"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              href="https://www.linkedin.com/in/esteban-baigts-70b423232/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
              href="mailto:esteban12baigts@gmail.com"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
}