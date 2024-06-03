import Contact from "@/components/contact";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
      <div className="max-w-screen-lg py-8 lg:py-16 px-4 mx-auto">
        <div>
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white capitalize">
            Contact
          </h3>
          <p className="mb-8 lg:mb-16 font-light text-center text-slate-500 dark:text-slate-400 sm:text-xl">
            Nous apprécions vos commentaires, demandes de renseignements et
            suggestions. N'hésitez pas à nous contacter. Nous sommes ici pour aider!
          </p>
          <div className="flex flex-col-reverse gap-8 lg:flex-row md:space-x-4 items-center">
            <div>
            <h3 className="text-2xl mb-4 font-medium text-slate-900 dark:text-slate-300">Coordonnées</h3>
            
          <div className="flex space-x-2 items-center">
            <svg
              className="w-6 h-6 text-slate-900 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
            <Link href='tel:+212615134801' >
              <p className="text-sm font-medium text-slate-900 dark:text-slate-300">
                (212) 06 15 13 48 01
              </p>
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <svg
              className="w-6 h-6 text-slate-900 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
            <Link href="mailto:contact@apotrewellsolutions.com">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-300">
                contact@apotrewellsolutions.com
              </p>
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <svg
              className="w-6 h-6 text-slate-900 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
            <Link href="apotrewellsolutions@gmail.com">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-300">
              apotrewellsolutions@gmail.com 
              </p>
            </Link>
          </div>
          <div className="flex space-x-2 items-center">
            <svg
              className="w-6 h-6 text-slate-900 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm font-medium text-slate-900 dark:text-slate-300">
              40000 Marrakech, Maroc
            </p>
          </div>
          </div>
          <div>
          <iframe  className="md:w-[600px] md:h-[400px] rounded-xl"  scrolling="no" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=%20Marrakech+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=d92f095a41fb83f2330b6a89e0b52715e26b2039'></script>
          </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
};

export default page;
