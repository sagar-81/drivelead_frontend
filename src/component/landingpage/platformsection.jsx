import { Link } from "react-router-dom";

const PlatformsSection = () => {
    return (
        <div className="text-center py-16 bg-gray-50 ">
            {/* Platforms Support */}
            <h2 className="text-3xl md:text-4xl  mb-10">Supports Multiple Platforms</h2>
            
            <div className="sm:text-center flex flex-col lg:flex-row  md:flex-row justify-center md:space-x-10 mb-16 space-y-5 md:space-y-0">
                {/* Platform logos */}
                <img
                    src="https://framerusercontent.com/images/BMNiurnPonzQdbafNviAfy8iy0.svg"
                    alt="X"
                    className="h-10 md:w-32 w-24 object-contain transform transition-transform duration-300 hover:scale-150"
                />
                <img
                    src="https://framerusercontent.com/images/oHZPmxIW4Dq0q7tIvDQZb9grvyQ.png?scale-down-to=512"
                    alt="LinkedIn"
                    className="h-10 md:w-32 w-24 object-contain transform transition-transform duration-300 hover:scale-150"
                />
                <img
                    src="https://framerusercontent.com/images/8lH6QI6Y8QFM8mNBUCgjrbUIMU.png?scale-down-to=512"
                    alt="Reddit"
                    className="h-10 md:w-32 w-24 object-contain transform transition-transform duration-300 hover:scale-150"
                />
            </div>

            {/* Call-to-action section */}
            <h3 className="text-2xl md:text-3xl  mb-8">Get started with Lightscope today</h3>
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 ">
                <Link to="/signup" className="">
                    Get started today
                </Link>
            </button>
        </div>
    );
};

export default PlatformsSection;
