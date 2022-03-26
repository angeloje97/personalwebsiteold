import React, { useState } from "react";
import Video from "./Video";
import { Button, Box } from "@mui/material";

const Project = ({ project }) => {
  const { projectName } = project;

  const [projectIsSelected, setProject] = useState(false);

  const handleClick = () => {
    setProject(!projectIsSelected);
  };

  return (
    <React.Fragment>
      <h2>
        {projectName}
        <Button onClick={() => handleClick()}>
          {projectIsSelected ? "Show Less" : "Show More"}
        </Button>
      </h2>

      {projectIsSelected && <ProjectDetails project={project} />}
      {!projectIsSelected && <ProjectDescription project={project} />}
    </React.Fragment>
  );
};

const ProjectDetails = ({ project }) => {
  const {
    programmingLanguageUsed,
    linesOfCode,
    projectDescription,
    gitHubLink,
    videos,
  } = project;

  return (
    <React.Fragment>
      <p>
        Programming Language Used: <span>{programmingLanguageUsed}</span> |
        Lines of Code {linesOfCode}
      </p>
      <p>{projectDescription}</p>
      {gitHubLink && gitHubLink !== "#" && <a href={gitHubLink}>Source Code</a>}

      {videos && (
        <section>
          {videos.map((video) => {
            return (
              <Box sx={{ display: "grid" }}>
                <Video video={video} key={video.videoName} />
              </Box>
            );
          })}
        </section>
      )}
    </React.Fragment>
  );
};

const ProjectDescription = ({ project }) => {
  return <React.Fragment></React.Fragment>;
};

export default Project;
