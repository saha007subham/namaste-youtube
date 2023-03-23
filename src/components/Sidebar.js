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

import { FaFire } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { FaFilm } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
// import { FaFire } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="w-[18%] mt-7">
      <div className="p-4">
        <ul>
          <Link to={"/"}>
            <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4">
              <div className="w-5">
                <FaHome size={20} />
              </div>
              <div className="w-24	">
                <p>Home</p>
              </div>
            </li>
          </Link>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaRegPlayCircle size={20} />
            </div>
            <div className="w-24">
              <p>Subcriptions</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaPhotoVideo size={20} />
            </div>
            <div className="w-24">
              <p>Library</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaClock size={20} />
            </div>
            <div className="w-24">
              <p>History</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaList size={20} />
            </div>
            <div className="w-24">
              <p>Your Videos</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="p-4 pt-0">
        <h1 className=" pl-5 font-bold mb-1">Subscriptions</h1>
        <ul>
          <Link to={"/"}>
            <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4">
              <div className="w-6">
                <img
                  alt="img1"
                  src="https://yt3.ggpht.com/W-LbQKXkf3HJsvau1PC8jnOoryI_7AjdGGORmmpWUO4Bdb3Alem-X4fasmV43aRXRydCy3gyAig=s88-c-k-c0x00ffffff-no-rj"
                  className="rounded-xl"
                />
              </div>
              <div className="w-24 ">
                <p>Sandeep ..</p>
              </div>
            </li>
          </Link>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-6 ">
              <img
                alt="img1"
                src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0x00ffffff-no-rj"
                className="rounded-xl"
              />
            </div>
            <div className="w-24 ">
              <p>JS Maste..</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-6">
              <img
                alt="img1"
                src="https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s88-c-k-c0x00ffffff-no-rj"
                className="rounded-xl"
              />
            </div>
            <div className="w-24">
              <p>Dhruv Ra..</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-6">
              <img
                alt="img1"
                src="https://yt3.ggpht.com/ytc/AL5GRJUCKbbwwsyu7RNlviwAYIULzxhZdPeeOwhuU_sC=s88-c-k-c0x00ffffff-no-rj"
                className="rounded-xl"
              />
            </div>
            <div className="w-24 ">
              <p>Gamming R..</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-6">
              <img
                alt="img1"
                src="https://yt3.ggpht.com/ytc/AL5GRJWaboT3D3wr6vqucfvRTT2Im_qrYYQrl3MKSz8zlw=s88-c-k-c0x00ffffff-no-rj"
                className="rounded-xl"
              />
            </div>
            <div className="w-24">
              <p>Zem TV</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="p-4 pt-0">
        <h1 className=" pl-5 font-bold mb-1 ">Explore</h1>
        <ul>
          <Link to={"/"}>
            <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4">
              <div className="w-5">
                <FaFire size={20} />
              </div>
              <div className="w-24 ">
                <p>Trending</p>
              </div>
            </li>
          </Link>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaMusic size={20} />
            </div>
            <div className="w-24 ">
              <p>Music</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaFilm size={20} />
            </div>
            <div className="w-24 ">
              <p>Movies</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaRegNewspaper size={20} />
            </div>
            <div className="w-24 ">
              <p>News</p>
            </div>
          </li>
          <li className="hover:bg-gray-200 flex justify-around items-center rounded-xl p-3 gap-4 cursor-pointer">
            <div className="w-5">
              <FaLightbulb size={20} />
            </div>
            <div className="w-24 ">
              <p>Learning</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
