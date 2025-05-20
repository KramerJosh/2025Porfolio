import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {

  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center px-4 gap-6"
    >
    <div className="flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Personal Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <ProjectCard
          title="ForTune"
          description="A Tarot reading page that uses Gemeni AI and ToneJS to create an atmospheric experience"
          image="\ForTune.png"
          link="https://fortune-tell.netlify.app/"
        />
        <ProjectCard
          title="Chord Picker"
          description="Find the frequencies in Hz and Midi values for various chords."
          image="/ChordPicker.png"
          link="\notes"
        />
                <ProjectCard
          title="Weather Wizard"
          description="Hosted on a free version of Render, so it may take up to FIVE minutes to load!"
          image="\WeatherWizard.png"
          link="https://weatherwizard-212z.onrender.com/"
        />
        <ProjectCard
          title="DoG Image Filter"
          description="Upload a photo and extract outlines using a Difference of Gaussians filter - experimental work in progress!"
          image="/DOG.png"
          link="/dog"
        />
      </div>
    </div>
    </motion.div>
  );
}
