import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-base-100 rounded-lg shadow-md p-4 gap-6 hover:shadow-xl transition-shadow duration-300 w-full max-w-2xl"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <figure className="flex-shrink-0 w-[200px] h-[200px] overflow-hidden bg-base-200 rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-base-content mt-2">{description}</p>
      </div>
    </motion.a>
  );
}
