import { useState } from 'react';
import Footer from './footer'
import Cards from './cards'
import Ratio from './ratio';
import LeadAlertSection from './leadalert';
import Faq from './faq';
import PlatformsSection from './platformsection'
import PricingTable from './pricingtable';

const LandingPage = () => {
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
    <>
      <div className="flex flex-col items-center justify-center p-5">
        {/* NavBar */}
        <div className="container mx-auto flex justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-serif text-gray-800">lightscope</h1>
            <span className="text-sm font-semibold text-gray-500 tracking-wide">BETA</span>
          </div>
          {/* Menu Icon for Mobile */}
          <div className="relative">
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
                <a
                  href="./"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-2 text-black font-bold hover:bg-gray-100"
                >
                  Pricing
                </a>
                <a
                  href="./"
                  onClick={handleMenuItemClick}
                  className="block px-4 py-2  text-black font-bold hover:bg-gray-100"
                >
                  FAQ
                </a>
              </div>
            )}
          </div>
        </div>



        {/* Pre-launch offer banner */}
        <div className="inline-flex items-center bg-white border rounded-xl shadow-md p-2 px-4 mt-36">
          {/* Pre-launch badge */}
          <span className="inline-flex items-center font-serif text-sm px-2 py-1 rounded-md mr-3 border border-gray-100">
            <span className="bg-customPurple100 w-2 h-2 rounded-full mr-1"></span>
            Pre-launch offer
          </span>

          {/* Text */}
          <span className="text-gray-700 text-sm font-medium">
            Limited time 30% discount for the first 50 users
          </span>

          {/* Arrow Icon */}
          <span className="ml-2 text-gray-500">
            &rarr;
          </span>
        </div>

        {/* Main content */}
        <div className="text-center my-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-serif text-gray-800">
            Find your customers <br /> in seconds with AI
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mt-4 font-serif">
            lightscope scrapes social media and finds leads
            <span className="font-bold"> ready to buy your product or service</span>
          </p>

          {/* CTA Button */}
          <button className="mt-6 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-all font-serif">
            Find my customers
          </button>
        </div>

        {/* Trusted section */}
        <div className="flex items-center space-x-4">
          {/* Avatar group */}
          <div className="flex">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt="Avatar"
                className={`w-10 h-10 rounded-full border-2 border-white ${index !== 0 ? '-ml-3' : ''}`}
              />
            ))}
          </div>

          {/* Star rating and text */}
          <div className="items-center space-x-2">
            <div className="text-black-500 text-xl pl-2">
              <span> ★★★★★</span>
            </div>
            <div className="text-gray-700 font-serif text-sm ">
              Trusted by 30+ founders
            </div>
          </div>
        </div>


      </div>
      <Cards />
      <Ratio />
      <LeadAlertSection />
      <PricingTable/>
      <Faq/>
      <PlatformsSection/>
      <Footer />
    
    </>

  );
};

export default LandingPage;
