// import React, { useState } from "react";
// import axios from "axios";

// import { API_URL } from "../../config";

// const FormSubirRevista = () => {
//   const [pdf, setPdf] = useState(null);
//   const [descripcion, setDescripcion] = useState("");
//   const [mes, setMes] = useState("");
//   const [mensaje, setMensaje] = useState("");
//   const [cargando, setCargando] = useState(false);

//   const handleFileChange = (e) => {
//     setPdf(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!pdf) {
//       setMensaje("Por favor, selecciona un archivo PDF");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("pdf", pdf);
//     formData.append("descripcion", descripcion);
//     formData.append("mes", mes);

//     // try {
//     //   setCargando(true);
//     //   const res = await axios.post(
//     //     "http://localhost:3000/api/revistas",
//     //     formData,
//     //     {
//     //       headers: {
//     //         "Content-Type": "multipart/form-data",
//     //       },
//     //     }
//     //   );
//     try {
//       setCargando(true);
//       // const res = await axios.post(`${API_URL}/revistas`, formData, {
//       //   headers: {
//       //     "Content-Type": "multipart/form-data",
//       //   },
//       // });

//       const res = await axios.post(`${API_URL}/revistas`, formData, {
//   headers: { "Content-Type": "multipart/form-data" },
//   withCredentials: true // <--- esto es clave
// });


//       setMensaje("✅ Revista subida con éxito");
//       setPdf(null);
//       setDescripcion("");
//       setMes("");
//     } catch (error) {
//       console.error(
//         "Error al subir la revista:",
//         error.response?.data || error.message
//       );
//       setMensaje("❌ Error al subir la revista");
//     } finally {
//       setCargando(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
//       <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-xl mx-auto text-white space-y-10"
//           // className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl text-white bg-gradient-to-b from-[#003366] via-[#7b1fa2] to-[#e91e63] space-y-6"
//         >
//           <h2 className="text-2xl font-bold text-center">
//             CARGAR REVISTA MENSUAL
//           </h2>

//           <div>
//             <label className="block mb-1 text-sm font-medium">
//               Selecciona PDF
//             </label>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               accept="application/pdf"
//               className="w-full text-sm text-white
//              file:!bg-[#003366]
//              file:!border-none
//              file:!text-white
//              file:px-4
//              file:py-2
//              file:rounded-lg
//              file:cursor-pointer
//              bg-white/10
//              border border-white/20
//              rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium">
//               Mes (formato YYYY-MM)
//             </label>
//             <input
//               type="month"
//               value={mes}
//               onChange={(e) => setMes(e.target.value)}
//               required
//               className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium">
//               Descripción
//             </label>
//             <input
//               type="text"
//               value={descripcion}
//               onChange={(e) => setDescripcion(e.target.value)}
//               placeholder="Ej: Revista de Julio"
//               required
//               className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={cargando}
//             className="w-full py-3 bg-white text-[#003366] font-bold rounded-lg hover:bg-white/90 transition"
//           >
//             {cargando ? "Subiendo..." : "SUBIR REVISTA"}
//           </button>

//           {mensaje && (
//             <p className="text-center text-sm mt-4 text-white/90 font-semibold">
//               {mensaje}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormSubirRevista;

// import React, { useState } from "react";
// import axios from "axios";

// const FormSubirRevista = () => {
//   const [pdf, setPdf] = useState(null);
//   const [descripcion, setDescripcion] = useState("");
//   const [mes, setMes] = useState("");
//   const [mensaje, setMensaje] = useState("");
//   const [cargando, setCargando] = useState(false);

//   const handleFileChange = (e) => setPdf(e.target.files[0]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!pdf) return setMensaje("Por favor selecciona un archivo PDF");

//     const formData = new FormData();
//     formData.append("pdf", pdf);
//     formData.append("descripcion", descripcion);
//     formData.append("mes", mes);

//     try {
//       setCargando(true);
//       const res = await axios.post(`${import.meta.env.VITE_API_URL}/revistas`, formData, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       setMensaje("✅ Revista subida con éxito");
//       setPdf(null);
//       setDescripcion("");
//       setMes("");
//     } catch (error) {
//       console.error(error.response?.data || error.message);
//       setMensaje("❌ Error al subir la revista");
//     } finally {
//       setCargando(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
//       <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
//         <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-white space-y-10">
//           <h2 className="text-2xl font-bold text-center">CARGAR REVISTA MENSUAL</h2>

//           <div>
//             <label className="block mb-1 text-sm font-medium">Selecciona PDF</label>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               accept="application/pdf"
//               className="w-full text-sm text-white file:!bg-[#003366] file:!border-none file:!text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer bg-white/10 border border-white/20 rounded-lg"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium">Mes (formato YYYY-MM)</label>
//             <input
//               type="month"
//               value={mes}
//               onChange={(e) => setMes(e.target.value)}
//               required
//               className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 text-sm font-medium">Descripción</label>
//             <input
//               type="text"
//               value={descripcion}
//               onChange={(e) => setDescripcion(e.target.value)}
//               placeholder="Ej: Revista de Julio"
//               required
//               className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
//             />
//           </div>

//           <button type="submit" disabled={cargando} className="w-full py-3 bg-white text-[#003366] font-bold rounded-lg hover:bg-white/90 transition">
//             {cargando ? "Subiendo..." : "SUBIR REVISTA"}
//           </button>

//           {mensaje && <p className="text-center text-sm mt-4 text-white/90 font-semibold">{mensaje}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FormSubirRevista;


import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config"; // Igual que el de imágenes

const FormSubirRevista = () => {
  const [pdf, setPdf] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [mes, setMes] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pdf) {
      setMensaje("Por favor, selecciona un archivo PDF");
      return;
    }

    if (pdf.type !== "application/pdf") {
      setMensaje("El archivo debe ser un PDF");
      return;
    }

    if (!mes) {
      setMensaje("Por favor selecciona un mes");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", pdf);
    formData.append("descripcion", descripcion);
    formData.append("mes", mes);

    try {
      setCargando(true);
      const res = await axios.post(`${API_URL}/revistas`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Respuesta del servidor:", res.data);

      setMensaje("✅ Revista subida con éxito");
      setPdf(null);
      setDescripcion("");
      setMes("");
    } catch (error) {
      console.error("Error al subir la revista:", error.response?.data || error.message);
      setMensaje("❌ Error al subir la revista");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-6">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-6xl shadow-xl backdrop-blur-md">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-white space-y-12">
          <h2 className="text-2xl font-bold text-center">CARGAR REVISTA MENSUAL</h2>

          <div>
            <label className="block mb-1 text-sm font-medium">Selecciona PDF</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="application/pdf"
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
            <label className="block mb-1 text-sm font-medium">Mes (formato YYYY-MM)</label>
            <input
              type="month"
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Descripción</label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Ej: Revista de Julio"
              required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            {cargando ? "Subiendo..." : "SUBIR REVISTA"}
          </button>

          {mensaje && (
            <p className="text-center text-sm mt-4 text-white/90 font-semibold">{mensaje}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormSubirRevista;
