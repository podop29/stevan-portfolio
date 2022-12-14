

function SkillCard ({title, skills}){
    return(
        <div className="relative w-5/6 mx-auto  gradient rounded-xl mb-5 md:mb-0
        bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 hover:from-violet-500 hover:via-purple-500 hover:to-cyan-500
          p-2 transition-color duration-500  ">
        <div className=" h-full bg-gray-300 ">
                <div className="text-center text-black text-2xl font-semibold underline  mb-2 font-gilroy-medium">
                        {title}
                </div>
                
                {skills.map((skill)=>(
                    <div key={skill} className="text-center text-lg font-gilroy-regular ">
                        {skill}
                    </div>
                ))}
        </div>
    </div>
    )

}


export default SkillCard;