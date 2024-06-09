import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="  bg-slate-600 max-w-[1380px] mx-auto h-screen text-white">
      <div className="flex justify-center">
        <h1 className="text-4xl mt-10">Contact Us</h1>
      </div>
      <h1 className="flex justify-center mt-4 font-serif underline text-cyan-400 text-3xl">Future Tech Company</h1>
      <div className="md:grid md:grid-cols-1">
      <div className=' mt-6 col-span-1 text-center text-slate-300'>
            <h1 className='p-1 text-xl mb-3 '>Provide Your Gmail Address To Contact </h1>
            <input  type="search" className=' w-60 h-8 rounded ' placeholder='Your Email Address' /> <button className=' bg-red-700 text-white p-1 rounded'>Subscribe</button>
        </div>
      </div>
      <div className="flex justify-center mt-10">
      <ul className=" py-3" >
        <li className="py-2">Phone Number: 555-123-4567 </li>
        <li className="py-2">Phone Number: 7886-234-5234</li>
        <li className="py-2"> Email Address: Futuretech@gmail.com </li>
        <li className="py-2">Mailing Address: 123 Main Street, Anytown, USA </li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Contact;
