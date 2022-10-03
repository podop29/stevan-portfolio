import SkillCard from "./skillCard";
import jsIcon from "./icons/java-script.png"
import reactIcon from "./icons/react.png"
import tailwindIcon from "./icons/tailwind-css.png"
import bootstrapIcon from "./icons/bootstrap.png"
import Html5 from "./icons/html5.png"
import psqlIcon from "./icons/postgresql.png"
import flaskIcon from "./icons/flask.png"
import gitIcon from "./icons/git.png"
import apiIcon from "./icons/api.png"
import pythonIcon from "./icons/python.png"
import cIcon from "./icons/c++.png"
import sqlIcon from "./icons/sql.png"
import csharpLogo from "./icons/csharp.png"


function SkillsSection(){

    return(

        <>
            <div id="skills" className="relative w-8/12 mx-auto md:grid md:grid-cols-3 mb-10">
                <SkillCard title={"Front-End"} 
                skills={["JavaScript", "React","TailWind", "Bootstrap", "HTML/CSS"]}/>
                <SkillCard title={"Back-End"} 
                skills={["Express.js", "Node.js", "PostgreSQL", "MySQL", "Flask.py", ".NET", "Rest APIs","GIT", "Heroku"]}/>
                <SkillCard title={"Languages"} 
                skills={["JavaScript", "Python", "C++", "SQL", "C#"]}/>


            

            </div>

            <div className="relative md:grid md:grid-cols-3 w-8/12 mx-auto bg-transparent mb-16">
                <div className="w-full md:w-6/12 mx-auto flex bg-transparent mt-2 justify-center">
                    <img alt="JavaScript Icon " className="h-12" src={jsIcon}></img>
                    <img alt="React Icon " className="h-12" src={reactIcon}></img>
                    <img alt="TailWind Icon " className="h-12" src={tailwindIcon}></img>
                    <img alt="BootStrap Icon " className="h-11" src={bootstrapIcon}></img>
                    <img alt="HTML Icon " className="h-11" src={Html5}></img>
                </div>
                <div className="md:w-8/12 mx-auto flex bg-transparent mt-2 justify-center">
                <img alt="JavaScript Icon " className="h-12" src={jsIcon}></img>
                <img alt="PSQL Icon " className="h-11" src={psqlIcon}></img>
                <img alt="Flask Icon " className="h-11" src={flaskIcon}></img>
                <img alt="Git Icon " className="h-11" src={gitIcon}></img>
                <img alt="Api Icon " className="h-11" src={apiIcon}></img>  
                </div>
                <div className="w-8/12 mx-auto flex bg-transparent mt-2 justify-center">
                <img alt="JavaScript Icon " className="h-12" src={jsIcon}></img>
                <img alt="Python Icon " className="h-12" src={pythonIcon}></img>
                <img alt="C++ Icon " className="h-12" src={cIcon}></img>
                <img alt="SQL Icon " className="h-12" src={sqlIcon}></img>
                <img alt="c# Icon " className="h-12" src={csharpLogo}></img>

                    
                </div>

            </div>
            <div className="relative w-full md:w-2/6 mx-auto ">
                <h1 className="text-center text-2xl font-gilroy-bold text-white mb-6 ">See my Resume</h1>
                <iframe title="Pdf for my resume" className="mx-auto w-auto md:w-full" src="https://drive.google.com/file/d/1YiZqFx_9Bow1h78DgStC6dWwPRsBoKnP/preview" height="500"></iframe>
            </div>
        </>
       
    )


}

export default SkillsSection;