import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Icons
import { FaShekelSign } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaList } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-[14%]">
      <div className="mt-6">
        <div className=" pb-2">
          <ul>
            <Link to={"/"}>
              <li className="hover:bg-gray-200 flex-col justify-center items-center text-[12px] pl-7 rounded-xl pt-3 pb-3">
                <FaHome className="ml-1 mb-1" size={20} />
                <p>Home</p>
              </li>
            </Link>
            <li className="hover:bg-gray-200 flex-col justify-center items-center text-[12px] pl-3 rounded-xl pt-3 pb-3 cursor-pointer">
              <FaRegPlayCircle className="ml-5 mb-1" size={20} />
              <p>Subscriptions</p>
            </li>
            <li className="hover:bg-gray-200 pl-6 pt-3 pb-3 cursor-pointer text-[12px] rounded-xl">
              <FaPhotoVideo className="ml-2 mb-1" size={20} />
              <p>Library</p>
            </li>
            <li className="hover:bg-gray-200 pl-3 pt-3 pb-3 cursor-pointer text-[12px] rounded-xl">
              <FaClock className="ml-5 mb-1" size={20} />
              <p>Watch Later</p>
            </li>
            <li className="hover:bg-gray-200 pl-3 pt-3 pb-3 cursor-pointer text-[12px] rounded-xl">
              <FaList className="ml-5 mb-1" size={20} />
              <p>Your Videos</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-b border-gray-200 pb-2 m-1">
        <h1 className="font-bold">Subcriptions</h1>
        <ul>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            JS Codes
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            CodeWithHarry
          </li>
          <li className="hover:bg-gray-200 rounded p-2 cursor-pointer">
            Sony Liv
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
