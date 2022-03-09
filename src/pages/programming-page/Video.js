import React from "react";
import ReactPlayer from "react-player";

const Video = ({ video }) => {
  const { videoName, videoLink, videoDescription, gitHubLinks } = video;

  return (
    <React.Fragment>
      {videoLink && videoLink !== "#" && (
        <section>
          <h3>{videoName}</h3>
          <ReactPlayer url={videoLink} controls />
          <p>Description: {videoDescription}</p>
        </section>
      )}
    </React.Fragment>
  );
};
export default Video;
