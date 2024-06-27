type JobStatusItemProps = {
  icon: string;
  label: string;
  value: number;
};

const JobStatusItem: React.FC<JobStatusItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center gap-2 justify-between w-full">
    <div className="flex items-center gap-2.5 p-2.5 text-base font-normal text-zinc-600">
        <img src={icon} alt={`${label} icon`} className="shrink-0 my-auto w-5 aspect-square" />
        <div>{label}</div>
    </div>
    <div className="flex items-center px-2.5 py-1.5 my-auto text-lg font-semibold text-neutral-700">{value}</div>
  </div>
);


export default function Sidebar() {
    
    return (
        <aside className="flex flex-col w-[409px] h-[1150px] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-6 pt-9 pb-20 w-full border-l border-solid shadow-sm bg-zinc-50 border-neutral-200 max-md:px-5">
                <div className="flex flex-col">
                    <div className="flex gap-4 items-center text-base font-normal">
                      <button className="flex gap-2.5 justify-center px-8 py-3 text-[#DC4A2D] bg-red-50 rounded-lg border border-red-500 border-solid max-md:px-5">
                        <img loading="lazy" src="/trash-03.svg" alt="Delete icon" className="shrink-0 self-start w-5 aspect-square" />
                        Delete job
                      </button>
                      <button className="flex gap-2.5 justify-center px-8 py-3 text-white bg-[#DC4A2D] rounded-lg border-2 border-red-200 border-solid max-md:px-5" >
                        <img loading="lazy" src="/edit-02.svg" alt="Edit icon" className="shrink-0 my-auto w-4 aspect-square" />
                       Edit job
                      </button>
                    </div>
                    <div className="flex flex-col p-3 mt-6 whitespace-nowrap ">
                      <JobStatusItem icon="/users-01.svg" label="Applicants" value={400} />
                      <hr className="shrink-0 mt-4 h-px bg-neutral-200" />
                        <JobStatusItem icon="/user-check-01.svg" label="Matches" value={100} />
                      <hr className="shrink-0 mt-4 h-px bg-neutral-200" />
                      <JobStatusItem icon="/message-square-01.svg" label="Messages" value={147} />
                      <hr className="shrink-0 mt-4 h-px bg-neutral-200" />
                      <JobStatusItem icon="/eye.svg" label="Views" value={800} />
                    </div>
                </div>
            </div>
        </aside>
    )
}