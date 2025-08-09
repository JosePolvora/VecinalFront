import React, { useEffect, useRef, useState } from "react";
import Banner from "../componentes/layout/Banner";
import BannerAuspiciantes from "../componentes/layout/BannerAuspiciantes";
import InfoActual from "../componentes/layout/InfoActual";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ImgReclamo from "../imagenes/imgAccesos/reclamo.png";
import ImgCamara from "../imagenes/imgAccesos/camara.png";
import ImgRevista from "../imagenes/imgAccesos/revista.png";
import ImgMpf from "../imagenes/imgAccesos/mpf.png";
import ImgRadio from "../imagenes/imgAccesos/radio.png";

import subrayado from "../imagenes/subrayado.png";

const Inicio = () => {
  const [novedades, setNovedades] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [lightboxActive, setLightboxActive] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const [mostrarChat, setMostrarChat] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [chatMaximizado, setChatMaximizado] = useState(false);

  const limpiarChat = () => {
    setHistorial([{ from: "bot", text: "👋 ¡Hola! ¿En qué puedo ayudarte?" }]);
  };

  const [historial, setHistorial] = useState([
    { from: "bot", text: "👋 ¡Hola! ¿En qué puedo ayudarte?" },
  ]);
  const chatRef = useRef(null);

  // Preguntas frecuentes precargadas
  const preguntasFrecuentes = [
    "¿Cuál es la dirección del Centro Vecinal de Santa Isabel 2ª Sección?",
    "¿Qué actividades se realizan en el Centro Vecinal de Santa Isabel 2ª Sección?",
    "¿Quiénes forman parte de la comisión directiva del Centro Vecinal?",
    "¿Cómo puedo participar en el Centro Vecinal de Santa Isabel 2ª Sección?",
    "¿Cuál es el horario de atención del Centro Vecinal?",
    "¿Qué servicios ofrece el Centro Vecinal?",
    "¿Cómo contactar al Centro Vecinal de Santa Isabel 2ª Sección?",
    "¿Qué beneficios tiene estar involucrado en el Centro Vecinal?",
  ];

  // Función para enviar pregunta frecuente como mensaje
  const enviarMensajeConTexto = async (texto) => {
    if (!texto.trim()) return;

    setHistorial((prev) => [...prev, { from: "user", text: texto }]);

    try {
      const response = await axios.post("http://localhost:3000/api/ai/ask", {
        question: texto,
      });
      const respuesta = response.data.answer;
      setHistorial((prev) => [...prev, { from: "bot", text: respuesta }]);
    } catch (error) {
      setHistorial((prev) => [
        ...prev,
        { from: "bot", text: "Error al conectar con el servidor" },
      ]);
    }

    setMensaje("");
  };

  const enviarMensaje = async () => {
    if (!mensaje.trim()) return;

    setHistorial((prev) => [...prev, { from: "user", text: mensaje }]);

    try {
      const response = await axios.post("http://localhost:3000/api/ai/ask", {
        question: mensaje,
      });
      const respuesta = response.data.answer;

      setHistorial((prev) => [...prev, { from: "bot", text: respuesta }]);
    } catch (error) {
      setHistorial((prev) => [
        ...prev,
        { from: "bot", text: "Error al conectar con el servidor" },
      ]);
    }

    setMensaje("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      enviarMensaje();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [historial]);

  useEffect(() => {
    const cargarNovedades = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/novedades");
        setNovedades(res.data.body);
      } catch (error) {
        console.error("Error al cargar novedades:", error);
      }
    };
    cargarNovedades();
  }, []);

  useEffect(() => {
    const cargarImagenes = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/imagenes");
        setImagenes(res.data.body);
      } catch (error) {
        console.error("Error al cargar imágenes:", error);
      }
    };
    cargarImagenes();
  }, []);

  const agruparTarjetas = (array, tamañoGrupo) => {
    const grupos = [];
    for (let i = 0; i < array.length; i += tamañoGrupo) {
      grupos.push(array.slice(i, i + tamañoGrupo));
    }
    return grupos;
  };
  const gruposTarjetas = agruparTarjetas(novedades, 3);

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxActive(true);
  };

  const closeLightbox = () => {
    setLightboxActive(false);
  };

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Banner />
      <InfoActual />

      {/* Flecha flotante para subir */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
          aria-label="Subir al inicio"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* ACCESOS */}
      <section className="max-w-6xl mx-auto px-5 py-10 text-center">
        <h2 className="text-3xl font-black mb-10 text-[#00527A] text-center border-[#00527A] pb-4 pt-10 uppercase">
          Todos tus accesos, <span className="text-cyan-500">están acá.</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Link
            to="/reclamos"
            className="bg-[#00a8e6] rounded-xl p-6 text-white w-48 h-48 hover:bg-[#008cc4] transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <img src={ImgReclamo} alt="Reclamos" className="w-20 h-20" />
            <div className="text-base font-semibold leading-tight">
              Reclamos
            </div>
            <div className="text-sm">Denuncias o quejas</div>
          </Link>

          <Link
            to="/camara/vivo"
            className="bg-[#e91e63] rounded-xl p-6 text-white w-48 h-48 hover:bg-[#d81b60] transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <img src={ImgCamara} alt="Cámara en Vivo" className="w-16 h-16" />
            <div className="text-base font-semibold leading-tight">
              Cámara en Vivo
            </div>
            <div className="text-sm">Ver plaza en directo</div>
          </Link>

          <Link
            to="/revistas"
            className="bg-[#4CAF50] rounded-xl p-6 text-white w-48 h-48 hover:bg-[#388E3C] transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <img src={ImgRevista} alt="Revista" className="w-20 h-20" />
            <div className="text-base font-semibold leading-tight">Revista</div>
            <div className="text-sm">Nuestro Barrio</div>
          </Link>

          <a
            href="https://denunciasmpf.mpfcordoba.gob.ar/publicpages/PortalDenuncias"
            target="_blank"
            className="bg-white hover:bg-gray-100 rounded-xl p-6 text-gray-800 w-48 h-48 transition flex flex-col items-center justify-center text-center space-y-2 shadow-md"
          >
            <img src={ImgMpf} alt="Ícono de denuncia" className="w-16 h-16" />
            <div className="text-base font-semibold leading-tight">Portal</div>
            <div className="text-sm">MPF</div>
          </a>
          <Link
            to="/radio"
            className="bg-orange-500 rounded-xl p-6 text-white w-48 h-48 hover:bg-orange-600 transition flex flex-col items-center justify-center text-center space-y-2"
          >
            <img src={ImgRadio} alt="Radio en Vivo" className="w-20 h-20" />
            <div className="text-base font-semibold leading-tight">Radio</div>
            <div className="text-sm">En vivo</div>
          </Link>
        </div>
      </section>

      {/* NOVEDADES */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-black text-[#00527A] text-center border-[#00527A] pt-10 uppercase">
          Novedades
        </h2>
        <div className="h-[35rem]">
          <Carousel
            pauseOnHover
            slide={true}
            leftControl={
              <button className="p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 text-[#00527A]">
                <FaChevronLeft size={24} />
              </button>
            }
            rightControl={
              <button className="p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-90 text-[#00527A]">
                <FaChevronRight size={24} />
              </button>
            }
            className="rounded-lg"
          >
            {gruposTarjetas.length === 0 ? (
              <p>Cargando novedades...</p>
            ) : (
              gruposTarjetas.map((grupo, i) => (
                <div key={i} className="grid md:grid-cols-3 gap-6 px-4">
                  {grupo.map((novedad, j) => (
                    <Link
                      to={`/novedades/${novedad.id}`}
                      key={j}
                      className="block"
                    >
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all h-[28rem] flex flex-col">
                        <img
                          src={
                            novedad.imagen_url
                              ? `http://localhost:3000${novedad.imagen_url}`
                              : "https://via.placeholder.com/300x200"
                          }
                          alt={novedad.titulo}
                          className="object-cover w-full h-64"
                        />
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-xl font-semibold mb-2 text-[#00527A]">
                            {novedad.titulo}
                          </h3>
                          <p className="text-gray-600">{novedad.descripcion}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))
            )}
          </Carousel>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="max-w-6xl mx-auto px-4 py-16" id="galeria">
        <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-[#00527A] pb-4 uppercase">
          Galería
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {imagenes.map((img, index) => (
            <img
              key={index}
              src={`http://localhost:3000${img.imagen_url}`}
              alt={`Galería ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() =>
                openLightbox(`http://localhost:3000${img.imagen_url}`)
              }
            />
          ))}
        </div>
      </section>

      {lightboxActive && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
            >
              ×
            </button>
            <img
              src={currentImage}
              alt="Imagen ampliada"
              className="w-full max-h-[90vh] object-contain rounded shadow-lg"
            />
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* <h2 className="relative text-3xl font-black mb-8 text-[#00527A] text-center uppercase pb-16">
          Empresas que nos acompañan
          <span
            className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-[333px] h-[53px] bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${subrayado})`,
            }}
          />
        </h2> */}

        <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-[#00527A] pb-10 uppercase">
          Empresas que nos acompañan
        </h2>
        <BannerAuspiciantes />
      </section>

      {/* NÚMEROS ÚTILES OMITIDOS POR ESPACIO (puedes mantener los tuyos) */}

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-8  text-[#00527A] text-center  border-[#00527A] pb-4 uppercase">
          Números Útiles
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">
                Bomberos
              </span>
              <span className="font-black text-5xl leading-[84px]">100</span>
            </a>
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">
                Defensa Civil
              </span>
              <span className="font-black text-5xl leading-[84px]">103</span>
            </a>
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">
                Urgencias
              </span>
              <span className="font-black text-5xl leading-[84px]">107</span>
            </a>
            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">
                Emergencias
              </span>
              <span className="font-black text-5xl leading-[84px]">911</span>
            </a>

            <a className="flex flex-col justify-start items-center gap-2 text-[#00527A] col-span-2 lg:col-auto hover:scale-[1.02] focus:outline-none focus:ring-4 p-2 rounded-xl transition-all">
              <span className="text-xs font-semibold italic uppercase leading-7">
                EPEC
              </span>
              <span className="font-black text-2xl leading-[56px]">
                0800 777 0000
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CHAT FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMostrarChat(!mostrarChat)}
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
        >
          <i className="fas fa-comments"></i> {/* Icono de mensaje */}
        </button>
      </div>

      {mostrarChat && (
        <div
          className={`fixed bottom-20 right-6 bg-[#1f1f1f] text-white rounded-lg shadow-xl p-4 z-50 border border-blue-500 flex flex-col
      ${chatMaximizado ? "w-[800px] h-[500px]" : "w-80 h-auto"}`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-blue-300">
              Asistente Virtual
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={limpiarChat}
                className="text-blue-300 hover:text-yellow-400"
                title="Limpiar chat"
              >
                <i className="fas fa-trash-alt"></i> {/* Icono de papelera */}
              </button>

              <button
                onClick={() => setChatMaximizado(!chatMaximizado)}
                className="text-blue-300 hover:text-green-500"
                title={chatMaximizado ? "Minimizar" : "Maximizar"}
              >
                <i
                  className={
                    chatMaximizado
                      ? "fas fa-window-restore"
                      : "fas fa-expand-arrows-alt"
                  }
                ></i>{" "}
                {/* Iconos de maximizar/minimizar */}
              </button>

              <button
                onClick={() => setMostrarChat(false)}
                className="text-blue-300 hover:text-red-500"
              >
                <i className="fas fa-times"></i> {/* Icono de cerrar */}
              </button>
            </div>
          </div>

          <div
            className="flex-grow h-60 overflow-y-auto bg-[#2b2b2b] p-2 rounded text-sm text-yellow-200 space-y-2"
            ref={chatRef}
          >
            {/* Preguntas frecuentes */}
            <div className="mb-2 p-2 bg-[#333] rounded text-xs text-blue-300">
              <strong>Preguntas frecuentes:</strong>
              <ul className="mt-1 max-h-24 overflow-y-auto">
                {preguntasFrecuentes.map((pregunta, i) => (
                  <li
                    key={i}
                    onClick={() => enviarMensajeConTexto(pregunta)}
                    className="cursor-pointer hover:underline hover:text-blue-400 my-1"
                    title="Haz click para enviar esta pregunta"
                  >
                    {pregunta}
                  </li>
                ))}
              </ul>
            </div>

            {/* Historial de mensajes */}
            {historial.map((msg, i) => (
              <p
                key={i}
                className={
                  msg.from === "user" ? "text-right text-blue-300" : "text-left"
                }
              >
                {msg.text}
              </p>
            ))}
          </div>

          <textarea
            rows={2}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="mt-2 p-2 rounded bg-[#1f1f1f] text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
          <button
            onClick={enviarMensaje}
            className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default Inicio;
