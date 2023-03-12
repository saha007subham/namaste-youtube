import React from "react";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { youtubeLogo } from "../assets/youtubeLogo";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="relative bg-red-600">
      <div className="grid grid-flow-col p-2  shadow-m fixed top-0 left-0 right-0 bg-white">
        <div className="flex gap-3 col-span-1">
          <FaBars
            size={20}
            className="mt-3 cursor-pointer"
            onClick={toggleMenuHandler}
          />
          <img
            alt="youTube-logo"
            src={youtubeLogo}
            className="h-11 cursor-pointer"
          />
        </div>

        <div className="col-span-10 pt-[9px] flex justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 border border-gray-400 p-[4px] pl-[8px] outline-none rounded-l-full"
          />
          <button className="border border-gray-400 bg-gray-100 p-[2px] pl-[14px] w-[50px] h-[33px]  rounded-r-full hover:bg-gray-200 mr-3">
            <FaSistrix size={18} />
          </button>
          <FaMicrophone size={18} className="cursor-pointer" />
        </div>

        <div className="col-span-1 flex justify-end items-center gap-5">
          <FaVideo size={20} className="cursor-pointer" />
          <FaBell size={20} className="cursor-pointer" />
          <FaUserCircle size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Head;
