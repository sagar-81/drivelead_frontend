const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-or to-gray-100 py-10">
            <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-2 gap-8 h-60 ">

                {/* Left Section - Brand Info */}
                <div className="space-y-3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-black">lightscope</h2>
                        <p className="text-gray-600 font-serif">Find your customers in seconds</p>
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
                <div className="grid grid-cols-4 gap-x-12 gap-y-4">
                    {/* Column 1 */}
                    <div className="space-y-2">
                        <div className="mt-2"> <a href="#" className="text-gray-800 hover:text-gray-500">Features</a></div>
                        <div className="mt-2"> <a href="#" className="text-gray-800 hover:text-gray-500">Pricing</a></div>
                        <div className="mt-2"> <a href="#" className="text-gray-800 hover:text-gray-500">FAQ</a></div>
                        <div className="mt-2"> <a href="#" className="text-gray-800 hover:text-gray-500">Privacy Policy</a></div>
                        <div className="mt-2"> <a href="#" className="text-gray-800 hover:text-gray-500">Terms</a></div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-2">
                        <div> <a href="#" className="text-gray-800 hover:text-gray-500">Facebook</a></div>
                        <div> <a href="#" className="text-gray-800 hover:text-gray-500">Pinterest</a></div>
                        <div> <a href="#" className="text-gray-800 hover:text-gray-500">Twitter</a></div>
                        <div> <a href="#" className="text-gray-800 hover:text-gray-500">LinkedIn</a></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
