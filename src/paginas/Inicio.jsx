import React, { useEffect, useState } from 'react';
import Banner from '../componentes/layout/Banner';
import BannerAuspiciantes from '../componentes/layout/BannerAuspiciantes';

import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import axios from 'axios';
import InfoActual from '../componentes/layout/InfoActual';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  // <-- Importé las flechas

const Inicio = () => {
  const [novedades, setNovedades] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Traer novedades del backend al cargar el componente
  useEffect(() => {
    const cargarNovedades = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/novedades');
        console.log('Novedades:', res.data.body);
        setNovedades(res.data.body);
      } catch (error) {
        console.error('Error al cargar novedades:', error);
      }
    };
    cargarNovedades();
  }, []);

  // Traer imágenes para la galería
  useEffect(() => {
    const cargarImagenes = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/imagenes');
        setImagenes(res.data.body);
      } catch (error) {
        console.error('Error al cargar imágenes:', error);
      }
    };
    cargarImagenes();
  }, []);

  // Agrupar novedades de a 3 para el carrusel
  const agruparTarjetas = (array, tamañoGrupo) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamañoGrupo) {
      grupos.push(array.slice(i, i + tamañoGrupo));
    }
    return grupos;
  };
  const gruposTarjetas = agruparTarjetas(novedades, 3);

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxActive(true);
  };
  const closeLightbox = () => {
    setLightboxActive(false);
  };

  return (
    <div>
      <Banner />
      <InfoActual />

      {/* Sección todos tus acceso aquí" border-b-2*/}
      <section className="max-w-6xl mx-auto px-5 py-10 text-center">
        <h2 className="text-3xl font-black mb-10 text-[#00527A] text-center  border-[#00527A] pb-4 pt-10 uppercase">
          Todos tus accesos, <span className="text-cyan-500">están acá.</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Acceso a Reclamos */}
          <Link
            to="/reclamos"
            className="bg-[#00a8e6] rounded-xl p-6 text-white w-48 h-48 hover:bg-[#008cc4] transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M19 2H8a2 2 0 0 0-2 2v3H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm-4.5 12a.5.5 0 0 1-1 0V9a.5.5 0 0 1 1 0Zm-.5 1.75a.75.75 0 1 1-.001 1.501A.75.75 0 0 1 14 15.75ZM8 4h11v11h-1V9a2 2 0 0 0-2-2h-6V4Z" />
            </svg>
            <div className="text-base font-semibold leading-tight">Reclamos</div>
            <div className="text-sm">Denuncias o quejas</div>
          </Link>

          {/* Acceso a Cámara */}
          <Link
            to="/camara/vivo"
            className="bg-[#e91e63] rounded-xl p-6 text-white w-48 h-48 hover:bg-[#d81b60] transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M19 7h-1.586l-2-2H4a2 2 0 0 0-2 2v8h2v2h8v-2h6v2h2v-2h2v-4a3 3 0 0 0-3-3Zm1 5h-1v-2H4V7h11.586l2 2H19a1 1 0 0 1 1 1Z" />
            </svg>
            <div className="text-base font-semibold leading-tight">Cámara en Vivo</div>
            <div className="text-sm">Ver plaza en directo</div>
          </Link>

          {/* Acceso a Diario o Revista */}
          <Link
            to="/revistas"
            className="bg-[#4CAF50] rounded-xl p-6 text-white w-48 h-48 hover:bg-[#388E3C] transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M4 3h16a1 1 0 0 1 1 1v13a3 3 0 1 1-6 0V6H5v11a3 3 0 1 1-6 0V4a1 1 0 0 1 1-1Zm6 5h5v4h-5V8Zm0 6h8v1h-8v-1Zm0 2h8v1h-8v-1Z" />
            </svg>
            <div className="text-base font-semibold leading-tight">Revista</div>
            <div className="text-sm">Nuestro Barrio</div>
          </Link>

          {/* Acceso a Radio */}
          <Link
            to="/radio"
            className="bg-orange-500 rounded-xl p-6 text-white w-48 h-48 hover:bg-orange-600 transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M20 5.41 10.26 9H20v2h-9.74l-1.6.62L3 7.85V19h2v-2h14v2h2V7a2 2 0 0 0-1-1.72ZM17 15H7v-2h10Z" />
            </svg>
            <div className="text-base font-semibold leading-tight">Radio</div>
            <div className="text-sm">En vivo 24hs</div>
          </Link>

        </div>
      </section>

      {/* NOVEDADES con carrusel */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-black  text-[#00527A] text-center  border-[#00527A] pt-10 uppercase">
          Novedades
        </h2>

        <div className="h-[35rem]">
          <Carousel
            pauseOnHover
            slide={true}
            leftControl={
              <button className="p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 text-[#00527A]">
                <FaChevronLeft size={24} />
              </button>
            }
            rightControl={
              <button className="p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 text-[#00527A]">
                <FaChevronRight size={24} />
              </button>
            }
            className="rounded-lg"
          >
            {gruposTarjetas.length === 0 ? (
              <p>Cargando novedades...</p>
            ) : (
              gruposTarjetas.map((grupo, i) => (
                <div key={i} className="grid md:grid-cols-3 gap-6 px-4">
                  {grupo.map((novedad, j) => (
                    <Link to={`/novedades/${novedad.id}`} key={j} className="block">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all h-[28rem] flex flex-col">
                        <img
                          src={
                            novedad.imagen_url
                              ? `http://localhost:3000${novedad.imagen_url}`
                              : 'https://via.placeholder.com/300x200'
                          }
                          alt={novedad.titulo}
                          className="object-cover w-full h-64"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-xl font-semibold mb-2 text-[#00527A]">
                            {novedad.titulo}
                          </h3>
                          <p className="text-gray-600">{novedad.descripcion}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))
            )}
          </Carousel>
        </div>
      </section>

      {/* GALERÍA DE IMÁGENES */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="galeria">
        <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center  border-[#00527A] pb-4 uppercase">
          Galería
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {imagenes.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:3000${img.imagen_url}`}
              alt={`Galería ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(`http://localhost:3000${img.imagen_url}`)}
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox}  // clic fuera cierra
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()} // evita cerrar cuando clickeas dentro del cuadro
          >
            <button
              onClick={(e) => {
                e.stopPropagation();  // para evitar que el click en el botón propague y cierre dos veces
                closeLightbox();
              }}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
            >
              ×
            </button>
            <img
              src={currentImage}
              alt="Imagen ampliada"
              className="w-full max-h-[90vh] object-contain rounded shadow-lg"
              onClick={(e) => e.stopPropagation()} // evita cerrar si clickeas la imagen
            />
          </div>
        </div>
      )}


      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-8  text-[#00527A] text-center  border-[#00527A] pb-10 uppercase">
          Empresas que nos acompañan
        </h2>
        <BannerAuspiciantes />
      </section>




      {/* ACCESOS RÁPIDOS - Llamadas de emergencia */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-8  text-[#00527A] text-center  border-[#00527A] pb-4 uppercase">
          Números Útiles
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">Bomberos</span>
              <span className="font-black text-5xl leading-[84px]">100</span>
            </a>
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">Defensa Civil</span>
              <span className="font-black text-5xl leading-[84px]">103</span>
            </a>
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">Urgencias</span>
              <span className="font-black text-5xl leading-[84px]">107</span>
            </a>
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">Emergencias</span>
              <span className="font-black text-5xl leading-[84px]">911</span>
            </a>

            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] col-span-2 lg:col-auto hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">EPEC</span>
              <span className="font-black text-2xl leading-[56px]">0800 777 0000</span>
            </a>
          </div>
        </div>
      </section>



    </div>
  );
};

export default Inicio;
