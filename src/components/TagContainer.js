import React from "react";
import Right_arrow from "../assets/right_arrow.jpeg";
const TagContainer = () => {
  return (
    <ul
      className="tag"
      style={{
        listStyle: "none",
        display: "flex",
        gap: "10px",
        alignItems: "center",
        paddingLeft: "0px",
        position: "fixed",
        top: "43px",
        backgroundColor: "white",
        width: "100vw",
        height: "50px",
      }}
    >
      <li>All</li>
      <li>Shark Tank</li>
      <li>Music</li>
      <li>Food challenges</li>
      <li>Entrepreneurship</li>
      <li>Mixes</li>
      <li>Romantic Music</li>
      <li>Jukebox</li>
      <li>Fast food</li>
      <li>Live</li>
      <li>Foodies</li>
      <li>Free music</li>
      <li>Comedy</li>
      <img
        style={{
          width: "30px",
          height: "30px",
          border: "1px solid black",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        src={Right_arrow}
        alt="show more right arrow"
      />
    </ul>
  );
};

export default TagContainer;
