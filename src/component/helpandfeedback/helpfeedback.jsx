import Sidebar from '../sidebar/sidebar'

const HelpFeedback = () => {
    return (
        <div className="relative flex size-full min-h-screen flex-col bg-slate-50 dark:bg-black group/design-root overflow-x-hidden" >
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1  py-5">
                    <Sidebar />
                    <div className="layout-content-container flex flex-col flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111517] tracking-light text-[32px] font-bold leading-tight min-w-72 dark:text-white">Help & Feedback</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpFeedback