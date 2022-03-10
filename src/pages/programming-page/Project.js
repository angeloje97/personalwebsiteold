import React from "react";
import Video from "./Video";

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
        Programming Language Used: {programmingLanguageUsed} | Lines of Code{" "}
        {linesOfCode}
      </p>
      <p>{projectDescription}</p>
      {gitHubLink && gitHubLink !== "#" && <a href={gitHubLink}>Source Code</a>}

      {videos && (
        <section>
          {videos.map((video) => {
            return <Video video={video} key={video.videoName} />;
          })}
        </section>
      )}
    </React.Fragment>
  );
};

export default Project;
