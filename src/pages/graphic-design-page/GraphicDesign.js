import React from "react";
import GDProject from "./GDProject";

const projects = require("../../data/projects/photoshop.json");

const GraphicDesign = () => {
  return (
    <React.Fragment>
      {projects.map((project) => (
        <GDProject project={project} />
      ))}
    </React.Fragment>
  );
};

export default GraphicDesign;
