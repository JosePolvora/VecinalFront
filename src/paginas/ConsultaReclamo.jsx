// import { useState } from "react";
// import axios from "axios";
// import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const ConsultaReclamo = () => {
//   const [numero, setNumero] = useState("");
//   const [reclamo, setReclamo] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setNumero(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setReclamo(null);
//     setLoading(true);

//     try {
//       const res = await axios.get(
//         `http://localhost:3000/api/reclamos/numero/${numero}`
//       );
//       setReclamo(res.data.body);
//     } catch (err) {
//       if (err.response && err.response.status === 404) {
//         setError("Número de reclamo no encontrado");
//       } else {
//         setError("Error al consultar el reclamo");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] rounded-2xl p-8 sm:p-12 w-full max-w-3xl text-white shadow-xl space-y-6 min-h-[500px]"
//       >
//         <button
//           onClick={() => navigate("/reclamos")}
//           className="mb-6 px-4 py-1 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center gap-2"
//         >
//           <FaArrowLeft className="text-sm" />
//           Volver
//         </button>
//         <h2 className="text-2xl font-bold text-center">CONSULTAR RECLAMO</h2>

//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="text"
//             placeholder="Ingrese número de reclamo *"
//             value={numero}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="px-6 py-2 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition disabled:opacity-50"
//           >
//             {loading ? "Consultando..." : "Consultar"}
//           </button>
//         </div>

//         {error && (
//           <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm font-semibold text-center">
//             {error}
//           </div>
//         )}

//         {reclamo && (
//           <div className="bg-white/10 border border-white/20 rounded-lg p-4 space-y-2">
//             <h3 className="text-xl font-bold">Detalles del Reclamo</h3>
//             <p>
//               <strong>Número:</strong> {reclamo.numeroReclamo}
//             </p>
//             <p>
//               <strong>Asunto:</strong> {reclamo.asunto}
//             </p>
//             <p>
//               <strong>Descripción:</strong> {reclamo.descripcion}
//             </p>
//             <p>
//               <strong>Estado:</strong> {reclamo.estado || "Pendiente"}
//             </p>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default ConsultaReclamo;


import { useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ConsultaReclamo = () => {
  const [numero, setNumero] = useState("");
  const [reclamo, setReclamo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setNumero(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setReclamo(null);
    setLoading(true);

    try {
      const res = await axios.get(
        `http://localhost:3000/api/reclamos/numero/${numero}`
      );
      setReclamo(res.data.body);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Número de reclamo no encontrado");
      } else {
        setError("Error al consultar el reclamo");
      }
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] rounded-2xl p-6 sm:p-12 w-full max-w-3xl text-white shadow-xl space-y-6 min-h-[300px]"
      >
        <button
          onClick={() => navigate("/reclamos")}
          className="mb-6 px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center gap-2 w-auto"
          aria-label="Volver"
          title="Volver"
        >
          <FaArrowLeft className="text-sm" />
          <span className="hidden sm:inline">Volver</span>
        </button>

        <h2 className="text-2xl font-bold text-center">CONSULTAR RECLAMO</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Ingrese número de reclamo *"
            value={numero}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition disabled:opacity-50"
          >
            {loading ? "Consultando..." : "Consultar"}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-lg text-sm font-semibold text-center">
            {error}
          </div>
        )}

        {reclamo && (
          <div className="bg-white/10 border border-white/20 rounded-lg p-4 space-y-2">
            <h3 className="text-xl font-bold">Detalles del Reclamo</h3>
            <p>
              <strong>Número:</strong> {reclamo.numeroReclamo}
            </p>
            <p>
              <strong>Asunto:</strong> {reclamo.asunto}
            </p>
            <p>
              <strong>Descripción:</strong> {reclamo.descripcion}
            </p>
            <p>
              <strong>Estado:</strong> {reclamo.estado || "Pendiente"}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ConsultaReclamo;
