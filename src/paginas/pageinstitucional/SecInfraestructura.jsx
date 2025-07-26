// PageInfraestructura.jsx

// import deporteImg from "../imagenes/deporte.jpg"; // opcional
// import suplenteImg from "../imagenes/suplente.jpg"; // opcional

const SecInfraestructura = () => {
  const infraestructura = [
    { nombre: "Matías López", cargo: "Secretaría de Infraestructura (Titular)", img: null },
    { nombre: "Sofía Roldán", cargo: "Secretaría de Infraestructura (Suplente)", img: null },
  ];

  const vocales = [
    { nombre: "Diego Álvarez", cargo: "Vocal", img: null },
    { nombre: "Carla Fernández", cargo: "Vocal", img: null },
    { nombre: "Luciano Torres", cargo: "Vocal", img: null },
    { nombre: "Verónica Romero", cargo: "Vocal", img: null },
    { nombre: "Julián Vera", cargo: "Vocal", img: null },
    { nombre: "Romina Castro", cargo: "Vocal", img: null },
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
      <h1 className="text-2xl font-bold text-[#00527A] mb-6 ml-10 font-sans">SECRETARÍA DE INFRAESTRUCTURA</h1>
      <div className="max-w-screen-xl mx-auto p-5 space-y-16">
        {/* Titular y suplente */}
        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Titulares y Suplentes</h2>
          {renderIntegrantes(infraestructura, "lg:grid-cols-2")}
        </div>

        {/* Vocales */}
        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Vocales</h2>
          {renderIntegrantes(vocales, "lg:grid-cols-3")}
        </div>
      </div>
    </section>
  );
};

export default SecInfraestructura;
