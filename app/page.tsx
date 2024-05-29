'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyUs from "@/components/why-us";


// const variants = {
//   offscreen: {
//     opacity: 0,
//     scale: 0.5
//   },
//   onscreen: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       bounce: 0.4,
//       duration: 0.8
//     }
//   }
// };

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Ajoutez ici vos options de configuration AOS
      // Par exemple :
      duration: 800,
      easing: "ease-in-out",
      // ...d'autres options
    });
  }, []);

  return (
    <main className="w-full md:items-center  md:justify-center bg-white/[0.96] antialised bg-grid-black/[0.02] relative overflow-hidden dark:bg-slate-900">
      <Hero />
      <section  data-aos="fade-up">
        <About />
      </section>
      <section  data-aos="fade-left">
        <Services />
      </section>
      <section
      data-aos="fade-down"
      >
        <WhyUs />
      </section>
      <section  data-aos="fade-right">
        <Contact />
      </section>
      {/* <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true}}>

      
      <motion.div
        variants={variants}
        >
        <About />
      </motion.div>
      </motion.div>

      <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true}}>

      
      <motion.div
        variants={variants}
        >
          <Services />

      </motion.div>
      </motion.div>

      <motion.div initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true}}>

      
      <motion.div
        variants={variants}
        >
        <Contact />
      </motion.div>
      </motion.div> */}
    </main>
  );
}
