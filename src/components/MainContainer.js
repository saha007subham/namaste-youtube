import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let style;

  if (!isMenuOpen) {
    style = ` w-[100%], mt-[30px]`;
  } else {
    style = `b w-[82%],  mt-[30px]`;
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
