import React from "react";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg w-[17%]">
      <div className="border-b border-gray-200 pb-2">
        <ul>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer flex items-center">
            <FaHome className="mr-2" size={20} />
            Home
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Shorts
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Library
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            History
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Watch Later
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Your Videos
          </li>
        </ul>
      </div>

      <div className="border-b border-gray-200 pb-2 m-1">
        <h1 className="font-bold">Subcriptions</h1>
        <ul>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Javascript Mastery
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            CodeWithHarry
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Sony Entertainment
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            TechieGuy
          </li>
        </ul>
      </div>

      <div className="border-b border-gray-200 pb-2 m-1">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Trending
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Shopping
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Music
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Movies
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">News</li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Sports
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Gaming
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">Live</li>
        </ul>
      </div>

      <div className="p-2">
        <p>
          About Press Copyright <br />
          Contact us Advertise
        </p>
        <p>
          Terms privecy <br />
          Policy & Safety
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
