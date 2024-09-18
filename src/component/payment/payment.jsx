import Sidebar from '../sidebar/sidebar'

const Payment = () => {
    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden size-full  bg-slate-50 group/design-root dark:bg-black">
        <div className="flex flex-col h-full layout-container grow">
          <div className="flex flex-1 gap-1 px-6 py-5">
              <Sidebar/>
            <div className="flex flex-col layout-content-container ">
              <div className="flex flex-wrap justify-between gap-3 p-4">
              
                <div className="flex flex-col gap-3 min-w-72">
                  <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight dark:text-white">Choose a plan</p>
                  <p className="text-[#4e7397] text-sm font-normal leading-normal">All plans come with a 14-day free trial</p>
                </div>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#d0dbe7] bg-slate-50 p-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h1 className="text-[#0e141b] text-base font-bold leading-tight">Starter</h1>
                      <p className="text-slate-50 text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#1980e6] px-3 py-[3px] text-center">Free</p>
                    </div>
                    <p className="flex items-baseline gap-1 text-[#0e141b]">
                      <span className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em]">$0</span>
                      <span className="text-[#0e141b] text-base font-bold leading-tight">/mo</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 100 free credits per month
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • Unlimited leads and accounts
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1 user
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 2 weeks of historical data
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1 data source
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1000 monthly tracked accounts
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#d0dbe7] bg-slate-50 p-6">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#0e141b] text-base font-bold leading-tight">Pro</h1>
                    <p className="flex items-baseline gap-1 text-[#0e141b]">
                      <span className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em]">$50</span>
                      <span className="text-[#0e141b] text-base font-bold leading-tight">/mo</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • $0.25 per credit
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • Unlimited leads and accounts
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1 user
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 2 weeks of historical data
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1 data source
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1000 monthly tracked accounts
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#d0dbe7] bg-slate-50 p-6">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#0e141b] text-base font-bold leading-tight">Enterprise</h1>
                    <span className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em]">Custom</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • Custom pricing
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • Unlimited leads and accounts
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1 user
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 2 weeks of historical data
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1 data source
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#0e141b]">
                      <div className="text-[#0e141b]" data-icon="Check" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                      • 1000 monthly tracked accounts
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4 dark:text-white">Additional credits</h3>
              <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4 dark:text-white">Need more credits? You can purchase additional credits in the billing section.</p>
              <div className="flex px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1980e6] text-slate-50 text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Continue</span>
                </button>
              </div>
            </div>
            <div className="layout-content-container flex flex-col w-[360px]">
              <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 dark:text-white">PixelCraft Pro</h2>
              <p className="text-[#4e7397] text-sm font-normal leading-normal pb-3 pt-1 px-4">Billed monthly</p>
              <div className="flex items-center justify-between gap-4 px-4 bg-slate-50 min-h-14">
                <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">2 PixelCraft design editors</p>
                <div className="shrink-0"><p className="text-[#0e141b] text-base font-normal leading-normal">$30</p></div>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 bg-slate-50 min-h-14">
                <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">1 PixelCraft doc editor</p>
                <div className="shrink-0"><p className="text-[#0e141b] text-base font-normal leading-normal">$5</p></div>
              </div>
              <div className="flex items-center justify-between gap-4 px-4 bg-slate-50 min-h-14">
                <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">Subtotal</p>
                <div className="shrink-0"><p className="text-[#0e141b] text-base font-normal leading-normal">$35</p></div>
              </div>
              <div className="flex px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Next: Payment information</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Payment;
  