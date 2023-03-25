import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { useLocation } from "react-router-dom";
import { getFirstLetter, fnum } from "../utils/helper";

import { FaHandPointUp } from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [subscribe, setSubscribe] = useState(true);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex w-full">
      <div className="mt-4 px-4">
        <iframe
          width="800"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        {/* Video Details Section */}
        <div>
          <div className="p-2 pl-0 mb-3">
            <h1 className="font-semibold text-xl">
              {location.state.obj?.snippet?.title}
            </h1>
          </div>
          {/* Buttons Sections */}
          <div className=" flex justify-between">
            <div className="flex justify-between gap-4">
              <div>
                <div className="flex gap-2">
                  <h1 className="bg-[rgb(255,0,0)] p-2 rounded-full font-bold text-white w-12 text-center">
                    {getFirstLetter(location.state.obj?.snippet?.channelTitle)}
                  </h1>
                  <div className="">
                    <h1 className="font-medium">
                      {location.state.obj?.snippet?.channelTitle}
                    </h1>
                    <h1 className="text-gray-600 text-[14px]">
                      835k subscribers
                    </h1>
                  </div>
                </div>
              </div>

              {subscribe ? (
                <button
                  className="bg-black text-white px-4 rounded-3xl font-medium"
                  onClick={() => setSubscribe(!subscribe)}
                >
                  Subscribe
                </button>
              ) : (
                <button
                  className="bg-gray-200 text-black px-4 rounded-3xl font-medium"
                  onClick={() => setSubscribe(!subscribe)}
                >
                  Subscribed
                </button>
              )}
            </div>

            <div className=" flex">
              <button
                className="flex bg-gray-200 items-center px-4 rounded-l-3xl border-r border-gray-400"
                onClick={() => setLike(!like)}
              >
                <FaHandPointUp color={[like ? "blue" : null]} />
                {fnum(location.state.obj?.statistics?.likeCount)}
              </button>
              <button
                className="flex bg-gray-200 items-center px-4 rounded-r-3xl"
                onClick={() => setDislike(!dislike)}
              >
                <FaHandPointDown color={dislike ? "blue" : null} />
              </button>
              <button className="ml-3 flex items-center px-4 bg-gray-200 rounded-3xl">
                <FaShare />
                Share
              </button>
            </div>

            {/* <div className="bg-blue-400">
              <button>Share</button>
            </div> */}
          </div>
          <div></div>
        </div>

        <div className="w-[800px]">
          <CommentsContainer
            count={location.state.obj?.statistics?.commentCount}
          />
        </div>
      </div>

      <div className="bg-slate-200 rounded-xl mt-5 p-4 w-[50%] h-[600px] overflow-y-scroll flex flex-col-reverse">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
