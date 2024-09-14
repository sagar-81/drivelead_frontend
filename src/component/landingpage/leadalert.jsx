const LeadAlertSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        
        {/* Left Section - Text and Bullet Points */}
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-indigo-100 text-indigo-600 font-semibold text-xs px-4 py-2 rounded-full inline-block">
            FOR AGENCIES
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Get realtime alerts for new leads
          </h1>
          <p className="text-lg text-gray-600">
            Describe your product/service and lightscope will start scraping for leads who are ready to buy.
          </p>
          
          {/* Bullet points */}
          <ul className="space-y-3 text-left">
            <li className="flex items-center text-gray-800">
              <span className="text-green-500 mr-2">✔</span> 10x improvement in open rates
            </li>
            <li className="flex items-center text-gray-800">
              <span className="text-green-500 mr-2">✔</span> 4x better conversion than Cold DMs
            </li>
            <li className="flex items-center text-gray-800">
              <span className="text-green-500 mr-2">✔</span> Supports Twitter/X, Reddit, and LinkedIn
            </li>
          </ul>
          
          {/* CTA Button */}
          <button className="bg-black text-white py-3 px-6 rounded-lg mt-4">
            Join now
          </button>
        </div>

        {/* Right Section - Lead Card Mockup */}
        <div className="lg:w-1/2 flex justify-center relative">
          {/* Upper LinkedIn Chat Bubble */}
          <div className="absolute -top-16 lg:-top-12 right-1/4 bg-white shadow-lg p-4 rounded-lg w-72">
            <div className="flex items-center mb-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h4 className="text-gray-900 font-semibold">Amar K</h4>
                <p className="text-gray-500">@a_mk</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              I need to create a waitlist for my product. Cheapest one out there?
            </p>
          </div>

          {/* Lower New Lead Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-80 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg text-gray-900">
                New Lead found for Waitlist
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
                alt="LinkedIn"
                className="w-6"
              />
            </div>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/40"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <h4 className="text-gray-900 font-semibold">Amar K</h4>
                <p className="text-gray-500">@a_mk</p>
              </div>
            </div>
            <div className="text-gray-600">
              <p>Marketing Manager</p>
              <p>Golf Pro Co.</p>
              <p>akamal@gpro.inc</p>
              <p>Consumer Goods</p>
              <p>Sunnyvale, CA</p>
              <p>250+ employees</p>
            </div>
            <button className="bg-black text-white py-3 px-4 rounded-lg w-full text-center">
              Reply in thread →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadAlertSection;
