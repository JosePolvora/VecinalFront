import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const FormSubirImagenRevista = () => {
  const [imagenes, setImagenes] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [mes, setMes] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleFileChange = (e) => setImagenes([...e.target.files]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imagenes.length === 0)
      return setMensaje("Por favor, selecciona al menos una imagen");
    if (!mes) return setMensaje("Por favor, indica el mes de la revista");

    const formData = new FormData();
    imagenes.forEach((img) => formData.append("imagenes", img));
    formData.append("descripcion", descripcion);
    formData.append("mes", mes);

    try {
      setCargando(true);
      const res = await axios.post(`${API_URL}/revistas`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMensaje("✅ Revista subida con éxito");
      setImagenes([]);
      setDescripcion("");
      setMes("");
      e.target.reset(); // limpiar input file
    } catch (error) {
      console.error(
        "Error al subir la revista:",
        error.response?.data || error.message
      );
      setMensaje("❌ Error al subir la revista");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-white space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">CARGAR REVISTA</h2>

          <div>
            <label className="block mb-1 text-sm font-medium">Mes</label>
            <input
              type="text"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              placeholder="Ej: Agosto 2025"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Selecciona imágenes
            </label>
            <input
              type="file"
              name="imagenes"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-white file:!bg-[#002c73] file:!border-none file:!text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer bg-white/10 border border-white/20 rounded-lg"
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
              placeholder="Descripción opcional"
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

export default FormSubirImagenRevista;
