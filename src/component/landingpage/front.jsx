import { Link as Link2 } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';

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
        'https://randomuser.me/api/portraits/men/28.jpg',
    ];

    return (
        <div className="flex flex-col items-center justify-center font-sans">
            {/* Header - Removed all padding */}
            <div className="container flex items-center justify-between w-full px-0 py-4 lg:flex-row">
                {/* Logo */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="flex items-center space-x-2"
                >
                    <h1 className="text-3xl font-semibold text-gray-800">lightscope</h1>
                    <span className="text-sm font-medium tracking-wide text-gray-500">BETA</span>
                </motion.div>

                {/* Menu Icon for Mobile */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="relative"
                >
                    <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                        Menu
                        <span className="ml-2">&#9776;</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 w-48 py-2 mt-2 bg-white dark:bg-black rounded-lg shadow-xl">
                            <a
                                href="./"
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 font-bold text-black hover:bg-gray-100"
                            >
                                Home
                            </a>
                            <a
                                href="./"
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 font-bold text-black hover:bg-gray-100"
                            >
                                How it works
                            </a>
                            <Link2
                                to="pricing"
                                smooth={true}
                                duration={500}
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 font-bold text-black cursor-pointer hover:bg-gray-100"
                            >
                                Pricing
                            </Link2>
                            <Link2
                                to="faq"
                                smooth={true}
                                duration={500}
                                onClick={handleMenuItemClick}
                                className="block px-4 py-2 font-bold text-black cursor-pointer hover:bg-gray-100"
                            >
                                FAQ
                            </Link2>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Pre-launch offer banner */}
            <Link2 to="pricing" smooth={true} duration={500}>
                <motion.div
                    variants={fadeIn('down', 0.1)}
                    initial="hidden"
                    whileInView="show"
                    className="inline-flex items-center p-2 px-4 mt-12 bg-white dark:bg-black border shadow-md rounded-xl"
                >
                    {/* Pre-launch badge */}
                    <span className="inline-flex items-center px-2 py-1 mr-3 text-sm font-medium border border-gray-100 rounded-md">
                        <span className="w-2 h-2 mr-1 rounded-full bg-customPurple100"></span>
                        Pre-launch offer
                    </span>

                    {/* Text */}
                    <span className="pr-2 text-sm font-medium text-gray-700">
                        Limited time 30% discount for the first 50 users
                    </span>

                    <i className="text-sm text-gray-700 fas fa-angle-right"></i>
                </motion.div>
            </Link2>

            {/* Main content */}
            <motion.div
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView="show"
                className="my-8 mt-20 text-center"
            >
                {/* Main heading */}
                <h1 className="text-4xl font-semibold text-gray-800 md:text-6xl">
                    Find your customers <br /> in seconds with AI
                </h1>

                {/* Subheading */}
                <p className="text-lg font-medium text-gray-600 md:text-xl mt-14">
                    lightscope scrapes social media and finds leads
                    <span className="font-bold"> ready to buy your product or service</span>
                </p>

                {/* CTA Button */}
                <button className="relative inline-flex items-center justify-center px-8 py-3 mt-6 overflow-hidden font-medium text-white transition-all duration-300 bg-black border-2 border-transparent rounded-lg animate-border-roll">
                    <Link2 to="/signup" className="relative z-10">
                        Find my customers
                    </Link2>
                    <span className="absolute inset-0 border-2 border-transparent"></span>
                </button>
            </motion.div>

            {/* Trusted section */}
            <div className="flex items-center mt-5 space-x-4">
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
                <div className="items-center space-x-2">
                    <div className="pl-2 text-xl text-black-500">
                        <span> ★★★★★</span>
                    </div>
                    <div className="text-sm font-medium text-gray-700">Trusted by 30+ founders</div>
                </div>
            </div>
        </div>
    );
};

export default Front;
        