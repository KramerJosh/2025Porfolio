import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ImageUploader from "../components/ImageUploader";

export default function Projects() {
  const [imageData, setImageData] = useState(null);

  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Take a look at some of my work below:
      </h1>

      <div className="flex flex-wrap justify-center gap-8 mb-12">
        <ProjectCard
          title="ForTune"
          description="A Tarot reading page that uses Gemeni AI and ToneJS to create an atmospheric experience"
          image="\ForTune.png"
          link="https://fortune-tell.netlify.app/"
        />
        <ProjectCard
          title="Weather Wizard"
          description="Hosted on a free version of Render, so it may take a LONG time to load!"
          image="\WeatherWizard.png"
          link="https://weatherwizard-212z.onrender.com/"
        />
        <ProjectCard
          title="Note Picker"
          description="work in progress"
          image="\ForTune.png"
          link="\notes"
        />
      </div>

      {/* --- New DoG Project Section --- */}
      <ProjectCard
        title="DoG Image Filter"
        description="Upload a photo and extract outlines using a Difference of Gaussians filter"
        image="/placeholder-dog.png"
        link="/dog"
      />
    </div>
  );
}
