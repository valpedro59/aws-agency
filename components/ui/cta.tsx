import Link from 'next/link';
import React from 'react';

const Cta= () => {
    return (
        <div className='bg-[url("/aaabstract.webp")] center bg-cover bg-opacity-5 h-full w-full mx-auto max-w-screen-xl rounded-2xl py-8'>
            <div className='text-center flex flex-col gap-8'>
                <div>
                    <h1 className='text-white font-bold text-4xl'>Programmez-un appel.</h1>
                    <p className='text-white'>Contactez-nous afin d'avoir un rendez-vous avec l'un de nos conseiller et d'obternir un devis gratuit.</p>
                </div>
                <div className='flex justify-center gap-4'>
                    <Link href='' className="btn-blue text-lg dark:hover:shadow-bleu">
                        Reservez un appel
                    </Link>
                    <Link href='' className="btn-outline-blue text-lg dark:hover:shadow-bleu">
                        Devis Gratuit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cta;