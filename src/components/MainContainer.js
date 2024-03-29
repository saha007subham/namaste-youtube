import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let style;

  if (!isMenuOpen) {
    style = ` w-[100%] mt-[30px] pt-4 pl-3`;
  } else {
    style = ` w-[82%] mt-[30px] pt-4 pl-3`;
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
