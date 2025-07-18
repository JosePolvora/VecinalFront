import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormularioReclamos = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellido: '',
    direccion: '',
    email: '',
    telefono: '',
    asunto: '',
    descripcion: '',
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

    if (!formData.nombres || !formData.apellido || !formData.email || !formData.descripcion) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos Incompletos',
        text: 'Por favor, completá los campos requeridos.',
      });
      return;
    }

    try {
      const res = await axios.post('http://localhost:3000/api/reclamos', formData);
      const numero = res.data.body.numeroReclamo; // <-- tomamos el número desde la respuesta

      Swal.fire({
        icon: 'success',
        title: '¡Reclamo enviado!',
        html: `<p>Tu reclamo fue registrado correctamente.</p><br><strong>Número de Reclamo:</strong> <code>${numero}</code>`,
      });

      setFormData({
        nombres: '',
        apellido: '',
        direccion: '',
        email: '',
        telefono: '',
        asunto: '',
        descripcion: '',
      });
      setEnviado(true);
      setError(null);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al enviar el reclamo.',
      });
      setError('Hubo un problema al enviar el reclamo.');
      setEnviado(false);
    }
  };

  return (

    //<div className="bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] min-h-screen flex justify-center items-center p-4 sm:p-6">
    <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] min-h-screen flex justify-center items-center sm:p-10 ml-10 mr-10">
      <div className="bg-white/10 rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className=" mx-auto text-white space-y-10"
        // className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl text-white bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">RECLAMOS Y DENUNCIAS</h2>

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

          {/* Nombres y Apellido */}
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

          {/* Dirección */}
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Email y Teléfono */}
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

          {/* Asunto */}
          <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            placeholder="Asunto"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Descripción */}
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows="5"
            placeholder="Descripción del reclamo o denuncia *"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioReclamos;
