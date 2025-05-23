import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-center flex-col md:flex-row p-6">
      <div className="mb-6 md:mb-0 md:mr-6">
        <img
          src="/pfp.jpg"
          alt="Josh Kramer, Headshot Picture"
          className="min-w-40 max-w-xs rounded-lg shadow-md"
        />
      </div>

      <motion.div
        className="flex flex-col items-center w-full sm:w-80 border border-gray-300 rounded-xl p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <p className="text-lg font-medium mb-2">
          I'm Josh Kramer, a Web Developer and Live Sound Engineer based out of Brooklyn, NY.
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden text-sm"
            >
              <p className="mt-2">
                Most of my programming and web work involves corporate CMS administration at a law firm in NYC.
              </p>
              <p className="mt-2">
                This website hosts some of my <a href="/projects">personal projects</a> - a couple of which are works in progress.
              </p>
              <p className="mt-2">
                Outside of web development, I work as a live sound engineer and stagehand.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-sm mt-4 text-blue-500">
          {expanded ? "Show less" : "Click to Expand"}
        </p>
      </motion.div>
    </div>
  );
}
