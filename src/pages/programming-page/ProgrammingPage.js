import React from "react";
import Project from "./Project";

const projects = require("../../data/projects/programming.json");

const ProgrammingPage = () => {
  return (
    <React.Fragment>
      {projects.map((project) => {
        return <Project project={project} key={project.projectName} />;
      })}
    </React.Fragment>
  );
};

export default ProgrammingPage;
