import martinImg from "../../imagenes/imgInstitucional/martin.png";

const SecSeguridad = () => {
  const seguridad = [
    {
      nombre: "Martin Cisterna",
      cargo: "Defensa Civil, Obras, Servicios Públicos y Planeamiento Urbano",
      img: martinImg,
    },
    {
      nombre: "Luciana Huenz",
      cargo: "Defensa Civil, Obras, Servicios Públicos y Planeamiento Urbano",
      img: null,
    },
  ];

  const vocales = [
    { nombre: "", cargo: "Vocal", img: null },
    { nombre: "", cargo: "Vocal", img: null },
    { nombre: "", cargo: "Vocal", img: null },
    { nombre: "", cargo: "Vocal", img: null },
    { nombre: "", cargo: "Vocal", img: null },
    { nombre: "", cargo: "Vocal", img: null },
  ];

  const renderIntegrantes = (lista, cols = "sm:grid-cols-2 lg:grid-cols-3") => (
    <div className={`grid grid-cols-1 ${cols} gap-4 sm:gap-5`}>
      {lista.map((persona, i) => (
        <div
          key={i}
          className="flex items-center bg-[#00527A]/10 p-3 sm:p-5 rounded-xl gap-3 sm:gap-5"
        >
          <div className="bg-white rounded-full w-20 h-20 sm:w-28 sm:h-28 flex justify-center items-center overflow-hidden">
            {persona.img ? (
              <img
                src={persona.img}
                alt={persona.nombre}
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="fill-gray-300 w-12 h-12 sm:w-16 sm:h-16"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[#00527A] border-b border-b-[#00527A] pb-1 mb-1 text-sm sm:text-base">
              {persona.cargo}
            </span>
            <span className="text-[#00527A] font-bold text-sm sm:text-base">
              {persona.nombre}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section>
      <h1 className="text-lg sm:text-2xl font-bold text-[#00527A] mb-6 text-center sm:text-left ml-0 sm:ml-10 font-sans">
        SECRETARÍA DE DEFENSA CIVIL, OBRAS, SERVICIOS PÚBLICOS Y PLANEAMIENTO
        URBANO
      </h1>
      <div className="max-w-screen-xl mx-auto p-4 sm:p-5 space-y-10 sm:space-y-16">
        {/* Titulares y Suplentes */}
        <div className="bg-white rounded-xl p-4 sm:p-10">
          <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-6 sm:mb-10 text-center">
            Titulares y Suplentes
          </h2>
          {renderIntegrantes(seguridad, "sm:grid-cols-2")}
        </div>

        {/* Vocales */}
        <div className="bg-white rounded-xl p-4 sm:p-10">
          <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-6 sm:mb-10 text-center">
            Vocales
          </h2>
          {renderIntegrantes(vocales, "sm:grid-cols-2 lg:grid-cols-3")}
        </div>
      </div>
    </section>
  );
};

export default SecSeguridad;
