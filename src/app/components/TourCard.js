import Image from 'next/image';
import React from 'react';

const TourCard = ({ image, title, location, price, originalPrice, duration, dateRange }) => {
    return (
        <div
            className="relative bg-white rounded-lg overflow-hidden shadow-lg  w-[20rem] md:w-[30rem]">
            <Image src={image} alt={title} height={500} width={1080}
                className=" h-64 object-cover" />

            <div
                className="absolute top-4 text-sm right-0 flex text-white px-4 py-1 rounded-full">
                <Image src="/icons/duration.svg" alt="star" height={20} width={20} />
                {duration}
            </div>
            <div
                className="absolute top-8 text-white text-sm w-auto left-4 right-4  p-4 rounded-lg flex flex-col space-y-2">
                <h3
                    className="text-xl font-semibold">{title}</h3>
                <div
                    className="flex items-center max-w-[200px] space-x-2 bg-gray-700 border border-white rounded-full p-2 bg-opacity-20">
                    <Image src="/icons/location.svg" alt="location" height={20} width={20} />
                    <p
                        className="text-white ">{location}</p>
                </div>
            </div>
            <div
                className="absolute bottom-8 flex flex-col p-4 justify-between space-x-2 w-full">
                <div className='flex flex-row items-center justify-start ml-2'>
                    <Image src="/icons/calendar.svg" alt="calendar" height={20} width={20} />
                    <p className="ml-2 my-2 text-sm text-white">{dateRange}</p>
                </div>
                <div className='absolute flex items-center bottom-0'>
                    <p
                        className="line-through text-sm text-white">₹ {originalPrice}</p>
                    <p
                        className="text-white text-lg font-bold">₹ {price}</p>
                </div>
                <button
                    className="absolute text-sm right-2 bottom-0 text-blue-500 bg-white px-4 w-auto py-2 rounded-xl">
                    More Details
                </button>
            </div>
        </div>
    );
};

export default TourCard;
