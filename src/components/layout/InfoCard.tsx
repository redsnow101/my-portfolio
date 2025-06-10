import cv from '../../assets/Academic_CV.pdf'
import Social from '../ui/Social'

function InfoCard() {
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

      <p className="my-2 ">I'm 23-year-old Full-Stack Web Developer. I have been programming for more than 2 years. I create professional websites.</p>
      <div className="flex items-center">
        <a href={cv}  target='_blank'>
          <button 
          className="inline-flex items-center gap-2 h-9 px-4 py-2 mr-4 rounded-md border text-sm font-medium bg-background text-foreground border-input shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none">

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
