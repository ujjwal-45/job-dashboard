export default function JobDescription() {
    return (
        <div className="flex flex-col mt-6 ml-20 max-w-full font-normal w-[526px]">
            <h2 className="justify-center self-start text-sm text-zinc-500">About the job</h2>
            <div className="mt-2 text-sm leading-7 whitespace-nowrap text-ellipsis text-zinc-700 max-md:max-w-full">
                <div>
                    <ul className="list-decimal ml-5">
                        <li>Handle the UI/UX research design</li>
                        <li>Work on researching on latest web applications designs & trends</li>
                        <li>Work on conceptualizing and visualizing</li>
                        <li>Work on creating graphics content and other graphic related works</li>
                    </ul>
                </div>
                      
                <div>
                    <h2>Benefits:</h2>
                    <ul className="list-disc ml-5">
                        <li>Health Insurance</li>
                        <li>Provident Fund</li>
                    </ul>
                </div>
                <div>
                    <h2>Schedule:</h2>
                    <ul className="list-disc ml-5">
                        <li>Day shift</li>
                    </ul>
                </div>
                <div>
                    <h2>Supplemental pay types:</h2>
                    <ul className="list-disc ml-5">
                        <li>Performance bonus</li>
                        <li>Yearly bonus</li>
                    </ul>
                </div>
                    <h2>Work Location:In person</h2>
                </div>
        </div>
    )
}