import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Historial = () => {
  const [reclamos, setReclamos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filtroNombre, setFiltroNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleBuscar = (e) => {
    setFiltroNombre(e.target.value);
    setCurrentPage(1);
  };

  const reclamosFiltrados = reclamos.filter((rec) =>
    `${rec.nombres} ${rec.apellido}`
      .toLowerCase()
      .includes(filtroNombre.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reclamosFiltrados.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(reclamosFiltrados.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const fetchReclamos = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/reclamos");
        setReclamos(res.data.body || []);
      } catch (err) {
        console.error(err);
        setError("Error al cargar el historial de reclamos.");
      } finally {
        setLoading(false);
      }
    };

    fetchReclamos();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center p-6 sm:p-10">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] rounded-2xl p-6 sm:p-10 shadow-xl w-full max-w-6xl text-white">
        <button
          onClick={() => navigate("/reclamos")}
          className="mb-6 px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center gap-2 w-auto"
          aria-label="Volver"
          title="Volver"
        >
          <FaArrowLeft className="text-sm" />
          <span className="hidden sm:inline">Volver</span>
        </button>

        <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-md">
          Historial de Reclamos
        </h2>

        {loading ? (
          <p className="text-center text-white/80">Cargando...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : reclamos.length === 0 ? (
          <p className="text-center text-white/80">
            No hay reclamos registrados.
          </p>
        ) : (
          <>
            <div className="mb-6 flex justify-center sm:justify-end">
              <input
                type="text"
                placeholder="Buscar por nombre"
                value={filtroNombre}
                onChange={handleBuscar}
                className="px-4 py-2 rounded-xl bg-white text-[#002c73] placeholder:text-[#002c73]/60 shadow-md w-full max-w-[300px]"
              />
            </div>

            {/* Más margen para separar scrollbar del paginado */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-white bg-white/5 rounded-xl overflow-hidden shadow-md min-w-[600px] sm:min-w-full">
                <thead className="bg-white/10 text-white uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 border border-white/20 text-left">
                      N° de Reclamo
                    </th>
                    <th className="px-4 py-3 border border-white/20 text-left">
                      Nombre
                    </th>
                    <th className="px-4 py-3 border border-white/20 text-left">
                      Asunto
                    </th>
                    <th className="px-4 py-3 border border-white/20 text-left">
                      Estado
                    </th>
                    <th className="px-4 py-3 border border-white/20 text-left">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((rec) => (
                    <tr
                      key={rec.numeroReclamo}
                      className="hover:bg-white/10 transition-colors"
                    >
                      <td className="px-4 py-2 border border-white/20">
                        {rec.numeroReclamo}
                      </td>
                      <td className="px-4 py-2 border border-white/20">
                        {rec.nombres} {rec.apellido}
                      </td>
                      <td className="px-4 py-2 border border-white/20">
                        {rec.asunto || "-"}
                      </td>
                      <td className="px-4 py-2 border border-white/20">
                        {rec.estado || "Pendiente"}
                      </td>
                      <td className="px-4 py-2 border border-white/20">
                        {rec.fecha
                          ?.split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paginación */}

            <div className="mt-6 flex flex-row justify-center items-center gap-2 text-white text-sm sm:gap-6 sm:flex-row">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`rounded-xl shadow-md transition font-semibold
      ${
        currentPage === 1
          ? "bg-white/20 cursor-not-allowed text-white/50"
          : "bg-white text-[#002c73] hover:bg-white/90"
      }
      px-2 py-1 text-xs w-16 sm:px-4 sm:py-2 sm:text-sm sm:w-auto`}
              >
                Anterior
              </button>

              <span className="font-semibold text-center w-auto px-2 text-xs sm:text-sm whitespace-nowrap">
                Página {currentPage} de {totalPages}
              </span>

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`rounded-xl shadow-md transition font-semibold
      ${
        currentPage === totalPages
          ? "bg-white/20 cursor-not-allowed text-white/50"
          : "bg-white text-[#002c73] hover:bg-white/90"
      }
      px-2 py-1 text-xs w-16 sm:px-4 sm:py-2 sm:text-sm sm:w-auto`}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Historial;
