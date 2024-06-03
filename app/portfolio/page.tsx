import Contact from '@/components/contact';
import { projects } from '@/lib/data';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: "Nos modeles prêts à l'emploi"
}


const page = () => {
    return (
        <div className='bg-white dark:bg-slate-900'>
            {/* Banner */}
            <div className="bg-cover bg-center  bg-[url('/galaxy.jpg')] h-auto py-24 px-10 object-fill space-y-8">
                    <div className="max-w-screen-xl mx-auto">
                        <p className="font-bold text-sm uppercase text-white">Portfolio</p>
                        <p className="text-3xl font-bold text-white">Realisations</p>
                        <p className="text-2xl mb-10 leading-none text-slate-50">Visualisez Nos Dernieres Realisations</p>
                        <Link href="/contact" className="btn-blue dark:hover:shadow-bleu">Contactez-nous</Link>
                    </div>
                </div>


                {/* Card */}

                <div className='max-w-screen-xl mx-auto py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                            <div key={project.label} className='max-w-md bg-white border border-slate-200 rounded-lg shadow dark:bg-slate-800 dark:border-slate-700 mx-auto space-y-4 p-4 transition ease-in-out hover:-translate-y-1 hover:scale-110' 
                            data-aos="fade-up-left"
                            >
                                <div className=''>
                                    <Image src={project.imgURL} width={500} height={700}
                                    alt='image'
                                    />

                                </div>
                                <div>
                                    <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{project.label}</h3>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <Contact />

        </div>
    );
};

export default page;