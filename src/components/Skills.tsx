import { motion } from 'framer-motion';
import { Code, Database, Layout, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Next.js',
      'Vue.js',
    ],
    color: 'indigo',
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'Strapi', 'SQL'],
    color: 'green',
  },
  {
    category: 'DevOps',
    icon: Settings,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'Jenkins'],
    color: 'blue',
  },
  {
    category: 'Languages',
    icon: Code,
    items: ['JavaScript', 'Python', 'C', 'C++', 'Typescript', 'HTML/CSS'],
    color: 'purple',
  },
];

const colorClasses = {
  indigo: {
    bg: 'bg-indigo-100 dark:bg-indigo-900/30',
    text: 'text-indigo-600 dark:text-indigo-400',
    dot: 'bg-indigo-400 dark:bg-indigo-500',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    dot: 'bg-green-400 dark:bg-green-500',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-400 dark:bg-blue-500',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    dot: 'bg-purple-400 dark:bg-purple-500',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 ${colorClasses[skill.color].bg} rounded-xl transform -rotate-6 transition-transform group-hover:rotate-0`}
              />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div
                  className={`w-12 h-12 rounded-lg ${colorClasses[skill.color].bg} flex items-center justify-center mb-4`}
                >
                  <skill.icon className={`w-6 h-6 ${colorClasses[skill.color].text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.li
                      key={item}
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-2 h-2 rounded-full ${colorClasses[skill.color].dot}`} />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}