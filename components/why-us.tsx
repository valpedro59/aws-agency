import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WhyUs = () => {
    return (
        <section className="w-full bg-white/[0.96] dark:bg-slate-100 min-h-screen flex items-center">
        
            <div className="max-w-screen-xl mx-auto items-center space-y-8 p-11">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-slate-900">Pourquoi Nous Choisir ?</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-slate-500 dark:text-slate-400 sm:text-xl">3 Points essentiels pour nous faire confiance.</p>

                <div className='flex flex-col-reverse gap-6  lg:flex-row lg:gap-2 rounded-lg shadow-lg py-6 px-6'>
                    <div className='lg:w-[50%] md:flex flex flex-col-reverse'>
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <p className='text-slate-600 font-light'>Nous aidons les marques à se développer en concevant et en développant des idées stratégiques et de la créativité dans collaboration pour atteindre les objectifs.</p>
                            <Link href='/contact' className="btn-blue text-lg dark:hover:shadow-bleu">Contactez-Nous</Link>
                        </div>
                        <Image src='whyus.png' alt='why us' width={300} height={400} />
                    </div>
                    <div className='flex flex-col space-y-4 lg:w-[50%]'>
                        <div>
                            <h3 className='font-medium text-lg capitalize '>
                                Qualité et expérience
                            </h3>
                            <p className='font-light text-slate-600'>
                            Avec une expérience de plus de 10 ans, nous comprenons la demande du client, c'est-à-dire une qualité de classe mondiale.
                            </p>
                        </div>
                        <div>
                            <h3 className='font-medium text-lg capitalize '>
                            Professionnalisme et engagement
                            </h3>
                            <p className='font-light text-slate-600'>
                            Nous savons que vous souhaitez embaucher des professionnels pour vos projets qui peuvent livrer à temps et conformément à vos engagements.
                            </p>
                        </div>
                        <div>
                            <h3 className='font-medium text-lg capitalize '>
                            Service après vente
                            </h3>
                            <p className='font-light text-slate-600'>
                            Tous nos clients sont nos fans en raison de notre service exceptionnel et de notre support après-vente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
