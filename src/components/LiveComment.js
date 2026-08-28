import React from "react";
import UserIcon from "../assets/user.jpeg";

const LiveComment = ({ name, commentText }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img style={{ height: "30px" }} alt="user icon" src={UserIcon} />
      <p style={{ fontWeight: "bold", color: "red", paddingLeft: "8px" }}>
        {name}
      </p>
      <p style={{ paddingLeft: "10px" }}>{commentText}</p>
    </div>
  );
};

export default LiveComment;
