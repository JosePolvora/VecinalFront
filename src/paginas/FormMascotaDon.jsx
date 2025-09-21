import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const DonacionInfo = () => {
  const navigate = useNavigate();

  const cuenta = {
    titular: "Jose Martin Oviedo",
    banco: "Mercado Pago",
    cvu: "0000003100036536149814",
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
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-8 text-gray-800">
        {/* Tarjeta informativa con padding aumentado */}
        <div className="flex flex-col gap-4 text-lg">
          <p>
            <span className="font-semibold">Titular:</span> {cuenta.titular}
          </p>
          <p>
            <span className="font-semibold">Banco:</span> {cuenta.banco}
          </p>

          <p>
            <span className="font-semibold">Número de cuenta:</span>{" "}
            <span className="break-words">{cuenta.cvu}</span>
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
        <span className="hidden sm:inline">Volver</span>
      </button>
    </div>
  );
};

export default DonacionInfo;
