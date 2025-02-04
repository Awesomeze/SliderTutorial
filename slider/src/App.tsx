
import './index.css'
import { useState } from 'react'

  const  images = ["/img.png", "/img1.png", "/img2.png"];

const App = () => {
  const [currentImage, setcurrentImage] = useState(0)
  console.log("Images array:", images);
  console.log("Current Image URL:", images[currentImage]); // Debugging

  
 
const next = () => {
  setcurrentImage((prevSlide) => (prevSlide + 1) % images.length);
  

};

const prev = () => {
setcurrentImage ((prevSlide) => (prevSlide - 1 + images.length)% images.length)
}


  return (
    

/* <div className='w-full  min-h-screen flex items-center pt-10' > */
    <div className='w-full bg-gray-400  min-h-screen flex flex-col gap-3 p-4 items-center '> 
    <h1 className="text-3xl font-bold  text-black">
    Project 
    </h1>

     <p
    className='text-green-800 font-medium '>
      a sample of slider made with nods js, typscript and tailwind css
      </p>
  
  <div className='min-h-3 overFlow-hidden '>
    <img src={images[currentImage]} alt="slideshow" className='border-1 w-[300px] h-auto'/>

 <button onClick={next}
  className='absolute hover:bg-red-700 cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full'>Next</button>;
 
  <button onClick={prev}
  className="absolute hover:bg-red-700 cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full">prev</button>
  </div>
  </div>
  // </div>
  )
}

export default App