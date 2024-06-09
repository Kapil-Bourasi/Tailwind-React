import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        <Navbar />
      <div className='max-w-[1380px] mx-auto bg-zinc-500 text-white h-screen'>
      <h1 className='font-bold text-3xl flex justify-center py-2 text-white'>Description About Future Tech Site</h1>
      <div>
        <p className='py-1 my-1'><span className='font-bold text-yellow-500 text-xl'>AI Ethics and Governance:- </span>Explore the ethical implications of AI technologies, such as privacy concerns, algorithmic bias, and the potential impact on jobs and society. Discuss regulatory frameworks and initiatives aimed at ensuring responsible AI development and deployment.</p>
        <p className='py-1 my-1'><span className='font-bold text-yellow-500 text-xl'>Robotic Innovations:-</span> Highlight recent advancements in robotics, such as autonomous drones, collaborative robots (cobots), exoskeletons for healthcare or industrial applications, and humanoid robots. Discuss their potential applications, benefits, and challenges.</p>
        <p className='py-1 my-1'><span className='font-bold text-yellow-500 text-xl'>Tech and Sustainability:-</span> Explore how technology, AI, and robotics can contribute to sustainability efforts, such as renewable energy optimization, smart agriculture, waste management, and climate monitoring. Highlight innovative projects and initiatives in this field.</p>
        <p className='py-1 my-1'><span className='font-bold text-yellow-500 text-xl'>AI in Education:-</span> Explore the role of AI in transforming education, from personalized learning platforms and adaptive tutoring systems to intelligent classroom assistants and virtual reality simulations. Discuss the opportunities and challenges of integrating AI into educational settings.</p>
        <p className='py-1 my-1'><span className='font-bold text-yellow-500 text-xl'>Ethical AI Design:- </span>Discuss principles and best practices for designing ethical AI systems, such as transparency, fairness, accountability, and inclusivity. Highlight case studies and examples of organizations implementing ethical AI guidelines.</p>

      </div>
      </div>
    </div>
  )
}

export default About
