import React from "react";
import VideoTile from "./VideoTile";
import TagContainer from "./TagContainer";

const VideoContainer = () => {
  return (
    <div style={{ padding: "100px" }}>
      <TagContainer />
      <VideoTile />
    </div>
  );
};

export default VideoContainer;
