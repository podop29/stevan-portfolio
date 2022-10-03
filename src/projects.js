import rhymeTimeGif from "./pics/rhymetimegif.gif"
import cocktailGif from "./pics/cocktailgif.gif"
import PremeDET from "./pics/premedet.PNG"



function Projects(){

    

   

return(
    <div  className=" w-full mb-20 p-10 pt-32 ">
    
        <h1 id="projects" className="relative bg-gray-800 text-white text-center text-6xl font-gilroy-bold mb-32">My Projects</h1>

        <div  className=" text-white md:grid md:grid-cols-2 mx-auto pb-10">
            <div className=" relative bg-gray-800 w-full md:w-8/12 mx-auto  text-left mb-3 md:mb-32">
                <h1 className="text-4xl pb-2 relative font-gilroy-bold">RhymeTime Game</h1>
                <p className="font-gilroy-medium">Rhyme Time is a Full Stack Web App built using React, Tailwind, on the frontend. Express, Node, PostgreSQL, on the backend.
                <br/>
                Features include registering for an account, Choosing from and playing three game types, with three different
                difficulties, and a multiplayer online game against friends. 
                <br/>
                Once you make an account you can add friends and challenge them to games. Game stats are saved and added
                to the users profile using a node.js backend with PostgreSQL as the database.
                </p>
            </div>
            <div>
            <img className=" relative bg-gray-800 rounded-md mx-auto h-auto md:h-64" alt='gif shows rhymetime' src={rhymeTimeGif}></img>
            <h1 className="text-lg text-center hover:cursor-pointer mt-4">
                <a className="underline hover:cursor-pointer relative" href="http://rhymetime.online/">Live Link</a>&#160;
                | <a className="underline hover:cursor-pointer relative" href="https://github.com/podop29/cocktail">Github</a></h1>
            </div>
        </div>


        <div className="text-white md:grid md:grid-cols-2 mx-auto pb-10">
        <div>
            <img className="relative bg-gray-800 rounded-md mx-auto" alt='gif shows mixology' src={cocktailGif}></img>
            <h1 className="text-lg text-center hover:cursor-pointer mt-4">
                <a className="underline hover:cursor-pointer relative" href="https://mixology-cocktail.herokuapp.com/">Live Link</a>&#160;
                 | <a className="underline hover:cursor-pointer relative" href="https://github.com/podop29/RhymingGame-Frontend">Github</a></h1>
            </div>

            <div className="relative bg-gray-800 w-full md:w-8/12 mx-auto text-left mb-2 md:mb-32">
                <h1 className="text-4xl pb-2 font-gilroy-bold">Mixology Cocktail</h1>
                <p className="font-gilroy-medium">Full stack project built using Python, Flask, Jinja, PostgreSQL and SQLAlchemy.
                <br/>
                Users can look up cocktails by name, or ingredient and get ingredient lists on how to make the drink, including instructions.
                <br/>
                Users can add reviews under cocktails for other users to see, They can also favorite any drink to add it to a list
                for them to come back to later.
                </p>
            </div>
        </div>

        <div  className="text-white md:grid md:grid-cols-2 mx-auto pb-10 mt-32">
            <div className="relative bg-gray-800 w-full md:w-8/12 mx-auto text-left mb-2 ">
                <h1 className="text-4xl pb-2 font-gilroy-bold ">PremeDET Product Showcase</h1>
                <p className="font-gilroy-medium">This is a freelance project i made for a amazon retailer that wanted a website that shows all the products
                    hes currently selling and updates them in real time.
                Built in React and Tailwind and using Axios to make API calls to update his storefront.
                </p> 
            </div>
            <div>
            <img className="relative bg-gray-800 rounded-md mx-auto md:h-72" alt='Pic of PremeDet' src={PremeDET}></img>
            <h1 className="text-lg text-center hover:cursor-pointer mt-4">
                <a className="underline hover:cursor-pointer relative" href="http://premedet.com/">Live Link</a></h1>
            </div>
        </div>

    </div>
)
}

export default Projects