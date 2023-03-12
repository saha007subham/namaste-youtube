import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="w-[100%] mb-5 cursor-pointer">
      <div>
        <img
          alt="thumbnail"
          src={info?.snippet?.thumbnails.medium.url}
          className="rounded-md"
        />
      </div>

      <div className="p-2">
        <p className="font-bold mb-2">
          {(info?.snippet?.title).slice(0, 65)}...
        </p>
        <p className="text-sm text-gray-500">{info?.snippet?.channelTitle}</p>
        <p className="text-sm text-gray-500">
          {info?.statistics.viewCount} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
