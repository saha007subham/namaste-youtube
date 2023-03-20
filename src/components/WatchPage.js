import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LiveChat from "../LiveChat";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

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
        <CommentsContainer />
      </div>

      <div className="bg-slate-200 rounded-xl mt-5 p-4 w-[50%] h-[500px] overflow-y-scroll flex flex-col-reverse">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
