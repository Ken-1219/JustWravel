import React from 'react'

const Newsletter = () => {
    const url = "https://images.pexels.com/photos/840666/pexels-photo-840666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    return (
        <div className="relative bg-cover bg-center h-screen flex items-center justify-start"
            style={{ backgroundImage: `url(${url})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10   text-white  max-w-lg p-10">
            <h1 className='text-xl text-white uppercase'>Newsletter</h1>
                <h2 className="text-4xl font-bold mb-4 tracking-wider">Sign up now!</h2>
                <p className="mb-6">Be the first one to know all about the Exciting Offers, Travel Updates and more.</p>
                <div className="flex items-center bg-white rounded-full shadow-md max-w-[30rem] p-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow p-2 w-[5rem] rounded-l-full text-gray-700 focus:outline-none"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition duration-300 ease-in-out">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

