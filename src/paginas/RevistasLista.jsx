import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API_URL } from "../config";

const RevistasLista = () => {
  const [revistas, setRevistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatearMesAnio = (mesString) => {
    if (!mesString) return "";
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const [anio, mes] = mesString.split("-");
    const mesNombre = meses[parseInt(mes, 10) - 1];
    return `${mesNombre} de ${anio}`;
  };

  useEffect(() => {
    const fetchRevistas = async () => {
      // try {
      //     const res = await axios.get("http://localhost:3000/api/revistas");
      //     setRevistas(res.data.body || []);
      // } catch (err) {
      //     setError("Error al cargar revistas");
      // } finally {
      //     setLoading(false);
      // }

      try {
        const res = await axios.get(`${API_URL}/revistas`);
        setRevistas(res.data.body || []);
      } catch (err) {
        setError("Error al cargar revistas");
      } finally {
        setLoading(false);
      }
    };
    fetchRevistas();
  }, []);

  if (loading) return <p className="text-center py-10">Cargando revistas...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (revistas.length === 0)
    return <p className="text-center py-10">No hay revistas disponibles.</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
        REVISTAS NUESTRO BARRIO
      </h2>
      <ul className="space-y-4">
        {revistas.map((revista) => (
          <li
            key={revista.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#66ccff] hover:bg-[#3399cc]"
          >
            <Link
              to={`/revistas/${revista.id}`}
              className="flex items-center text-white"
            >
              <i
                className="fa fa-file-text-o mr-3 text-xl"
                aria-hidden="true"
              ></i>

              <div className="flex-grow">
                <div className="flex flex-wrap justify-between items-center">
                  <span className="font-semibold text-lg">
                    {formatearMesAnio(revista.mes)}
                  </span>
                  <span className="text-white text-sm text-center flex-1">
                    {revista.descripcion}
                  </span>
                </div>
              </div>

              <i
                className="fa fa-chevron-right ml-auto text-white"
                aria-hidden="true"
              ></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevistasLista;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const RevistasLista = () => {
//     const [revistas, setRevistas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const auspiciantes = [
//         {
//             nombre: "Almacor",
//             url: "https://www.almacor.com.ar/",
//             logo: "https://www.almacor.com.ar/wp-content/uploads/2022/08/logo-almacor-2.png",
//             colorFondo: "bg-[#4CAF50]",
//             claseLogo: "h-24 w-auto"
//         },
//         {
//             nombre: "Cinco Esquinas",
//             url: "https://5esquinas.com.ar/",
//             logo: "https://5esquinas.com.ar/wp-content/uploads/2018/06/5esq-pagina_.png",
//             colorFondo: "bg-black",
//             claseLogo: "h-24 w-24 object-cover"
//         },
//         {
//             nombre: "Veterinaria",
//             url: "https://veterinariasanroque.com",
//             logo: "https://via.placeholder.com/150x80?text=San+Roque",
//             colorFondo: "bg-yellow-500",
//             claseLogo: "h-24 w-auto"
//         },
//     ];

//     const formatearMesAnio = (mesString) => {
//         if (!mesString) return "";
//         const meses = [
//             "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//         ];
//         const [anio, mes] = mesString.split("-");
//         const mesNombre = meses[parseInt(mes, 10) - 1];
//         return `${mesNombre} de ${anio}`;
//     };

//     useEffect(() => {
//         const fetchRevistas = async () => {
//             try {
//                 const res = await axios.get("http://localhost:3000/api/revistas");
//                 setRevistas(res.data.body || []);
//             } catch (err) {
//                 setError("Error al cargar revistas");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchRevistas();
//     }, []);

//     if (loading) return <p className="text-center py-10">Cargando revistas...</p>;
//     if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
//     if (revistas.length === 0) return <p className="text-center py-10">No hay revistas disponibles.</p>;

//     return (
//         <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/* Sección Revistas */}
//             <div className="md:col-span-2">
//                 <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
//                     REVISTAS NUESTRO BARRIO
//                 </h2>
//                 <ul className="space-y-4">
//                     {revistas.map((revista) => (
//                         <li
//                             key={revista.id}
//                             className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#4CAF50] hover:bg-[#388E3C]"
//                         >
//                             <Link
//                                 to={`/revistas/${revista.id}`}
//                                 className="flex items-center text-white"
//                             >
//                                 <i className="fa fa-file-text-o mr-3 text-xl" aria-hidden="true"></i>
//                                 <div className="flex-grow">
//                                     <div className="flex flex-wrap justify-between items-center">
//                                         <span className="font-semibold text-lg">
//                                             {formatearMesAnio(revista.mes)}
//                                         </span>
//                                         <span className="text-white text-sm text-center flex-1">
//                                             {revista.descripcion}
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <i className="fa fa-chevron-right ml-auto text-white" aria-hidden="true"></i>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Sidebar de auspiciantes (colores distintos por cada uno) */}
//             <aside className="p-6">
//                 <h3 className="text-xl font-bold text-[#00527A] mb-4 border-b pb-5 text-center uppercase">
//                     Empresas que nos acompañan
//                 </h3>
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {auspiciantes.map((ausp, idx) => (
//                         <li
//                             key={idx}
//                             className={`flex justify-center items-center p-2 rounded-xl shadow ${ausp.colorFondo}`}
//                         >
//                             <a
//                                 href={ausp.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="transition transform hover:scale-105"
//                             >
//                                 <img
//                                     src={ausp.logo}
//                                     alt={ausp.nombre}
//                                     className={`${ausp.claseLogo} object-contain`}
//                                 />
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </aside>

//         </div>
//     );
// };

// export default RevistasLista;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const RevistasLista = () => {
//     const [revistas, setRevistas] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const auspiciantes = [
//         {
//             nombre: "Almacor",
//             url: "https://www.almacor.com.ar/",
//             logo: "https://www.almacor.com.ar/wp-content/uploads/2022/08/logo-almacor-2.png",
//             colorFondo: "bg-[#4CAF50]",
//             claseLogo: "h-24 w-auto",
//             gridColSpan: "col-span-2" // Logo rectangular arriba
//         },
//         {
//             nombre: "Cinco Esquinas",
//             url: "https://5esquinas.com.ar/",
//             logo: "https://5esquinas.com.ar/wp-content/uploads/2018/06/5esq-pagina_.png",
//             colorFondo: "bg-gray-300",
//             claseLogo: "h-30 w-30 object-cover",
//             gridColSpan: "col-span-1" // cuadrado
//         },
//         {
//             nombre: "Veterinaria",
//             url: "https://veterinariasanroque.com",
//             logo: "https://via.placeholder.com/150x80?text=San+Roque",
//             colorFondo: "bg-yellow-500",
//             claseLogo: "h-24 w-auto",
//             gridColSpan: "col-span-1" // cuadrado
//         },
//         {
//             nombre: "Empresa Extra",
//             url: "https://ejemplo.com",
//             logo: "https://via.placeholder.com/300x100?text=Extra",
//             colorFondo: "bg-blue-500",
//             claseLogo: "h-24 w-auto",
//             gridColSpan: "col-span-2" // rectangular abajo
//         }
//     ];

//     const formatearMesAnio = (mesString) => {
//         if (!mesString) return "";
//         const meses = [
//             "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
//         ];
//         const [anio, mes] = mesString.split("-");
//         const mesNombre = meses[parseInt(mes, 10) - 1];
//         return `${mesNombre} de ${anio}`;
//     };

//     useEffect(() => {
//         const fetchRevistas = async () => {
//             try {
//                 const res = await axios.get("http://localhost:3000/api/revistas");
//                 setRevistas(res.data.body || []);
//             } catch (err) {
//                 setError("Error al cargar revistas");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchRevistas();
//     }, []);

//     if (loading) return <p className="text-center py-10">Cargando revistas...</p>;
//     if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
//     if (revistas.length === 0) return <p className="text-center py-10">No hay revistas disponibles.</p>;

//     return (
//         <div className="max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/* Sección Revistas */}
//             <div className="md:col-span-2">
//                 <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
//                     REVISTAS NUESTRO BARRIO
//                 </h2>
//                 <ul className="space-y-4">
//                     {revistas.map((revista) => (
//                         <li
//                             key={revista.id}
//                             className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#4CAF50] hover:bg-[#388E3C]"
//                         >
//                             <Link
//                                 to={`/revistas/${revista.id}`}
//                                 className="flex items-center text-white"
//                             >
//                                 <i className="fa fa-file-text-o mr-3 text-xl" aria-hidden="true"></i>
//                                 <div className="flex-grow">
//                                     <div className="flex flex-wrap justify-between items-center">
//                                         <span className="font-semibold text-lg">
//                                             {formatearMesAnio(revista.mes)}
//                                         </span>
//                                         <span className="text-white text-sm text-center flex-1">
//                                             {revista.descripcion}
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <i className="fa fa-chevron-right ml-auto text-white" aria-hidden="true"></i>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Sidebar de auspiciantes con control de tamaño */}
//             <aside className="p-6">
//                 <h3 className="text-xl font-bold text-[#00527A] mb-4 border-b pb-5 text-center uppercase">
//                     Empresas que nos acompañan
//                 </h3>
//                 <ul className="grid grid-cols-2 gap-4">
//                     {auspiciantes.map((ausp, idx) => (
//                         <li
//                             key={idx}
//                             className={`flex justify-center items-center p-2 rounded-xl shadow ${ausp.colorFondo} ${ausp.gridColSpan}`}
//                         >
//                             <a
//                                 href={ausp.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="transition transform hover:scale-105"
//                             >
//                                 <img
//                                     src={ausp.logo}
//                                     alt={ausp.nombre}
//                                     className={`${ausp.claseLogo} object-contain`}
//                                 />
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </aside>
//         </div>
//     );
// };

// export default RevistasLista;
