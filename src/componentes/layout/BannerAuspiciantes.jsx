import { Carousel } from "flowbite-react";
import Slide1 from "/src/imagenes/imgBanner/bannerAlmacor.png";
import Slide2 from "/src/imagenes/imgBanner/bannerSanchez.png";
import Slide3 from "/src/imagenes/imgBanner/bannerCarniceria.png";

const BannerAuspiciantes = () => {
  return (
    //<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-64 sm:h-80 xl:h-96 2xl:h-[30rem] -mt-6">
    //<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-40 sm:h-52 xl:h-64 2xl:h-[20rem] -mt-6">
    //<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-40 sm:h-56 xl:h-72 2xl:h-80 -mt-6">
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-52 sm:h-64 xl:h-80 2xl:h-96 -mt-6">
      <Carousel pauseOnHover>
        <a
          href="https://www.almacor.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full bg-black">
            <img
              src={Slide1}
              alt="Almacor"
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        <a
          href="https://www.facebook.com/sanchezmartinezehijossa?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full bg-gray-100">
            {" "}
            {/* Fondo gris claro */}
            <img
              src={Slide2}
              alt="Sanchezmartinez"
              className="w-full h-full object-contain"
            />
          </div>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61553444245191&sk=about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full h-full bg-white">
            <img
              src={Slide3}
              alt="El Triangulo"
              className="w-full h-full object-contain"
            />
          </div>
        </a>
      </Carousel>
    </div>
  );
};

export default BannerAuspiciantes;
