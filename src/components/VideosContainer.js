import React from "react";
import VideoTiles from "./VideoTiles";
import TagContainer from "./TagContainer";
import { useSelector } from "react-redux";

const VideosContainer = () => {
  const toggle = useSelector((store) => store.app.toggle);
  return (
    <div
      style={{
        padding: toggle ? "2px 10px 10px 190px" : "2px 10px 10px 80px",
      }}
    >
      <TagContainer />
      <VideoTiles />
    </div>
  );
};

export default VideosContainer;
