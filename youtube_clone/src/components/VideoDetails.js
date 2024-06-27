import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
const VideoDetails = () => {
  const location = useLocation();
  const [videoId, setVideoId] = useState("");
  useEffect(() => {
    console.log(location.pathname, "pathname");
    const videoId = location.pathname.split("/")[2];
    setVideoId(videoId);
  }, [location.pathname]);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="bg-black">
      <div>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
};

export default VideoDetails;
