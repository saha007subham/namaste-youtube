import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  let style;
  if (!isMenuOpen) {
    style = `mt-4 grid grid-cols-4`;
  } else {
    style = ` mt-4 grid grid-cols-3`;
  }

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);

    setVideos(json.items);
  };

  // console.log(videos[0]);

  const obj = {
    name: "Subham Saha",
    age: 25,
  };

  return (
    <div className={style}>
      {videos.map((video) => {
        console.log(video?.snippet?.title);
        return (
          <Link
            to={"/watch?v=" + video.id}
            key={video.id}
            state={{ name: video?.snippet?.title }}
          >
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
