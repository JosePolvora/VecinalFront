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
      alert("Completa todos los campos."); // Mensaje rápido con alert
      return;
    }

    try {
      await axios.post(`${API_URL}/adopciones`, {
        nombre,
        telefono,
        direccion,
        fecha: new Date(),
      });

      alert("Solicitud de adopción enviada ✅"); // Confirmación
      setNombre("");
      setTelefono("");
      setDireccion("");
    } catch (error) {
      console.error(error);
      alert("Error al enviar solicitud ❌"); // Error
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-8 sm:p-12 w-full max-w-4xl shadow-2xl backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="text-white grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Botón volver */}
          <button
            onClick={() => navigate("/mascotas")}
            className="mb-6 px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center justify-center w-fit col-span-1"
            type="button"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          {/* Título */}
          <h2 className="col-span-1 md:col-span-2 text-3xl font-bold text-center mb-6">
            SOLICITUD DE ADOPCIÓN
          </h2>

          {/* Campos del formulario */}
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del adoptante"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />

          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Teléfono de contacto"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />

          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Dirección"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full col-span-2"
          />

          {/* Botón enviar */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            ENVIAR SOLICITUD
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormAdopcion;

