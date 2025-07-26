import { Carousel } from "flowbite-react";
import Slide1 from "/src/imagenes/almacor.png";
import Slide2 from "/src/imagenes/sanchezmartinez.png";
import Slide3 from "/src/imagenes/almacor.png";

const BannerAuspiciantes = () => {
    return (
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-40 sm:h-56 xl:h-72 2xl:h-80 -mt-6">
            <Carousel pauseOnHover>
                <a href="https://www.almacor.com.ar" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-full bg-black">
                        <img
                            src={Slide1}
                            alt="Almacor"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </a>

                <a href="https://www.facebook.com/sanchezmartinezehijossa?locale=es_LA" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-full bg-gray-100"> {/* Fondo gris claro */}
                        <img
                            src={Slide2}
                            alt="Sanchezmartinez"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </a>

                <a href="https://www.terceraempresa.com.ar" target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-full bg-white">
                        <img
                            src={Slide3}
                            alt="Tercera Empresa"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </a>
            </Carousel>

        </div>
    );
};

export default BannerAuspiciantes;
