'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';




const reviews = [
    {
        id: 1,
        author: 'A',
        text: 'Just when I wanted a break, not actually a break rather an experience, JustWravel popped up...',
    },
    {
        id: 2,
        author: 'B',
        text: 'I had the most amazing trip experience to Kashmir under the leadership of Omer. Traveling...',
    },
    {
        id: 3,
        author: 'C',
        text: 'I recently did a trip to Leh Ladakh with JustWravel team, and boy, was it an experience...',
    },
    {
        id: 4,
        author: 'D',
        text: 'The trip to Kashmir was amazing. I had the most amazing trip experience to Kashmir under the leadership of Omer. Traveling...',
    },
    {
        id: 5,
        author: 'E',
        text: 'I really enjoyed the trip. I had the most amazing trip experience to Kashmir under the leadership of Omer. Traveling...',
    },
];

const Review = () => {
    return (
        <div className='absolute top-0 right-0 w-[30rem] h-[80vh] flex flex-col items-center justify-center'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={3}
                touchStartPreventDefault={false}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                direction='vertical'
                className=' p-4 rounded-lg shadow-lg mb-4 h-full'
            >
                {reviews.map((review) => (
                    <SwiperSlide
                        key={review.id}
                        className="flex flex-col items-center max-w-sm bg-gray-900 bg-opacity-20 rounded-lg shadow-lg border border-white border-opacity-30 p-4 glass-effect"
                    >
                        <div className='flex'>
                            <p className="font-bold mx-2 text-center text-white">
                            <Image
                            className='bg-blue-500 rounded-full'
                                src='/icons/user.svg'
                                alt={review.author}
                                width={70}
                                height={70}
                            />
                            </p>
                            <div className='flex flex-col'>
                                <p className='text-white'>{review.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;
