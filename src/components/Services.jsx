import { SiGooglegemini } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { TbBrandGithubCopilot } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <div className="max-w-[1240px] mx-auto py-2 md:mb-8 text-center">
        <h1 className="font-bold text-4xl text-rose-700 shadow-[0_0_10px_red] rounded-xl mt-5 mx-4">AI Robotics</h1>
        <div className="md:grid md:grid-cols-3 gap-6 w-[100%] md:mt-10">
          <div className="col-span-1 hover:scale-110 duration-1000 md:mt-2 mt-5 mx-5 shadow-[0_0_10px_goldenrod] py-8 hover:bg-indigo-600 hover:text-white">
           <div className=" flex justify-center">
           <AiFillOpenAI className=" size-20 animate-spin" />
           </div>
            <h1 className="font-bold text-xl md:mt-4 p-2">Chat Gpt</h1>
            <p className="p-2">
              ChatGPT is a chatbot and virtual assistant developed by OpenAI and
              launched on November 30, 2022.
            </p>
          </div>
          <div className=" col-span-1 hover:scale-110 duration-1000 md:mt-2 mt-5 mx-5 shadow-[0_0_10px_blue] py-8 hover:bg-teal-700 hover:text-white">
            <div className="flex justify-center">
              <SiGooglegemini className=" size-20 animate-bounce" />
            </div>
            <h1 className="font-bold text-xl md:mt-4 p-2">Google Gemini</h1>
            <p className="p-2">
              Gemini, formerly known as Bard, is a generative artificial
              intelligence chatbot developed by Google.
            </p>
          </div>
          <div className=" col-span-1 hover:scale-110 duration-1000 md:mt-2 mt-5 mx-5 shadow-[0_0_10px_purple] py-8 hover:bg-red-500 hover:text-white">
            <div className="flex justify-center">
            <TbBrandGithubCopilot className=" size-20 animate-ping delay-500" />
            </div>
            <h1 className="font-bold text-xl md:mt-4 p-2" >Copilot</h1>
            <p className="p-2">
              Microsoft Copilot leverages the power of AI to boost productivity
              and helps you understand information.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
