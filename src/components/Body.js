import React from "react";
import SidePanel from "./SidePanel";
import SidePanelExpanded from "./SidePanelExpanded";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideosContainer from "./VideosContainer";
import VideoWatchContainer from "./VideoWatchContainer";

const Body = () => {
  const toggleSideBarValue = useSelector((store) => store.app.toggle);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <VideosContainer />,
    },
    {
      path: "/watch",
      element: <VideoWatchContainer />,
    },
  ]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "fixed" }}>
        {toggleSideBarValue ? <SidePanelExpanded /> : <SidePanel />}
      </div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
