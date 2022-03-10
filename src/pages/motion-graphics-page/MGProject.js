import React from "react";
import ReactPlayer from "react-player";

const MGProject = ({ project }) => {
  return (
    <React.Fragment>
      <h3>{project.projectName}</h3>
      <ReactPlayer url={project.link} controls />
      <p>{project.description.join(" ")}</p>
    </React.Fragment>
  );
};

export default MGProject;
