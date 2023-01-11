import React from "react";
import Header from "../../components/header/Header";
import VideoPlay from "../../components/videoPlay/VideoPlay";
import institutional from "../../assets/video/institutionalVideo.mp4";

function Services() {
  return (
    <div>
      <Header>Servicios</Header>
      <h1>Aca hay un grid</h1>
      <VideoPlay video={institutional} />
    </div>
  );
}

export default Services;
