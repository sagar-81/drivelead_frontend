import { useState } from 'react';
import houseIcon from '../../assets/dashboard/home.svg';
import leadIcon from '../../assets/dashboard/lead.svg';
import campaigns from '../../assets/dashboard/campaigns.svg';
import report from '../../assets/dashboard/report.svg';
import setting from '../../assets/dashboard/setting.svg';
import help from '../../assets/dashboard/help.svg';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const Sidebar = () => {
  // const [open, setOpen] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const Menus = [
    { title: "Home", src: houseIcon, path: "/dashboard" },
    { title: "Leads", src: leadIcon, path: "/lead" },
    { title: "Campaigns", src: campaigns, path: "/campaigns" },
    { title: "Reports", src: report, path: "/report" },
  ];

  const BottomMenus = [
    { title: "Settings", src: setting, path: "/setting" },
    { title: "Help & Feedback", src: help, path: "/helpfeedback" },
    { title: "Log Out", src: help, isLogout: true },
  ];

  const handleLogout = () => {
    setShowLogoutModal(false);
    location('/login');
  };


  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20 "
          } bg-white dark:bg-black pt-3 relative duration-300 flex flex-col `}
      >
        {/* <img
          src={leadIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
               border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex flex-col">
          <h1 className='text-[#111517] text-base font-semibold leading-normal dark:text-white'>Abhijit Dengale</h1>
          <p className='text-[#647987] text-sm font-normal leading-normal'>plan type</p>
        </div>
        {/* Main Menus */}
        <ul className="pt-6 flex-1">
          {Menus.map((menu, index) => (
            <li key={index}>
              <Link
                to={menu.path}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-customGray200 text-gray-300 text-sm items-center gap-x-4
                  ${location.pathname === menu.path ? "bg-customGray200 text-white" : ""}`}
              >
                <img src={menu.src} alt={menu.title} className="w-6 h-6 dark:bg-white dark:rounded-lg" />
                <p className={`text-[#111517] text-sm font-medium leading-normal ${!open && 'hidden'} dark:text-white`}>{menu.title}</p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <ul>
            {BottomMenus.map((menu, index) => (
              <li key={index}>
                {menu.isLogout ? (
                  <div
                    onClick={() => setShowLogoutModal(true)}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-customGray200 text-gray-300 text-sm items-center gap-x-4
                    `}
                  >
                    <img src={menu.src} alt={menu.title} className="w-6 h-6 dark:bg-white" />
                    <p className={`text-[#111517] text-sm font-medium leading-normal ${!open && 'hidden'} dark:text-white`}>{menu.title}</p>
                  </div>
                ) : (
                  <Link
                    to={menu.path}
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-customGray200 text-gray-300 text-sm items-center gap-x-4
                    ${location.pathname === menu.path ? "bg-customGray200 text-white" : ""}`}
                  >
                    <img src={menu.src} alt={menu.title} className="w-6 h-6 dark:bg-white" />
                    <p className={`text-[#111517] text-sm font-medium leading-normal ${!open && 'hidden'} dark:text-white`}>{menu.title}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Confirmation Modal */}
        <CSSTransition in={showLogoutModal} timeout={300} classNames="fade" unmountOnExit>
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white dark:bg-black p-5 rounded-lg">
              <h3 className="text-lg font-medium dark:text-white">Are you sure you want to logout ?</h3>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-300 text-black px-4 py-2 rounded-md mr-2"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md "
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
  )
}

export default Sidebar;
