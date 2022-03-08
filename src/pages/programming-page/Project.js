import React from "react";

const Project = ({ project }) => {
  const { projectName } = project;

  return (
    <React.Fragment>
      <h2>{projectName}</h2>
    </React.Fragment>
  );
};

export default Project;
