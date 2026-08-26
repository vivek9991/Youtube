import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { closeSideBar, toggleSideBar } from "../redux-store/slice/appSlice";
import CommentsContainer from "./CommentsContainer";

const VideoWatchContainer = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  const [searchParams] = useSearchParams();
  const param = searchParams.get("v");
  return (
    <div
      style={{
        padding: "2px 10px 10px 80px",
      }}
    >
      <iframe
        width="1000"
        height="515"
        src={"https://www.youtube.com/embed/" + param}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <CommentsContainer />
    </div>
  );
};

export default VideoWatchContainer;
