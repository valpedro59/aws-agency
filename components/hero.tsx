import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full dark:bg-slate-900">
      <div className="max-w-screen-xl mx-auto min-h-[90vh] items-center p-4 flex flex-col-reverse md:flex-row">
        <div className=" flex flex-col gap-8 md:w-[50%]">
          <h1 className="text-3xl text-blue-800 dark:text-white flex flex-col font-semibold">
            TRANSFORMER VOS IDÉES ICI.
            <span className="text-slate-700 dark:text-slate-300 md:uppercase">
              Nous créons des sites web et des stratégies digitales pour
              augmenter votre visibilité sur internet.
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Apotre-Well-Solutions aide les petites et grandes entreprises à
            s&apos;élever au-delà de la concurrence et à prendre leurs marques
            vers de nouveaux sommets.
          </p>
          <div>
            <Link
              href="/contact"
              className="btn-outline-blue text-lg dark:hover:shadow-bleu"
            >
              Contactez-Nous
            </Link>
          </div>
        </div>
        <div className="md:w-[50%]">
          <Image height={530} width={620} src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
