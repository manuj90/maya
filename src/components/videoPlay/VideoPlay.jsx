import React from "react";

function VideoPlay({ video }) {
  return (
    <div className="flex justify-center p-3 mb-3 ">
      <video
        controls
        autoPlay
        muted
        loop
        className="w-80 h-auto md:w-96 lg:w-[50rem] rounded-xl">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlay;
