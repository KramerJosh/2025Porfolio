import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center px-4 gap-6"
    >
      <h1 className="text-4xl font-bold">Contact/Resume</h1>
      <h2 className="text-2xl font-semibold">
        Email:
        <a href="mailto:thatsoundguyjosh@gmail.com">
          {" "}
          thatsoundguyjosh@gmail.com
        </a>
      </h2>
      <h3 className="text-xl text-blue-600 underline"></h3>

      <a href="/Resume.pdf" download target="_blank" rel="noopener noreferrer">
        <iframe
          src="/Resume.pdf"
          className="w-full md:w-[600px] h-[800px] border"
          title="Resume"
        />
      </a>
    </motion.div>
  );
}
