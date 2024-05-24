'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { logout } from '../store/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const commonLinkStyles = 'block px-4 hover:text-gray-500 hover:font-medium my-3';
const commonNavbarItemStyles = 'mx-4 hover:text-gray-500 hover:font-medium';
const commonButtonStyles = 'bg-[#1666D9] p-2 text-sm text-white cursor-pointer rounded-full';
const navContainerStyles = 'left-0 top-0 w-full items-center bg-white shadow-md flex flex-col lg:flex-row';
const navInnerContainerStyles = 'flex flex-wrap items-center w-full p-4';
const brandingContainerStyles = 'ml-6 p-1 flex items-center';
const navLinksContainerStyles = 'lg:flex flex-wrap grow items-center justify-center';
const navListStyles = 'flex text-[#717171] text-sm items-center justify-center flex-col lg:flex-row';
const dropdownMenuStyles = 'absolute z-30 rounded-2xl top-8 p-2 px-1 left-0 text-[#717171] hidden w-48 bg-white border border-gray-200 shadow-lg group-hover:block text-sm';
const contactInfoStyles = 'flex items-center justify-center cursor-pointer';
const contactDetailsStyles = 'text-xs';
const contactNumberStyles = 'text-xs font-semibold';
const iconWrapperStyles = 'bg-[#1666D9] p-3 lg:rounded-full text-white';
const isMenuOpenStyles = 'block w-full min-h-screen flex flex-col lg:min-h-0';
const contactContainerStyles = 'flex items-center justify-center ml-auto lg:ml-6';

const Hamburger = ({ onClick }) => (
    <div className="lg:hidden cursor-pointer" onClick={onClick}>
        <Image src="/icons/hamburger.svg" alt="hamburger-icon" width={20} height={20} />
    </div>
);

function Navbar() {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
    };

    return (
        <div className={navContainerStyles}>
            <div className={navInnerContainerStyles}>
                <div className='flex w-screen justify-between pr-2 lg:w-auto'>
                    <div className={brandingContainerStyles}>
                        <div className="flex flex-col">
                            <Image src="/logo.png" alt="JustWravel Logo" width={200} height={200} />
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        <Hamburger onClick={handleMenuToggle} />
                    </div>
                </div>

                {user && (
                    <div className={navLinksContainerStyles}>
                        <div className={`${navLinksContainerStyles} ${isMenuOpen ? isMenuOpenStyles : 'hidden'} lg:flex`}>
                            <div className="block lg:hidden">
                                <div className={`${contactContainerStyles} w-full lg:w-auto mt-4 lg:mt-0`}>
                                    <div className="flex flex-col items-center justify-center mx-4 mb-2">
                                        <div className="flex items-center w-full">
                                            <input
                                                type="text"
                                                placeholder="Search"
                                                className="w-full px-3 py-1.5 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                            />
                                            <div className={iconWrapperStyles + ' rounded-r-md rounded-l-0 cursor-pointer'}>
                                                <Image src="/icons/search.svg" alt="search-icon" width={15} height={15} />
                                            </div>
                                        </div>
                                        <button className={`${commonButtonStyles} w-20 mt-2`}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <ul className={navListStyles}>
                                <li className={`${commonNavbarItemStyles} mb-2 lg:mb-0`}>
                                    <Link href="#">Backpacking trips</Link>
                                </li>
                                <li className={`${commonNavbarItemStyles} my-2`}>
                                    <Link href="#">Treks</Link>
                                </li>
                                <li className={`${commonNavbarItemStyles} my-2`}>
                                    <Link href="#">Weekend Gateways</Link>
                                </li>
                                <li className={`${commonNavbarItemStyles} hidden lg:flex relative group my-2`}>
                                    <Link href="#" className="flex items-center justify-center">
                                        More
                                        <Image src="/icons/dropdown.svg" alt="down-arrow" width={30} height={30} />
                                    </Link>
                                    <ul className={dropdownMenuStyles}>
                                        <li><Link href="#" className={commonLinkStyles}>Ladakh</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Spiti</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Domestic Tours</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>International Tours</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Upcoming Trips</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Corporate Programs</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>About</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Contact</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Blogs</Link></li>
                                        <li><Link href="#" className={commonLinkStyles}>Newsletter</Link></li>
                                    </ul>
                                </li>

                                {isMenuOpen && (
                                    <>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Ladakh</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Spiti</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Domestic Tours</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">International Tours</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Upcoming Trips</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Corporate Programs</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">About</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Contact</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Blogs</Link>
                                        </li>
                                        <li className={`${commonNavbarItemStyles} lg:hidden my-2`}>
                                            <Link href="#">Newsletter</Link>
                                        </li>
                                    </>
                                )}
                            </ul>

                            {isMenuOpen && (
                                <>
                                    <div className="lg:hidden flex flex-col items-center my-10 w-full">
                                        <div className={contactInfoStyles}>
                                            <Image className="mx-2" src="/icons/call.svg" alt="call-icon" width={15} height={15} />
                                            <div>
                                                <h1 className={contactDetailsStyles}>Call us:</h1>
                                                <h2 className={contactNumberStyles}>+91 1234567890</h2>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="hidden lg:flex flex-col items-center ">
                            <div className={contactInfoStyles}>
                                <Image className="mx-2" src="/icons/call.svg" alt="call-icon" width={15} height={15} />
                                <div>
                                    <h1 className={contactDetailsStyles}>Call us:</h1>
                                    <h2 className={contactNumberStyles}>+91 1234567890</h2>
                                </div>
                            </div>
                        </div>

                        <div className='lg:block hidden'>
                            <div className={`${contactContainerStyles} w-full lg:w-auto mt-4 lg:mt-0`}>
                                <div className="flex items-center justify-center mx-4">
                                    <div className={iconWrapperStyles + ' cursor-pointer'}>
                                        <Image src="/icons/search.svg" alt="search-icon" width={15} height={15} />
                                    </div>
                                    <button className={`${commonButtonStyles} w-20 ml-2`} onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
