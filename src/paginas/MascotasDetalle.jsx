import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Importa las imágenes desde src
import empresa2 from "../imagenes/imgPublicidad/almacor.png";
import empresa3 from "../imagenes/imgPublicidad/carniceriatriangulo.png";

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
      <h2 className="text-3xl font-bold text-[#002c73] text-center mb-10 uppercase px-4">
        Mascotas
      </h2>

      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
        {/* Contenido principal */}
        <div className="md:w-2/3 bg-white shadow-xl rounded-2xl p-6 md:p-8 animate-fade-in">
          {/* Fecha */}
          <p className="text-sm text-gray-500 mb-2 text-right italic">
            Publicado el: {new Date(mascota.fecha).toLocaleDateString("es-AR")}
          </p>

          {/* Título */}
          <h1 className="text-2xl md:text-3xl font-bold text-[#002c73] mb-6 text-center leading-relaxed">
            {mascota.titulo}
          </h1>

          {/* Imagen */}
          <div className="flex justify-center mb-6">
            <img
              src={
                mascota.imagen_url
                  ? `${BASE_IMG_URL}${mascota.imagen_url}`
                  : "https://via.placeholder.com/800x450"
              }
              alt={mascota.titulo}
              className="w-full max-w-3xl h-auto rounded-xl shadow-md object-cover"
            />
          </div>

          {/* Descripción separada en párrafos */}
          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {mascota.descripcion
              .split("\n")
              .filter((parrafo) => parrafo.trim() !== "")
              .map((parrafo, idx) => (
                <p key={idx}>{parrafo}</p>
              ))}
          </div>

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

        {/* Sidebar derecho */}
        <aside className="md:w-1/3 mt-8 md:mt-0 px-2 md:px-6 border-t md:border-t-0 md:border-l-2 border-gray-300 animate-fade-in">
          <h2 className="text-xl font-bold text-[#002c73] mb-10 text-center uppercase">
            Empresas Amigas
          </h2>

          <div className="space-y-8">
            <img
              src={empresa2}
              alt="Empresa 2"
              className="image-rotate w-full h-auto rounded-md shadow"
            />
            <img
              src={empresa3}
              alt="Empresa 3"
              className="image-rotate w-full h-auto rounded-md shadow"
            />
          </div>
        </aside>
      </div>
    </>
  );
};

export default MascotaDetalle;
