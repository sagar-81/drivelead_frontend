const PlatformsSection = () => {
    return (
        <div className="text-center py-16 bg-gray-50">
            {/* Platforms Support */}
            <h2 className="text-3xl md:text-4xl font-serif mb-10">Supports Multiple Platforms</h2>
            <div className="flex justify-center space-x-10 mb-16">
                {/* Add platform logos here */}
                <img
                    src="https://framerusercontent.com/images/BMNiurnPonzQdbafNviAfy8iy0.svg"
                    alt="X"
                    className="h-10 w-32 transform transition-transform duration-300 hover:scale-125"
                />
                <img
                    src="https://framerusercontent.com/images/oHZPmxIW4Dq0q7tIvDQZb9grvyQ.png?scale-down-to=512"
                    alt="LinkedIn"
                    className="h-10 w-32 transform transition-transform duration-300 hover:scale-125"
                />
                <img
                    src="https://framerusercontent.com/images/8lH6QI6Y8QFM8mNBUCgjrbUIMU.png?scale-down-to=512"
                    alt="Reddit"
                    className="h-10 w-32 transform transition-transform duration-300 hover:scale-125"
                />
            </div>

            {/* Call-to-action section */}
            <h3 className="text-2xl md:text-3xl font-serif mb-8 ">Get started with Lightscope today</h3>
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-serif">
                Get started today
            </button>
        </div>
    );
};

export default PlatformsSection;
