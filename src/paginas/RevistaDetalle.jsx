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


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RevistaViewer from "./RevistaViewer";

const API_URL = import.meta.env.VITE_API_URL; // tu backend

const RevistaDetalle = () => {
  const { id } = useParams();
  const [revista, setRevista] = useState(null);
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const fetchRevista = async () => {
      const res = await axios.get(`${API_URL}/revistas/${id}`);
      setRevista(res.data);

      // 📌 Generamos las imágenes suponiendo que se suben como 1.jpg, 2.jpg, 3.jpg, ...
      const carpeta = res.data.paginas_carpeta;
      const totalPaginas = 10; // <-- cámbialo al máximo estimado de páginas
      const imgs = [];

      for (let i = 1; i <= totalPaginas; i++) {
        imgs.push(`${API_URL}${carpeta}/${i}.jpg`);
      }
      setImagenes(imgs);
    };

    fetchRevista();
  }, [id]);

  if (!revista) return <p>Cargando...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{revista.titulo}</h1>
      <RevistaViewer imagenes={imagenes} />
    </div>
  );
};

export default RevistaDetalle;
