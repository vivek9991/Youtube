import React from "react";
import HomeIcon from "../assets/home.png";
import ShortsIcon from "../assets/shorts.jpeg";
import RightArrow from "../assets/right_arrow.jpeg";
import DownArrow from "../assets/down_arrow.jpeg";

const SidePanelExpanded = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "3px",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={HomeIcon}
          alt="Home icon"
          style={{ width: "80px", marginLeft: "-13px" }}
        />
        <p>Home</p>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginTop: "-10px" }}
      >
        <img
          src={ShortsIcon}
          alt="Shorts icon"
          style={{ width: "40px", marginLeft: "6px" }}
        />
        <p style={{ paddingLeft: "21px" }}>Shorts</p>
      </div>
      <div style={{ paddingLeft: "12px", paddingTop: "10px" }}>
        <div style={{ display: "flex" }}>
          <span>Subscriptions</span>
          <img
            src={RightArrow}
            alt="right_arrow"
            style={{ width: "15px", paddingLeft: "10px" }}
          />
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            gap: "10px",
            marginLeft: "-20px",
          }}
        >
          <li>6 Pack programmer</li>
          <li>Abhay Trading</li>
          <li>Aditya Verma</li>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              src={DownArrow}
              alt="down_arrow"
              style={{ width: "20px", marginLeft: "-22px" }}
            />
            <span>Show more</span>
          </div>
        </ul>
      </div>
      <div style={{ paddingLeft: "12px", paddingTop: "10px" }}>
        <div style={{ display: "flex" }}>
          <span>You</span>
          <img
            src={RightArrow}
            alt="right_arrow"
            style={{ width: "15px", paddingLeft: "10px" }}
          />
        </div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            listStyle: "none",
            gap: "10px",
            marginLeft: "-20px",
          }}
        >
          <li>Your channel</li>
          <li>History</li>
          <li>Playlists</li>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              src={DownArrow}
              alt="down_arrow"
              style={{ width: "20px", marginLeft: "-22px" }}
            />
            <span>Show more</span>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SidePanelExpanded;
