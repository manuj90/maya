import React from "react";
import Maps from "../../components/maps/Maps";
import ContactForm from "../../components/contactForm/ContactForm";

function Contact() {
  return (
    <div className="w-screen h-fit lg:h-screen bg-contact bg-cover bg-repeat md:flex md:justify-center md:content-center">
      <div className="container m-auto p-10 grid lg:grid-cols-2 justify-center gap-10">
        <ContactForm />
        <Maps />
      </div>
    </div>
  );
}

export default Contact;
