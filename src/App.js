import Nav from "./Nav";
import IntroCard from "./introCard";
import Particles from "react-tsparticles"

import { loadFull } from "tsparticles";
import { useCallback ,useState, useEffect} from "react";
import particlesConfig from "./particle-config";
import particlesConfigSnow from "./particle-configSnow";

import AboutMe from "./aboutMe";
import SkillsSection from "./skillsSection";
import Projects from "./projects.js";
import Contact from "./contact.js";



function App() {


  const [isSnow, setIsSnow] = useState(false)

  useEffect(() => {
    const changeBackground = () =>{
      if(window.scrollY >= 1600) setIsSnow(true)
      else setIsSnow(false)
      
    }
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground)
  })

  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container) => {
  //await console.log(container);
}, []);

  return (
    <div className="">
      <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} options={ isSnow ? particlesConfigSnow : particlesConfig}/>
      
      <Nav/>
      <IntroCard/>

      <AboutMe/>
      <div className="bg-gradient-to-b from-white to-gray-800 pt-52">
      
      <h1 className="relative text-center mb-2 text-4xl font-gilroy-bold text-violet-500 w-6/12 md:w-2/12 mx-auto bg-gray-300 rounded-md shadow p-2 ">Skills</h1>
      <SkillsSection/>
      </div>

      <div className=" w-full h-full bg-gray-800 pb-24 ">
        <Projects/>

        <Contact/>

      </div>
      


    </div>
  );
}

export default App;
