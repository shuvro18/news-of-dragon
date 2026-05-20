import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

const MiddleSection = ({ element }) => {
    console.log(element)
    return (
        <div className='border-gray-200 mb-9 py-3 rounded-2xl shadow-xl'>
            <div className='bg-gray-100 my-3 p-2 rounded-2xl flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Image className='rounded-full' src={element.author.img} alt={element?.author?.name} width={50} height={50}></Image>
                    <div>
                        <p className='font-semibold text-xl'>{element.author.name}</p>
                        <p className='text-neutral/50 text-sm'>{element.author.published_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>
            <p className='font-bold text-xl px-4 py-7'>{element.title}</p>
            <Image src={element.image_url} alt='hello' height={305} width={305} className='w-full px-5'></Image>
            <p className="pt-6 text-neutral/50 text-sm px-6 line-clamp-6">{element.details}</p>
            <div className='px-6 pt-3'>
                <Link className='btn text-neutral/60' href={`/news/${element._id}`}> Details </Link>
            </div>
            <div className="divider w-10/12 mx-auto"></div>
            <div className='flex justify-between items-center px-6'>
                <div className='flex items-center gap-2 '>

                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <IoIosStar className='text-yellow-500' />
                    <p className="text-neutral/70 text-sm">{element.rating.number}</p>

                </div>

                <div className='flex items-center gap-2 text-neutral/60'>
                    <FaRegEye />
                    {element.total_view}
                </div>

            </div>
        </div>
    );
};

export default MiddleSection;


