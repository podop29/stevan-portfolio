
function IntroCard() {

    return (
      <div id="aboutMe" className="relative text-center border-2 border-red-300 hover:rounded-3xl shadow-xl w-11/12
       md:w-8/12 2xl:w-8/12  h-auto md:h-64 mx-auto   py-10 p-6 bg-gray-100 mt-32  transition-all duration-500 ease-in">
        <div className="w-10/12  mx-auto">
            <h1 className="font-gilroy-bold text-red-400 text-xl md:text-4xl sm:text-2xl text-center 2xl:text-5xl"> A Web Developer with a passion</h1>
            <p className="text-lg md:text-3xl font-gilroy-light  sm:text-xl mt-5 text-center 2xl:text-4xl">A passion for learning,<br/> creating,<br/> and exploring</p>
        </div>
        {/* <div className="mx-auto h-full ">
         <img alt="myself" className="h-40 md:h-48 rounded-full mb-6" src={selfie}></img>
       </div> */}
      </div>
    );
  }
  
  export default IntroCard;
  
