import React from "react";

function ContactForm() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-md border rounded-lg backdrop-blur-xl text-white ">
        <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-center">
          Contáctanos
        </h2>

        <div className="divide-red-500 divide-y">
          <form action="#" className="space-y-8 flex flex-col my-4">
            <div>
              <label for="name" className="block mb-2 text-sm font-medium ">
                Nombre y Apellido
              </label>
              <input
                type="text"
                id="name"
                className="block p-3 w-full text-sm rounded-lg border border-gray-300 shadow-sm focus:ring-red-500 focus:border-red-500 "
                placeholder="Ingresa tu nobre y apellido..."
                required
              />
            </div>
            <div>
              <label for="email" className="block mb-2 text-sm font-medium ">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 "
                placeholder="name@provider.com"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm rounded-lg shadow-sm border border-gray-300 focus:ring-red-500 focus:border-red-500 "
                placeholder="Contanos como podemos ayudarte..."></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 self-end text-sm font-medium text-center text-white rounded-lg bg-red-maya sm:w-fit hover:bg-red-900 focus:ring-2 focus:outline-none focus:ring-red-500">
              Send message
            </button>
          </form>

          <div className="flex flex-col gap-2 text-red-300 text-center">
            <h5 className="font-bold uppercase mt-2">Otras formas de contacto</h5>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
