"use client";
import Contact from "@/components/contact";
import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


const  page = () => {
    return ( 
        <section className="bg-white h-full dark:bg-slate-900">
            <div>
                {/* Banner */}
                <div className="bg-cover bg-center  bg-[url('/space.jpg')] h-auto py-24 px-10 object-fill space-y-8">
                    <div className="max-w-screen-xl mx-auto">
                        <p className="font-bold text-sm uppercase text-white">Services</p>
                        <p className="text-3xl font-bold text-white">Decouvrez nos services</p>
                        <p className="text-2xl mb-10 leading-none text-slate-50">Digitalisez votre entreprise !</p>
                        <Link href="/contact" className="btn-blue dark:hover:shadow-bleu">Contactez-nous</Link>
                    </div>
                </div>

                {/*Developpement Web  */}
                <div className="py-10 space-y-8 px-8">
                {services.map((service) => (
                    <div key={service.id} id={service.id} data-aos="fade-up-right" className="bg-blue-200 border-slate-200  dark:bg-transparent dark:border-slate-700 max-w-screen-xl mx-auto flex flex-col md:flex-row p-8 items-center justify-between gap-8 rounded-lg shadow-md">
                    <div className="max-w-xl  flex flex-col gap-8">
                        <h1 className="text-3xl text-slate-900 font-bold dark:text-slate-100 uppercase tracking-wider">{service.name}</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-300">{service.subtext}</p>
                        <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
                            {service.option.map((item) => (
                                <li key={item.label} className="text-lg text-slate-500 font-light dark:text-slate-500">{item.label}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="max-w-lg ">
                            <Image src={service.imgURL} width={400} height={400} className="rounded-lg shadow-lg" alt="image"/>
                    </div>
                    </div>
                ))}
                </div>

                <Contact />
        </div>
        </section>
     );
}
 
export default page;