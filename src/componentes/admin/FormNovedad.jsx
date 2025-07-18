import React, { useState } from 'react';
import axios from 'axios';

const FormNovedad = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !descripcion || !imagen) {
      setMensaje('Completa todos los campos e incluí una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descripcion', descripcion);
    formData.append('imagen', imagen);

    try {
      await axios.post('http://localhost:3000/api/novedades', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setMensaje('Novedad creada con éxito ✅');
      setTitulo('');
      setDescripcion('');
      setImagen(null);
    } catch (error) {
      console.error(error);
      setMensaje('Error al crear la novedad ❌');
    }
  };

  return (
    // <div className="bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] min-h-screen flex justify-center items-center p-4 sm:p-6">
    <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="bg-white/10 rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">

        <form
          onSubmit={handleSubmit}

          // className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl text-white bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] space-y-6"
          className="max-w-xl mx-auto text-white space-y-10"
        >
          <h2 className="text-2xl font-bold text-center">CARGAR NOVEDAD</h2>

          <div>
            <label className="block mb-1 text-sm font-medium"></label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
              placeholder="Escribí el título..."
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium"></label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
              rows="4"
              placeholder="Escribí una descripción..."
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium"></label>
            <input
              type="file"
              onChange={(e) => setImagen(e.target.files[0])}
              className="w-full text-sm text-white
             file:!bg-[#002c73]
             file:!border-none
             file:!text-white
             file:px-4
             file:py-2
             file:rounded-lg
             file:cursor-pointer
             bg-white/10
             border border-white/20
             rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            ACEPTAR
          </button>

          {mensaje && (
            <p className="text-center text-sm mt-4 text-white/90">{mensaje}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormNovedad;
