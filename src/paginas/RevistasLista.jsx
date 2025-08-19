// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// import { API_URL } from "../config";

// const RevistasLista = () => {
//   const [revistas, setRevistas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const formatearMesAnio = (mesString) => {
//     if (!mesString) return "";
//     const meses = [
//       "Enero",
//       "Febrero",
//       "Marzo",
//       "Abril",
//       "Mayo",
//       "Junio",
//       "Julio",
//       "Agosto",
//       "Septiembre",
//       "Octubre",
//       "Noviembre",
//       "Diciembre",
//     ];
//     const [anio, mes] = mesString.split("-");
//     const mesNombre = meses[parseInt(mes, 10) - 1];
//     return `${mesNombre} de ${anio}`;
//   };

//   useEffect(() => {
//     const fetchRevistas = async () => {
//       // try {
//       //     const res = await axios.get("http://localhost:3000/api/revistas");
//       //     setRevistas(res.data.body || []);
//       // } catch (err) {
//       //     setError("Error al cargar revistas");
//       // } finally {
//       //     setLoading(false);
//       // }

//       try {
//         const res = await axios.get(`${API_URL}/revistas`);
//         setRevistas(res.data.body || []);
//       } catch (err) {
//         setError("Error al cargar revistas");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRevistas();
//   }, []);

//   if (loading) return <p className="text-center py-10">Cargando revistas...</p>;
//   if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
//   if (revistas.length === 0)
//     return <p className="text-center py-10">No hay revistas disponibles.</p>;

//   return (
//     <div className="max-w-4xl mx-auto py-10 px-4">
//       <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
//         REVISTAS NUESTRO BARRIO
//       </h2>
//       <ul className="space-y-4">
//         {revistas.map((revista) => (
//           <li
//             key={revista.id}
//             className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#66ccff] hover:bg-[#3399cc]"
//           >
//             <Link
//               to={`/revistas/${revista.id}`}
//               className="flex items-center text-white"
//             >
//               <i
//                 className="fa fa-file-text-o mr-3 text-xl"
//                 aria-hidden="true"
//               ></i>

//               <div className="flex-grow">
//                 <div className="flex flex-wrap justify-between items-center">
//                   <span className="font-semibold text-lg">
//                     {formatearMesAnio(revista.mes)}
//                   </span>
//                   <span className="text-white text-sm text-center flex-1">
//                     {revista.descripcion}
//                   </span>
//                 </div>
//               </div>

//               <i
//                 className="fa fa-chevron-right ml-auto text-white"
//                 aria-hidden="true"
//               ></i>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RevistasLista;

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.santaisabel2.com/api/revistas"; // URL real en producción

const RevistaLista = () => {
  const [revistas, setRevistas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        const res = await axios.get(API_URL);
        setRevistas(res.data.body || []); // 🔹 asegurarse de tomar 'body'
      } catch (err) {
        console.error("Error al obtener revistas", err);
      }
    };
    fetchRevistas();
  }, []);

  const verRevista = (revista) => {
    navigate(`/revistas/${revista.id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Revistas</h2>
      <ul className="space-y-4">
        {revistas.map((revista) => (
          <li
            key={revista.id}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{revista.mes}</h3>
              <p className="text-sm text-gray-600">{revista.descripcion}</p>
            </div>
            <button
              onClick={() => verRevista(revista)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Ver
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevistaLista;
