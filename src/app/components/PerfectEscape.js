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
const PerfectEscape = () => {
    const swiperRef = useRef(null);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className='flex items-center justify-center'>
                <div className='pt-10 flex flex-col'>
                    <h6 className='text-gray-500 text-center mx-4'>Destinations</h6>
                    <h2 className="mx-4 text-3xl font-semibold mb-4 md:mb-8">Perfect Escape</h2>
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
                            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-80 h-[28rem]">
                                <div className="h-[20rem] overflow-hidden">
                                    <Image
                                        src={tour.image}
                                        alt={tour.title}
                                        height={600}
                                        width={400}
                                        objectFit="cover"
                                        className="w-full h-full rounded-xl"
                                    />
                                </div>
                                <div className="p-4 flex flex-wrap text-center items-center justify-center">
                                    <h2 className="text-black text-lg font-semibold">{tour.title}</h2>
                                    <h2 className='text-black text-lg font-semibold  '><span className='text-sm text-gray-500 font-normal'>Starting Price</span> {tour.originalPrice}</h2>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center space-x-4 px-14 pt-4  mb-5 md:mb-10">
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
    );
};

export default PerfectEscape;
