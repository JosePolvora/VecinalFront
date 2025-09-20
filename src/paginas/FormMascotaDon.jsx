import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DonacionInfo = () => {
  const navigate = useNavigate();

  // Datos de la cuenta de donación
  const cuenta = {
    titular: "Asociación Protectora de Animales",
    banco: "Banco de la Ciudad",
    numero: "1234567890123456789012",
    alias: "PROTECTORA.ANIM",
    mensaje: "Podés donar directamente a esta cuenta para ayudar a nuestras mascotas."
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-8 sm:p-12 w-full max-w-4xl shadow-2xl backdrop-blur-md text-white">
        
        {/* Botón volver */}
        <button
          onClick={() => navigate("/mascotas")}
          className="mb-6 px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center justify-center w-fit"
          type="button"
        >
          <FaArrowLeft className="text-sm" />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6">
          DONACIÓN
        </h2>

        {/* Tarjeta informativa */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col gap-4 text-white">
          <p><strong>Titular:</strong> {cuenta.titular}</p>
          <p><strong>Banco:</strong> {cuenta.banco}</p>
          <p><strong>Número de cuenta:</strong> {cuenta.numero}</p>
          <p><strong>Alias:</strong> {cuenta.alias}</p>
          <p className="mt-4 italic">{cuenta.mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default DonacionInfo;

