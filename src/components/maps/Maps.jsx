import React from "react";

function Maps() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-md border rounded-xl backdrop-blur-xl w-fit text-white flex flex-col gap-3 divide-red-500 divide-y">
      <div>
        <h5 className="font-bold uppercase">Presupuestos y RRHH:</h5>
        <p className="text-red-300">mayamymargsa@gmail.com</p>
      </div>

      <div>
        <h5 className="font-bold uppercase">Nuestras Redes:</h5>
      </div>

      <div className="space-y-4">
        <div>
          <h5 className="font-bold uppercase">Donde estamos:</h5>
          <a
            href="https://goo.gl/maps/mrheJGh7UdjT4huk6"
            target="_blank"
            className="hover:underline hover:underline-offset-1 text-red-300">
            <p>Gregoria Pérez 271, {<br />} E3200 Concordia, Entre Rios</p>
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1703.2081939643617!2d-58.0196251!3d-31.3750804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade83ca60ca40b%3A0x7edc463433aa7de3!2sMetal%C3%BArgica%20Maya!5e0!3m2!1ses!2sar!4v1673963677275!5m2!1ses!2sar"
          className="rounded-lg md:w-96 md:h-80"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Maps;
