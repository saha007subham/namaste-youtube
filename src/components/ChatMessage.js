import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-2 items-start">
      <div className="pt-1">
        <FaUserCircle size={25} className="cursor-pointer" />
      </div>
      <div>
        <h1>
          <span className="font-bold mr-1">{name}</span>
          {message}
        </h1>
      </div>
    </div>
  );
};

export default ChatMessage;
