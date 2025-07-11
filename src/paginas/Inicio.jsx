// import React, { useEffect, useState } from 'react';
// import Banner from '../componentes/layout/Banner';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'flowbite-react';
// import axios from 'axios';
// import InfoActual from '../componentes/layout/InfoActual';


// const Inicio = () => {
//   const [novedades, setNovedades] = useState([]);

//   // Traer novedades del backend al cargar el componente
//   useEffect(() => {
//     const cargarNovedades = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/novedades');
//         console.log('Novedades:', res.data.body);
//         setNovedades(res.data.body);
//       } catch (error) {
//         console.error('Error al cargar novedades:', error);
//       }
//     };

//     cargarNovedades();
//   }, []);

//   // Agrupar novedades de a 3 para el carrusel
//   const agruparTarjetas = (array, tamañoGrupo) => {
//     const grupos = [];
//     for (let i = 0; i < array.length; i += tamañoGrupo) {
//       grupos.push(array.slice(i, i + tamañoGrupo));
//     }
//     return grupos;
//   };

//   const gruposTarjetas = agruparTarjetas(novedades, 3);

//   return (
//     <div>
//       <Banner />
//       <InfoActual />
//       {/* Sección de Bienvenida / Misión */}
//       <section className="max-w-6xl mx-auto px-4 py-8 text-center">
//         <h2 className="text-3xl font-bold text-[#00527A] mb-4">BIENVENIDOS</h2>
//         <p className="text-gray-700 max-w-2xl mx-auto text-justify">
//           Somos un espacio comunitario donde los vecinos nos organizamos para mejorar nuestro barrio, fortalecer los lazos sociales y promover el bien común...
//         </p>
//       </section>

//       {/* NOVEDADES con carrusel */}
//       <section className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-3xl font-bold mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
//           NOVEDADES
//         </h2>

//         <div className="h-[35rem]">
//           <Carousel
//             pauseOnHover
//             slide={true}
//             leftControl="◀"
//             rightControl="▶"
//             className="rounded-lg"
//           >
//             {gruposTarjetas.length === 0 ? (
//               <p>Cargando novedades...</p>
//             ) : (
//               gruposTarjetas.map((grupo, i) => (
//                 <div key={i} className="grid md:grid-cols-3 gap-6 px-4">
//                   {grupo.map((novedad, j) => (
//                     // <Link to="/novedades" key={j} className="block">
//                     <Link to={`/novedades/${novedad.id}`} key={j} className="block">

//                       <div
//                         className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all h-[28rem] flex flex-col"
//                       >
//                         <img
//                           src={
//                             novedad.imagen_url
//                               ? `http://localhost:3000${novedad.imagen_url}`
//                               : 'https://via.placeholder.com/300x200'
//                           }
//                           alt={novedad.titulo}
//                           className="object-cover w-full h-64"
//                         />

//                         <div className="p-5 flex flex-col flex-grow">
//                           <h3 className="text-xl font-semibold mb-2 text-[#00527A]">
//                             {novedad.titulo}
//                           </h3>
//                           <p className="text-gray-600">{novedad.descripcion}</p>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               ))
//             )}
//           </Carousel>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Inicio;

import React, { useEffect, useState } from 'react';
import Banner from '../componentes/layout/Banner';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import axios from 'axios';
import InfoActual from '../componentes/layout/InfoActual';

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

      {/* Sección adaptada: "Hacer tus reclamos y denuncias aquí" */}
      <section className="max-w-6xl mx-auto px-5 py-10 text-center">
        <h2 className="text-3xl font-black mb-10 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
          Hace tus reclamos y denuncias, <span className="text-cyan-500">aquí</span>
        </h2>


        {/* Aquí cambio a Link para navegación interna */}
        <Link
          to="/reclamos"
          className="block bg-blue-600 rounded-xl p-6 text-white font-semibold w-48 mx-auto hover:bg-blue-700 transition"
        >
          Reclamos y Denuncias
        </Link>
      </section>

      {/* NOVEDADES con carrusel */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
          Novedades
        </h2>

        <div className="h-[35rem]">
          <Carousel
            pauseOnHover
            slide={true}
            leftControl="◀"
            rightControl="▶"
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
        <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
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
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-6xl max-h-[90vh] mx-4">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
            >
              ×
            </button>
            <img
              src={currentImage}
              alt="Imagen ampliada"
              className="w-full max-h-[90vh] object-contain rounded shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
