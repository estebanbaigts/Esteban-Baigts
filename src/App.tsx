import { motion } from 'framer-motion';
import About from './components/About';
import Design from './components/Design';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white dark:bg-gray-900"
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Design />
      </main>
    </motion.div>
  );
}

export default App;