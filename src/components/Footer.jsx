import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { SlSocialPintarest } from "react-icons/sl";


const Footer = () => {
  return (
   <>
   <div className='max-w-[1340px] mx-auto  bg-slate-800 text-white rounded-lg px-3 py-1'>
   <h1 className=' justify-center text-center text-4xl font-serif font-bold my-10 py-2 shadow-[4px_4px_4px_red]'>Our Services</h1>
   <h1 className='mt-10 font-bold text-center mb-6 text-cyan-500 text-2xl underline'>Future Tech Social Handles</h1>
   <div className='flex justify-between'>
    <FaInstagram className=' hover:scale-125 duration-1000 animate-bounce  hover:bg-red-800 text-4xl hover:rounded-xl' />
    <FaXTwitter className='text-4xl hover:scale-125 animate-bounce duration-1000 hover:bg-orange-600 hover:rounded-xl' />
    <CiLinkedin className=' text-4xl hover:scale-125 animate-bounce duration-1000 hover:bg-blue-700 hover:rounded-xl' />
    <CiFacebook className=' text-4xl hover:scale-125 animate-bounce duration-1000 hover:bg-blue-500 hover:rounded-xl' />
    <FiYoutube className=' text-4xl hover:scale-125 animate-bounce duration-1000 hover:bg-rose-700 hover:rounded-xl' />
    <SlSocialPintarest className=' text-4xl hover:scale-125 animate-bounce duration-1000 hover:bg-teal-700 hover:rounded-xl' />

   </div>
    <div className='md:grid md:grid-cols-2 gap-10 mt-9'>
       
        <div className=' col-span-1'>
            <div className='md:flex md:justify-between md:text-start text-slate-300 text-center'>
                <div>
                    <ul>
                        <li className='p-1'>Careers</li>
                        <li className='p-1'>Tech Services</li>
                        <li className='p-1'>Future Tech News</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='p-1'>Consumer Care</li>
                        <li className='p-1'>Tech India</li>
                        <li className='p-1'>Tech Global</li>
                    </ul>
                </div>
            </div>
            
        </div>
        <div className=' col-span-1 ms-10  text-slate-300'>
            <h1 className='p-2 text-xl ms-5 mb-3'>Get The Freshest Tech News </h1>
            <div className="flex"><input  type="search" className=' w-60 h-8 rounded ms-5' placeholder='Your Email Address' /> <button className=' bg-red-700 text-white p-1 rounded'>Subscribe</button></div>
        </div>
    </div>
    <div>
       <pre className= ' flex  justify-evenly text-center my-6'><span>Website Term </span> <span>Privacy Policy </span><span>Accessibility </span></pre>
    </div>
    <p className='text-center py-1'>@2024 All Copyrights Are Reserved</p>
   </div>
   </>
  )
}

export default Footer
