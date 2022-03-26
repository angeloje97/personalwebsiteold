import React from "react";

const GDProject = ({ project }) => {
  const { name, description, image } = project;
  const src = require("../../images/GraphicDesign/" + image);
  return (
    <React.Fragment>
      <h4>{name}</h4>
      <p>{description}</p>
      <img src={src} />
    </React.Fragment>
  );
};

export default GDProject;
