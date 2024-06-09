import { ReactTyped } from "react-typed";
import background from "../assets/images/background.jpg";

const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" px-2 w-full  py-[40px]"
      >
        <div className="max-w-[1240px] mx-auto text-center font-bold text-white">
          <div className="text-2xl py-4">Learn With Us</div>
          <div className="md:text-5xl py-4 text-3xl">
            <ReactTyped
              strings={[
                "Future Is Depends On AI",
                "Start Learn AI Today",
                "Your AI Powered Future",
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop
            ></ReactTyped>
          </div>
          <div className="md:text-3xl py-4 text-2xt">
            Artificial Intelligence
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
