import React from 'react'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import working from "../../assets/lotties/working.json";

function Maintenance() {
  return (
    <div className='my-10'>
      <Player
        autoplay
        speed={1.5}
        loop
        src={working}
        style={{ height: "300px", width: "300px" }}
      />
      <h2 className="text-2xl font-bold uppercase text-red-maya text-center my-10">
        Sitio en construcción
      </h2>
    </div>
  );
}

export default Maintenance