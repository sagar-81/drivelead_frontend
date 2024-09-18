import { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';

const mockCompanyData = [
    {
        id: 1,
        name: "TechCorp",
        website: "www.techcorp.com",
        industry: "Software",
        country: "USA",
        state: "California",
        city: "San Francisco",
        location: "500 Market St"
    },
    {
        id: 2,
        name: "Innovate Solutions",
        website: "www.innovatesolutions.com",
        industry: "Technology",
        country: "Canada",
        state: "Ontario",
        city: "Toronto",
        location: "123 King St"
    },
    {
        id: 3,
        name: "Global Dynamics",
        website: "www.globaldynamics.com",
        industry: "Logistics",
        country: "UK",
        state: "London",
        city: "London",
        location: "789 Queen St"
    },
    // Add more mock company data as needed
];

const Findlead = () => {
    const [activeTab, setActiveTab] = useState('Company'); // Default tab is 'Company'
    const [companyList, setCompanyList] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null); // To store selected company details

    // Simulate fetching company data when the "Company" tab is active
    useEffect(() => {
        if (activeTab === 'Company') {
            setCompanyList(mockCompanyData); // Setting the mock data
        }
    }, [activeTab]);

    const handleCompanySelect = (companyId) => {
        const selected = companyList.find(company => company.id === companyId);
        setSelectedCompany(selected); // Set the selected company details
    };

    const renderCompanyList = () => {
        return (
            <div className="flex flex-col space-y-6">
                {companyList.map((company) => (
                    <div key={company.id} className="pb-4 border-b">
                        <button
                            onClick={() => handleCompanySelect(company.id)}
                            className="text-blue-600 underline"
                        >
                            {company.name}
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    const renderCompanyDetails = () => {
        if (!selectedCompany) {
            return null; // If no company is selected, return null
        }

        return (
            <div className="flex flex-col space-y-6">
                <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 border-b">
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>Company Name</span>
                        <input
                            value={selectedCompany.name}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>Website</span>
                        <input
                            value={selectedCompany.website}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>Industry</span>
                        <input
                            value={selectedCompany.industry}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>Country</span>
                        <input
                            value={selectedCompany.country}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>State</span>
                        <input
                            value={selectedCompany.state}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>City</span>
                        <input
                            value={selectedCompany.city}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                    <label className="flex flex-col flex-1 min-w-40">
                        <span>Location</span>
                        <input
                            value={selectedCompany.location}
                            className="px-3 h-10 appearance-none border border-[#dce1e5] text-sm focus:outline-0 placeholder:text-[#8a939e] tracking-[0.015em] rounded-lg"
                            readOnly
                        />
                    </label>
                </div>
            </div>
        );
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Company':
                return (
                    <div>
                        {!selectedCompany ? renderCompanyList() : renderCompanyDetails()}
                    </div>
                );
            case 'Technology':
                return (
                    <div className="px-4 py-3">
                        <p className="text-[#111517] text-lg font-bold">Technology used by companies</p>
                        <p className="text-[#647987]">Here you can search for the technology stack of companies.</p>
                    </div>
                );
            case 'People':
                return (
                    <div className="px-4 py-3">
                        <p className="text-[#111517] text-lg font-bold">People in the company</p>
                        <p className="text-[#647987]">Here you can find people associated with companies.</p>
                    </div>
                );
            case 'Funding':
                return (
                    <div className="px-4 py-3">
                        <p className="text-[#111517] text-lg font-bold">Company Funding</p>
                        <p className="text-[#647987]">Here you can search for company funding details.</p>
                    </div>
                );
            case 'More':
                return (
                    <div className="px-4 py-3">
                        <p className="text-[#111517] text-lg font-bold">More information</p>
                        <p className="text-[#647987]">Find additional details related to the company.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-white size-full group/design-root" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
            <div className="flex flex-col h-full layout-container grow">
               
                <div className="relative flex grow">
                    <div className="grow bg-[#fafafa]">
                        <div className="flex flex-col gap-6 px-10 py-6">
                            <div className="pb-1">
                                <p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight">Find leads</p>
                                <p className="text-[#647987] text-sm font-normal leading-normal">Search for companies based on the criteria below</p>
                            </div>
                        </div>
                        <div className="pb-3">
                            <div className="flex border-b border-[#dce1e5] px-4 gap-8">
                                <a
                                    className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'Company' ? 'border-b-[#111517]' : 'border-b-transparent'} text-sm font-bold leading-normal tracking-[0.015em]`}
                                    href="#"
                                    onClick={() => setActiveTab('Company')}
                                >
                                    <p className={activeTab === 'Company' ? 'text-[#111517]' : 'text-[#647987]'}>Company</p>
                                </a>
                                <a
                                    className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'Technology' ? 'border-b-[#111517]' : 'border-b-transparent'} text-sm font-bold leading-normal tracking-[0.015em]`}
                                    href="#"
                                    onClick={() => setActiveTab('Technology')}
                                >
                                    <p className={activeTab === 'Technology' ? 'text-[#111517]' : 'text-[#647987]'}>Technology</p>
                                </a>
                                <a
                                    className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'People' ? 'border-b-[#111517]' : 'border-b-transparent'} text-sm font-bold leading-normal tracking-[0.015em]`}
                                    href="#"
                                    onClick={() => setActiveTab('People')}
                                >
                                    <p className={activeTab === 'People' ? 'text-[#111517]' : 'text-[#647987]'}>People</p>
                                </a>
                                <a
                                    className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'Funding' ? 'border-b-[#111517]' : 'border-b-transparent'} text-sm font-bold leading-normal tracking-[0.015em]`}
                                    href="#"
                                    onClick={() => setActiveTab('Funding')}
                                >
                                    <p className={activeTab === 'Funding' ? 'text-[#111517]' : 'text-[#647987]'}>Funding</p>
                                </a>
                                <a
                                    className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'More' ? 'border-b-[#111517]' : 'border-b-transparent'} text-sm font-bold leading-normal tracking-[0.015em]`}
                                    href="#"
                                    onClick={() => setActiveTab('More')}
                                >
                                    <p className={activeTab === 'More' ? 'text-[#111517]' : 'text-[#647987]'}>More</p>
                                </a>
                            </div>
                            <div>
                                {renderContent()} {/* Render content based on the active tab */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Findlead;
