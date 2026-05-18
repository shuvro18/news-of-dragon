

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const notFound = () => {
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-9xl font-bold text-secondary">404</h1>

                        <div>
                            <Image  src="https://i.ibb.co.com/1fGwRzb4/sad-anime-sawako-kuronuma-2uaw5qji1sggamv0.gif" alt='sad gif' width={500} height={600}></Image>
                        </div>

                        <h2 className="mt-4 text-3xl font-bold">
                            Page Not Found
                        </h2>

                        <p className="py-6 text-base-content/70">
                            Sorry, the page you are looking for does not exist or has been moved.
                        </p>

                        <div className="flex items-center justify-center gap-4">
                            <Link href="/" className="btn btn-secondary">
                                Go Home
                            </Link>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default notFound;