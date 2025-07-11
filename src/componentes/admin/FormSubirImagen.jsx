// import React, { useState } from 'react';
// import axios from 'axios';

// const FormSubirImagen = () => {
//   const [imagen, setImagen] = useState(null);
//   const [descripcion, setDescripcion] = useState('');
//   const [mensaje, setMensaje] = useState('');
//   const [cargando, setCargando] = useState(false);

//   const handleFileChange = (e) => {
//     setImagen(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!imagen) {
//       setMensaje('Por favor, selecciona una imagen');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('imagen', imagen); // 👈 Debe coincidir con multer
//     formData.append('descripcion', descripcion);

//     try {
//       setCargando(true);
//       const res = await axios.post('http://localhost:3000/api/imagenes', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setMensaje('✅ Imagen subida con éxito');
//       setImagen(null);
//       setDescripcion('');
//     } catch (error) {
//       console.error('Error al subir la imagen:', error.response?.data || error.message);
//       setMensaje('❌ Error al subir la imagen');
//     } finally {
//       setCargando(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto' }}>
//       <div>
//         <label>Selecciona imagen:</label>
//         <input type="file" onChange={handleFileChange} accept="image/*" />
//       </div>
//       <div style={{ marginTop: '1rem' }}>
//         <label>Descripción:</label>
//         <input
//           type="text"
//           value={descripcion}
//           onChange={(e) => setDescripcion(e.target.value)}
//           placeholder="Descripción"
//           required
//         />
//       </div>
//       <button type="submit" disabled={cargando} style={{ marginTop: '1rem' }}>
//         {cargando ? 'Subiendo...' : 'Subir imagen'}
//       </button>
//       {mensaje && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{mensaje}</p>}
//     </form>
//   );
// };

// export default FormSubirImagen;

import React, { useState } from 'react';
import axios from 'axios';

const FormSubirImagen = () => {
  const [imagen, setImagen] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imagen) {
      setMensaje('Por favor, selecciona una imagen');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('descripcion', descripcion);

    try {
      setCargando(true);
      const res = await axios.post('http://localhost:3000/api/imagenes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMensaje('✅ Imagen subida con éxito');
      setImagen(null);
      setDescripcion('');
    } catch (error) {
      console.error('Error al subir la imagen:', error.response?.data || error.message);
      setMensaje('❌ Error al subir la imagen');
    } finally {
      setCargando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl text-white bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">CARGAR IMAGEN</h2>

      <div>
        <label className="block mb-1 text-sm font-medium">Selecciona imagen</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
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

      <div>
        <label className="block mb-1 text-sm font-medium">Descripción</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          required
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
        />
      </div>

      <button
        type="submit"
        disabled={cargando}
        className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
      >
        {cargando ? 'Subiendo...' : 'ACEPTAR'}
      </button>

      {mensaje && (
        <p className="text-center text-sm mt-4 text-white/90 font-semibold">{mensaje}</p>
      )}
    </form>
  );
};

export default FormSubirImagen;
