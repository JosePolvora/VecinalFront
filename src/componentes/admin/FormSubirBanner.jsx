import React, { useState } from "react";
import axios from "axios";

import { API_URL } from "../../config";

const FormSubirBanner = () => {
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imagen || !tipo) {
      setMensaje("Por favor, completá todos los campos obligatorios");
      return;
    }

    const formData = new FormData();
    formData.append("imagen", imagen);
    formData.append("descripcion", descripcion);
    formData.append("tipo", tipo);
    formData.append("link", link);

    // try {
    //   setCargando(true);
    //   const res = await axios.post(
    //     "http://localhost:3000/api/banners",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    try {
      setCargando(true);
      const res = await axios.post(`${API_URL}/banners`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMensaje("✅ Banner subido con éxito");
      setImagen(null);
      setDescripcion("");
      setTipo("");
      setLink("");
    } catch (error) {
      console.error(
        "Error al subir el banner:",
        error.response?.data || error.message
      );
      setMensaje("❌ Error al subir el banner");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className=" min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-white space-y-8"
        >
          <h2 className="text-2xl font-bold text-center">CARGAR BANNER</h2>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Selecciona imagen
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="w-full text-sm text-white file:bg-[#002c73] file:border-none file:text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer bg-white/10 border border-white/20 rounded-lg"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Descripción
            </label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Tipo *
            </label>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            >
              <option value="" disabled>
                Selecciona un tipo
              </option>
              <option value="principal">Principal</option>
              <option value="auspiciantes">Auspiciantes</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="URL de redirección (opcional)"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            {cargando ? "Subiendo..." : "ACEPTAR"}
          </button>

          {mensaje && (
            <p className="text-center text-sm mt-4 text-white/90 font-semibold">
              {mensaje}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormSubirBanner;
