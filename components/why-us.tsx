import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faCertificate, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
    return (
        <section className="w-full bg-white/[0.96] dark:bg-slate-100 min-h-screen flex items-center">
        
            <div className="max-w-screen-xl mx-auto items-center space-y-8 p-11">
            <h2 className="mb-4 text-4xl tracking-widest uppercase font-extrabold text-center text-slate-900 dark:text-slate-900">Pourquoi Nous Choisir ?</h2>
            <hr className="h-1 w-8 rounded-lg bg-white dark:bg-black mx-auto" />

                <p className="mb-8 lg:mb-16 font-light text-center text-slate-500 dark:text-slate-700 sm:text-xl">Nous aidons les marques à se développer en concevant et en développant des idées stratégiques et de la créativité dans collaboration pour atteindre les objectifs.</p>

                <div className='flex bg-slate-200 flex-col gap-6  lg:gap-10 rounded-lg shadow-lg py-10 px-6' data-aos="fade-up">
                    <div className="flex flex-col-reverse gap-6  lg:flex-row lg:gap-2">
                        <div className='flex flex-col space-y-4 lg:w-[50%]' data-aos="fade-right">
                            <div className='flex justify-center items-center gap-8'>
                                <div>
                                    <span><FontAwesomeIcon icon={faLightbulb} className='text-slate-600 text-3xl'/></span>
                                </div>
                                <div>
                                    <h3 className='font-medium text-lg capitalize '>
                                    Qualité et expérience
                                    </h3>
                                    <p className='font-light text-slate-600'>
                                    Avec une expérience de plus de 10 ans, nous comprenons la demande du client, c'est-à-dire une qualité de classe mondiale.
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-8'>
                                <div>
                                    <span><FontAwesomeIcon icon={faCertificate} className='text-slate-600 text-3xl'/></span>
                                </div>
                                <div>
                                    <h3 className='font-medium text-lg capitalize '>
                                        Professionnalisme et engagement
                                    </h3>
                                    <p className='font-light text-slate-600'>
                                        Nous savons que vous souhaitez embaucher des professionnels pour vos projets qui peuvent livrer à temps et conformément à vos engagements.
                                    </p>
                                </div>      
                            </div>
                            <div className='flex justify-center items-center gap-8'>
                                <div>
                                    <span><FontAwesomeIcon icon={faPhoneVolume} className='text-slate-600 text-3xl'/></span>
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

                        <div className='lg:w-[50%]' data-aos="fade-left">
                            <div>
                                <Image src='/project.webp' alt='Project' width={520} height={620} className='rounded-xl object-cover'/>
                            </div>
                        </div>
                    </div>

                    <div className='text-center'>
                    <Link href='/contact' className="btn-blue text-lg dark:hover:shadow-bleu" data-aos="fade-down">Devis Gratuit</Link>

                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
