'use client';

import Image from 'next/image';
import Review from './Review';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Banner = () => {
    const imgURL = "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const locations = ["Meghalaya", "Spiti", "Leh", "Manali", "Kasol"];

    return (
        <div className="relative h-screen max-w-screen-2xl bg-cover p-4 bg-center bg-opacity-95" style={{ backgroundImage: 'url(' + imgURL + ')' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 p-10 text-white flex flex-col justify-center items-start h-full">
                <div>
                    <h1 className=" text-4xl lg:text-6xl font-bold leading-tight">
                        <div className='flex space-x-4 items-center'>
                            <span>Book Your</span>
                            <span>
                                <Image className="rounded-3xl bg-cover hidden lg:block" src="/images/banner_img2.jpg" alt="logo" width={110} height={10} />
                            </span>
                        </div>
                        <span className=''>Trip to </span>
                        <span className='text-[#AFDE1E] mx-4 text-5xl lg:text-6xl' >
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                direction='vertical'
                                touchStartPreventDefault={false}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                modules={[Autoplay]}
                                className='inline h-[4rem]'
                            >
                                {locations.map((location, index) => (
                                    <SwiperSlide key={index}>
                                        {location}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </span>
                    </h1>
                    <h2 className="text-md font-bold leading-snug mt-6">
                        <span className='text-[#AFDE1E]'> Wander </span>
                        <span>| Travel |</span>
                        <span className='text-[#AFDE1E]'> Connect </span>
                        <span> | Repeat | </span>
                    </h2>
                    <p className="text-xs my-4">Where Adventure meets Community <br /> #wravelerforlife</p>
                    <div className="flex items-center bg-white rounded-full shadow-md max-w-[25rem] p-4">
                        <input
                            type="text"
                            placeholder="Type Location..."
                            className="flex-grow p-2 w-[5rem] rounded-l-full text-gray-700 focus:outline-none"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out">
                            Explore Trip
                        </button>
                    </div>
                </div>
                <div className="md:flex flex-wrap justify-between bottom-0 space-x-0 absolute w-[90%] lg:w-[96%]  hidden m-0 mt-8">
                    <div>
                        <p className="text-xl lg:text-2xl font-bold">7095+</p>
                        <p>Reviews</p>
                    </div>
                    <span className='border border-gray-600'></span>
                    <div>
                        <p className="text-xl lg:text-2xl font-bold">50,000+</p>
                        <p>Satisfied Travelers</p>
                    </div>
                    <span className='border border-gray-600'></span>
                    <div>
                        <p className="text-xl lg:text-2xl font-bold">50+</p>
                        <p>Destinations</p>
                    </div>
                    <span className='border border-gray-600'></span>
                    <div>
                        <p className="text-xl lg:text-2xl font-bold">7 Years+</p>
                        <p>Experience</p>
                    </div>
                </div>
            </div>
            <div className="absolute right-0 top-[5rem] transform translate-y-[-50%] hidden lg:block">
                <Review />
            </div>
        </div>
    );
};

export default Banner;
