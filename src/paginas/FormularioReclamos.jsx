import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaSearch, FaHistory } from "react-icons/fa";

const FormularioReclamos = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellido: "",
    direccion: "",
    email: "",
    telefono: "",
    asunto: "",
    descripcion: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.nombres ||
      !formData.apellido ||
      !formData.email ||
      !formData.descripcion
    ) {
      Swal.fire({
        icon: "warning",
        title: "Campos Incompletos",
        text: "Por favor, completá los campos requeridos.",
      });
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/reclamos",
        formData
      );
      const numero = res.data.body.numeroReclamo;

      Swal.fire({
        icon: "success",
        title: "¡Reclamo enviado!",
        html: `<p>Tu reclamo fue registrado correctamente.</p><br><strong>Número de Reclamo:</strong> <code>${numero}</code>`,
      });

      setFormData({
        nombres: "",
        apellido: "",
        direccion: "",
        email: "",
        telefono: "",
        asunto: "",
        descripcion: "",
      });
      setEnviado(true);
      setError(null);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el reclamo.",
      });
      setError("Hubo un problema al enviar el reclamo.");
      setEnviado(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center sm:p-10">
      <div className="flex justify-center items-start w-full max-w-6xl gap-x-20">
        {/* Formulario a la izquierda */}
        <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] p-6 sm:p-10 w-3/5 shadow-xl backdrop-blur-md rounded-2xl">
          <form onSubmit={handleSubmit} className="text-white space-y-10">
            <h2 className="text-2xl font-bold text-center">
              RECLAMOS Y DENUNCIAS
            </h2>

            {enviado && (
              <div className="p-3 text-center bg-green-100 text-green-800 rounded-lg text-sm font-semibold">
                ¡Tu reclamo fue enviado con éxito!
              </div>
            )}

            {error && (
              <div className="p-3 text-center bg-red-100 text-red-800 rounded-lg text-sm font-semibold">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                placeholder="Nombres *"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Apellido *"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#004c99] text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              >
                <option value="">Seleccionar Asunto</option>
                <option value="Alumbrado público">Alumbrado público</option>
                <option value="Recolección de residuos">
                  Recolección de residuos
                </option>
                <option value="Seguridad">Seguridad</option>
                <option value="Poda de árboles">Poda de árboles</option>
                <option value="Veredas o calles en mal estado">
                  Veredas o calles en mal estado
                </option>
                <option value="Ruidos molestos">Ruidos molestos</option>
                <option value="Fugas de agua">Fugas de agua</option>
                <option value="Animales sueltos">Animales sueltos</option>
                <option value="Basurales">Basurales</option>

                <option value="Semáforos o señales de tránsito">
                  Semáforos o señales de tránsito
                </option>
                <option value="Iluminación en plazas o espacios públicos">
                  Iluminación en plazas o espacios públicos
                </option>

                <option value="Otros">Otros</option>
              </select>

              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows="5"
              placeholder="Descripción del reclamo o denuncia *"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
            >
              ENVIAR
            </button>
          </form>
        </div>

        {/* Enlaces a la derecha */}

        <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] p-6 rounded-2xl shadow-2xl border border-gray-200 w-fit">
          <div className="flex flex-col gap-6 w-64">
            <Link
              to="/reclamos/consulta"
              className="bg-black/40 hover:bg-black/60 text-white rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center space-y-2 text-center"
              title="Consultar Reclamo"
            >
              <FaSearch className="text-3xl" />
              <span className="font-semibold">Consulta tu Reclamo</span>
            </Link>

            <Link
              to="/reclamos/historial"
              className="bg-gray-200 hover:bg-gray-300 text-black rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center justify-center space-y-2 text-center"
              title="Historial de Reclamos"
            >
              <FaHistory className="text-3xl" />
              <span className="font-semibold">Ver Reclamos</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioReclamos;
