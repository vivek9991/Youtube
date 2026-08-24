import React from "react";
import { GET_VIDEOS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "../redux-store/slice/videosSlice";
import VideoTile from "./VideoTile";

const VideoTiles = () => {
  const videos = useSelector((store) => store.video.videos);
  const dispatch = useDispatch();
  const getVideoData = async () => {
    const response = await fetch(GET_VIDEOS);
    const data = await response.json();
    dispatch(setVideos(data.items));
  };

  React.useEffect(() => {
    getVideoData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {videos?.map((video) => (
        <VideoTile key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoTiles;
