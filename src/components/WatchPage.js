import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import { useLocation } from "react-router-dom";
import { getFirstLetter } from "../utils/helper";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.state.obj);

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
        <div className="border border-black">
          <div className="p-2 pl-0 ">
            <h1 className="font-bold text-xl">
              {location.state.obj?.snippet?.title}
            </h1>
          </div>
          {/* Buttons Sections */}
          <div className=" flex justify-between">
            <div className="flex justify-between gap-4">
              <div>
                <div className="flex gap-2">
                  <h1 className="bg-[rgb(255,0,0)] p-2 rounded-full font-bold text-white">
                    {getFirstLetter("Alik Raha Banerjee")}
                  </h1>
                  <div className="">
                    <h1 className="font-medium">6 Pack programmer</h1>
                    <h1 className="text-gray-600 text-[14px]">
                      35k subscribers
                    </h1>
                  </div>
                </div>
              </div>

              <button className="bg-black text-white px-4 rounded-3xl font-medium">
                Subscribe
              </button>
            </div>

            {/* <div className="bg-red-300">
              <h1>{getFirstLetter("Alik Raha Banerjee")}</h1>
            </div>

            <div>
              <button className="">Subscribe</button>
            </div> */}

            <div className="bg-red-400">
              <button>Like</button>
              <button>DisLike</button>
              <button className="ml-3">Share</button>
            </div>

            {/* <div className="bg-blue-400">
              <button>Share</button>
            </div> */}
          </div>
          <div></div>
        </div>

        <CommentsContainer />
      </div>

      <div className="bg-slate-200 rounded-xl mt-5 p-4 w-[50%] h-[500px] overflow-y-scroll flex flex-col-reverse">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
