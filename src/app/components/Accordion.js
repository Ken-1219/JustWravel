'use client'

import React from 'react';

const faqs = [
    {
        question: "What does JustWravel Mean?",
        answer: "We often receive this interesting question from our clients! JustWravel takes its name from two words, \"Wander\" and \"Travel.\" If you are someone looking for wandering and traveling together, then \"Wraveling\" is your word."
    },
    {
        question: "Who are the Travelers of Justwravel?",
        answer: "JustWravel, as a social travel community, gives more importance to community building and bringing together like-minded people. The travelers you are traveling with will be people of your own age and those who carry the love for traveling and exploring places like you!"
    },
    {
        question: "What are the Destinations that JustWravel covers?",
        answer: "JustWravel covers a wide range of products. We offer group departures to North India and North East India, conduct bike and backpacking trips, weekend getaways, All Girls trips, International Escapes, Himalayan Treks, Corporate Tours, Customized International and Domestic Tours."
    },
    {
        question: "How experienced are Justwravel’s Trip Captains?",
        answer: "All of our key trip leaders are certified with AMC or BMC qualifications and are trained in first-aid procedures to ensure the safety of the travelers. They will ensure that you are having a worry-free journey."
    },
];

const Accordion = () => {
    return (
        <div className="relative min-w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div className="mx-auto px-5">
                <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-center text-neutral-500 text-xl font-bold tracking-tight ">FAQ</h2>
                    <p className="mt-3 text-black font-bold text-xl md:text-3xl">Have Any Doubts?</p>
                </div>
                <div className="mx-auto mt-8 grid max-w-full divide-y divide-neutral-200">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-5">
                            <details className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                    <span>{faq.question}</span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </summary>
                                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">{faq.answer}</p>
                            </details>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className='flex items-center justify-center my-10'>
                <button className='text-blue-500 '>View</button>
            </div>

        </div>
    );
};

export default Accordion;
