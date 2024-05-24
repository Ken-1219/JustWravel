// components/Footer.js

import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaTripadvisor, FaQuora, FaWhatsapp, FaPodcast } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 w-full py-8 ">
            <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-auto mb-6">
                        <Image src="/logo.png" width={200} height={200} alt="JustWravel Logo" className="h-10 mb-2" />

                        <div className="flex flex-wrap w-[50%] mt-10">
                            <a href="#"><FaFacebook className="text-blue-600 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaTwitter className="text-blue-400 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaInstagram className="text-pink-500 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaLinkedin className="text-blue-700 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaYoutube className="text-red-600 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaPinterest className="text-red-500 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaTripadvisor className="text-green-600 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaQuora className="text-red-600 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaWhatsapp className="text-green-500 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                            <a href="#"><FaPodcast className="text-orange-500 mx-2 md:text-4xl lgtext-2xl text-4xl" /></a>
                        </div>
                    </div>
                    <div className="w-full sm:w-auto mb-6 mx-2">
                        <h3 className="font-semibold mb-2">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Our Blogs</a></li>
                            <li><a href="#" className="hover:underline">Career With Us</a></li>
                            <li><a href="#" className="hover:underline">Payment Policy</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto mb-6 mx-2">
                        <h3 className="font-semibold mb-2">Trips</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Backpacking Trips</a></li>
                            <li><a href="#" className="hover:underline">Treks</a></li>
                            <li><a href="#" className="hover:underline">Weekend Getaways</a></li>
                            <li><a href="#" className="hover:underline">Biking Trips</a></li>
                            <li><a href="#" className="hover:underline">Upcoming Trips</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto mb-6 mx-2">
                        <h3 className="font-semibold mb-2">Treks</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Domestic Tour Packages</a></li>
                            <li><a href="#" className="hover:underline">International Getaway</a></li>
                            <li><a href="#" className="hover:underline">Corporate Tours</a></li>
                            <li><a href="#" className="hover:underline">Ladakh Trips</a></li>
                            <li><a href="#" className="hover:underline">Spiti Trips</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-auto mb-6 mx-2">
                        <h3 className="font-semibold mb-2">Contact Us</h3>
                        <address className="not-italic">
                            34/1, Fourth Floor, Tower B<br />
                            The Corenthum, Block A<br />
                            Sector 62, Noida, Uttar Pradesh 201301<br />
                            <a href="tel:+918810457631" className="block hover:underline">+91-8810 457 631</a>
                            <a href="mailto:contact@justwravel.com" className="block hover:underline">contact@justwravel.com</a>
                        </address>
                    </div>
                </div>
                <div className="flex flex-wrap flex-col md:flex-row w-full text-center justify-center md:justify-between items-center mt-8 pt-4">
                    <div className="w-full sm:w-auto  sm:mb-0">
                        <p className="text-sm">© 2015-2024 JustWravel Pvt. Ltd.</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="#" className="hover:underline text-sm md:mx-2">Privacy Policy</a>
                        <a href="#" className="hover:underline text-sm md:mx-2">Terms & Conditions</a>
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
