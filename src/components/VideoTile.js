import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoTile = ({ video }) => {
  const toggle = useSelector((store) => store.app.toggle);
  return (
    <Link style={{ textDecoration: "none" }} to={"/watch?v=" + video.id}>
      <img
        src={video.snippet?.thumbnails?.medium?.url}
        alt={video.title}
        style={{ borderRadius: "15px", width: toggle ? "28vw" : "30vw" }}
      />
      <p
        style={{
          width: toggle ? "28vw" : "30vw",
          fontSize: "17px",
          fontWeight: "bold",
          marginBottom: "5px",
          color: "black",
        }}
      >
        {video.snippet.title}
      </p>
      <p className="videoDesc">{video.snippet.channelTitle}</p>
      <div
        style={{ display: "flex", gap: "6px", padding: "0px", margin: "0px" }}
      >
        <p className="videoDesc">
          {(video.statistics.viewCount / 1000000).toPrecision(2) + "M"}
        </p>

        <p className="videoDesc">{".     " + video.snippet.publishedAt}</p>
      </div>
    </Link>
  );
};

export default VideoTile;
