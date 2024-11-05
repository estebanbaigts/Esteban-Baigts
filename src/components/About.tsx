import { motion } from 'framer-motion';
import { Award, BookOpen, Coffee, Heart } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+', icon: BookOpen },
  { label: 'Projects Completed', value: '36', icon: Award },
  { label: 'Cups of Coffee', value: '0 from now', icon: Coffee },
  { label: 'Happy Clients', value: '10+', icon: Heart },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm Esteban Baigts, a passionate software developer with experience
                in data and software engineering. I'm currently pursuing a Master of Science in
                Business & Technology at Epitech Digital School and actively seeking a
                work-study program starting in January 2025.
              </p>
              <p>
                I've worked on a variety of projects, from creating real-time data analysis tools
                for eye-tracking prototypes at Omind Neurotechnologies to enhancing a dictionary
                system at Masae Analytics. My technical expertise includes C, C++, JavaScript,
                Node.js, React.js, Docker, and Python, among others, though I'm a beginner in some and not an expert.
              </p>
              <p>
                I'm dedicated to developing innovative solutions that bridge the gap between
                technology and human needs. When I'm not coding, I enjoy exploring new tech trends,
                working on personal projects, doing some sports, and playing video games.
              </p>
            </div>
            <motion.a
              href="./cv.pdf"
              download="Esteban_Baigts_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}