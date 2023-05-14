import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'
import image6 from '../../../assets/images/banner/6.jpg'

const Carousel = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={image1} className="w-full rounded-lg" />
    <div className="h-full bg-gradient-to-r rounded-lg from-[#151515] to-[21, 21, 21, 0] items-center absolute flex justify-start text-white top-0 space-x-2 p-5">
      <div className='w-3/4 space-y-3'>
        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='ml-4 flex space-x-3'>
        <button className="btn btn-active">Button</button>
        <button className="btn btn-outline btn-success">Success</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={image2} className="w-full rounded-lg" />
    <div className="h-full bg-gradient-to-r rounded-lg from-[#151515] to-[21, 21, 21, 0] items-center absolute flex justify-start text-white top-0 space-x-2 p-5">
      <div className='w-3/4 space-y-3'>
        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='ml-4 flex space-x-3'>
        <button className="btn btn-active">Button</button>
        <button className="btn btn-outline btn-success">Success</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={image3} className="w-full rounded-lg" />
    <div className="h-full bg-gradient-to-r rounded-lg from-[#151515] to-[21, 21, 21, 0] items-center absolute flex justify-start text-white top-0 space-x-2 p-5">
      <div className='w-3/4 space-y-3'>
        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='ml-4 flex space-x-3'>
        <button className="btn btn-active">Button</button>
        <button className="btn btn-outline btn-success">Success</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={image4} className="w-full rounded-lg" />
    <div className="h-full bg-gradient-to-r rounded-lg from-[#151515] to-[21, 21, 21, 0] items-center absolute flex justify-start text-white top-0 space-x-2 p-5">
      <div className='w-3/4 space-y-3'>
        <h2 className='text-5xl'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div className='ml-4 flex space-x-3'>
        <button className="btn btn-active">Button</button>
        <button className="btn btn-outline btn-success">Success</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Carousel;