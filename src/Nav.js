import { useState , useEffect} from "react";
import {Link} from "react-scroll"

function Nav() {
    const links = [
        {name:"About Me", link:'aboutMe'},
        {name:"Skills", link:'skills'},
        {name:"Projects", link:'projects'},
        {name:"Contact Me", link:'contact'}
    ]
    const [open, setOpen] = useState(false)

    const[navBar,setNavBar] = useState("red-400")
    const[navBarBlack,setNavBarBlack] = useState(false)
    const[navBarGray,setNavBarGray] = useState(false)



    useEffect(() => {
        changeBackground()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeBackground)

      })


  const changeBackground = () => {
    //console.log(window.scrollY)
    if(window.scrollY < 500){
        setNavBar("red-400")
        setNavBarBlack(false)
        setNavBarGray(false)

    }
    if (window.scrollY >= 800) {
        setNavBar("violet-500")
        setNavBarBlack(false)
        setNavBarGray(false)

    } 


    //change nav to gray
    if(window.scrollY >= 800 && window.scrollY <= 1600){
        setNavBarGray(true)
        setNavBarBlack(false)

    }
    //change nav to black and white
    if (window.scrollY >= 1600) {
        setNavBar("white")
        setNavBarBlack(true)
        setNavBarGray(false)

    } 

  }

  
    return (
      <div className="shadow-md w-full fixed top-0 left-0 z-10">
        <div className={`md:flex items-center justify-between 
        ${navBarBlack ? "bg-black" : navBarGray ? "bg-gray-300" : "bg-white"} 
         py-4 md:px-10 px-7 transition-color duration-500  `}>

            <div className={`font-gilroy-bold text-2xl hover:text-3xl duration-300 cursor-pointer flex items-center text-${navBar}`}>
                <span className={`text-3xl text-${navBar} mr-2 mt-1 pb-1`}>
                    &lt;/&gt; 
                </span>
                 Stevan Grubac
            </div>
            <div onClick={()=>setOpen(!open)}  className={`text-3xl absolute right-8 top-5 cursor-pointer md:hidden text-${navBar}`}>
            {open ? "x" : "="}
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1]
            left-0 w-full md:w-auto md:pl-0 pl-9 transition-color duration-500 
            ${open ? 'top-15 opacity-100':'top-[-490px]'} md:opacity-100
            ${navBarBlack ? "bg-black" : navBarGray ? "bg-gray-300" : "bg-white"} `}>
                {
                    links.map((link)=>(
                        <li key={link.name} className="md:ml-8 font-gilroy-bold text-xl md:my-0 my-7">
                            <Link to={link.link} spy={true} smooth={true} offset={-150} duration={500}
                            className={`text-${navBar}  hover:border-${navBar}  hover:cursor-pointer hover:border-2 rounded-sm p-1 hover:p-2 duration-200 `}>
                            {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
      </div>
    );
  }
  
  export default Nav;
  