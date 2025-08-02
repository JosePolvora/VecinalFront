// PageJuventud.jsx

import lulyImg from '../../imagenes/imgInstitucional/luly.png';


const SecJuventud = () => {
  const juventud = [
    { nombre: "Luciana Romero", cargo: "Secretaría de Juventud y Género (Titular)", img: lulyImg },

    { nombre: "Tomás Aguirre", cargo: "Secretaría de Juventud y Género (Suplente)", img: null },
  ];

  const vocales = [
    { nombre: "Lucía Romero", cargo: "Vocal", img: null },
    { nombre: "Martín Sosa", cargo: "Vocal", img: null },
    { nombre: "Roberto Medina", cargo: "Vocal", img: null },
    { nombre: "Valeria Castro", cargo: "Vocal", img: null },
    { nombre: "Hernán Gómez", cargo: "Vocal", img: null },
    { nombre: "Federico Benítez", cargo: "Vocal", img: null },
  ];

  const renderIntegrantes = (lista, cols = "lg:grid-cols-3") => (
    <div className={`grid grid-cols-1 ${cols} gap-5`}>
      {lista.map((persona, i) => (
        <div key={i} className="flex items-center bg-[#00527A]/10 p-5 rounded-xl gap-5">
          <div className="bg-white rounded-full w-28 h-28 lg:w-40 lg:h-40 flex justify-center items-center overflow-hidden">
            {persona.img ? (
              <img src={persona.img} alt={persona.nombre} className="w-full h-full object-cover" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="fill-gray-300 w-16 h-16 lg:w-28 lg:h-28" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[#00527A] border-b border-b-[#00527A] pb-2 mb-2">{persona.cargo}</span>
            <span className="text-[#00527A] font-bold">{persona.nombre}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <h1 className="text-2xl font-bold text-[#00527A] mb-6 ml-10 font-sans">SECRETARÍA DE JUVENTUD</h1>
      <div className="max-w-screen-xl mx-auto p-5 space-y-16">
        {/* Juventud a la cabeza */}
        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Titulares y Suplentes</h2>
          {renderIntegrantes(juventud, "lg:grid-cols-2")}
        </div>

        {/* Vocales debajo */}
        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Vocales</h2>
          {renderIntegrantes(vocales, "lg:grid-cols-3")}
        </div>
      </div>
    </section>
  );
};

export default SecJuventud;
