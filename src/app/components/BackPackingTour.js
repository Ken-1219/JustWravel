'use client'

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const tours = [
    {
        title: "Sar Pass Trek",
        location: "Kasol to Kasol",
        duration: "5N/6D",
        season: "May - Jun",
        originalPrice: "₹ 9,500",
        discountedPrice: "₹ 8,200",
        rating: "★★★ (7k)",
        image: "/images/goa_trip2.jpg",
        label: "Best Seller",
    },
    {
        title: "All Girls Trek to Valley of Flowers",
        location: "Rishikesh to Rishikesh",
        duration: "5N/6D",
        season: "Jul",
        originalPrice: "₹ 10,500",
        discountedPrice: "₹ 9,500",
        rating: "★★★★ (7k)",
        image: "/images/leh_img2.jpg",
        label: "Moderate",
    },
    {
        title: "Valley of Flowers Trek",
        location: "Rishikesh to Rishikesh",
        duration: "5N/6D",
        season: "Jun - Aug",
        originalPrice: "₹ 10,500",
        discountedPrice: "₹ 9,500",
        rating: "★★★★ (7k)",
        image: "/images/jaipur_trip2.jpg",
        label: "Moderate",
    },
    {
        title: "Bhrigu Lake Trek",
        location: "Manali to Manali",
        duration: "2N/3D",
        season: "May - Aug",
        originalPrice: "₹ 5,500",
        discountedPrice: "₹ 4,500",
        rating: "★★★ (7k)",
        image: "/images/spiti_valley_trip2.jpg",
        label: "Moderate",
    },
    {
        title: "Kashmir Great Lakes Trek",
        location: "Sonamarg to Sonamarg",
        duration: "6N/7D",
        season: "Jul - Sep",
        originalPrice: "₹16,000",
        discountedPrice: "₹15,000",
        rating: "★★★★ (7k)",
        image: "/images/kerala_trip2.jpg",
        label: "Moderate"
    },
    {
        title: "Tarsar Marsar Lake Trek",
        location: "Srinagar to Srinagar",
        duration: "6N/7D",
        season: "Jul - Sep",
        originalPrice: "₹14,750",
        discountedPrice: "₹14,000",
        image: "/images/andaman_trip2.jpg",
        rating: "★★★★ (7k)"
    },
    {
        title: "Hampta Pass Trek",
        location: "Manali to Manali",
        duration: "4N/5D",
        season: "Jun - Sep",
        originalPrice: "₹10,000",
        discountedPrice: "₹9,000",
        rating: "★★★ (7k)",
        image: "/images/leh_img2.jpg",
        label: "Moderate"
    },
    {
        title: "Friendship Peak Expedition",
        location: "Manali to Manali",
        duration: "6N/7D",
        season: "Sep",
        originalPrice: "₹33,000",
        rating: "★★★",
        image: "/images/road_trip2.jpg",
        label: "Difficult"
    }
];
const BackPackingTour = () => {
    const swiperRef = useRef(null);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className='flex md:justify-between items-center justify-center md:flex-row flex-col'>

                <div className='pt-10 flex flex-col'>
                    <h2 className="mx-4 text-3xl font-semibold mb-4 md:mb-8">Backpacking Tours</h2>
                </div>


                <div className="flex justify-center space-x-4 px-14 pt-4 md:pt-14 mb-5 md:mb-10">
                    <button
                        className="bg-blue-500 text-white py-2 w-10 px-2 rounded-full hover:bg-blue-700"
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        &lt;
                    </button>
                    <button
                        className="bg-blue-500 text-white py-2 w-10 px-2 rounded-full hover:bg-blue-700"
                        onClick={() => swiperRef.current.slideNext()}
                    >
                        &gt;
                    </button>
                </div>
            </div>


            <div className='flex justify-center items-center md:block'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000, disableOnInteraction: false
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Autoplay]}
                    className='px-4'
                >
                    {tours.map((tour, index) => (
                        <SwiperSlide key={index} className="flex justify-center cursor-pointer">
                            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-80 h-96">

                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    height={300}
                                    width={400}
                                    objectFit="cover"
                                    className="absolute inset-0 z-0"
                                />

                                {tour.label && (
                                    <div className="absolute top-2 text-sm  bg-white right-0 text-blue-400 py-1 px-2 rounded-l-full">
                                        {tour.label}
                                    </div>
                                )}

                                <div className="relative z-10 p-4  h-full flex flex-col justify-end bg-[#0000005e] bg-opacity-50 text-white">
                                    <div className='absolute bottom-28'>
                                        <h3 className="text-lg font-semibold">{tour.title}</h3>

                                        <div
                                            className="flex items-center max-w-[200px] space-x-2 bg-gray-700 border border-white rounded-full p-1 bg-opacity-20">
                                            <Image src="/icons/location.svg" alt="location" height={20} width={20} />
                                            <p
                                                className="text-white text-sm">{tour.location}</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-start absolute bottom-12'>
                                        <div className="flex items-center  ">
                                            <Image src="/icons/duration.svg" alt="clock" height={20} width={20} />
                                            <p className="text-sm mr-8">{tour.duration}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Image src="/icons/calendar.svg" alt="calendar" height={20} width={20} />
                                            <p className="text-sm">{tour.season}</p>
                                        </div>
                                    </div>


                                    <div className="flex items-center ">
                                        <span className="line-through text-gray-400">{tour.originalPrice}</span>
                                        <span className="text-red-400 font-bold mr-12">{tour.discountedPrice}</span>
                                        <div className=" text-yellow-400">
                                            {tour.rating}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="text-center mt-8">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
                    View All &rarr;
                </button>
            </div>
        </div>
    );
};

export default BackPackingTour;
