export default function Header() {
    return (
        <header className="flex flex-col justify-center px-5 py-3 w-full bg-white shadow-sm max-md:px-3 max-md:max-w-full">
        <nav className="flex justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex items-center justify-center px-5 py-1 text-md text-[#DC4A2D] font-medium whitespace-nowrap bg-neutral-200 max-md:px-3">
            Logo
          </div>
          <div className="flex flex-col justify-center my-auto text-lg font-medium whitespace-nowrap text-zinc-400 max-md:max-w-full">
            <div className="flex gap-10 justify-between items-center py-2 pr-4 pl-2 w-full bg-white border border-solid border-neutral-200 rounded-[30px] max-md:flex-wrap max-md:pr-3 max-md:max-w-full">
              <div className="flex flex-col justify-center self-stretch px-3 py-2 text-white bg-[#DC4A2D] border-2 border-red-300 border-solid rounded-[30px]">
                <div className="flex gap-1 justify-center">
                  <img loading="lazy" src="/briefcase-02.svg" alt="Jobs icon" className="shrink-0 my-auto w-4 aspect-square" />
                  <p className="text-sm">Jobs</p>
                </div>
              </div>
              <div className="flex gap-1 justify-center self-stretch my-auto">
                <img loading="lazy" src="/message-square-02.svg" alt="Messages icon" className="shrink-0 self-start aspect-square w-[20px]" />
                <div className="relative">

                <p className="text-[#DC4A2D] rounded-full absolute top-0 right-1 w-1 h-1 bg-[#DC4A2D] "></p>
                </div>
                <p className="text-sm">Messages</p>
              </div>
              <div className="flex gap-2 justify-center self-stretch my-auto">
                <img loading="lazy" src="/coins-hand.svg" alt="Payments icon" className="shrink-0 my-auto w-4 aspect-square" />
                <p className="text-sm">Payments</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center p-2">
            <div className="relative">
               <img loading="lazy" src="/bell-02.svg" alt="Notification icon" className="shrink-1 my-auto w-6 aspect-square" />
              <p className="text-[#DC4A2D] rounded-full absolute top-0 right-1 w-1 h-1 bg-[#DC4A2D] "></p>
            </div>
           
            <div className="flex gap-1 justify-center">
              <img loading="lazy" src="/Rectangle_5.svg" alt="User avatar" className="shrink-1 w-8 h-8 aspect-square" />
              <img loading="lazy" src="/chevron-down.svg" alt="Dropdown icon" className="shrink-1 my-auto w-4 aspect-square" />
            </div>
          </div>
        </nav>
      </header>
    )
}