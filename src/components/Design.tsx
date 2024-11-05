import { motion } from 'framer-motion';
import { Palette, Smartphone, Monitor, Tablet } from 'lucide-react';

const designs = [
  {
    title: 'Mobile App Design',
    description: 'Intuitive and engaging mobile app interfaces',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: Smartphone,
  },
  {
    title: 'Web Design',
    description: 'Responsive and modern web experiences',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: Monitor,
  },
  {
    title: 'Tablet Apps',
    description: 'Optimized interfaces for tablet devices',
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    icon: Tablet,
  },
];

export default function Design() {
  return (
    <section id="design" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Palette className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Design Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Creating beautiful and functional user experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <design.icon className="w-5 h-5" />
                    <h3 className="text-xl font-bold">{design.title}</h3>
                  </div>
                  <p className="text-gray-200">{design.description}</p>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}