import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-or to-gray-100 py-10 p-14">
            <div className="mx-auto px-4 grid grid-cols-2 lg:grid-cols-2 gap-16 h-60 ">

                {/* Left Section - Brand Info */}
                <div className="space-y-3 flex flex-col justify-around">
                    <div>
                        <h2 className="text-4xl font-bold text-black">lightscope</h2>
                        <p className="text-1xl text-gray-600 font-serif">Find your customers in seconds</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-serif">
                            Copyright © 2024 Aureli LLC.
                        </p>
                        <p className="text-sm text-gray-500 font-serif">
                            All Rights Reserved.
                        </p>
                    </div>
                </div>

                {/* Middle Section - Links */}
                <div className="grid grid-cols-3 mt-10">
                    {/* Column 1 */}
                    <div className="space-y-2">
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500">Features</a></div>
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500">Pricing</a></div>
                        <Link   to="faq"
                                smooth={true}
                                duration={500}><div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500">FAQ</a>
                        </div></Link>
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500">Privacy Policy</a></div>
                        <div className="mt-2 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500">Terms</a></div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-2">
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500 ">Facebook</a></div>
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500 ">Pinterest</a></div>
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500 ">Twitter</a></div>
                        <div className="mt-3 text-1xl"> <a href="#" className="text-gray-800 hover:text-gray-500 ">LinkedIn</a></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
