import { Link } from "react-router-dom";

const FindLead = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="px-4 flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 p-14">
      <div className="lg:w-1/3 w-full">
          <img
            src="https://framerusercontent.com/images/x6Pe7W1wWxi373TkGxYGhc27r8Y.png"
            alt="Lead Alerts"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Left Section - Text and Bullet Points */}
        <div className="lg:w-1/2 space-y-6 lg:p-20">
          <div className="bg-indigo-100 bg-customGray100 font-semibold text-xs px-4 py-1 rounded-lg inline-block">
          FOR MAKERS
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Filter down to the vital few 
          </h1>
          <p className="text-lg text-gray-600">
          Filter leads by post content, profile bio, number of followers and more
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-800">
              <span className="text-black mr-2">✔</span> Advanced analytics on DM campaigns 
            </li>
            <li className="flex items-center text-gray-800">
              <span className="text-black mr-2">✔</span> Realtime notifications of new leads
            </li>
            <li className="flex items-center text-gray-800">
              <span className="text-black mr-2">✔</span> Limited time 30% discount
            </li>
          </ul>

          {/* CTA Button */}
          <Link to="/signup">
            <button className="bg-black text-white py-3 px-6 rounded-lg mt-4 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Find my leads
            </button>
          </Link>
        </div>

        {/* Right Section - Responsive Image */}
       
      </div>
    </div>
  );
};

export default FindLead;
