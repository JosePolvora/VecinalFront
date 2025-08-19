// src/paginas/RevistaDetalle.jsx
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import RevistaViewer from "./RevistaViewer";

// import { API_URL } from "../config";

// const RevistaDetalle = () => {
//   const { id } = useParams();
//   const [revista, setRevista] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRevista = async () => {
//       // try {
//       //     setLoading(true);
//       //     setError(null);
//       //     const res = await axios.get(`http://localhost:3000/api/revistas/${id}`);
//       //     if (!res.data.body) {
//       //         setError("Revista no encontrada");
//       //     } else {
//       //         setRevista(res.data.body);
//       //     }

//       try {
//         setLoading(true);
//         setError(null);
//         const res = await axios.get(`${API_URL}/revistas/${id}`);
//         if (!res.data.body) {
//           setError("Revista no encontrada");
//         } else {
//           setRevista(res.data.body);
//         }
//       } catch {
//         setError("Error al cargar la revista");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchRevista();
//     else {
//       setError("ID inválido");
//       setLoading(false);
//     }
//   }, [id]);

//   if (loading) return <p className="text-center py-10">Cargando revista...</p>;
//   if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

//   return <RevistaViewer revista={revista} />;
// };

// export default RevistaDetalle;


// src/paginas/RevistaDetalle.jsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import RevistaViewer from "./RevistaViewer";

// const API_URL = import.meta.env.VITE_API_URL; // tu backend en producción

// const RevistaDetalle = () => {
//   const { id } = useParams();
//   const [revista, setRevista] = useState(null);
//   const [imagenes, setImagenes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRevista = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const res = await axios.get(`${API_URL}/revistas/${id}`);
//         const data = res.data.body;

//         if (!data) {
//           setError("Revista no encontrada");
//           return;
//         }

//         setRevista(data);

//         // Generar URLs de imágenes según la carpeta y nombres reales
//         const carpeta = data.paginas_carpeta; // ejemplo: /uploads/revistas/paginas/agosto
//         const totalPaginas = 10; // ajustar al número máximo de páginas de la revista
//         const imgs = [];

//         for (let i = 1; i <= totalPaginas; i++) {
//           // Ajustar el nombre de cada archivo según tu patrón real
//           imgs.push(
//             `${API_URL.replace("/api", "")}${carpeta}/${i}_${data.mes}_pages-to-jpg-000${i}.jpg`
//           );
//         }

//         setImagenes(imgs);
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
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">{revista.mes.toUpperCase()}</h1>
//       <p className="mb-6 text-gray-700">{revista.descripcion}</p>
//       <RevistaViewer imagenes={imagenes} />
//     </div>
//   );
// };

// export default RevistaDetalle;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import RevistaViewer from "./RevistaViewer";

// const API_URL = import.meta.env.VITE_API_URL; // tu backend en producción

// const RevistaDetalle = () => {
//   const { id } = useParams();
//   const [revista, setRevista] = useState(null);
//   const [imagenes, setImagenes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRevista = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         console.log("📌 Consultando revista con ID:", id);
//         const res = await axios.get(`${API_URL}/revistas/${id}`);
//         console.log("📌 Respuesta del backend:", res.data);

//         const data = res.data.body;
//         console.log("📌 Datos extraídos (body):", data);

//         if (!data) {
//           setError("Revista no encontrada");
//           console.warn("⚠️ No se encontró la revista en body");
//           return;
//         }

//         setRevista(data);

//         // Generar URLs de imágenes según la carpeta y nombres reales
//         const carpeta = data.paginas_carpeta; // ejemplo: /uploads/revistas/paginas/agosto
//         const totalPaginas = 10; // ajustar al número máximo de páginas de la revista
//         const imgs = [];

//         for (let i = 1; i <= totalPaginas; i++) {
//           const urlImagen = `${API_URL.replace("/api", "")}${carpeta}/${i}_${data.mes}_pages-to-jpg-000${i}.jpg`;
//           imgs.push(urlImagen);
//           console.log("📌 URL imagen generada:", urlImagen);
//         }

//         setImagenes(imgs);
//       } catch (err) {
//         console.error("❌ Error al cargar la revista:", err);
//         setError("Error al cargar la revista");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) fetchRevista();
//     else {
//       setError("ID inválido");
//       console.warn("⚠️ No se proporcionó ID en params");
//     }
//   }, [id]);

//   if (loading) return <p className="text-center py-10">Cargando revista...</p>;
//   if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
//   if (!revista) return null;

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">{revista.mes.toUpperCase()}</h1>
//       <p className="mb-6 text-gray-700">{revista.descripcion}</p>
//       <RevistaViewer imagenes={imagenes} />
//     </div>
//   );
// };

// export default RevistaDetalle;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const API_URL = "https://api.santaisabel2.com/api/revistas";

// const RevistaDetalle = () => {
//   const { id } = useParams();
//   const [revista, setRevista] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get(`${API_URL}/${id}`)
//       .then((response) => {
//         if (response.data.ok) {
//           setRevista(response.data.body); // 👈 usar body, no response.data directo
//         } else {
//           setError("No se encontró la revista");
//         }
//       })
//       .catch(() => setError("Error al cargar la revista"));
//   }, [id]);

//   if (error) return <p>{error}</p>;
//   if (!revista) return <p>Cargando...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">{revista.mes}</h1>
//       <p className="text-gray-600">{revista.descripcion}</p>
      
//       <div className="mt-4">
//         <p>📂 Carpeta: {revista.paginas_carpeta}</p>
//         <p>📅 Creado en: {new Date(revista.creado_en).toLocaleDateString()}</p>
//       </div>
//     </div>
//   );
// };

// export default RevistaDetalle;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../config"; // o la ruta donde definiste tu API_URL

// const RevistaDetalle = () => {
//   const { id } = useParams(); 
//   const [revista, setRevista] = useState(null);

//   useEffect(() => {
//     const fetchRevista = async () => {
//       try {
//         const { data } = await axios.get(`${API_URL}/revistas/${id}`);
//         setRevista(data.body);
//       } catch (error) {
//         console.error("Error al obtener la revista:", error);
//       }
//     };
//     fetchRevista();
//   }, [id]);

//   if (!revista) return <p>Cargando revista...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4 capitalize">{revista.mes}</h1>
//       <p className="mb-2">{revista.descripcion}</p>
//       <p className="text-sm text-gray-500 mb-6">
//         📂 Carpeta: {revista.paginas_carpeta} <br />
//         📅 Creado en: {new Date(revista.creado_en).toLocaleDateString()}
//       </p>

//       {/* Aquí se muestran las imágenes */}
//       {revista.imagenes && revista.imagenes.map((img, index) => (
//         <img 
//           key={index} 
//           src={`${API_URL.replace("/api", "")}${img}`} 
//           alt={`Página ${index + 1}`} 
//           className="w-full mb-4 shadow-lg rounded-lg"
//         />
//       ))}
//     </div>
//   );
// };

// export default RevistaDetalle;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "https://api.santaisabel2.com/api"; // tu backend real

const RevistaDetalle = () => {
  const { id } = useParams();
  const [revista, setRevista] = useState(null);
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

  if (loading) return <p className="text-center py-10">Cargando revista...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (!revista) return null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 capitalize">{revista.mes}</h1>
      <p className="mb-2">{revista.descripcion}</p>
      <p className="text-sm text-gray-500 mb-6">
        📂 Carpeta: {revista.paginas_carpeta} <br />
        📅 Creado en: {new Date(revista.creado_en).toLocaleDateString()}
      </p>

      {/* 🔹 Mostrar todas las imágenes que realmente existen */}
      <div className="space-y-4">
        {revista.imagenes && revista.imagenes.length > 0 ? (
          revista.imagenes.map((img, index) => (
            <img
              key={index}
              src={`https://api.santaisabel2.com${img}`}
              alt={`Página ${index + 1}`}
              className="w-full shadow-lg rounded-lg"
              onError={(e) => (e.target.style.display = "none")}
            />
          ))
        ) : (
          <p className="text-gray-500">No hay imágenes para mostrar.</p>
        )}
      </div>
    </div>
  );
};

export default RevistaDetalle;

