const Ratio = () => {
    return (
        <div className="flex items-center justify-center mt-10 p-20">
            <div className="text-center space-y-8 px-4">
                {/* Stats Section */}
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
                    {/* Conversion Stat */}
                    <div className="">
                        <h2 className="text-6xl font-medium text-customGray">400%</h2>
                        <p className="mt-2 text-lg ">Better conversion than Cold DM</p>
                    </div>
                    <div className="hidden lg:block lg:border-l lg:border-black lg:h-full md:block md:border-l md:border-gray-400 md:h-full md:w-1"></div>

                    {/* Hours Saved Stat */}
                    <div className="">
                        <h2 className="text-6xl font-medium text-customGray">40+</h2>
                        <p className="mt-2 text-lg ">Hours / mo saved finding leads</p>
                    </div>

                    {/* Open Rate Stat */}
                    <div className="">
                        <h2 className="text-6xl font-medium text-customGray">10x</h2>
                        <p className="mt-2 text-lg ">Higher DM open rate</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="md:text-4xl  mb-4 font-bold" style={{ fontSize: '50px' }}>
                        Tired of scrolling for hours to find leads?
                    </h3>
                    <p className="text-lg ">
                        <span className="font-bold">lightscope</span> saves you{" "}
                        <span className="font-bold">40+ hours / mo</span> by finding
                        customers for you
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Ratio;
