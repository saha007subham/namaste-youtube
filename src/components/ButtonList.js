import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "JavaScript",
    "Mixes",
    "Bollywood Music",
    "Gaming",
    "Comedy",
    "Computer programming",
    "News",
    "Tourism",
    "Arijit Singh",
  ];

  return (
    <div className="flex gap-3">
      {buttonList.map((list, id) => {
        return <Button key={id} name={list} />;
      })}
    </div>
  );
};

export default ButtonList;
