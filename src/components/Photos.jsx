import code from "../assets/images/code.jpg";
import code1 from "../assets/images/code1.jpg";
import code2 from "../assets/images/code2.jpg";
import code3 from "../assets/images/code3.jpg";
import code4 from "../assets/images/code4.jpg";
import code5 from "../assets/images/code5.avif";
import code6 from "../assets/images/code6.avif";
import code7 from "../assets/images/code7.avif";

const Photos = () => {
  return (
    <>
      <div className="max-w-[1240] mx-auto m-4">
        <h1 className="font-bold text-center text-3xl shadow-[15px_15px_15px_cyan]  animate-pulse">Ai In Human Life</h1>
        <div className="md:flex md:justify-around grid  mt-4 justify-center">
          <div>
            <img src={code} className=" w-80  hover:rotate-3 duration-1000 shadow-[15px_15px_15px_purple] h-48 mt-3 rounded-3xl" alt="" />
          </div>
          <div>
            <img src={code1} className=" w-80 hover:scale-105 duration-1000 shadow-[15px_15px_15px_yellow] h-48 mt-3 rounded-3xl" alt="" />
          </div>
          <div>
            <img src={code2} className=" w-80 hover:skew-x-12 duration-1000 shadow-[15px_15px_15px_red] h-48 mt-3 rounded-3xl" alt="" />
          </div>
          <div>
            <img src={code3} className=" w-80 hover:translate-x-7 duration-1000 shadow-[15px_15px_15px_blue] h-48 mt-3 rounded-3xl" alt="" />
          </div>
        </div>

        <div className="md:flex md:justify-around grid p-4 gap-4  justify-center">
          <div>
            <img src={code4} className=" w-80 h-48 hover:scale-105 duration-1000 shadow-[15px_15px_15px_blue] mt-3 rounded-3xl" alt="" />
          </div>
          <div>
            <img src={code5} className=" w-80 hover:translate-x-7 duration-1000 shadow-[15px_15px_15px_red] h-48 mt-3 rounded-3xl" alt="" />
          </div>
          <div>
            <img src={code6} className=" w-80 hover:rotate-12 duration-1000 shadow-[15px_15px_15px_yellow] h-48 mt-3 rounded-3xl" alt="" />
          </div>
          <div>
            <img src={code7} className=" w-80 hover:skew-x-12 duration-1000 shadow-[15px_15px_15px_purple] h-48 mt-3 rounded-3xl" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
