import { useState } from 'react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';  // Import `useNavigate` for redirection
import houseIcon from '../../assets/dashboard/home.svg';
import leadIcon from '../../assets/dashboard/lead.svg';
import arrowIcon from '../../assets/dashboard/arrow.svg';  // Ensure this path is correct
import campaigns from '../../assets/dashboard/campaign.svg';
import report from '../../assets/dashboard/reports.svg';
import payment from '../../assets/dashboard/payment.svg';
import findlead from '../../assets/dashboard/findlead.svg';
import setting from '../../assets/dashboard/setting.svg';
import help from '../../assets/dashboard/help.svg';
import logoutIcon from '../../assets/dashboard/logout.svg';  // Ensure this path is correct
import { CSSTransition } from 'react-transition-group';


const Sidebar = () => {
  const [open, setOpen] = useState(true);  // Control for sidebar toggle
  const [showLogoutModal, setShowLogoutModal] = useState(false); // Control for logout modal
  
  const location = useLocation(); // Hook to access location pathname
  const navigate = useNavigate(); // Hook to programmatically navigate

  const Menus = [
    { title: "Home", src: houseIcon, path: "/dashboard" },
    { title: "Findlead", src: findlead, path: "/Findlead" },
    { title: "Leads", src: leadIcon, path: "/lead" },
    { title: "Campaigns", src: campaigns, path: "/campaigns" },
    { title: "Reports", src: report, path: "/report" },
    { title: "Payment", src: payment, path: "/payment" },
  
  ];

  const BottomMenus = [
    { title: "Settings", src: setting, path: "/setting" },
    { title: "Help & Feedback", src: help, path: "/helpfeedback" },
    { title: "Log Out", src: logoutIcon, isLogout: true }, // Corrected icon for logout
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);
    navigate('/login'); // Redirect to login
  };

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20"}bg-customGray200 dark:bg-black pt-3 relative duration-300 flex flex-col`}
      >
        {/* Toggle button */}
        <img
          src={arrowIcon}  // Use arrowIcon for collapse/expand button
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        
        {/* User info (visible only when sidebar is open) */}
        {open && (
          <div className="flex flex-col px-4 mb-4">
            <h1 className='text-[#111517] text-base font-semibold leading-normal dark:text-white'>Abhijit Dengale</h1>
            <p className='text-[#647987] text-sm font-normal leading-normal'>Plan type</p>
          </div>
        )}
        
        {/* Main Menus */}
        <ul className="flex-1 pt-6">
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-customGray200 dark:hover:bg-[#1f2937] text-gray-300 text-sm items-center gap-x-4
                  ${location.pathname === menu.path ? "bg-customGray200 dark:bg-[#1f2937] text-white" : ""}`}
              >
                <img src={menu.src} alt={menu.title} className="w-6 h-6 dark:bg-white dark:rounded-lg" />
                <p className={`text-[#111517] text-sm font-medium leading-normal ${!open && 'hidden'} dark:text-white`}>
                  {menu.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Menus */}
        <div className="mt-auto">
          <ul>
            {BottomMenus.map((menu, index) => (
              <li key={index}>
                {menu.isLogout ? (
                  <div
                    onClick={() => setShowLogoutModal(true)}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-customGray200 dark:hover:bg-[#1f2937] text-gray-300 text-sm items-center gap-x-4`}
                  >
                    <img src={menu.src} alt={menu.title} className="w-6 h-6 dark:bg-white" />
                    <p className={`text-[#111517] text-sm font-medium leading-normal ${!open && 'hidden'} dark:text-white`}>
                      {menu.title}
                    </p>
                  </div>
                ) : (
                  <Link
                    to={menu.path}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-customGray200 dark:hover:bg-[#1f2937] text-gray-300 text-sm items-center gap-x-4
                    ${location.pathname === menu.path ? "bg-customGray200 dark:bg-[#1f2937] text-white" : ""}`}
                  >
                    <img src={menu.src} alt={menu.title} className="w-6 h-6 dark:bg-white" />
                    <p className={`text-[#111517] text-sm font-medium leading-normal ${!open && 'hidden'} dark:text-white`}>
                      {menu.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Confirmation Modal */}
        <CSSTransition in={showLogoutModal} timeout={300} classNames="fade" unmountOnExit>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-5 bg-white rounded-lg dark:bg-black">
              <h3 className="text-lg font-medium dark:text-white">Are you sure you want to logout?</h3>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 mr-2 text-black bg-gray-300 rounded-md"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded-md"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Sidebar;
