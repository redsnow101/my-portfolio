import cv from '../../assets/Academic_CV_July.pdf'
import Social from '../ui/Social'

interface InfoCardProps{
  currentTheme : {color:string, backgroundColor:string}
}

function InfoCard({currentTheme}:InfoCardProps) {
  return (
    <div className="border-1 p-4 rounded-xl m-auto">

      <p className="text-2xl font-medium">Rabindra Thapa</p>

      <div className="flex justify-between">
        <div className="ml-4  flex text-sm mt-[-4px] font-light">
          <div className="h-fit flex items-center ">
            <svg 
              width="12" height="12" viewBox="0 0 20 20"><path fill="currentColor" d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"/>
            </svg>
            <span className="ml-2">
              Kathmandu, Nepal
            </span>
          </div>
        </div>

        <div className="mt-3 md-3">
          
        </div>
      </div>

      <p className="my-2 ">Final year B.Tech Student with a strong foundation in development, problem-solving and collaboration.</p>
      <div className="flex items-center">
        <a href={cv}  target='_blank' >
          <button 
          style={{
            backgroundColor:(currentTheme.backgroundColor==="white") ? "black":"white",
            color:(currentTheme.color==="white") ? "black":"white"
          }}
          className=" cursor-pointer flex items-center justify-center border-1 mr-3 p-1 rounded-lg">

          <span className="font-semibold">Resume</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 size-5"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M12 18v-6" />
            <path d="m9 15 3 3 3-3" />
          </svg>
        </button>
        </a>


        <Social/>

        
      </div>
      
    </div>
  )
}

export default InfoCard
