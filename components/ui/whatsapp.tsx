import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WhatsappBtn = () => {
    return (
        <div className='z-99 fixed bottom-7 right-3'>
            <Link href="https://wa.me/+212615134801" target="_blank">  
                <Image className='rounded-xl' src="data:image/png;base64,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"
                 alt=""
                 width="64"
                 height="64"
                 />
            </Link>
        </div>
    );
};

export default WhatsappBtn;