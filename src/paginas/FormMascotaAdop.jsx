import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const FormAdopcion = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !direccion) {
      alert("Completa todos los campos.");
      return;
    }

    try {
      await axios.post(`${API_URL}/adopciones`, {
        nombre,
        telefono,
        direccion,
        fecha: new Date(),
      });
      alert("Solicitud de adopción enviada ✅");
      setNombre("");
      setTelefono("");
      setDireccion("");
    } catch (error) {
      console.error(error);
      alert("Error al enviar solicitud ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Título general */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#002c73] mb-8 text-start">
        SOLICITUD DE ADOPCIÓN
      </h2>

      {/* Contenedor del formulario */}
      <div className="w-full max-w-5xl bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-8 sm:p-12 shadow-2xl backdrop-blur-md text-white">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Botón volver */}
          <button
            onClick={() => navigate("/mascotas")}
            type="button"
            className="col-span-1 md:col-span-2 w-fit px-4 py-2 sm:px-6 sm:py-3 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center gap-2"
          >
            <FaArrowLeft />
          </button>

          {/* Inputs */}
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del adoptante"
            className="px-4 py-3 sm:px-5 sm:py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />

          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Teléfono de contacto"
            className="px-4 py-3 sm:px-5 sm:py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />

          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Dirección"
            className="px-4 py-3 sm:px-5 sm:py-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full col-span-1 md:col-span-2"
          />

          {/* Botón enviar */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 w-full py-4 sm:py-5 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            ENVIAR SOLICITUD
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAdopcion;
