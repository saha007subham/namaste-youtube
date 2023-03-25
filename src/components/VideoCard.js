import React from "react";
import { fnum, getCurrentDate, timeAgo } from "../utils/helper";

const VideoCard = ({ info }) => {
  // console.log(info?.snippet?.publishedAt);
  const currDate = getCurrentDate();

  const publisedDate = (info?.snippet?.publishedAt).slice(0, 10);
  // console.log(publisedDate.concat("-"));

  const date = new Date((info?.snippet?.publishedAt).slice(0, 10));
  const timeAgoString = timeAgo(date);
  console.log(timeAgoString);

  return (
    <div className="w-[95%] mb-5 cursor-pointer">
      <div>
        <img
          alt="thumbnail"
          src={info?.snippet?.thumbnails.medium.url}
          className="rounded-md"
        />
      </div>

      <div className="p-2">
        <p className="font-bold mb-1">
          {(info?.snippet?.title).slice(0, 65)}...
        </p>
        <p className="text-sm text-gray-600">{info?.snippet?.channelTitle}</p>

        <span className="text-sm text-gray-600 mr-2">
          {/* {info?.statistics.viewCount} views */}
          {fnum(info?.statistics.viewCount)} views
        </span>
        <span className="text-sm text-gray-600">- {timeAgoString}</span>
      </div>
    </div>
  );
};

export default VideoCard;
