import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let style;

  if (!isMenuOpen) {
    style = `bg-red-300 w-[100%]`;
  } else {
    style = `bg-blue-300 w-[82%]`;
  }

  return (
    <div className={style}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

//w-[81%] bg-yellow-200
