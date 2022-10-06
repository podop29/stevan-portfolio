import emailjs from '@emailjs/browser';
import { useState } from 'react';

import linkedIn from "./icons/linkedin.png"
import github from "./icons/GitHub-Mark-Light-32px.png"
import phone from "./icons/telephone.png"




    const Contact = () =>{


        const [error, setError] = useState(false)
        const [sent, setSent] = useState(false)


    const sendEmail = (e) =>{
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_67v7a2m', 'template_77lrovl', e.target, 'nKpLTNT41Mz6mELOL')
        .then((result) => {
            console.log(result.text);
            setError(false)
            setSent(true)
        }, (error) => {
            console.log(error.text);
            setError(true)
            setSent(false)
        });

        e.target.reset()
    } 

return(
    <div id="contact" className="relative bg-gray-900 w-11/12 lg:w-8/12 mx-auto rounded-lg p-2">
        <h1 className="text-white text-center text-4xl font-gilroy-bold mb-2">Contact Me</h1>
        <div className="lg:grid lg:grid-cols-2">
            <div className='md:row md:border-r'>
                <div className='flex mx-auto mt-6 md:ml-8 w-11/12'>
                    <img className='h-10 mr-2' alt='icon for linkedIn' src={linkedIn}></img>
                    <h1 className='text-white bg-gray-800 my-auto mr-2 font-gilroy-light  w-10/12 md:w-full p-1 text-center overflow-hidden
                    border border-white'><a href='https://www.linkedin.com/in/stevan-grubac/'>https://www.linkedin.com/in/stevan-grubac/</a></h1>
                </div>
                <div className='flex mx-auto mt-6 md:ml-8  w-11/12'>
                    <img className='h-12 mr-2' alt='icon for Github' src={github}></img>
                    <h1 className='text-white bg-gray-800 my-auto mr-2 font-gilroy-light  w-full p-1 text-center
                    border border-white'><a href='https://github.com/podop29'>https://github.com/podop29</a></h1>
                </div>
                <div className='flex mx-auto mt-6 mb-8 md:ml-8  w-11/12 '>
                    <img className='h-12 mr-2' alt='icon for phone ' src={phone}></img>
                    <h1 className='text-white bg-gray-800 my-auto mr-2 font-gilroy-light w-full p-1 text-center
                    border border-white'>(586)-265-1685</h1>
                </div>
            </div>
            <div className='lg:row flex '>
                <form  onSubmit={sendEmail} className="p-4">
                    <div className='flex mb-4'>
                        <input className='bg-black border p-2 border-white text-white mx-1 w-1/2 lg:w-full' placeholder='Name'  type="text" name="name" />
       
                        <input className='bg-black border p-2 border-white text-white mx-1 w-1/2 lg:w-full' placeholder='Email'  type="email" name="email" />
                    </div>
                    
                    <textarea className='ml-1 mb-2 h-24 w-full md:w-96 p-2 bg-black border border-white text-white ' placeholder='Message' name="message" />
                    <br/>
                    <span className='flex'>
                        <input  type="submit" value="Send" className=' bg-black text-white ml-1  border border-white p-2 px-4  
                        hover:cursor-pointer hover:bg-white hover:text-black ease-in duration-150'/>

                        { sent ?
                        <p className='text-green-500 ml-4 my-auto'>Sent</p>
                        :
                        error ?
                        <p className='text-red-500 ml-4 my-auto'>Error</p>
                        : null
                        }

                    </span>
                </form>
            </div>

        </div>
    </div>
)


}

export default Contact;