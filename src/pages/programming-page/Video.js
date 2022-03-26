import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Stack, Divider, Link, Button } from "@mui/material";

const Video = ({ video }) => {
  const { videoName, videoLink, videoDescription } = video;

  const gitHubLinks = video.gitHubLinks.filter((link) => link.link !== "#");

  const [isActiveVideo, setVideo] = useState(false);

  const handleClick = () => {
    setVideo(!isActiveVideo);
  };
  return (
    <React.Fragment>
      {videoLink && videoLink !== "#" && (
        <section>
          <h3>
            {videoName}
            <Button onClick={handleClick}>Details</Button>
          </h3>

          {isActiveVideo && (
            <div>
              {gitHubLinks.length > 0 && <GitHubLinks links={gitHubLinks} />}
              <p>Description: {videoDescription.join(" ")}</p>
              <ReactPlayer url={videoLink} controls />
            </div>
          )}
        </section>
      )}
    </React.Fragment>
  );
};

const GitHubLinks = ({ links }) => {
  return (
    <React.Fragment>
      <h4>Links Related</h4>
      <Stack
        direction="row"
        spacing={1}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {links.map((link, index) => {
          return (
            <Link
              href={link.link}
              underline="none"
              target="_blank"
              rel="noopener"
              key={link + link.linkName}
            >
              {link.linkName}
            </Link>
          );
        })}
      </Stack>
    </React.Fragment>
  );
};

export default Video;
