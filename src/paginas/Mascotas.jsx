import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { API_URL } from "../config";

const Mascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const mascotasPorPagina = 5;

  useEffect(() => {
    const cargarMascotas = async () => {
      try {
        const res = await axios.get(`${API_URL}/mascotas`);
        const mascotasOrdenadas = res.data.body.sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );
        setMascotas(mascotasOrdenadas);
      } catch (error) {
        console.error("Error al cargar mascotas:", error);
      }
    };

    cargarMascotas();
  }, []);

  const indiceUltimaMascota = paginaActual * mascotasPorPagina;
  const indicePrimeraMascota = indiceUltimaMascota - mascotasPorPagina;
  const mascotasPaginadas = mascotas.slice(
    indicePrimeraMascota,
    indiceUltimaMascota
  );

  const totalPaginas = Math.ceil(mascotas.length / mascotasPorPagina);

  const handlePagina = (num) => {
    if (num >= 1 && num <= totalPaginas) setPaginaActual(num);
  };

  const BASE_IMG_URL = "https://api.santaisabel2.com";

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#00527A]">Mascotas</h1>
        <p className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed">
          Si encontrás un perro perdido en el barrio, acercate al Centro Vecinal
          o contactá a algún miembro de la comisión. De esta manera podremos
          asegurarnos de que el animal vuelva a su hogar de manera rápida y
          segura, y si no tiene dueño, nos encargaremos de buscarle un nuevo
          hogar seguro y responsable.
        </p>
        <Link
          to="/mascotas/formulario"
          className="px-6 py-2 bg-[#00527A] text-white rounded-lg hover:bg-[#003f5c] transition"
        >
          Agregar Mascota
        </Link>
      </div>

      {mascotas.length === 0 ? (
        <p className="text-center">Cargando mascotas...</p>
      ) : (
        <>
          <ul className="space-y-6 sm:space-y-8">
            {mascotasPaginadas.map(
              ({
                id,
                nombre,
                tipo,
                raza,
                // edad,
                sexo,
                tamano,
                condicion,
                lugar,
                contacto_nombre,
                contacto_telefono,
                //fecha,
                imagen_url,
              }) => (
                <Link
                  to={`/mascotas/${id}`}
                  key={id}
                  className="flex flex-col sm:flex-row bg-white rounded-xl shadow-md gap-4 sm:gap-6 p-4 sm:p-5 hover:shadow-xl hover:scale-[1.01] transition-all"
                >
                  <img
                    src={
                      imagen_url
                        ? `${BASE_IMG_URL}${imagen_url}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={nombre || "Mascota"}
                    className="w-full sm:w-36 h-48 sm:h-24 object-cover rounded-md flex-shrink-0 uppercase"
                  />

                  <div className="flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-[#00527A] mb-2">
                      {nombre || "Sin nombre"} - {tipo} {raza && `(${raza})`}
                    </h2>
                    <p className="text-gray-700 line-clamp-3 mb-3">
                      {condicion} | {tamano} | {sexo} <br />
                      Ubicación: {lugar} <br />
                      Contacto: {contacto_nombre} - {contacto_telefono}
                    </p>
                    {/* <p className="text-sm text-gray-400">
                      {new Date(fecha).toLocaleDateString("es-AR")}
                    </p> */}
                  </div>
                </Link>
              )
            )}
          </ul>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => handlePagina(paginaActual - 1)}
              disabled={paginaActual === 1}
              className="px-4 py-1 border rounded disabled:opacity-50 hover:bg-[#00527A] hover:text-white transition"
            >
              Anterior
            </button>

            {[...Array(totalPaginas)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePagina(i + 1)}
                className={`px-4 py-1 border rounded ${
                  paginaActual === i + 1
                    ? "bg-[#00527A] text-white"
                    : "hover:bg-gray-200"
                } transition`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
              className="px-4 py-1 border rounded disabled:opacity-50 hover:bg-[#00527A] hover:text-white transition"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Mascotas;
