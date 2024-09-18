import Sidebar from '../sidebar/sidebar';



const Findlead = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 dark:bg-black group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1  py-5">
                    <Sidebar />
                    <div className="layout-content-container flex flex-col w-full">
                        <div className="flex flex-1 justify-center">
                            <div className="layout-content-container flex flex-col flex-1">
                                <div className="flex flex-wrap justify-between gap-3 p-4">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight">Find leads</p>
                                        <p className="text-[#647987] text-sm font-normal leading-normal">Search for companies based on the criteria below</p>
                                    </div>
                                </div>
                                <div className="pb-3">
                                    <div className="flex border-b border-[#dce1e5] px-4 gap-8">
                                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111517] text-[#111517] pb-[13px] pt-4" href="#">
                                            <p className="text-[#111517] text-sm font-bold leading-normal tracking-[0.015em]">Company</p>
                                        </a>
                                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#647987] pb-[13px] pt-4" href="#">
                                            <p className="text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">Technology</p>
                                        </a>
                                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#647987] pb-[13px] pt-4" href="#">
                                            <p className="text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">People</p>
                                        </a>
                                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#647987] pb-[13px] pt-4" href="#">
                                            <p className="text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">Funding</p>
                                        </a>
                                        <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#647987] pb-[13px] pt-4" href="#">
                                            <p className="text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">More</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                                    <label className="flex flex-col min-w-40 flex-1">
                                        <input
                                            placeholder="Company name"
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111517] focus:outline-0 focus:ring-0 border border-[#dce1e5] bg-white focus:border-[#dce1e5] h-14 placeholder:text-[#647987] p-[15px] text-base font-normal leading-normal"
                                            value=""
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 items-center">
                                        <div className="text-[#111517]" data-icon="Buildings" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M240,208H224V96a16,16,0,0,0-16-16H144V32a16,16,0,0,0-24.88-13.32L39.12,72A16,16,0,0,0,32,85.34V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H144V96ZM48,85.34,128,32V208H48ZM112,112v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm-32,0v16a8,8,0,0,1-16,0V112a8,8,0,1,1,16,0Zm0,56v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm32,0v16a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-[#111517] text-base font-bold leading-tight">Location</h2>
                                    </div>
                                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 items-center">
                                        <div className="text-[#111517]" data-icon="MapPin" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-[#111517] text-base font-bold leading-tight">Country</h2>
                                    </div>
                                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 items-center">
                                        <div className="text-[#111517]" data-icon="Globe" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-[#111517] text-base font-bold leading-tight">Industry</h2>
                                    </div>
                                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 items-center">
                                        <div className="text-[#111517]" data-icon="List" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-[#111517] text-base font-bold leading-tight">Company size</h2>
                                    </div>
                                    <div className="flex flex-1 gap-3 rounded-lg border border-[#dce1e5] bg-white p-4 items-center">
                                        <div className="text-[#111517]" data-icon="Users" data-size="24px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                <path
                                                    d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <h2 className="text-[#111517] text-base font-bold leading-tight">Technologies</h2>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-3 flex-wrap pr-4">
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">San Francisco</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">New York</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Los Angeles</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex gap-3 p-3 flex-wrap pr-4">
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">US</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">UK</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Canada</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex gap-3 p-3 flex-wrap pr-4">
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Retail</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Finance</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Healthcare</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex gap-3 p-3 flex-wrap pr-4">
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">1-10</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">11-50</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">51-200</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex gap-3 p-3 flex-wrap pr-4">
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Stripe</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">AWS</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                    <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                        <p className="text-[#111517] text-sm font-medium leading-normal">Shopify</p>
                                        <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex px-4 py-3 justify-end">
                                    <button
                                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1d8cd7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
                                    >
                                        <span className="truncate">Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Findlead;
