import Sidebar from '../sidebar/sidebar'

const Lead = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-white dark:bg-black group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 py-5">
                    <Sidebar />
                    <div className="layout-content-container flex flex-col">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72 dark:text-white">Leads</p>
                            <button
                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f3f4] text-[#111517] text-sm font-medium leading-normal"
                            >
                                <span className="truncate">Import Leads</span>
                            </button>
                        </div>
                        <div className="flex gap-3 p-3 flex-wrap pr-4">
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                <p className="text-[#111517] text-sm font-medium leading-normal">All leads</p>
                                <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Contacted</p>
                                <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Added in last 7 days</p>
                                <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Added in last 30 days</p>
                                <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Assigned to me</p>
                                <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f3f4] pl-4 pr-2">
                                <p className="text-[#111517] text-sm font-medium leading-normal">Add filter</p>
                                <div className="text-[#111517]" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="px-4 py-3 @container">
                            <div className="flex overflow-hidden rounded-xl border border-[#dce1e5] bg-white dark:bg-black">
                                <table className="flex-1">
                                    <thead>
                                        <tr className="bg-white dark:bg-black">
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">Name</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">Company</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">Title</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Email</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">Phone</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">Country</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">State</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal dark:text-white">City</th>
                                            {/* <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Zip</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">
                                                Last contacted
                                            </th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">
                                                Lead score
                                            </th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Owner</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 px-4 py-3 text-left text-[#111517] w-60 text-[#647987] text-sm font-medium leading-normal">
                                                Action
                                            </th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal dark:text-white">
                                                Loretta Phillips
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                Vivint Solar
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                Senior Sales Consultant
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                loretta.phillips@gmail.com
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                801-234-5678
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                United States
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">Utah</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">Provo</td>
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">84601</td> */}
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                2 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]" style={{ 'width': 90.909 }}></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">80</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">You</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 h-[72px] px-4 py-2 w-60 text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">
                                                View details
                                            </td> */}
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal  dark:text-white">
                                                Andrew Nguyen
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">Acme Co</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                Software Engineer
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                andrew.nguyen@acme.co
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                415-123-4567
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                United States
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                California
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                San Francisco
                                            </td>
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">94107</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                3 days ago
                                            </td> */}
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]" style={{ width: 62.5 }}></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">55</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Jane Smith
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 h-[72px] px-4 py-2 w-60 text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">
                                                View details
                                            </td> */}
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal  dark:text-white">
                                                Tina Patel
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                Clearview AI
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                Product Manager
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                tina.patel@clearview.ai
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">
                                                647-987-6543
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">Canada</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">Ontario</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal  dark:text-white">Toronto</td>
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">M5V 1M2</td> */}
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                5 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]" style={{ width: 79.5455 }}></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">70</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                John Johnson
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 h-[72px] px-4 py-2 w-60 text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">
                                                View details
                                            </td> */}
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal dark:text-white">
                                                Diego Fernandez
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                Banco Santander
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                Investment Analyst
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                diego.fernandez@santander.com
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                +34 912 34 56 78
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">Spain</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">Madrid</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">28006</td>
                                            {/* <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">
                                                1 day ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal dark:text-white">90%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal dark:text-white">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td> */}
                                        </tr>
                                        {/* <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">Chen Wei</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Alibaba Group
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Business Development
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                chen.wei@alibaba.com
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +86 21 1234 5678
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">China</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Shanghai</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">200000</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                4 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">60%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr> */}
                                        {/* <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Anna Kuznetsova
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Yandex</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                UX Designer
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                anna.kuznetsova@yandex.ru
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +7 495 123-45-67
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Russia</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Moscow</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">101000</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                2 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">75%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr> */}
                                        {/* <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Hans Müller
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Volkswagen
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Senior Account Manager
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                hans.mueller@volkswagen.de
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +49 531 123456
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Germany</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Wolfsburg
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">38440</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                3 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">85%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr> */}
                                        {/* <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Isabel Fernández
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Telefónica
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Marketing Specialist
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                isabel.fernandez@telefonica.es
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +34 91 234 56 78
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Spain</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Madrid</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">28013</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                6 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">65%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr> */}
                                        {/* <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Yusuke Tanaka
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Sony Corporation
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Product Manager
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                yusuke.tanaka@sony.co.jp
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +81 3 1234 5678
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Japan</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Tokyo</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">100-0001</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                1 day ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">95%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr> */}
                                        {/* <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Lucas Silva
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Banco do Brasil
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Financial Advisor
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                lucas.silva@bb.com.br
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +55 61 1234 5678
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Brazil</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Brasília</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                70000-000
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                4 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">75%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                            {/* <style>
                                @container(max-width:120px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-120{display: none;}}
                                @container(max-width:240px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-240{display: none;}}
                                @container(max-width:360px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-360{display: none;}}
                                @container(max-width:480px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-480{display: none;}}
                                @container(max-width:600px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-600{display: none;}}
                                @container(max-width:720px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-720{display: none;}}
                                @container(max-width:840px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-840{display: none;}}
                                @container(max-width:960px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-960{display: none;}}
                                @container(max-width:1080px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-1080{display: none;}}
                                @container(max-width:1200px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-1200{display: none;}}
                                @container(max-width:1320px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-1320{display: none;}}
                                @container(max-width:1440px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-1440{display: none;}}
                                @container(max-width:1560px){.table - 86a67472-5c35-4f76-9ba7-804f81731198-column-1560{display: none;}}
                            </style> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lead