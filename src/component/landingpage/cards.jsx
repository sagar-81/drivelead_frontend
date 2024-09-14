const Cards = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-center p-8 space-y-8 lg:space-y-0 bg-gradient-to-b from-purple-100 to-white">
            {/* Left section */}
            <div className="space-y-6 lg:space-y-8">
                {/* First Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs lg:max-w-md lg:w-auto h-auto">
                    <div className="flex items-start space-x-4">
                        {/* Avatar */}
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Peter Dil"
                            className="w-12 h-12 rounded-full"
                        />
                        {/* Content */}
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <h4 className="font-bold text-gray-800">Peter Dil</h4>
                                <span className="text-gray-400 text-xl">×</span>
                            </div>
                            <p className="text-gray-700 mt-1">
                                Cheapest <span className="font-bold">alternative to Typeform?</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs lg:max-w-md">
                    <div className="flex items-start space-x-4">
                        {/* Avatar */}
                        <img
                            src="https://randomuser.me/api/portraits/men/33.jpg"
                            alt="Elias Stravik"
                            className="w-12 h-12 rounded-full"
                        />
                        {/* Content */}
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <h4 className="font-bold text-gray-800">Elias Stravik</h4>
                                <span className="text-gray-400 text-xl">×</span>
                            </div>
                            <p className="text-gray-700 mt-1">
                                100% of the leads for my <span className="font-bold">$10K / mo</span> agency has come
                                from <span className="font-bold">Twitter/X</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right section */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs lg:max-w-md lg:mt-0">
                <div className="flex flex-col space-y-4">
                    {/* Lead Info */}
                    <div className="flex items-start space-x-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Peter Dil"
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col">
                            <div className="text-green-500">● New Lead</div>
                            <h4 className="font-bold text-gray-800">Peter Dil</h4>
                            <p className="text-gray-500">@petr_d · 1 minute ago</p>
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <p>
                            <span className="font-semibold">VP of Product</span> at <span className="font-semibold">CooperFi Inc.</span>
                        </p>
                        <p>Email: peterdil@cooperfi.co</p>
                        <p>Industry: Consumer Goods</p>
                        <p>Location: San Francisco, CA</p>
                        <p>Company Size: 500+</p>
                    </div>
                    <button className="bg-black text-white rounded-md py-2 px-4 w-full">
                        Reply in thread →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
