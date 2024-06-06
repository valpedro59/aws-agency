import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="w-full bg-white/[0.96] dark:bg-slate-800 min-h-screen flex items-center">
      <div className="max-w-screen-xl mx-auto items-center space-y-8 p-11">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-4xl text-slate-900 dark:text-white font-semibold">
            Que faisons nous ?
          </h2>
          <hr className="h-1 w-8 rounded-lg bg-blue-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* service Item */}
          <div data-aos="zoom-in" className="max-w-md bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-900 dark:border-slate-700">
            <Link href="/services">
              <Image
                className="rounded-t-lg w-full"
                src="/services/web.jpg" width={600} height={500}
                alt="web"
              />
            </Link>
            <div className="p-5">
              <Link href="/services#web">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Developpement Web
                </h5>
              </Link>
              <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                Creation de site et application web responssive : adapte a tout
                ecran
              </p>
              <Link
                href="/services#web"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-blue dark:hover:shadow-bleu"
              >
                En savoir plus
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
            {/* End service Item */}

            {/* service Item */}
          <div data-aos="zoom-in" className="max-w-md bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-900 dark:border-slate-700">
            <Link href="/services">
              <Image
                className="rounded-t-lg w-full"
                src="/services/mobile.jpg"
                alt="mobile" width={600} height={500}
              />
            </Link>
            <div className="p-5">
              <Link href="/services">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Developpement Android et iOS
                </h5>
              </Link>
              <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                Creation des applications monbile compatible sur iPhone et
                Android
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-blue dark:hover:shadow-bleu"
              >
                En savoir plus
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
            {/* service Item */}

            {/* service Item */}
          <div data-aos="zoom-in" className="max-w-md bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-900 dark:border-slate-700">
            <Link href="/services">
              <Image
                className="rounded-t-lg w-full"
                src="/services/design.jpg"
                alt="design" width={600} height={500}
              />
            </Link>
            <div className="p-5">
              <Link href="/services">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Graphisme & Design
                </h5>
              </Link>
              <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                Conception graphique et design customized pour votre branding.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-blue dark:hover:shadow-bleu"
              >
                En savoir plus
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* End service item */}

            {/* service item */}
          <div data-aos="zoom-in" className="max-w-md bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-900 dark:border-slate-700">
            <Link href="/services">
              <Image
                className="rounded-t-lg w-full"
                src="/services/marketing.jpg"
                alt="marketing" width={600} height={500}
              />
            </Link>
            <div className="p-5">
              <Link href="/services">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Marketing Digital
                </h5>
              </Link>
              <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                Referencement, optimiation, mailing , copywriting ...
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-blue dark:hover:shadow-bleu"
              >
                En savoir plus
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
            {/* end service Item */}

            {/* service item */}
          <div data-aos="zoom-in" className="max-w-md bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-900 dark:border-slate-700">
            <Link href="/services">
              <Image
                className="rounded-t-lg w-full"
                src="/services/audio.jpg"
                alt="audio" width={600} height={500}
              />
            </Link>
            <div className="p-5">
              <Link href="/services#media">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Audiovisuel & Media
                </h5>
              </Link>
              <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
                Tournage des films, Tournages des evenements,Montage Vidéo, sonorisation, baptêmes , mariage ...
              </p>
              <Link
                href="/services#media"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-blue dark:hover:shadow-bleu"
              >
                En savoir plus
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
            {/* end service Item */}

        </div>
      </div>
    </section>
  );
};

export default Services;
