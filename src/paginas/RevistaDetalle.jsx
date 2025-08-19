// export default RevistaDetalle;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const API_URL = "https://api.santaisabel2.com/api"; // tu backend real

// const RevistaDetalle = () => {
//   const { id } = useParams();
//   const [revista, setRevista] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRevista = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const { data } = await axios.get(`${API_URL}/revistas/${id}`);
//         const revistaData = data.body;

//         if (!revistaData) {
//           setError("Revista no encontrada");
//           return;
//         }

//         setRevista(revistaData);
//       } catch (err) {
//         console.error("Error al cargar la revista:", err);
//         setError("Error al cargar la revista");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchRevista();
//     else setError("ID inválido");
//   }, [id]);

//   if (loading) return <p className="text-center py-10">Cargando revista...</p>;
//   if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
//   if (!revista) return null;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4 capitalize">{revista.mes}</h1>
//       <p className="mb-2">{revista.descripcion}</p>
//       <p className="text-sm text-gray-500 mb-6">
//         📂 Carpeta: {revista.paginas_carpeta} <br />
//         📅 Creado en: {new Date(revista.creado_en).toLocaleDateString()}
//       </p>

//       {/* 🔹 Mostrar todas las imágenes que realmente existen */}
//       <div className="space-y-4">
//         {revista.imagenes && revista.imagenes.length > 0 ? (
//           revista.imagenes.map((img, index) => (
//             <img
//               key={index}
//               src={`https://api.santaisabel2.com${img}`}
//               alt={`Página ${index + 1}`}
//               className="w-full shadow-lg rounded-lg"
//               onError={(e) => (e.target.style.display = "none")}
//             />
//           ))
//         ) : (
//           <p className="text-gray-500">No hay imágenes para mostrar.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RevistaDetalle;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://api.santaisabel2.com/api";

const RevistaDetalle = () => {
  const { id } = useParams();
  const [revista, setRevista] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRevista = async () => {
      try {
        setLoading(true);
        setError(null);
        const { data } = await axios.get(`${API_URL}/revistas/${id}`);
        const revistaData = data.body;

        if (!revistaData) {
          setError("Revista no encontrada");
          return;
        }

        setRevista(revistaData);
      } catch (err) {
        console.error("Error al cargar la revista:", err);
        setError("Error al cargar la revista");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchRevista();
    else setError("ID inválido");
  }, [id]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      revista && prev < revista.imagenes.length - 1 ? prev + 1 : prev
    );
  };

  if (loading) return <p className="text-center py-10">Cargando revista...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (!revista || !revista.imagenes || revista.imagenes.length === 0)
    return <p className="text-center py-10">No hay imágenes para mostrar.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4 capitalize">{revista.mes}</h1>
      <p className="mb-2">{revista.descripcion}</p>

      {/* 🔹 Página actual */}
      <div className="mb-4">
        <img
          src={`${API_URL.replace("/api", "")}${revista.imagenes[currentPage]}`}
          alt={`Página ${currentPage + 1}`}
          className="w-full shadow-lg rounded-lg"
        />
      </div>

      {/* 🔹 Paginación */}
      <div className="flex justify-between items-center max-w-xs mx-auto mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>
          Página {currentPage + 1} / {revista.imagenes.length}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === revista.imagenes.length - 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default RevistaDetalle;
