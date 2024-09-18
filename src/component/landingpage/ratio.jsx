import React from 'react';
import CountUp from 'react-countup';

const Ratio = () => {
    return (
        <div className="flex items-center justify-center p-20 mt-10">
            <div className="px-4 space-y-8 text-center">
                {/* Stats Section */}
                <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-12">
                    {/* Conversion Stat */}
                    <div>
                        <h2 className="text-6xl font-medium text-customGray">
                            <CountUp end={400} duration={5} />%
                        </h2>
                        <p className="mt-2 text-lg">Better conversion than Cold DM</p>
                    </div>
                    <div className="hidden lg:block lg:border-l lg:border-black lg:h-full md:block md:border-l md:border-gray-400 md:h-full md:w-1"></div>

                    {/* Hours Saved Stat */}
                    <div>
                        <h2 className="text-6xl font-medium text-customGray">
                            <CountUp end={40} duration={5} />+
                        </h2>
                        <p className="mt-2 text-lg">Hours / mo saved finding leads</p>
                    </div>

                    {/* Open Rate Stat */}
                    <div>
                        <h2 className="text-6xl font-medium text-customGray">
                            <CountUp end={10} duration={5} />x
                        </h2>
                        <p className="mt-2 text-lg">Higher DM open rate</p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h3 className="mb-4 font-bold md:text-4xl" style={{ fontSize: '50px' }}>
                        Tired of scrolling for hours to find leads?
                    </h3>
                    <p className="text-lg">
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
