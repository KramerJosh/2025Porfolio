import { motion } from 'framer-motion';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Welcome to my portfolio!</h1>
      <div className="flex flex-col items-center justify-center py-36 text-center px-4">
        <AboutMe />
      </div>
    </motion.div>
  );
}
