import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="my-7 mx-3"
      onClick={() => navigate(`/video/${data?.video?.videoId}`)}
    >
      <div>
        <img
          src={data?.video?.thumbnails[0]?.url}
          className="h-56 w-full"
          alt={data?.video?.title}
        />
      </div>
      <div className="flex my-3 gap-4">
        <div className="w-14 h-14">
          <img
            src={data?.video?.author?.avatar[0]?.url}
            className="rounded-full"
            alt={data?.video?.title}
          />
        </div>
        <div>
          <div>{data?.video?.title}</div>
          <div className="text-sm">{data?.video?.author?.title}</div>
          <div className="text-[12.5px] flex">
            <div className="">{data?.video?.stats?.views} Views </div>
            <div className="ml-1">
              {" - "} {data?.video?.publishedTimeText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
