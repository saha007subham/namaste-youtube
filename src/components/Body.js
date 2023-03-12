import React from "react";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex gap-3 p-2">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
