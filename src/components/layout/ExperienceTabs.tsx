import { useState } from "react";

interface ExperienceProps {
      currentTheme:{color:string, backgroundColor: string}
}
const ExperienceTabs = ({currentTheme}:ExperienceProps) => {
  const [activeTab, setActiveTab] = useState<"projects" | "education">("education");

  function renderContent(){

    if(activeTab==="projects"){
      return(
        <div>
          {/* Project 1 */}
          <div className="flex justify-between">
            <div className="my-2 sm:m-2 sm:p-2 md:p-2 md:m-2">
              <div>
                <p className="font-semibold">TypeRacer</p>
                <p className="ml-2 mt-[-4px] font-light text-sm">Typing Speed Web Application</p>
              </div>

              <p className="text-md font-semibold mt-1">Features:</p>
              <ul className="p-2 mt-[-9px] list-disc list-inside text-sm">
                <li>Real-time WPM calculation</li>
                <li>Accuracy and error tracking</li>
                <li>Live typing box with colored feedback</li>
                <li>Tailwind CSS for clean UI</li>
                <li>React + Vite frontend</li>
              </ul>

              <p className="font-mono">Tech Stack: React, TailwindCSS, Vite</p>
              
            </div>
            <div className="m-2 p-2 w-[30%] h-fit font-light text-end">
              <a href="https://www.type.rabindra-thapa.com.np" target="_blank"> Live:🔦</a>
            </div>
          </div>

          <hr className="my-2" />

        </div>

      )
    }
    else{
      return(
        <div>
          <div className="flex justify-between">
            <div className="my-2 sm:m-2 sm:p-2 md:p-2 md:m-2 ">
              <div>
                <p className="font-semibold">Parul University</p>
                <p className="ml-2 mt-[-4px] font-light text-sm">B.Tech CSE</p>
              </div>

              <p className="text-md font-semibold mt-1">Some related Subjects:</p>
              <ul className="p-2 mt-[-9px]">
                <li>Computer Network</li>
                <li>Data Structures</li>
                <li>Software Engineering</li>
                <li>Operating System</li>
              </ul>
              <p className="font-mono">CGPA:7.62 / 10.00</p>

            </div>
            <div className="m-2 p-2 w-[30%] h-fit font-light text-end text-sm">2022-2026  (Running)</div>
          </div>

          <hr/>


          <div className="flex justify-between">
            <div className="sm:m-2 sm:p-2 md:p-2 md:m-2 ">
              <div>
                <p className="font-semibold">Capital College</p>
                <p className="ml-2 mt-[-4px] font-light text-sm">PCM</p>
              </div>

              <p className="text-md font-semibold mt-1">Majors Subjects:</p>
              <ul className="p-2 mt-[-9px]">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
              </ul>
              <p className="font-mono">CGPA: 3.15 / 4.00</p>

            </div>
            <div className="m-2 p-2 w-[30%] h-fit font-light text-end text-sm">2018-2021</div>
          </div>
        </div>
      )
    }
  }



  return(
    <div className="border-[.1px]  m-2 p-2 rounded-xl">
      <div className="p-1 flex justify-between  rounded-lg" 
        style={{backgroundColor : (currentTheme.backgroundColor === "white" ? "#F3F4F6" : "#1F2937")}}>

        <button 
          className="w-[50%]  rounded-lg cursor-pointer" 
          style={{ backgroundColor : (activeTab === "projects" ? (currentTheme.backgroundColor === "white" ? "white" : "black") : "")}} 
          onClick={() => setActiveTab("projects")}>
            Projects
        </button>

        <button 
          className="w-[50%]  rounded-lg cursor-pointer" 
          style={{ backgroundColor : (activeTab === "education" ? (currentTheme.backgroundColor === "white" ? "white" : "black") : "")}} 
          onClick={() => setActiveTab("education")}>
            Education
        </button>
      </div>


      <div>{renderContent()}</div>
    </div>
  )

  
};

export default ExperienceTabs;
