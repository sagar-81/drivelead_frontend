import { Link } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom'
import { useState } from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Front = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    const avatars = [
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/men/31.jpg',
        'https://randomuser.me/api/portraits/men/30.jpg',
        'https://randomuser.me/api/portraits/men/29.jpg',
        'https://randomuser.me/api/portraits/men/28.jpg'
    ];

    return (
        <div className="flex flex-col items-center justify-center p-14">
            {/* NavBar */}
            <div className="container flex flex-col lg:flex-row lg:justify-between items-center px-6 py-4 w-full">
                {/* Logo */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView={"show"} className="flex space-x-2 items-center mb-4 lg:mb-0">
                    <h1 className="text-3xl  text-gray-800">lightscope</h1>
                    <span className="text-sm font-semibold text-gray-500 tracking-wide">BETA</span>
                </motion.div>
                {/* Menu Icon for Mobile */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    whileInView={"show"} className="relative">
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        Menu
                        <span className="ml-2">&#9776;</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                            <a
                                href="./"
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2  text-black font-bold hover:bg-gray-100"
                            >
                                Home
                            </a>
                            <a
                                href="./"
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 text-black font-bold hover:bg-gray-100"
                            >
                                How it works
                            </a>
                            <Link
                                to="pricing"
                                smooth={true}
                                duration={500}
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 text-black font-bold hover:bg-gray-100 cursor-pointer"
                            >
                                Pricing
                            </Link>
                            <Link
                                to="faq"
                                smooth={true}
                                duration={500}
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 text-black font-bold hover:bg-gray-100 cursor-pointer"
                            >
                                FAQ
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>



            {/* Pre-launch offer banner */}
            <Link to="pricing"
                smooth={true}
                duration={500}>
                <motion.div
                    variants={fadeIn('down', 0.1)}
                    initial="hidden"
                    whileInView={"show"} className="inline-flex items-center bg-white border rounded-xl shadow-md p-2 px-4 mt-24">
                    {/* Pre-launch badge */}
                    <span className="inline-flex items-center  text-sm px-2 py-1 rounded-md mr-3 border border-gray-100">
                        <span className="bg-customPurple100 w-2 h-2 rounded-full mr-1"></span>
                        Pre-launch offer
                    </span>

                    {/* Text */}
                    <span className="text-gray-700 text-sm font-medium pr-2">
                        Limited time 30% discount for the first 50 users
                    </span>

                    <i className="fas fa-angle-right text-sm text-gray-700"></i>
                </motion.div>
            </Link>

            {/* Main content */}
            <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={"show"}
                className="text-center my-8 mt-20">
                {/* Main heading */}
                <h1 className="text-4xl md:text-6xl  text-gray-800">
                    Find your customers <br /> in seconds with AI
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-600 mt-14  ">
                    lightscope scrapes social media and finds leads
                    <span className="font-bold"> ready to buy your product or service</span>
                </p>

                {/* CTA Button */}
                <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900  transition-all duration-300 transform hover:scale-105">
                    <Link2 to="/signup" className="">
                        Find my customers
                    </Link2>
                </button>
            </motion.div>

            {/* Trusted section */}
            <div className="flex items-center space-x-4 mt-5">
                {/* Avatar group */}
                <div className="flex">
                    {avatars.map((avatar, index) => (
                        <img
                            key={index}
                            src={avatar}
                            alt="Avatar"
                            className={`w-10 h-10 rounded-full border-2 border-black ${index !== 0 ? '-ml-3' : ''}`}
                        />
                    ))}
                </div>

                {/* Star rating and text */}
                <div className="items-center space-x-2 ">
                    <div className="text-black-500 text-xl pl-2">
                        <span> ★★★★★</span>
                    </div>
                    <div className="text-gray-700  text-sm ">
                        Trusted by 30+ founders
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Front