import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePortfolio() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex items-center flex-col md:flex-row p-6">
      <motion.div
        className="flex flex-col items-center w-full sm:w-80 border border-gray-300 rounded-xl p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <p className="text-lg font-medium mb-2">
          Click here to view my currently featured project
        </p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <h1 className="mt-2">
                <a href="https://fortune-tell.netlify.app/" rel="noopener" target="_blank">ForTune</a>
              </h1>
              <p className="mt-2">
                Fortune is a collaboration between myself, Roni Rutan, Ryan Clouser, and Tim Ehli.
              </p>
              <p className="mt-2">
                We use Gemini AI's API to create tarot readings, and ToneJS to give each reading a unique chord progression.
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
