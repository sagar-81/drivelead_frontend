// import { Link } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'
import { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi';
const Dashboard = () => {

    const savedTheme = localStorage.getItem('theme');

    const [theme, setTheme] = useState(savedTheme);

    // Retrieve theme from local storage
    // useEffect(() => {
    //     const savedTheme = localStorage.getItem('theme');
    //     console.log("=> => => => => => => => => => => => => => => => => => => => => => => =>"+savedTheme);

    //     if (savedTheme) {
    //         setTheme(savedTheme);
    //     } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         setTheme("dark");
    //     }
    // }, []);

    useEffect(() => {
        // Apply theme to document
        if (theme === "dark") {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white dark:bg-black group/design-root overflow-x-hidden" >
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1  py-5">
                    <Sidebar />
                    <div className="layout-content-container flex flex-col w-full">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72 dark:text-white">Dashboard</p>
                            <button
                                className="flex items-center justify-center p-2 bg-blue-50 dark:bg-gray-700 rounded-full"
                                onClick={handleThemeSwitch}
                            >
                                {theme === 'dark' ? (
                                    <FiSun className="text-yellow-500 w-6 h-6" />  // Sun icon for light theme
                                ) : (
                                    <FiMoon className="text-gray-900 w-6 h-6" />  // Moon icon for dark theme
                                )}
                            </button>
                        </div>
                        <div className="flex gap-3 p-3 flex-wrap pr-4">
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-4">
                                <p className="text-[#111517] text-sm font-medium leading-normal">All</p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-4">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Leads</p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-4">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Companies</p>
                            </div>
                        </div>
                        <h3 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 dark:text-white">Lead generation progress</h3>
                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dce1e5]">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Leads generated</p>
                                <p className="text-[#111517] tracking-light text-2xl font-bold leading-tight dark:text-white">24</p>
                            </div>
                            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dce1e5]">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Leads added to list</p>
                                <p className="text-[#111517] tracking-light text-2xl font-bold leading-tight dark:text-white">0</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-4">
                            <div className="flex gap-6 justify-between">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Lead generation progress</p>
                                <p className="text-[#111517] text-sm font-normal leading-normal dark:text-white">90%</p>
                            </div>
                            <div className="rounded bg-[#dce1e5] dark:bg-slate-500"><div className="h-2 rounded bg-[#111517] dark:bg-white" style={{ width: " 90%" }}></div></div>
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-customBlue text-white text-sm font-bold leading-normal tracking-[0.015em]"
                            >
                                <span className="truncate">Start lead generation</span>
                            </button>
                        </div>
                        <h3 className="text-[#111517] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 dark:text-white">Key metrics</h3>
                        <div className="flex flex-wrap gap-4 p-4">
                            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dce1e5]">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Total leads</p>
                                <p className="text-[#111517] tracking-light text-2xl font-bold leading-tight dark:text-white">1.8K</p>
                            </div>
                            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dce1e5]">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Total companies</p>
                                <p className="text-[#111517] tracking-light text-2xl font-bold leading-tight dark:text-white">1.8K</p>
                            </div>
                            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dce1e5]">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Leads in last 30 days</p>
                                <p className="text-[#111517] tracking-light text-2xl font-bold leading-tight dark:text-white">1.8K</p>
                            </div>
                            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dce1e5]">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Companies in last 30 days</p>
                                <p className="text-[#111517] tracking-light text-2xl font-bold leading-tight dark:text-white">1.8K</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 px-4 py-6">
                            <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#dce1e5] p-6">
                                <p className="text-[#111517] text-base font-medium leading-normal dark:text-white">Leads added by day</p>
                                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                                    <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                        <path
                                            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                                            fill="url(#paint0_linear_1131_5935)"
                                        ></path>
                                        <path
                                            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                                            stroke="#647987"
                                            strokeWidth={3}
                                            strokeLinecap="round"
                                        ></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#f0f3f4"></stop>
                                                <stop offset="1" stopColor="#f0f3f4" stopOpacity={0}></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="flex justify-around">
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 1</p>
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 5</p>
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 10</p>
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 15</p>
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 20</p>
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 25</p>
                                        <p className="text-[#647987] text-[13px] font-bold leading-normal tracking-[0.015em]">Jul 30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard