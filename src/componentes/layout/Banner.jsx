import { Carousel } from "flowbite-react";
import Slide1 from "/src/imagenes/banner.png";
import Slide2 from "/src/imagenes/imgUno.jpg";
import Slide3 from "/src/imagenes/imgDos.jpg";

const Banner = () => {
  return (
    // <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-56 sm:h-64 xl:h-80 2xl:h-96">
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-64 sm:h-80 xl:h-96 2xl:h-[30rem] -mt-6">

      <Carousel pauseOnHover>
        <img
          src={Slide1}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <img
          src={Slide2}
          alt="ImgUno"
          className="w-full h-full object-cover"
        />
        <img
          src={Slide3}
          alt="ImgDos"
          className="w-full h-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Banner;