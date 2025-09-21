// import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";

// const DonacionInfo = () => {
//   const navigate = useNavigate();

//   const cuenta = {
//     titular: "Asociación Protectora de Animales",
//     banco: "Banco de la Ciudad",
//     numero: "1234 5678 9012 3456 7890 12",
//     alias: "PROTECTORA.ANIM",
//     mensaje: "Podés donar directamente a esta cuenta para ayudar a nuestras mascotas."
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-start p-6 sm:p-12">

//       {/* Contenedor principal más ancho */}
//       <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-10 flex flex-col gap-8 text-gray-800">

//         {/* Título más grande */}
//         <h2 className="text-3xl font-bold text-center text-gray-900">Donación</h2>

//         {/* Tarjeta informativa con padding aumentado */}
//         <div className="flex flex-col gap-4 bg-gray-100 rounded-xl p-8 text-lg">
//           <p><span className="font-semibold">Titular:</span> {cuenta.titular}</p>
//           <p><span className="font-semibold">Banco:</span> {cuenta.banco}</p>
//           <p><span className="font-semibold">Número de cuenta:</span> {cuenta.numero}</p>
//           <p><span className="font-semibold">Alias:</span> {cuenta.alias}</p>
//           <p className="mt-4 text-gray-600 italic text-base">{cuenta.mensaje}</p>
//         </div>

//         {/* Llamado a la acción */}
//         <p className="text-center text-gray-700 text-base mt-2">
//           Gracias por tu apoyo ❤️
//         </p>
//       </div>

//       {/* Botón volver */}
//       <button
//         onClick={() => navigate("/mascotas")}
//         className="mt-8 px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2"
//         type="button"
//       >
//         <FaArrowLeft />
//         Volver
//       </button>
//     </div>
//   );
// };

// export default DonacionInfo;

import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DonacionInfo = () => {
  const navigate = useNavigate();

  const cuenta = {
    titular: "Jose Martin Oviedo",
    banco: "Mercado Pago",
    CVU: "0000003100036536149814",
    alias: "jose.martin.ovi.mp",
    mensaje:
      "Podés donar directamente a esta cuenta para ayudar a nuestras mascotas.",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 sm:p-12">
      {/* Título Donación afuera de la tarjeta */}

      <h2 className="text-xl sm:text-3xl font-bold text-[#00527A] mb-6 ml-2 sm:ml-10 font-sans uppercase">
        Donaciones
      </h2>

      {/* Contenedor principal más ancho */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-10 flex flex-col gap-8 text-gray-800">
        {/* Tarjeta informativa con padding aumentado */}
        <div className="flex flex-col gap-4 bg-gray-100 rounded-xl p-8 text-lg">
          <p>
            <span className="font-semibold">Titular:</span> {cuenta.titular}
          </p>
          <p>
            <span className="font-semibold">Banco:</span> {cuenta.banco}
          </p>
          <p>
            <span className="font-semibold">Número de cuenta:</span>{" "}
            {cuenta.numero}
          </p>
          <p>
            <span className="font-semibold">Alias:</span> {cuenta.alias}
          </p>
          <p className="mt-4 text-gray-600 italic text-base">
            {cuenta.mensaje}
          </p>
        </div>

        {/* Llamado a la acción */}
        <p className="text-center text-gray-700 text-base mt-2">
          Gracias por tu apoyo ❤️
        </p>
      </div>

      {/* Botón volver */}
      <button
        onClick={() => navigate("/mascotas")}
        className="mt-8 px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-100 transition flex items-center gap-2"
        type="button"
      >
        <FaArrowLeft />
        Volver
      </button>
    </div>
  );
};

export default DonacionInfo;
