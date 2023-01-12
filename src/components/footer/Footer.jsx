import React from "react";
import { Link } from "react-router-dom";
import mayalogo from "../../assets/footer.webp";

const Footer = () => {
  return (
    <footer className="bg-red-maya text-white py-10 w-full">
      <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between md:container m-auto md:w-10/12">
        <div>
          <Link to="/">
            <picture>
              <source srcSet={mayalogo} type="image/webp" />
              <img src={mayalogo} alt="Maya Logo" className="max-h-44" />
            </picture>
          </Link>
        </div>

        <div className="hover:underline hover:underline-offset-4">
          <a
            href="https://www.instagram.com/metalurgica_maya/"
            target="_blank"
            className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                clipRule="evenodd"
              />
            </svg>
            <p>metalurgica_maya</p>
          </a>
        </div>

        <div className="flex flex-col gap-4 text-center md:text-justify">
          <span className="flex flex-col">
            <p>Maya Metalúrgica y Materiales</p>
            <a
              href="https://goo.gl/maps/mrheJGh7UdjT4huk6"
              target="_blank"
              className="hover:underline hover:underline-offset-1">
              <p>Gregoria Pérez 271, {<br />} E3200 Concordia, Entre Rios</p>
            </a>
          </span>

          <span className="flex flex-col">
            <a
              href="tel:+5493454216548"
              className="hover:underline hover:underline-offset-4">
              (0345) 421-6548
            </a>
            <a
              href="tel:+5494149584"
              className="hover:underline hover:underline-offset-4">
              (0345) 154-149584
            </a>
          </span>
        </div>

        {/* <div className="hidden md:block uppercase text-right">
          <ul className="space-y-2">
            <li>inicio</li>
            <li>nosotros</li>
            <li>productos</li>
            <li>servicios</li>
            <li>novedades</li>
            <li>contactos</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
