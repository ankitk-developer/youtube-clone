import React from "react";
import LeftNav from "./LeftNav";
import FeedVideoList from "./FeedVideoList";

const Feed = () => {
  return (
    <div className="w-screen h-screen bg-black flex gap-5">
      <LeftNav />
      <FeedVideoList />
    </div>
  );
};

export default Feed;
