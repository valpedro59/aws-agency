import Link from 'next/link';
import React from 'react';

const Cta= () => {
    return (
        <div className='bg-[url("/aaabstract.webp")] dark:bg-[url("/hhholographic.webp")] center bg-cover bg-opacity-5 h-full w-full mx-auto max-w-screen-xl rounded-2xl py-8'>
            <div className='text-center flex flex-col gap-8'>
                <div>
                    <h1 className='text-white dark:text-slate-800 font-bold text-4xl' data-aos="fade-up">Programmez-un appel.</h1>
                    <p className='text-white dark:text-slate-800' data-aos="fade-up">Contactez-nous afin d'avoir un rendez-vous avec l'un de nos conseiller et d'obternir un devis gratuit.</p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-4' data-aos="fade-up">
                    <Link href='/contact' className="text-white bg-blue-700 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 dark:bg-slate-800 dark:hover:bg-slate-700
    dark:hover:text-white
    dark:hover:rounded-full
    dark:focus:ring-slate-800 text-lg">
                        Reservez un appel
                    </Link>
                    <Link href='/contact' className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-slate-800 dark:text-slate-800 dark:hover:text-white dark:hover:bg-slate-700
    dark:hover:rounded-full
    dark:focus:ring-slate-800 dark:hover:shadow-bleu">
                        Devis Gratuit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cta;