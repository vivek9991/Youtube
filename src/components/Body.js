import React from "react";
import SidePanel from "./SidePanel";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div style={{ display: "flex" }}>
      <SidePanel />
      <MainContainer />
    </div>
  );
};

export default Body;
