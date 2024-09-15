import { Link } from "react-router-dom";

const LeadAlertSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8">
      <div className="px-4 flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 p-14">

        {/* Left Section - Text and Bullet Points */}
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-indigo-100 bg-customGray100 font-semibold text-xs px-4 py-1 rounded-lg inline-block">
            FOR AGENCIES
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Get realtime alerts for new leads
          </h1>
          <p className="text-lg text-gray-600">
            Describe your product/service and lightscope will start scraping for leads who are ready to buy.
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-800">
              <span className="text-green-500 mr-2">✔</span> 10x improvement in open rates
            </li>
            <li className="flex items-center text-gray-800">
              <span className="text-green-500 mr-2">✔</span> 4x better conversion than Cold DMs
            </li>
            <li className="flex items-center text-gray-800">
              <span className="text-green-500 mr-2">✔</span> Supports Twitter/X, Reddit, and LinkedIn
            </li>
          </ul>

          {/* CTA Button */}
          <Link to="/signup">
            <button className="bg-black text-white py-3 px-6 rounded-lg mt-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Join now
            </button>
          </Link>
        </div>

        {/* Right Section - Responsive Image */}
        <div className="lg:w-1/3 w-full">
          <img
            src="https://framerusercontent.com/images/xMfnRmnxAVGbkwvzYd2a2T3GkU.png?scale-down-to=1024"
            alt="Lead Alerts"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadAlertSection;
