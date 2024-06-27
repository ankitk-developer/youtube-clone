import React from "react";
import VideoCard from "./VideoCard";
import { youtube_categories } from "../mock";
const FeedVideoList = () => {
  return (
    <div className="my-5 text-white">
      <div className="grid grid-cols-3 h-full overflow-scroll">
        {youtube_categories.contents.map((category) => {
          return (
            <div key={category.type}>
              <VideoCard data={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeedVideoList;
