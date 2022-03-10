import React from "react";
import MGProject from "./MGProject";
const projects = require("../../data/projects/after-effects.json");

const MotionGraphics = () => {
  return (
    <React.Fragment>
      {projects.map((project) => {
        return (
          <section>{project.link && <MGProject project={project} />}</section>
        );
      })}
    </React.Fragment>
  );
};

export default MotionGraphics;
