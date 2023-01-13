import React from "react";
import Header from "../../components/header/Header";
import VideoPlay from "../../components/videoPlay/VideoPlay";
import institutional from "../../assets/video/institutionalVideo.mp4";
import ServicesGrid from "../../components/servicesGrid/ServicesGrid";

function Services() {
  return (
    <div>
      <Header section="bg-servicesHeaderMob md:bg-servicesHeaderTab lg:bg-servicesHeader">
        Servicios
      </Header>
      <ServicesGrid />
      <VideoPlay video={institutional} />
    </div>
  );
}

export default Services;
