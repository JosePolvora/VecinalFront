import { Link } from "react-router-dom";
import pesceImg from '../imagenes/pesce.jpg';
import oviedoImg from '../imagenes/oviedo.jpg';

const Institucional = () => {
  const titular = [
    { nombre: "Guillermo Pesce", cargo: "Presidente", img: pesceImg, ruta: "" },
    { nombre: "Cristna Cayuti", cargo: "Secretaria", img: null, ruta: "" },
    { nombre: "José Oviedo", cargo: "Tesorero", img: oviedoImg, ruta: "" },
  ];

  const suplente = [
    { nombre: "xxxx xxxx", cargo: "Presidenta", img: null, ruta: "" },
    { nombre: "Miguel Sanchez", cargo: "Secretario", img: null, ruta: "" },
    { nombre: "Natalia Ruiz", cargo: "Tesorera", img: null, ruta: "" },
  ];

  const secretarias = [
    { nombre: "Lucía Romero", cargo: "Secretaría de Cultura y Educación (Titular)", img: null, ruta: "/integrantes/seccultura" },
    { nombre: "Sofía Acuña", cargo: "Secretaría de Cultura y Educación (Suplente)", img: null, ruta: "/integrantes/seccultura" },
    { nombre: "Martín Sosa", cargo: "Secretaría de Deportes y Recreación (Titular)", img: null, ruta: "/integrantes/secdeporte" },
    { nombre: "Paula Giménez", cargo: "Secretaría de Deportes y Recreación (Suplente)", img: null, ruta: "/integrantes/secdeporte" },
    { nombre: "Elena Díaz", cargo: "Secretaría de Juventud y Género (Titular)", img: null, ruta: "/integrantes/secjuventud" },
    { nombre: "Tomás Aguirre", cargo: "Secretaría de Juventud y Género(Suplente)", img: null, ruta: "/integrantes/secjuventud" },
    { nombre: "Roberto Medina", cargo: "Secretaría de Seguridad y Convivencia (Titular)", img: null, ruta: "/integrantes/secseguridad" },
    { nombre: "Liliana Torres", cargo: "Secretaría de Seguridad y Convivencia (Suplente)", img: null, ruta: "/integrantes/secseguridad" },
    { nombre: "Valeria Castro", cargo: "Secretaría de Comunicación y Prensa (Titular)", img: null, ruta: "/integrantes/seccomunicacion" },
    { nombre: "José Barrios", cargo: "Secretaría de Comunicación y Prensa (Suplente)", img: null, ruta: "/integrantes/seccomunicacion" },
    { nombre: "Hernán Gómez", cargo: "Secretaría de Infraestructura y Servicios (Titular)", img: null, ruta: "/integrantes/secinfraestructura" },
    { nombre: "Natalia Ríos", cargo: "Secretaría de Infraestructura y Servicios (Suplente)", img: null, ruta: "/integrantes/secinfraestructura" },
  ];

  const adicionales = [
    { nombre: "Claudia Ramírez", cargo: "Revisora de Cuentas", img: null, ruta: "" },
    { nombre: "Federico Benítez", cargo: "Prosecretario", img: null, ruta: "" },
    { nombre: "Romina Oliva", cargo: "Tesorera", img: null, ruta: "" },
  ];

  const renderIntegrantes = (lista, cols = "lg:grid-cols-3") => (
    <div className={`grid grid-cols-1 ${cols} gap-5`}>
      {lista.map((persona, i) => {
        const contenido = (
          <div className="flex items-center bg-[#00527A]/10 p-5 rounded-xl gap-5 hover:shadow-lg transition">


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
        );

        return persona.ruta ? (
          <Link key={i} to={persona.ruta}>{contenido}</Link>
        ) : (
          <div key={i}>{contenido}</div>
        );
      })}
    </div>
  );

  return (
    <section>
      <h1 className="text-2xl font-bold text-[#00527A] mb-6 ml-10 font-sans">INFORMACIÓN INSTITUCIONAL</h1>
      <div className="max-w-screen-xl mx-auto p-5 space-y-16">
        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Comisión Directiva Titular</h2>
          {renderIntegrantes(titular)}
        </div>

        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Comisión Directiva Suplente</h2>
          {renderIntegrantes(suplente)}
        </div>

        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Secretarías</h2>
          {renderIntegrantes(secretarias, "lg:grid-cols-2")}
        </div>

        <div className="bg-white rounded-xl p-5 lg:p-10">
          <h2 className="font-semibold text-[#00527A] text-2xl mb-10 text-center">Cargos Adicionales</h2>
          {renderIntegrantes(adicionales)}
        </div>
      </div>
    </section>
  );
};

export default Institucional;
