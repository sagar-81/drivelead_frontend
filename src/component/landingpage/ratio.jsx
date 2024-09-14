const Ratio = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="text-center space-y-8 px-4">
                {/* Stats Section */}
                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
                    {/* Conversion Stat */}
                    <div className="">
                        <h2 className="text-6xl font-medium text-customGray">400%</h2>
                        <p className="mt-2 text-lg font-serif">Better conversion than Cold DM</p>
                    </div>

                    {/* Hours Saved Stat */}
                    <div className="">
                        <h2 className="text-6xl font-medium text-customGray">40+</h2>
                        <p className="mt-2 text-lg font-serif">Hours / mo saved finding leads</p>
                    </div>

                    {/* Open Rate Stat */}
                    <div className="">
                        <h2 className="text-6xl font-medium text-customGray">10x</h2>
                        <p className="mt-2 text-lg font-serif">Higher DM open rate</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="text-3xl md:text-4xl font-serif mb-4">
                        Tired of scrolling for hours to find leads?
                    </h3>
                    <p className="text-lg font-serif">
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
