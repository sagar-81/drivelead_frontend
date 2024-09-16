import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


const PricingTable = () => {
    return (
        <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={"show"} className="bg-gray-50 py-16 min-h-screen" id="pricing">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                <div className="bg-center p-5 text-center mb-10">
                    <h1 className="" style={{ fontSize: '50px' }}>Simple, scalable pricing</h1>
                    <h3 className="text-2xl">🎁 All plans are currently 30% off for the first 50 customers (20 left)</h3>
                </div>
                {/* Grid for the pricing table */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
                    {/* Basic Plan */}
                    <div className="bg-white shadow-lg rounded-lg p-8 transition-all duration-300 transform hover:scale-110 ">
                        <h3 className="text-lg  text-gray-600 transition-colors duration-300">
                            For individuals
                        </h3>
                        <h2 className="text-3xl  text-black mt-4">Basic</h2>
                        <p className="text-sm text-gray-500  mt-2">Perfect for smaller projects</p>
                        <p className="text-4xl  text-black mt-4">$39 <span className="text-xl">/ mo</span></p>

                        <ul className="mt-6 space-y-2">
                            <li className='' >✔  250 lead credits / mo</li>
                            <li className='' >✔  Supports Twitter/X</li>
                            <li className='' >✔  Realtime Notifications</li>
                            <li className='' >✔  AI Replies</li>
                            <li className='' >✖  Basic Analytics</li>
                            <li className='' >✖  Supports Reddit</li>
                            <li className='' >✖  Supports LinkedIn</li>
                            <li className='' >✖  Automated follow-up</li>
                        </ul>

                        <button className="mt-8 w-full bg-black text-white py-3  rounded-lg  hover:bg-gray-800 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Launch Plan */}
                    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg rounded-lg p-8 text-white transition-all duration-300 transform hover:scale-110 ">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg ">For startups/agencies</h3>
                            <span className="bg-customPurple px-3 py-1 rounded text-xs font-medium">Popular</span>
                        </div>
                        <h2 className="text-3xl  mt-4">Launch</h2>
                        <p className="text-sm mt-2">Perfect for growth stage companies</p>
                        <p className="text-4xl  mt-4">$79 <span className="text-xl">/ mo</span></p>

                        <ul className="mt-6 space-y-2">
                            <li className=''>✔  1000 lead credits / mo</li>
                            <li className=''>✔  Supports Twitter/X</li>
                            <li className=''>✔  Realtime Notifications</li>
                            <li className=''>✔  AI Replies</li>
                            <li className=''>✔  Basic Analytics</li>
                            <li className=''>✔  Supports Reddit</li>
                            <li className=''>✖  Supports LinkedIn</li>
                            <li className=''>✖  Automated follow-up</li>
                        </ul>

                        <button className="mt-8 w-full  bg-white text-black py-3 rounded-lg hover:bg-gray-200 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Scale Plan */}
                    <div className="bg-white shadow-lg rounded-lg p-8 transition-all duration-300 transform hover:scale-110 ">
                        <h3 className="text-lg  text-gray-600">For enterprises</h3>
                        <h2 className="text-3xl  text-black mt-4">Scale</h2>
                        <p className="text-sm text-gray-500  mt-2">For larger scale companies</p>
                        <p className="text-4xl  text-black mt-4">$299 <span className="text-xl">/ mo</span></p>

                        <ul className="mt-6 space-y-2 text-gray-700">
                            <li className=''>✔  5000 lead credits / mo</li>
                            <li className=''>✔  Supports Twitter/X</li>
                            <li className=''>✔  Realtime Notifications</li>
                            <li className=''>✔  AI Replies</li>
                            <li className=''>✔  Advanced Analytics</li>
                            <li className=''>✔  Supports Reddit</li>
                            <li className=''>✔  Supports LinkedIn</li>
                            <li className=''>✔  Automated follow-up</li>
                        </ul>

                        <button className="mt-8 w-full  bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
  </motion.div>
    );
};

export default PricingTable;
