import { Link } from "react-router-dom";
import pesceImg from "../imagenes/imgInstitucional/pesce.jpg";
import oviedoImg from "../imagenes/imgInstitucional/oviedo.jpg";
import cayutiImg from "../imagenes/imgInstitucional/cayuti.png";
import sanchezImg from "../imagenes/imgInstitucional/sanchez.png";
//import lulyImg from "../imagenes/imgInstitucional/luly.png";
import arielImg from "../imagenes/imgInstitucional/ariel.jpg";
import ramirezImg from "../imagenes/imgInstitucional/miguelR.png";
import claudiaImg from "../imagenes/imgInstitucional/claudia.png";
import diegoImg from "../imagenes/imgInstitucional/diego.png";
import ezeImg from "../imagenes/imgInstitucional/ezequiel.png";
import fabianaImg from "../imagenes/imgInstitucional/fabiana.png";
import martinImg from "../imagenes/imgInstitucional/martin.png";
import aleImg from "../imagenes/imgInstitucional/ale.png";
import gastonImg from "../imagenes/imgInstitucional/gaston.png";
import tatyImg from "../imagenes/imgInstitucional/taty.png";




const Institucional = () => {
  const titular = [
    { nombre: "Guillermo Pesce", cargo: "Presidente", img: pesceImg, ruta: "" },
    { nombre: "Cristna Cayuti", cargo: "Secretaria", img: cayutiImg, ruta: "" },
    { nombre: "José Oviedo", cargo: "Tesorero", img: oviedoImg, ruta: "" },
  ];

  const suplente = [
    { nombre: "Maria Carcano", cargo: "Presidenta", img: null, ruta: "" },
    {
      nombre: "Miguel Sanchez",
      cargo: "Secretario",
      img: sanchezImg,
      ruta: "",
    },
    { nombre: "Natalia Ruiz", cargo: "Tesorera", img: tatyImg, ruta: "" },
  ];

  const secretarias = [
    {
      nombre: "Fabiana Capitanelli",
      cargo: "Secretaría de Cultura y Educación (Titular)",
      img: fabianaImg,
      ruta: "/integrantes/seccultura",
    },
    {
      nombre: "Ariel Gonzalez",
      cargo: "Secretaría de Cultura y Educación (Suplente)",
      img: arielImg,
      ruta: "/integrantes/seccultura",
    },
    {
      nombre: "Gastón Fonseca",
      cargo: "Secretaría de Deportes y Recreación (Titular)",
      img: gastonImg,
      ruta: "/integrantes/secdeporte",
    },
    {
      nombre: "Alejandra Espinosa",
      cargo: "Secretaría de Deportes y Recreación (Suplente)",
      img: aleImg,
      ruta: "/integrantes/secdeporte",
    },
    {
      nombre: "Cristian Machado",
      cargo: "Secretaría de Juventud y Género (Titular)",
      img: null,
      ruta: "/integrantes/secjuventud",
    },
    {
      nombre: "Sonia Flores",
      cargo: "Secretaría de Juventud y Género(Suplente)",
      img: null,
      ruta: "/integrantes/secjuventud",
    },
    {
      nombre: "Claudia Jaime",
      cargo: "Secretaría de Seguridad y Convivencia (Titular)",
      img: claudiaImg,
      ruta: "/integrantes/secseguridad",
    },
    {
      nombre: "Martin Cisterna",
      cargo: "Secretaría de Seguridad y Convivencia (Suplente)",
      img: martinImg,
      ruta: "/integrantes/secseguridad",
    },
    {
      nombre: "Marcos Maldonado",
      cargo: "Secretaría de Comunicación y Prensa (Titular)",
      img: null,
      ruta: "/integrantes/seccomunicacion",
    },
    {
      nombre: "Analia Moreno",
      cargo: "Secretaría de Comunicación y Prensa (Suplente)",
      img: null,
      ruta: "/integrantes/seccomunicacion",
    },
    
  ];

  const adicionales = [
    {
      nombre: "Diego Urrea",
      cargo: "Revisor de Cuentas",
      img: diegoImg,
      ruta: "",
    },
    {
      nombre: "María Nasuti",
      cargo: "Revisora de Cuentas",
      img: null,
      ruta: "",
    },
    {
      nombre: "Miguel Ramirez",
      cargo: "Revisor de Cuentas",
      img: ramirezImg,
      ruta: "",
    },
  
  ];

  const adicionalesSuplentes = [
    {
      nombre: "Eliana Peralta",
      cargo: "Revisora de Cuentas",
      img: null,
      ruta: "",
    },
    {
      nombre: "Ezequiel Rodriguez",
      cargo: "Revisor de Cuentas",
      img: ezeImg,
      ruta: "",
    },
  ];

  const renderIntegrantes = (lista, cols = "lg:grid-cols-3") => (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-5`}>
      {lista.map((persona, i) => {
        const contenido = (
          <div className="flex flex-col sm:flex-row items-center bg-[#00527A]/10 p-5 rounded-xl gap-5 hover:shadow-xl transition">
            <div className="bg-white rounded-full w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 flex justify-center items-center overflow-hidden shrink-0">
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
                  className="fill-gray-300 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              )}
            </div>
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-[#00527A] border-b border-b-[#00527A] pb-2 mb-2">
                {persona.cargo}
              </span>
              <span className="text-[#00527A] font-bold">{persona.nombre}</span>
            </div>
          </div>
        );

        return persona.ruta ? (
          <Link key={i} to={persona.ruta}>
            {contenido}
          </Link>
        ) : (
          <div key={i}>{contenido}</div>
        );
      })}
    </div>
  );

  return (
    <section className="px-4 py-8 sm:py-12">
      <h1 className="text-xl sm:text-3xl font-bold text-[#00527A] mb-6 ml-2 sm:ml-10 font-sans">
        INFORMACIÓN INSTITUCIONAL
      </h1>

      <div className="max-w-screen-xl mx-auto space-y-16">
        <div className="bg-white rounded-xl p-5 sm:p-10">
          <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-10 text-center">
            Comisión Directiva Titular
          </h2>
          {renderIntegrantes(titular)}
        </div>

        <div className="bg-white rounded-xl p-5 sm:p-10">
          <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-10 text-center">
            Comisión Directiva Suplente
          </h2>
          {renderIntegrantes(suplente)}
        </div>

        <div className="bg-white rounded-xl p-5 sm:p-10">
          <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-10 text-center">
            Secretarías
          </h2>
          {renderIntegrantes(secretarias, "lg:grid-cols-2")}
        </div>

        <div className="bg-white rounded-xl p-5 sm:p-10 ">
          <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-10 text-center">
            Comisión Revisora de Cuentas Titular
          </h2>
          {renderIntegrantes(adicionales)}
        </div>

        <div className="">
          <div className="bg-white rounded-xl p-5 sm:p-10">
            <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-10 text-center">
              Comisión Revisora de Cuentas Suplente
            </h2>

            <div className="">
              {renderIntegrantes(adicionalesSuplentes, "lg:grid-cols-2")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institucional;
