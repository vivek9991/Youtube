import Menu from "../assets/menu.png";
import Logo from "../assets/logo.jpeg";
import UserIcon from "../assets/user.jpeg";
import MicIcon from "../assets/mic.png";
import Search from "./Search";
import React from "react";
import SidePanelExpanded from "./SidePanelExpanded";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../redux-store/slice/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img
        style={{
          height: "30px",
          paddingLeft: "12px",
          paddingTop: "10px",
          cursor: "pointer",
          position: "fixed",
        }}
        alt="menu"
        src={Menu}
        onClick={() => {
          dispatch(toggleSideBar());
        }}
      />
      <a href="/">
        <img
          style={{
            height: "60px",
            paddingLeft: "60px",
            paddingTop: "-10px",
            marginTop: "-5px",
          }}
          alt="logo"
          src={Logo}
        />
      </a>

      <Search />

      <img
        style={{ height: "50px", marginLeft: "10px" }}
        alt="mic icon"
        src={MicIcon}
      />
      <img
        style={{ height: "40px", marginTop: "6px", paddingLeft: "400px" }}
        alt="user icon"
        src={UserIcon}
      />
    </div>
  );
};

export default Header;
