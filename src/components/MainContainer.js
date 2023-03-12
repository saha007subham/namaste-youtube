import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="w-[81%] bg-yellow-200">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
