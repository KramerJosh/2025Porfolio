import { motion } from 'framer-motion';
import AboutMe from '../components/AboutMe';
import HomePortfolio from '../components/HomePortfolio';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">Portfolio Homepage</h1>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <AboutMe />
        <HomePortfolio />
      </div>

    </motion.div>
  );
}
