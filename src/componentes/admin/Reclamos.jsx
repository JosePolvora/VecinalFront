// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// const ListadoReclamos = () => {
//   const [reclamos, setReclamos] = useState([]);

//   useEffect(() => {
//     const fetchReclamos = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/reclamos");
//         if (res.data.body) {
//           setReclamos(res.data.body);
//         }
//       } catch (error) {
//         console.error("Error al obtener los reclamos:", error);
//       }
//     };

//     fetchReclamos();
//   }, []);

//   const eliminarReclamo = async (id) => {
//     const result = await Swal.fire({
//       title: "¿Estás seguro?",
//       text: "Este reclamo será eliminado permanentemente.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Sí, eliminar",
//       cancelButtonText: "Cancelar",
//     });

//     if (!result.isConfirmed) return;

//     try {
//       await axios.delete(`http://localhost:3000/api/reclamos/${id}`);
//       setReclamos((prev) => prev.filter((rec) => rec.id !== id));

//       Swal.fire({
//         title: "Eliminado",
//         text: "El reclamo ha sido eliminado con éxito.",
//         icon: "success",
//         timer: 2000,
//         showConfirmButton: false,
//       });
//     } catch (error) {
//       console.error("Error al eliminar el reclamo:", error);
//       Swal.fire({
//         title: "Error",
//         text: "Hubo un problema al eliminar el reclamo.",
//         icon: "error",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-start p-6 pt-16">
//       <div className="text-white bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           LISTADO DE RECLAMOS
//         </h2>

//         {reclamos.length === 0 ? (
//           <p className="text-white/80 text-center">
//             No hay reclamos para mostrar.
//           </p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full border border-white/30 rounded-lg overflow-hidden">
//               <thead className="bg-white/20 text-white uppercase text-sm">
//                 <tr>
//                   <th className="p-3 border border-white/20">N° Reclamo</th>
//                   <th className="p-3 border border-white/20">Nombre</th>
//                   <th className="p-3 border border-white/20">Estado</th>
//                   <th className="p-3 border border-white/20">Acciones</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reclamos.map((rec) => (
//                   <tr key={rec.id} className="hover:bg-white/10 transition">
//                     <td className="p-3 border border-white/20">
//                       {rec.numeroReclamo}
//                     </td>
//                     <td className="p-3 border border-white/20">
//                       {rec.nombres} {rec.apellido}
//                     </td>
//                     <td className="p-3 border border-white/20">{rec.estado}</td>
//                     <td className="p-3 border border-white/20 text-center">
//                       <Link
//                         to={`/adminpanel/formreclamo/${rec.id}`}
//                         className="text-white hover:text-blue-300"
//                         title="Editar estado"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth={1.5}
//                           stroke="currentColor"
//                           className="w-5 h-5 inline-block"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313 3 21l1.687-4.5 12.175-12.175z"
//                           />
//                         </svg>
//                       </Link>

//                       <button
//                         onClick={() => eliminarReclamo(rec.id)}
//                         className="ml-3 text-white hover:text-red-400"
//                         title="Eliminar reclamo"
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="w-5 h-5 inline-block"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M6.75 4.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v.75H19.5a.75.75 0 0 1 0 1.5h-1.07l-.62 12.4a2.25 2.25 0 0 1-2.24 2.1H8.43a2.25 2.25 0 0 1-2.24-2.1L5.57 6.75H4.5a.75.75 0 0 1 0-1.5h2.25V4.5Zm1.82 2.25 0 12h6.86l.58-12H8.57Z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListadoReclamos;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { API_URL } from "../../config";

const ListadoReclamos = () => {
  const [reclamos, setReclamos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reclamosPorPagina = 5;

  useEffect(() => {
    const fetchReclamos = async () => {
      // try {
      //   const res = await axios.get("http://localhost:3000/api/reclamos");
      try {
        const res = await axios.get(`${API_URL}/reclamos`);

        if (res.data.body) {
          setReclamos(res.data.body);
        }
      } catch (error) {
        console.error("Error al obtener los reclamos:", error);
      }
    };

    fetchReclamos();
  }, []);

  const eliminarReclamo = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Este reclamo será eliminado permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!result.isConfirmed) return;

    // try {
    //   await axios.delete(`http://localhost:3000/api/reclamos/${id}`);
    //   setReclamos((prev) => prev.filter((rec) => rec.id !== id));

    //   Swal.fire({
    //     title: "Eliminado",
    //     text: "El reclamo ha sido eliminado con éxito.",
    //     icon: "success",
    //     timer: 2000,
    //     showConfirmButton: false,
    //   });

    try {
      await axios.delete(`${API_URL}/reclamos/${id}`);
      setReclamos((prev) => prev.filter((rec) => rec.id !== id));

      Swal.fire({
        title: "Eliminado",
        text: "El reclamo ha sido eliminado con éxito.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error("Error al eliminar el reclamo:", error);
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al eliminar el reclamo.",
        icon: "error",
      });
    }
  };

  // Cálculo de paginación
  const indexOfLast = currentPage * reclamosPorPagina;
  const indexOfFirst = indexOfLast - reclamosPorPagina;
  const reclamosActuales = reclamos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(reclamos.length / reclamosPorPagina);

  const changePage = (number) => {
    setCurrentPage(number);
  };

  return (
    <div className="min-h-screen flex justify-center items-start p-6 pt-16">
      <div className="text-white bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          LISTADO DE RECLAMOS
        </h2>

        {reclamos.length === 0 ? (
          <p className="text-white/80 text-center">
            No hay reclamos para mostrar.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border border-white/30 rounded-lg overflow-hidden">
                <thead className="bg-white/20 text-white uppercase text-sm">
                  <tr>
                    <th className="p-3 border border-white/20">N° Reclamo</th>
                    <th className="p-3 border border-white/20">Nombre</th>
                    <th className="p-3 border border-white/20">Estado</th>
                    <th className="p-3 border border-white/20">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {reclamosActuales.map((rec) => (
                    <tr key={rec.id} className="hover:bg-white/10 transition">
                      <td className="p-3 border border-white/20">
                        {rec.numeroReclamo}
                      </td>
                      <td className="p-3 border border-white/20">
                        {rec.nombres} {rec.apellido}
                      </td>
                      <td className="p-3 border border-white/20">
                        {rec.estado}
                      </td>
                      <td className="p-3 border border-white/20 text-center">
                        <Link
                          to={`/adminpanel/formreclamo/${rec.id}`}
                          className="text-white hover:text-blue-300"
                          title="Editar estado"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 inline-block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.5 19.313 3 21l1.687-4.5 12.175-12.175z"
                            />
                          </svg>
                        </Link>

                        <button
                          onClick={() => eliminarReclamo(rec.id)}
                          className="ml-3 text-white hover:text-red-400"
                          title="Eliminar reclamo"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 inline-block"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.75 4.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v.75H19.5a.75.75 0 0 1 0 1.5h-1.07l-.62 12.4a2.25 2.25 0 0 1-2.24 2.1H8.43a2.25 2.25 0 0 1-2.24-2.1L5.57 6.75H4.5a.75.75 0 0 1 0-1.5h2.25V4.5Zm1.82 2.25 0 12h6.86l.58-12H8.57Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINACIÓN */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => changePage(index + 1)}
                    className={`px-4 py-2 rounded-md border border-white/30 text-sm font-medium transition ${
                      currentPage === index + 1
                        ? "bg-white text-[#002c73]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListadoReclamos;
