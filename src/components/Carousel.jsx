import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import flying from '../assets/images/flying.webp';
import neuralink from '../assets/images/neuralink.jpg';
import robot from '../assets/images/robots1.webp';

const Carousels = () => {
  return (
    <>
    <h1 className='flex justify-center text-center text-3xl font-bold py-2 underline decoration-cyan-500 text-amber-700'>Advancement In Tech </h1>
    <Carousel className=' rounded-xl max-w-[1240px] mx-auto py-2'>
      <Carousel.Item  interval={700}>
       <img src={neuralink} className=' w-full h-96 rounded-xl' alt="" />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p className='font-bold underline decoration-white'>Neuralink — Pioneering Brain Computer Interfaces</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1400}>
      <img src={robot} className=' w-full h-96 rounded-xl' alt="" />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p className='font-bold text-white underline decoration-white'> intelligent machines that can assist humans in a variety of ways.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2100}>
      <img src={flying} className=' w-full  h-96 rounded-xl' alt="" />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p className='font-bold underline decoration-white'>
          A flying car or roadable aircraft is a type of vehicle
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousels
