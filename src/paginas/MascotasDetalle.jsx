// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// // import empresa2 from "../imagenes/imgPublicidad/almacor.png";
// // import empresa3 from "../imagenes/imgPublicidad/carniceriatriangulo.png";

// import { API_URL } from "../config";

// const MascotaDetalle = () => {
//   const { id } = useParams();
//   const [mascota, setMascota] = useState(null);

//   useEffect(() => {
//     const obtenerMascota = async () => {
//       try {
//         const res = await axios.get(`${API_URL}/mascotas/${id}`);
//         setMascota(res.data.body);
//       } catch (error) {
//         console.error("Error al obtener la mascota:", error);
//       }
//     };
//     obtenerMascota();
//   }, [id]);

//   if (!mascota) return <p className="text-center mt-10">Cargando mascota...</p>;

//   const BASE_IMG_URL = "https://api.santaisabel2.com";

//   return (
//     <>
//       <h2 className="text-3xl font-bold text-[#002c73] text-start mb-10 uppercase px-4">
//         Portal Mascotas
//       </h2>
//       <p className="mb-6 text-gray-900 text-base md:text-lg leading-relaxed mx-[5%] italic text-justify font-semibold">
//         Si encontrás una mascota perdida en el barrio, acercate al Centro Vecinal o
//         contactá a algún miembro de la comisión. De esta manera podremos
//         asegurarnos de que el animal vuelva a su hogar de manera rápida y
//         segura, en caso de no tener dueño, nos encargaremos de buscarle un nuevo hogar
//         seguro y responsable.
//       </p>

//       <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
//         {/* Contenido principal */}
//         <div className="md:w-2/3 bg-white shadow-xl rounded-2xl p-6 md:p-8 animate-fade-in">

//           {/* Fecha */}
//           {/* <p className="text-sm text-gray-500 mb-2 text-right italic">
//             Publicado el: {new Date(mascota.fecha).toLocaleDateString("es-AR")}
//           </p> */}

//           {/* Nombre */}
//           <h1 className="text-2xl md:text-3xl font-bold text-[#002c73] mb-6 text-center leading-relaxed uppercase">
//             {mascota.nombre || "Sin nombre"}
//           </h1>

//           {/* Imagen */}
//           <div className="flex justify-center mb-6">
//             <img
//               src={
//                 mascota.imagen_url
//                   ? `${BASE_IMG_URL}${mascota.imagen_url}`
//                   : "https://via.placeholder.com/800x450"
//               }
//               alt={mascota.nombre || "Mascota"}
//               className="w-full max-w-3xl h-auto rounded-xl shadow-md object-cover"
//             />
//           </div>

//           {/* Información detallada */}
//           <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
//             <p>
//               <strong>Tipo:</strong> {mascota.tipo}{" "}
//               {mascota.raza && `(${mascota.raza})`}
//             </p>

//             {/* <p>
//               <strong>Edad:</strong> {mascota.edad}
//             </p> */}

//             <p>
//               <strong>Sexo:</strong> {mascota.sexo}
//             </p>
//             <p>
//               <strong>Tamaño:</strong> {mascota.tamano}
//             </p>
//             <p>
//               <strong>Condición:</strong> {mascota.condicion}
//             </p>
//             <p>
//               <strong>Ubicación:</strong> {mascota.lugar}
//             </p>
//             <p>
//               <strong>Contacto:</strong> {mascota.contacto_nombre} -{" "}
//               {mascota.contacto_telefono}
//             </p>
//           </div>

//           {/* Botón para volver */}
//           <div className="mt-10 text-center">
//             <Link
//               to="/mascotas"
//               className="inline-block px-6 py-2 bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] text-white rounded-full hover:bg-[#003f5c] transition"
//             >
//               Volver a Mascotas
//             </Link>
//           </div>
//         </div>

//         {/* Sidebar derecho */}

//         {/* <aside className="md:w-1/3 mt-8 md:mt-0 px-2 md:px-6 border-t md:border-t-0 md:border-l-2 border-gray-300 animate-fade-in">
//           <h2 className="text-xl font-bold text-[#002c73] mb-10 text-center uppercase">
//             Empresas Amigas
//           </h2>

//           <div className="space-y-8">
//             <img
//               src={empresa2}
//               alt="Empresa 2"
//               className="image-rotate w-full h-auto rounded-md shadow"
//             />
//             <img
//               src={empresa3}
//               alt="Empresa 3"
//               className="image-rotate w-full h-auto rounded-md shadow"
//             />
//           </div>
//         </aside> */}
//       </div>
//     </>
//   );
// };

// export default MascotaDetalle;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import empresa2 from "../imagenes/imgPublicidad/almacor.png";
// import empresa3 from "../imagenes/imgPublicidad/carniceriatriangulo.png";

// import ImgAdoptar from "../imagenes/adoptar.png";
// import ImgDonar from "../imagenes/donar.png";

import { API_URL } from "../config";

const MascotaDetalle = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const obtenerMascota = async () => {
      try {
        const res = await axios.get(`${API_URL}/mascotas/${id}`);
        setMascota(res.data.body);
      } catch (error) {
        console.error("Error al obtener la mascota:", error);
      }
    };
    obtenerMascota();
  }, [id]);

  if (!mascota) return <p className="text-center mt-10">Cargando mascota...</p>;

  const BASE_IMG_URL = "https://api.santaisabel2.com";

  return (
    <>
      <h2 className="text-3xl font-bold text-[#002c73] text-start mb-10 uppercase px-4">
        Portal Mascotas
      </h2>
      <p className="mb-6 text-gray-900 text-base md:text-lg leading-relaxed mx-[5%] italic text-justify font-semibold">
        Si encontrás una mascota perdida en el barrio, acercate al Centro
        Vecinal o contactá a algún miembro de la comisión. De esta manera
        podremos asegurarnos de que el animal vuelva a su hogar de manera rápida
        y segura, en caso de no tener dueño, nos encargaremos de buscarle un
        nuevo hogar seguro y responsable.
      </p>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8 justify-center">
        {/* Contenido principal */}
        <div className="md:w-2/3 bg-white shadow-xl rounded-2xl p-6 md:p-8 animate-fade-in">
          {/* Nombre */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#002c73] mb-6 text-center leading-relaxed uppercase">
            {mascota.nombre || "Sin nombre"}
          </h1>

          {/* Imagen */}
          <div className="flex justify-center mb-6">
            <img
              src={
                mascota.imagen_url
                  ? `${BASE_IMG_URL}${mascota.imagen_url}`
                  : "https://via.placeholder.com/800x450"
              }
              alt={mascota.nombre || "Mascota"}
              className="w-full max-w-3xl h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Información detallada */}
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              <strong>Tipo:</strong> {mascota.tipo}{" "}
              {mascota.raza && `(${mascota.raza})`}
            </p>
            <p>
              <strong>Sexo:</strong> {mascota.sexo}
            </p>
            <p>
              <strong>Tamaño:</strong> {mascota.tamano}
            </p>
            <p>
              <strong>Condición:</strong> {mascota.condicion}
            </p>
            <p>
              <strong>Ubicación:</strong> {mascota.lugar}
            </p>
            <p>
              <strong>Contacto:</strong> {mascota.contacto_nombre} -{" "}
              {mascota.contacto_telefono}
            </p>
          </div>

          {/* Accesos principales (Adoptar y Donar) */}
          <section className="mt-10 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {/* Adoptar */}
              <Link
                to="/mascotas/formulario/adopcion"
                className="bg-green-600 rounded-xl p-4 text-white 
                         w-11/12 h-28 sm:w-44 sm:h-44
                         hover:bg-green-700 transition 
                         flex flex-row sm:flex-col items-center sm:justify-center text-left sm:text-center 
                         space-x-4 sm:space-x-0 sm:space-y-2 shadow-md"
              >
                <img
                  // src={ImgAdoptar}
                  alt="Adoptar mascota"
                  className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
                />
                <div className="pl-4 sm:pl-0 sm:mt-2">
                  <div className="text-base font-semibold leading-tight">
                    Adoptar
                  </div>
                  <div className="text-sm">
                    Dale un hogar a {mascota.nombre}
                  </div>
                </div>
              </Link>

              {/* Donar */}
              <Link
                to="/mascotas/formulario/donacion"
                className="bg-yellow-600 rounded-xl p-4 text-white 
                         w-11/12 h-28 sm:w-44 sm:h-44
                         hover:bg-yellow-700 transition 
                         flex flex-row sm:flex-col items-center sm:justify-center text-left sm:text-center 
                         space-x-4 sm:space-x-0 sm:space-y-2 shadow-md"
              >
                <img
                  // src={ImgDonar}
                  alt="Donar"
                  className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
                />
                <div className="pl-4 sm:pl-0 sm:mt-2">
                  <div className="text-base font-semibold leading-tight">
                    Donar
                  </div>
                  <div className="text-sm">Apoya a {mascota.nombre}</div>
                </div>
              </Link>
            </div>
          </section>

          {/* Botón para volver */}
          <div className="mt-10 text-center">
            <Link
              to="/mascotas"
              className="inline-block px-6 py-2 bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] text-white rounded-full hover:bg-[#003f5c] transition"
            >
              Volver a Mascotas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MascotaDetalle;
