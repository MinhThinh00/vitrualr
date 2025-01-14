import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function Banner() {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      VirtualR build tools{' '}
      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        for developers
      </span>
    </h1>
    <div className="flex justify-center my-10 gap-3">
      <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 px-4 py-3 rounded-md">
          Start for free
      </a>
      <a href="#" className="border px-3 py-2 rounded-md">Documentation</a>
    </div>
    <div className="flex justify-center mt-10 mx-10">
      <video autoPlay muted loop 
      className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
        <source src={video1} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <video autoPlay muted loop 
      className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
        <source src={video2} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

    </div>
  </div>
  )
}

export default Banner