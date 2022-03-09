import React from "react";
import Video from "./Video";
import { Link } from "@mui/material";

const Project = ({ project }) => {
  const {
    projectName,
    projectDescription,
    programmingLanguageUsed,
    linesOfCode,
    gitHubLink,
    videos,
  } = project;

  return (
    <React.Fragment>
      <h2>{projectName}</h2>
      <p>
        Programming Language Used: {programmingLanguageUsed} | Lines of Code
        {linesOfCode}
      </p>
      <p>Description: {projectDescription}</p>
      <Link to={gitHubLink}>Source Code</Link>

      {videos && (
        <section>
          {videos.map((video) => {
            return <Video video={video} />;
          })}
        </section>
      )}
    </React.Fragment>
  );
};

export default Project;
