import React, { useEffect, useState } from "react";

const InfoActual = () => {
  const [horaActual, setHoraActual] = useState("");
  const [fechaActual, setFechaActual] = useState({ dia: "", mes: "", año: "" });
  const [clima, setClima] = useState({ temp: "--", max: "--", min: "--" });

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();
      const horas = ahora.getHours().toString().padStart(2, "0");
      const minutos = ahora.getMinutes().toString().padStart(2, "0");
      setHoraActual(`${horas}:${minutos}`);

      setFechaActual({
        dia: ahora.getDate().toString().padStart(2, "0"),
        mes: ahora.toLocaleString("default", { month: "short" }).toUpperCase(),
        año: ahora.getFullYear(),
      });
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    // Simulamos clima por ahora
    setClima({ temp: "16º", max: "18º", min: "13º" });
  }, []);

  return (
    <div className="hidden md:flex absolute top-[60%] right-[60%] m-4 md:m-6 z-50 bg-white/50 rounded-md flex-row justify-around items-center p-2 text-[#00527A] shadow-lg space-x-4">
      <div className="px-3 border-r-2 border-r-[#00527A] flex justify-center items-center">
        <div className="font-black text-2xl md:text-4xl mr-2">
          {fechaActual.dia}
        </div>
        <div className="flex flex-col text-[8px] sm:text-xs font-semibold leading-tight">
          <span>{fechaActual.mes}</span>
          <span>{fechaActual.año}</span>
        </div>
      </div>

      <div className="w-32 border-r-2 border-r-[#00527A]">
        <div className="font-black text-2xl md:text-4xl text-center">
          {horaActual}
        </div>
      </div>

      <div className="px-3 flex justify-center items-center whitespace-nowrap">
        <div className="font-black text-2xl md:text-4xl mr-2">{clima.temp}</div>
        <div className="flex flex-col text-[8px] sm:text-xs font-semibold leading-tight">
          <span>MÁXIMA {clima.max}</span>
          <span>MÍNIMA {clima.min}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoActual;
