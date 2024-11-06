import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'LuxMeter',
    description: 'This project proposes a light meter using Python with the OpenCV library to measure ambient brightness in real time using your computer webcam. First of all, the aim is to help me through my internship at OMIND neurotechnology where I am in charge of the eye_tracking project and therefore who says eye_tracking means I need a good quality camera and brightness which is very important. Brightness measurement is important in many fields such as lighting, photography, cinema, etc.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'OpenCV'],
    githubLink: 'https://github.com/estebanbaigts/luxmeter',
  },
  {
    title: 'MOODLY',
    description: 'MOODLY est un projet visant à optimiser le processus onboarding en entreprise en utilisant des outils interactifs pour améliorer expérience des nouveaux employés. Ce projet fournit une plateforme intuitive et accessible pour suivre intégration, recueillir les ressentis et simplifier accès aux informations essentielles.',
    image: 'mood.jpg',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'MongoDB'],
    githubLink: 'https://github.com/estebanbaigts/MOODLY',
  },
  {
    title: 'Popeye',
    description: 'Popeye is an image recognition project developed in Python, aiming to identify and classify objects in images. This program uses machine learning and computer vision libraries to accurately detect and recognize shapes, patterns and objects. It is designed to be modular and extensible, allowing to easily add new features or classes of objects.',
    image: 'popeye.jpg',
    tags: ['Python', 'OpenCV', 'TensorFlow / PyTorch', 'NumPy & Pandas'],
    githubLink: 'https://github.com/estebanbaigts/Popeye',
  },
  {
    title: 'Github-action-for-epitech',
    description: 'Github-action-for-epitech is a GitHub Action and a set of scripts to facilitate code style checking and test execution for Epitech projects. This action provides automated tools to ensure that code follows Epitech coding standards and passes compilation and testing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['Yaml', 'C', 'Docker'],
    githubLink: 'https://github.com/estebanbaigts/Github-action-for-epitech',
  },
  {
    title: 'RPG',
    description: 'This RPG project is a command line role playing game developed in C, aiming to provide an immersive RPG experience in a text-based environment. It is an educational project to explore the concepts of C programming, while addressing essential features of role playing games such as combat, inventory management, and character progression.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    tags: ['C', 'CSFML'],
    githubLink: 'https://github.com/estebanbaigts/RPG',
  },
  {
    title: 'N4S',
    description: 'N4S is an educational and simplified clone of the popular racing game Need for Speed, developed in C. This project aims to simulate a racing experience while serving as an educational tool to explore advanced C programming concepts.',
    image: 'N4S.jpg',
    tags: ['C'],
    githubLink: 'https://github.com/estebanbaigts/N4S',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Some of my recent work that showcases my skills</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}