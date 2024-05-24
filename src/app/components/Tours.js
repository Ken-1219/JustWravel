import React from 'react';
import Sidebar from './Sidebar';
import TourCard from './TourCard';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/autoplay';


const Tours = () => {
    const tours1 =
        [
            {
                id: 1,
                image: '/images/road_trip.jpg',
                title: 'Jibhi Road Trip - Tirthan Valley Weekend Trip',
                location: 'Delhi to Delhi',
                dateRange: 'May - Aug',
                price: '8,600',
                originalPrice: '10,000',
                duration: '4 Days'
            },
            {
                id: 2,
                image: '/images/goa_trip.jpg',
                title: 'Leh Ladakh Tour with Turtuk',
                location: 'Leh to Leh',
                dateRange: 'May - Aug',
                price: '22,000',
                originalPrice: '27,000',
                duration: '7 Days'
            },
            {
                id: 3,
                image: '/images/kerala_trip.jpg',
                title: 'Kasol Kheerganga Manali Backpacking Tour',
                location: 'Delhi to Delhi',
                dateRange: 'May - Jul',
                price: '12,500',
                originalPrice: '15,000',
                duration: '6 Days'
            },
            {
                id: 4,
                image: '/images/banner_img.jpg',
                title: 'Valley of Flowers Trek',
                location: 'Rishikesh to Rishikesh',
                dateRange: 'Jun - Aug',
                price: '9,500',
                originalPrice: '10,500',
                duration: '6 Days'
            },
            {
                id: 5,
                image: '/images/spiti_valley_trip.webp',
                title: 'Spiti Valley Trek',
                location: 'Delhi to Delhi',
                dateRange: 'Jun - Aug',
                price: '12,500',
                originalPrice: '15,000',
                duration: '6 Days'
            }
        ];

    const tours2 = [
        {
            id: 6,
            image: '/images/goa_trip.jpg',
            title: 'Goa Beach Holiday',
            location: 'Mumbai to Goa',
            dateRange: 'Oct - Feb',
            price: '15,000',
            originalPrice: '18,000',
            duration: '5 Days'
        },
        {
            id: 7,
            image: '/images/kerala_trip.jpg',
            title: 'Kerala Backwaters Tour',
            location: 'Kochi to Kochi',
            dateRange: 'Sep - Mar',
            price: '18,000',
            originalPrice: '20,000',
            duration: '6 Days'
        },
        {
            id: 8,
            image: '/images/andaman_trip.jpg',
            title: 'Andaman Islands Adventure',
            location: 'Port Blair to Port Blair',
            dateRange: 'Oct - May',
            price: '25,000',
            originalPrice: '30,000',
            duration: '7 Days'
        },
        {
            id: 9,
            image: '/images/jaipur_trip.jpg',
            title: 'Rajasthan Cultural Tour',
            location: 'Jaipur to Jaipur',
            dateRange: 'Oct - Mar',
            price: '20,000',
            originalPrice: '25,000',
            duration: '8 Days'
        },
        {
            id: 10,
            image: '/images/darjeeling_trip.jpg',
            title: 'Darjeeling and Sikkim Exploration',
            location: 'Bagdogra to Bagdogra',
            dateRange: 'Apr - Jun',
            price: '22,000',
            originalPrice: '26,000',
            duration: '7 Days'
        }
    ];



    return (
        <div className="flex flex-col md:flex-row my-10 overflow-hidden bg-[#21252912]">
            <Sidebar />
            <main className="relative flex-1 p-4 grid grid-cols-1 place-content-center place-items-center md:grid-cols-1 gap-4">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={5}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    className=" flex-1 p-4 w-[40rem] md:w-[65rem]"
                >
                    {tours1.map((tour, index) => (
                        <SwiperSlide key={index}>
                            <TourCard {...tour} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mb-8">
                    <Image src="/images/banner_img.jpg" width={1920} height={1080} alt="banner" className="w-[65rem]" />
                </div>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={5}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    className=" flex-1 p-4 w-[40rem] md:w-[65rem]"
                >
                    {tours2.map((tour, index) => (
                        <SwiperSlide key={index}>
                            <TourCard {...tour} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </div>
    );
};

export default Tours;
