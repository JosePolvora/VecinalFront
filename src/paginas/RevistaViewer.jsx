// import React, { useEffect, useState } from "react";
// import "../styles/revistaViewerStyles.css";

// import { API_URL } from "../config";

// const RevistaViewer = ({ revista }) => {
//   const [paginas, setPaginas] = useState([]);
//   const [paginaActual, setPaginaActual] = useState(0);
//   const [fade, setFade] = useState(true); // para animar

//   const verificarImagenes = async (urls) => {
//     const verificadas = await Promise.all(
//       urls.map(
//         (url) =>
//           new Promise((resolve) => {
//             const img = new Image();
//             img.src = url;
//             img.onload = () => resolve(url);
//             img.onerror = () => resolve(null);
//           })
//       )
//     );
//     return verificadas.filter((url) => url !== null);
//   };

  

//   useEffect(() => {
//     if (revista && revista.paginas_carpeta) {
//       const baseUrl = `${API_URL.replace("/api", "")}${
//         revista.paginas_carpeta
//       }`;
//       const urls = [];
//       for (let i = 1; i <= 30; i++) {
//         urls.push(`${baseUrl}/pagina-${String(i).padStart(2, "0")}.jpg`);
//       }
//       verificarImagenes(urls).then((validas) => {
//         setPaginas(validas);
//         setPaginaActual(0);
//       });
//     }
//   }, [revista]);

//   if (!revista || paginas.length === 0) return null;

//   const cambiarPagina = (nuevaPagina) => {
//     setFade(false);
//     setTimeout(() => {
//       setPaginaActual(nuevaPagina);
//       setFade(true);
//     }, 300); // duración de la animación
//   };

//   const siguiente = () => {
//     if (paginaActual < paginas.length - 1) {
//       cambiarPagina(paginaActual + 1);
//     }
//   };

//   const anterior = () => {
//     if (paginaActual > 0) {
//       cambiarPagina(paginaActual - 1);
//     }
//   };

//   return (
//     <div className="revista-fullscreen">
//       <button
//         onClick={anterior}
//         className="revista-flecha izquierda"
//         disabled={paginaActual === 0}
//         aria-label="Página anterior"
//       >
//         <i className="fa fa-chevron-left" aria-hidden="true"></i>
//       </button>

//       <div className={`revista-pagina-sola ${fade ? "fade-in" : "fade-out"}`}>
//         <img src={paginas[paginaActual]} alt={`Página ${paginaActual + 1}`} />
//       </div>

//       <button
//         onClick={siguiente}
//         className="revista-flecha derecha"
//         disabled={paginaActual >= paginas.length - 1}
//         aria-label="Página siguiente"
//       >
//         <i className="fa fa-chevron-right" aria-hidden="true"></i>
//       </button>
//     </div>
//   );
// };

// export default RevistaViewer;

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.santaisabel2.com/api"; // tu backend

const RevistaViewer = () => {
  const [revistas, setRevistas] = useState([]);

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        const res = await axios.get(`${API_URL}/revistas`);
        setRevistas(res.data);
      } catch (error) {
        console.error("Error al traer revistas:", error);
      }
    };
    fetchRevistas();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Revistas del Barrio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {revistas.map((revista) => (
          <div key={revista.id} className="p-4 border rounded-lg shadow bg-white">
            <h3 className="text-xl font-semibold capitalize">{revista.mes}</h3>
            <p className="text-gray-600">{revista.descripcion}</p>
            
            {/* Cargar imágenes */}
            <div className="mt-4 space-y-2">
              {[1, 2, 3, 4, 5].map((num) => ( // 🔹 ajustá la cantidad de páginas reales
                <img
                  key={num}
                  src={`https://api.santaisabel2.com${revista.paginas_carpeta}/pagina${num}.jpg`}
                  alt={`Página ${num} de ${revista.mes}`}
                  className="w-full rounded shadow"
                  onError={(e) => (e.target.style.display = "none")}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevistaViewer;
