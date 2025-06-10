import TechCard from "../ui/TechCard"

import html5Image from '../../assets/html5.png';
import css3 from '../../assets/css3.png'
import javascript from '../../assets/javascript.png'
import java from '../../assets/java.png'
import mysql from '../../assets/mysql.png'
import react from '../../assets/react.png'
import typescript from '../../assets/typescript.png'

function TechUsed() {

    return(
        <div>
            <p className="text-2xl font-bold">What I work with</p>
            <div className="flex flex-wrap">
                <TechCard image={html5Image}  name="HTML"/>
                <TechCard image={css3}  name="css3"/>
                <TechCard image={javascript}  name="javascript"/>
                <TechCard image={java}  name="java"/>
                <TechCard image={mysql}  name="mysql"/>
                <TechCard image={react}  name="react"/>
                <TechCard image={typescript}  name="typescript"/>
            </div>
        </div>
    )

}

export default TechUsed