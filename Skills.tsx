import { motion } from 'framer-motion';
import { Code, Database, Layout, Settings } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    color: 'indigo',
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'green',
  },
  {
    category: 'DevOps',
    icon: Settings,
    items: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
    color: 'blue',
  },
  {
    category: 'Languages',
    icon: Code,
    items: ['JavaScript', 'Python', 'Go', 'Java', 'C++'],
    color: 'purple',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
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
              <div className={`absolute inset-0 bg-${skill.color}-100 rounded-xl transform -rotate-6 transition-transform group-hover:rotate-0`} />
              <div className="relative bg-white p-6 rounded-xl shadow-md">
                <div className={`w-12 h-12 rounded-lg bg-${skill.color}-100 flex items-center justify-center mb-4`}>
                  <skill.icon className={`w-6 h-6 text-${skill.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <motion.li
                      key={item}
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-${skill.color}-400`} />
                      <span className="text-gray-600">{item}</span>
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