import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

import { youtubeLogo } from "../assets/youtubeLogo";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="relative">
      <div className="grid grid-flow-col p-2  shadow-m fixed top-0 left-0 right-0 bg-white">
        <div className="flex pl-1 justify-evenly col-span-1">
          <FaBars
            size={20}
            className="mt-3 cursor-pointer"
            onClick={toggleMenuHandler}
          />
          {/* <Link to={"/"}> */}
          <img
            alt="youTube-logo"
            src={youtubeLogo}
            className="h-11 cursor-pointer"
          />
          {/* </Link> */}
        </div>
        <div className="col-span-10">
          <div>
            <div className=" flex justify-center pt-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() => setShowSuggestion(false)}
                className="w-1/2 border border-gray-400 p-[4px] pl-[8px] outline-none rounded-l-full"
              />
              <button className="border border-gray-400 bg-gray-100 p-[2px] pl-[10px] w-[50px] h-[35px]  rounded-r-full hover:bg-gray-200 mr-3">
                <FaSistrix size={18} />
              </button>
            </div>

            {showSuggestion && (
              <div className="shadow-xl fixed rounded-xl cursor-pointer flex justify-start w-[461px] ml-[217px] font-serif">
                <ul className="w-[100%]">
                  {suggestions.map((s, id) => {
                    return (
                      <li
                        className="hover:bg-gray-200 w-[100%] p-1 pl-3"
                        key={id}
                      >
                        {s}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* <FaMicrophone size={18} className="cursor-pointer" /> */}
          </div>
        </div>

        <div className="col-span-1 flex justify-evenly items-center">
          <FaVideo size={20} className="cursor-pointer" />
          <FaBell size={20} className="cursor-pointer" />
          <FaUserCircle size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Head;
