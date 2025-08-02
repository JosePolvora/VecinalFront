// import React, { useEffect, useState } from 'react';

// const InfoActual = () => {
//   const [horaActual, setHoraActual] = useState('');
//   const [fechaActual, setFechaActual] = useState({ dia: '', mes: '', año: '' });
//   const [clima, setClima] = useState({ temp: '--', max: '--', min: '--' });

//   useEffect(() => {
//     const actualizarHora = () => {
//       const ahora = new Date();
//       const horas = ahora.getHours().toString().padStart(2, '0');
//       const minutos = ahora.getMinutes().toString().padStart(2, '0');
//       setHoraActual(`${horas}:${minutos}`);

//       setFechaActual({
//         dia: ahora.getDate().toString().padStart(2, '0'),
//         mes: ahora.toLocaleString('default', { month: 'short' }).toUpperCase(),
//         año: ahora.getFullYear()
//       });
//     };

//     actualizarHora();
//     const intervalo = setInterval(actualizarHora, 1000);
//     return () => clearInterval(intervalo);
//   }, []);

//   useEffect(() => {
//     // Simulamos clima por ahora
//     setClima({ temp: '16º', max: '18º', min: '13º' });
//   }, []);

//   return (
//     <div className="bg-white/50 absolute bottom-40 left-1/2 -translate-x-1/2 md:left-5 p-2 text-[#00527A] rounded-md flex justify-around items-center scale-75 md:transform-none z-20">
//       <div className="px-5 border-r-2 border-r-[#00527A] flex justify-center items-center">
//         <div className="font-black text-4xl mr-2">{fechaActual.dia}</div>
//         <div className="flex flex-col text-xs font-semibold leading-tight">
//           <span>{fechaActual.mes}</span>
//           <span>{fechaActual.año}</span>
//         </div>
//       </div>
//       <div className="w-40 border-r-2 border-r-[#00527A]">
//         <div className="font-black text-4xl text-center">{horaActual}</div>
//       </div>
//       <div className="px-5 flex justify-center items-center">
//         <div className="font-black text-4xl mr-2">{clima.temp}</div>
//         <div className="flex flex-col text-xs font-semibold leading-tight text-nowrap">
//           <span>MÁXIMA {clima.max}</span>
//           <span>MÍNIMA {clima.min}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoActual;


import React, { useEffect, useState } from 'react';

const InfoActual = () => {
  const [horaActual, setHoraActual] = useState('');
  const [fechaActual, setFechaActual] = useState({ dia: '', mes: '', año: '' });
  const [clima, setClima] = useState({ temp: '--', max: '--', min: '--' });

  useEffect(() => {
    const actualizarHora = () => {
      const ahora = new Date();
      const horas = ahora.getHours().toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      setHoraActual(`${horas}:${minutos}`);

      setFechaActual({
        dia: ahora.getDate().toString().padStart(2, '0'),
        mes: ahora.toLocaleString('default', { month: 'short' }).toUpperCase(),
        año: ahora.getFullYear()
      });
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    // Simulamos clima por ahora
    setClima({ temp: '16º', max: '18º', min: '13º' });
  }, []);

  return (
    <div className="absolute top-[60%] right-[60%] m-4 md:m-6 z-50 bg-white/50 rounded-md flex justify-around items-center p-2 text-[#00527A] shadow-lg">

      <div className="px-5 border-r-2 border-r-[#00527A] flex justify-center items-center">
        <div className="font-black text-4xl mr-2">{fechaActual.dia}</div>
        <div className="flex flex-col text-xs font-semibold leading-tight">
          <span>{fechaActual.mes}</span>
          <span>{fechaActual.año}</span>
        </div>
      </div>
      <div className="w-40 border-r-2 border-r-[#00527A]">
        <div className="font-black text-4xl text-center">{horaActual}</div>
      </div>
      <div className="px-5 flex justify-center items-center">
        <div className="font-black text-4xl mr-2">{clima.temp}</div>
        <div className="flex flex-col text-xs font-semibold leading-tight text-nowrap">
          <span>MÁXIMA {clima.max}</span>
          <span>MÍNIMA {clima.min}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoActual;
