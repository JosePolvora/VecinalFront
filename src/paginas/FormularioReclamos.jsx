import { useState } from 'react';

const FormularioReclamos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podés agregar validaciones básicas
    if (!formData.nombre || !formData.email || !formData.descripcion) {
      setError('Por favor, completa los campos requeridos.');
      return;
    }

    setError(null);

    // Simulamos envío
    console.log('Datos enviados:', formData);

    // Aquí pondrías tu lógica real para enviar datos al backend con fetch o axios

    setEnviado(true);

    // Limpiar formulario si querés
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      descripcion: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-6 text-[#00527A] text-center">
        Formulario de Reclamos y Denuncias
      </h2>

      {enviado && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          ¡Tu reclamo fue enviado con éxito!
        </div>
      )}

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-semibold" htmlFor="nombre">
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="email">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <label className="block mb-2 font-semibold" htmlFor="telefono">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-semibold" htmlFor="asunto">
          Asunto
        </label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <label className="block mb-2 font-semibold" htmlFor="descripcion">
          Descripción del reclamo/denuncia *
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-[#00527A] text-white px-6 py-2 rounded hover:bg-[#003f57] transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioReclamos;
