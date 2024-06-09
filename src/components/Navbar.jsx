import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import favicon from '../assets/images/favicon.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-2 px-2 ">
        <div className=" max-w-[1240px] text-white py-2  text-3xl flex justify-between items-center">
          <div className=" font-bold  font-serif shadow-[5px_5px_10px_red] bg-teal-500 p-2 rounded-xl flex justify-between"> <div><img src={favicon} className=" w-10 h-10 me-4" /></div> <Link to='/' >Future Tech</Link></div>
          {toggle ? (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="md:hidden"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="md:hidden"
            />
          )}
          <ul className="hidden md:flex gap-4">
            <li className="shadow-[0_0_10px_blue] p-1 rounded-xl"><Link to='/'>Home</Link></li>
            <li className="shadow-[0_0_10px_yellow] p-1 rounded-xl"><Link to='/blog' >FakeStore API</Link></li>
            <li className="shadow-[0_0_10px_black] p-1 rounded-xl"><Link to='/about'>About</Link></li>
            <li className="shadow-[0_0_10px_purple] p-1 rounded-xl"><Link to='/contact' >Contact</Link></li>
          </ul>
          {/* responsive desine */}
          <ul
            className={` duration-300 md:hidden fixed bg-black top-[72px] w-full h-screen gap-10 
               ${toggle ? "left-[-100%]" : "left-[0]"} 
             `}
          >
            <li className="py-2 shadow-[0_0_10px_blue] p-1 rounded-xl"><Link to='/'>Home</Link></li>
            <li className="py-2 shadow-[0_0_10px_black] p-1 rounded-xl"><Link to='/about'>About</Link></li>
            <li className="py-2 shadow-[0_0_10px_purple] p-1 rounded-xl"><Link to='/contact' >Contact</Link></li>
            <li className="py-2 shadow-[0_0_10px_yellow] p-1 rounded-xl"><Link to='/blog' >FakeStore API</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
