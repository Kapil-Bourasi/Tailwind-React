import footer from '../assets/images/footer.png';
import google from '../assets/images/google.webp';
import siri from '../assets/images/siri3.jpg';
import alexa from '../assets/images/alexa.jpg';
import { FaMicrophoneAlt } from "react-icons/fa";

const Details = () => {
  return (
   <>
   <div className='max-w-[1240px] mx-auto my-4'>
   <h1 className='md:flex justify-center text-center font-bold text-3xl py-2 my-6 text-stone-600 shadow-[4px_4px_4px_goldenrod]'>Ai Voice Assistance</h1>
        <div className='md:grid  md:grid-cols-2'>
            <div className=' col-span-1'>
                <img src={footer} className='ms-6  w-80 h-96 rounded-full' />
            </div>
            <div className=' col-span-1 mt-6'>
                <div className='md:flex text-center flex justify-center md:justify-between content-center'>
                    <div>
                        <h1 className='font-bold text-teal-600 text-2xl my-1'>Google </h1>
                        <img  src={google} className='w-40 rounded flex justify-center h-40' alt="" />
                        <FaMicrophoneAlt className=' size-20 my-6 ms-8 md:ms-10 hover:scale-125 duration-1000' />
                    </div>
                    <div>
                    <h1 className='font-bold text-teal-600 text-2xl my-1'>Siri </h1>
                    <img src={siri} className='w-40 rounded-full h-40' alt="" />
                    <FaMicrophoneAlt className=' size-20 my-6 ms-8 md:ms-10 hover:scale-125 duration-1000' />
                    </div>
                    <div>
                    <h1 className='font-bold text-teal-600 text-2xl my-1'>Alexa</h1>
                    <img src={alexa} className='w-40 rounded h-40' alt="" />
                    <FaMicrophoneAlt className=' size-20 ms-8  my-6 md:ms-10 hover:scale-125 duration-1000' />
                    </div>
                </div>
                <div className='flex justify-center font-bold text-2xl text-slate-800'>
                <p className=' animate-bounce duration-1000'>Tap To Speak</p>
                </div>
            </div>
        </div>
   </div>
   </>
  )
}

export default Details
