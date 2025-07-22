import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Historial = () => {
    const [reclamos, setReclamos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = reclamos.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(reclamos.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        const fetchReclamos = async () => {
            try {
                const res = await axios.get('http://localhost:3000/api/reclamos');
                setReclamos(res.data.body || []);
            } catch (err) {
                console.error(err);
                setError('Error al cargar el historial de reclamos.');
            } finally {
                setLoading(false);
            }
        };

        fetchReclamos();
    }, []);

    const navigate = useNavigate();


    return (
        <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] min-h-screen flex justify-center items-center p-4 sm:p-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 shadow-xl w-full max-w-6xl text-white">

                <button
                    onClick={() => navigate('/reclamos')}
                    className="mb-6 px-4 py-1 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition"
                >
                    ← Volver
                </button>

                <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-md">Historial de Reclamos</h2>

                {loading ? (
                    <p className="text-center text-white/80">Cargando...</p>
                ) : error ? (
                    <p className="text-center text-red-400">{error}</p>
                ) : reclamos.length === 0 ? (
                    <p className="text-center text-white/80">No hay reclamos registrados.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-white bg-white/5 rounded-xl overflow-hidden shadow-md">
                            <thead className="bg-white/10 text-white uppercase text-xs">
                                <tr>
                                    <th className="px-4 py-3 border border-white/20 text-left">N° de Reclamo</th>
                                    <th className="px-4 py-3 border border-white/20 text-left">Nombre</th>
                                    <th className="px-4 py-3 border border-white/20 text-left">Asunto</th>
                                    <th className="px-4 py-3 border border-white/20 text-left">Estado</th>
                                    <th className="px-4 py-3 border border-white/20 text-left">Fecha</th>
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
                                            {rec.asunto || '-'}
                                        </td>
                                        <td className="px-4 py-2 border border-white/20">
                                            {rec.estado || 'Pendiente'}
                                        </td>
                                        <td className="px-4 py-2 border border-white/20">
                                            {rec.fecha?.split('T')[0].split('-').reverse().join('/')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Paginación */}
                        <div className="mt-6 flex justify-center items-center gap-6 text-sm text-white">
                            <button
                                onClick={goToPrevPage}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-xl shadow-md transition font-semibold ${currentPage === 1
                                        ? 'bg-white/20 cursor-not-allowed text-white/50'
                                        : 'bg-white text-[#002c73] hover:bg-white/90'
                                    }`}
                            >
                                ← Anterior
                            </button>

                            <span className="text-white font-semibold">
                                Página {currentPage} de {totalPages}
                            </span>

                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-xl shadow-md transition font-semibold ${currentPage === totalPages
                                        ? 'bg-white/20 cursor-not-allowed text-white/50'
                                        : 'bg-white text-[#002c73] hover:bg-white/90'
                                    }`}
                            >
                                Siguiente →
                            </button>
                        </div>

                        {/* <p className="text-sm text-right mt-4 text-white/80">
              Total de reclamos: {reclamos.length}
            </p> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Historial;