import Ai from "../assets/images/Ai.jpg";
import business from "../assets/images/business.jpg";
import pic1 from "../assets/images/Iot.png";
import pic2 from "../assets/images/eye.png";
import pic3 from "../assets/images/tech.jpeg";

const Cards = () => {
  return (
    <>
      <div className="max-w-[1240px] p-2 mx-auto">
        <div className="md:grid grid-cols-2">
          <div className="col-span-1 p-1 md:w-[80%] text-center">
            <img src={Ai} alt="ai" className=" rounded-xl justify-center" />
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-fuchsia-600 text-3xl my-2">
              Artificial Intelligence
            </h1>
            <p>
              The use of modern Artificial Intelligence technologies, such as
              Machine Learning and Deep Learning, is certainly the future of
              Artificial Vision applications and products. Indeed, these
              technologies achieve high performance and high capacity to adapt
              to very different working conditions. A.I. Tech has embarked right
              away on the development of products based on “deep learning”.
              Today almost all its solutions are based on these approaches;
              these products are among the very few in the world that can be run
              directly on the cameras, and are therefore compatible with the few
              resources available.
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-2 my-6">
          <div className="col-span-1 md:w-[100%]">
            <h4 className="text-3xl text-green-600 font-bold my-2">
              Data Analysis
            </h4>
            <p className=" justify-normal w-[85%]">
              In A.I.Tech’s suite of plug-ins, data from cameras analysing the
              scene are integrated with other data from heterogeneous sources
              that add value and provide insights to your business. Such data
              can be obtained rom many systems that generate and provide data in
              a wide variety of domains, for instance: from the check-out
              counters at your shop, from external sensors used in environmental
              monitoring. The attractiveness of your point of sale, the
              convenience of reaching your shop and many other aspects influence
              the way your business is perceived.
            </p>
          </div>
          <div className="w-[90%] col-span-1">
            <img src={business} alt="" className="w-[120%] rounded-xl" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 p-4 mt-4 gap-4 mx-auto w-[100%] ">
          <div className="col-span-1 shadow-2xl hover:scale-110 duration-1000 text-center p-4">
            <div className=" overflow-hidden">
              <img
                src={pic3}
                className="w-[100%] h-64 rounded-full hover:scale-125 duration-1000"
                alt=""
              />
            </div>
            <h1 className="font-bold text-3xl my-4 text-indigo-700">
              Technology
            </h1>
            <p>
              Stone tools: Among the earliest known technologies, prehistoric
              humans used stone tools. Control of fire: Fire usage during the
              Ice Age contributed to brain growth and language development.
              Invention.
            </p>
          </div>
          <div className="col-span-1 text-center hover:scale-110 duration-1000 shadow-2xl p-4">
            <div>
              <img
                src={pic1}
                className="w-[80%] rounded-full hover:scale-110 duration-1000 ms-10"
                alt=""
              />
            </div>
            <h1 className="font-bold text-3xl my-4 text-indigo-700">
              Security
            </h1>
            <p>
              AI for cybersecurity analyzes and correlates event and cyberthreat
              data from multiple sources. It transforms this data into clear,
              actionable insights that security professionals can use for
              further investigation.
            </p>
          </div>
          <div className="col-span-1 text-center hover:scale-110 duration-1000 shadow-2xl p-4">
            <div className="overflow-hidden">
              <img
                src={pic2}
                className="w-[65%] rounded-full ms-20 hover:scale-125 duration-1000"
                alt=""
              />
            </div>
            <h1 className="font-bold text-3xl my-4 text-indigo-700">
              Social Life
            </h1>
            <p>
              Social Media Caption Generation: Crafting captivating social media
              captions used to be a time-consuming challenge, but now AI has
              made the task super easy. AI-powered tools can draw from a vast
              database of phrases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
