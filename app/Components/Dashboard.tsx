import * as React from "react";
import Header from "./Header";
import JobDescription from "./JobDescription";
import Sidebar from "./Sidebar";
import { GoDotFill } from "react-icons/go";

type SkillProps = {
  icon: string;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ icon, name }) => (
  <div className="flex flex-col justify-center px-1 py-1 mt-2 bg-white rounded-md border border-gray-300 border-solid">
    <div className="flex items-center gap-1">
      <img loading="lazy" src={icon} alt={`${name} icon`} className="shrink-0 w-3 aspect-square" />
      <div className="text-xs">{name}</div>
    </div>
  </div>
);

type JobInfoItemProps = {
  label: string;
  value: string;
};

const JobInfoItem: React.FC<JobInfoItemProps> = ({ label, value }) => (
  <div className="flex flex-col">
    <div className="text-xs font-normal text-neutral-500">{label}</div>
    <div className="mt-1 text-xs font-semibold text-ellipsis text-zinc-700">{value}</div>
  </div>
);

type CompanyInfoItemProps = {
  label: string;
  value: string;
};

const CompanyInfoItem: React.FC<CompanyInfoItemProps> = ({ label, value }) => (
  <div className="flex flex-col mb-4">
    <div className="text-xs text-neutral-500">{label}</div>
    <div className="mt-2 text-sm text-ellipsis text-zinc-700">{value}</div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="flex flex-col bg-zinc-50">
      <Header />
      <main className="flex overflow-hidden relative flex-col min-w-[1150px] min-h-[800px] max-md:max-w-full">
    
        <nav className="flex relative flex-col items-start px-20 pt-2 w-full text-sm font-medium bg-white border border-solid border-neutral-200 text-zinc-400 max-md:px-3 max-md:max-w-full">
          <div className="flex gap-5 justify-between py-2 max-w-full w-[500px] max-md:flex-wrap">
            <div className="text-[#DC4A2D]">Job preview</div>
            <div>Applicants</div>
            <div>Match</div>
            <div>Messages</div>
          </div>
          <div className="shrink-0 mt-1 ml-7 h-0.5 bg-red-500 w-[65px] max-md:ml-2.5" />
        </nav>
        
        <section className="flex relative flex-col justify-center w-full max-md:max-w-full">
          <div className="py-px w-full max-md:max-w-full">
            <div className="flex max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                <div className="flex z-10 flex-col items-start self-stretch mt-4 max-md:mt-9 max-md:max-w-full">
                  <div className="flex flex-col ml-20 max-w-full w-[600px]">

                    <div className="flex gap-5 max-md:flex-wrap">
                      <h1 className="text-xl font-semibold text-zinc-800">Senior Product Designer</h1>
                      <div className="flex gap-3 items-center my-auto font-medium">
                        <div className="text-xs font-light text-zinc-500">posted 2 days ago</div>
                        <div className="flex gap-1 pr-2 pl-1.5 text-[10px] leading-5 text-center text-emerald-700 whitespace-nowrap bg-emerald-50 rounded-full border border-emerald-200 border-solid">
                          <GoDotFill className="bottom-[2] aspect-square my-auto" />
                          <div>Open</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 justify-between self-start mt-4 text-sm font-normal text-zinc-600">
                      <div className="flex gap-2">
                        <img loading="lazy" src="/marker-pin-01.svg"
                          alt="Location icon" className="shrink-0 my-auto w-5 aspect-square" />
                        <div>Delaware, USA</div>
                      </div>
                      <div className="flex gap-3 whitespace-nowrap">
                        <img loading="lazy" src="/coins-stacked-03.svg"
                          alt="Salary icon" className="shrink-0 my-auto w-5 aspect-square" />
                        <div>$300k-$400k</div>
                      </div>
                    </div>
                  </div>


                  <hr className="shrink-0 self-stretch mt-2 h-px bg-neutral-200 max-md:max-w-full" />
                  <div className="mt-4 ml-20 max-w-full w-[800px]">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-1">
                      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow font-normal max-md:mt-5">
                          <div className="text-xs text-neutral-500">Skills Required</div>
                          <div className="flex flex-col justify-center mt-1 text-xs font-normal text-center text-slate-700 ">
                            <Skill icon="/figma_image.svg"
                              name="Figma" />
                            <Skill icon="/adobe_ill.svg"
                              name="Adobe Illustrator" />
                            <Skill icon="/adobe_xd.svg"
                              name="Adobe XD" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <JobInfoItem label="Preferred Language" value="English" />
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <JobInfoItem label="Type" value="Full time" />
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <JobInfoItem label="Years of Experience" value="3+ Years of Experience" />
                      </div>
                    </div>
                  </div>
                  <hr className="shrink-0 self-stretch mt-4 h-px bg-neutral-200 max-md:max-w-full" />
                  <JobDescription />

                  <hr className="shrink-0 self-stretch mt-6 h-px bg-neutral-200 max-md:max-w-full" />
                  <div className="flex flex-col justify-center mt-6 ml-20 max-w-full font-normal w-[700px]">
                    <div className="flex flex-col justify-center py-1 max-w-full text-md whitespace-nowrap text-zinc-600 w-[140px]">
                      <div className="flex gap-3 justify-center mr-7">
                        <img loading="lazy" src="/Atlassian_image.svg"
                          alt="Atlassian logo" className="shrink-0 w-6 aspect-square" />
                        <div className="my-auto">Atlassian</div>
                      </div>
                    </div>

                    <div className="flex flex-row flex-wrap content-start mt-4 gap-12 max-md:gap-0 max-md:max-w-full">
                      <div>
                        <CompanyInfoItem label="Company size" value="1k - 2k Employees" />
                        <CompanyInfoItem label="Sector" value="Information Technology, Infrastructure" />
                        <CompanyInfoItem label="Founded In" value="2019" /> 
                      </div>
                      <div>
                        <CompanyInfoItem label="Type" value="Private" />
                        <CompanyInfoItem label="Funding" value="Bootstrapped" />
                        <CompanyInfoItem label="Founded By" value="Scott Farquhar, Mike Cannon-Brookes" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
              <Sidebar />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
