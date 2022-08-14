import React from "react";
import Experience from "./Experience";

export default function ExperienceList({ experiences }) {

  const experienceList = experiences.map((experience) => {
    return (
        <Experience 
        {...experience} 
        key={experience.id}
        />
    )
  });

  return (
    <div className="experience-grid">
      {experienceList}
    </div>
  );
}
