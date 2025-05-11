import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">Get in Touch!</h1>
      <h2 className="text-4xl font-bold">Email</h2>
      <h3 className="text-4xl font-bold"><a href='mailto:thatsoundguyjosh@gmail.com'>thatsoundguyjosh@gmail.com</a></h3>
      <h2 className="text-4xl font-bold">More Contact Info Coming Soon</h2>
    </motion.div>
  );
}
