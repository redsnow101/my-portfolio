import {useState} from 'react'
import NavBar from './layout/NavBar'
import ThemeSwitcher from './ui/ThemeSwitcher'
import InfoCard from './layout/InfoCard';
import TechUsed from './layout/TechUsed';
import Footer from './layout/Footer';
import ExperienceTabs from './layout/ExperienceTabs';

function MyPortfolio() {

    const[theme, setTheme] = useState({
        color: "white",
        backgroundColor:  "black"
    })

    function handleTheme(){
        setTheme((prevTheme) => ({
            color: prevTheme.color === 'white' ? 'black' : 'white',
            backgroundColor: prevTheme.backgroundColor === 'white' ? 'black' : 'white',
        }));
    }

  return (
    <div style={theme} >    
        <div className='w-[70%] m-auto max-h-full '>
            <div  className="w-full p-2 flex sticky top-0 z-10 backdrop-blur-sm rounded-4xl">
                <NavBar/>
                <ThemeSwitcher currentTheme={theme} onButtonClick={handleTheme}/>
            </div>
        
            <div className='w-[85%] m-auto mt-12 flex flex-col gap-5 min-w-sm max-w-lg'>
                <InfoCard currentTheme={theme}/>
                <TechUsed/>
                <ExperienceTabs currentTheme={theme}/>
                <Footer/>
            </div>
        </div>
    </div>

    
  )
}

export default MyPortfolio
