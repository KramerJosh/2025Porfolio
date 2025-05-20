import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row items-center bg-base-100 rounded-lg shadow-md p-4 gap-4 hover:shadow-xl transition-shadow duration-300 w-full max-w-2xl"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <figure className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden bg-base-200 rounded-md flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex flex-col text-center md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <p className="text-base-content mt-2 text-sm sm:text-base">{description}</p>
      </div>
    </motion.a>
  );
}

