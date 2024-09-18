import Sidebar from '../sidebar/sidebar'

const Lead = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" >
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <Sidebar />
                    <div className="layout-content-container flex flex-col flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72">Leads</p>
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
                            <div className="flex overflow-hidden rounded-xl border border-[#dce1e5] bg-white">
                                {/* <table className="flex-1">
                                    <thead>
                                        <tr className="bg-white">
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Name</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Company</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Title</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Email</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Phone</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Country</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">State</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">City</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Zip</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">
                                                Last contacted
                                            </th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">
                                                Lead score
                                            </th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 px-4 py-3 text-left text-[#111517] w-[400px] text-sm font-medium leading-normal">Owner</th>
                                            <th className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 px-4 py-3 text-left text-[#111517] w-60 text-[#647987] text-sm font-medium leading-normal">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Loretta Phillips
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Vivint Solar
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Senior Sales Consultant
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                loretta.phillips@gmail.com
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                801-234-5678
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                United States
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Utah</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Provo</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">84601</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                2 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]" style={{ 'width': 90.9091 }}></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">80</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">You</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 h-[72px] px-4 py-2 w-60 text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">
                                                View details
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Andrew Nguyen
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Acme Co</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Software Engineer
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                andrew.nguyen@acme.co
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                415-123-4567
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                United States
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                California
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                San Francisco
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">94107</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                3 days ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]" style={{ "width": 62.5 }}></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">55</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Jane Smith
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1560 h-[72px] px-4 py-2 w-60 text-[#647987] text-sm font-bold leading-normal tracking-[0.015em]">
                                                View details
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Tina Patel
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Clearview AI
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Product Manager
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                tina.patel@clearview.ai
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                647-987-6543
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Canada</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Ontario</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Toronto</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">M5V 1M2</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
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
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-120 h-[72px] px-4 py-2 w-[400px] text-[#111517] text-sm font-normal leading-normal">
                                                Diego Fernandez
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-240 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Banco Santander
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-360 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                Investment Analyst
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-480 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                diego.fernandez@santander.com
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-600 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                +34 912 34 56 78
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-720 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Spain</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-840 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">Madrid</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-960 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">28006</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1080 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                1 day ago
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1200 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">90%</td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1320 h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-[88px] overflow-hidden rounded-sm bg-[#dce1e5]"><div className="h-1 rounded-full bg-[#111517]"></div></div>
                                                    <p className="text-[#111517] text-sm font-medium leading-normal">NaN</p>
                                                </div>
                                            </td>
                                            <td className="table-86a67472-5c35-4f76-9ba7-804f81731198-column-1440 h-[72px] px-4 py-2 w-[400px] text-[#647987] text-sm font-normal leading-normal">
                                                View details
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#dce1e5]">
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
                                        </tr>

                                    </tbody>
                                </table> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Lead