import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditarReclamo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [reclamo, setReclamo] = useState(null);
    const [estado, setEstado] = useState('Pendiente');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [guardando, setGuardando] = useState(false);

    useEffect(() => {
        const fetchReclamo = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`http://localhost:3000/api/reclamos/${id}`);
                if (res.data.body) {
                    setReclamo(res.data.body);
                    setEstado(res.data.body.estado || 'Pendiente');
                    setError(null);
                } else {
                    setError('Reclamo no encontrado');
                }
            } catch (err) {
                console.error('Error al cargar reclamo:', err);
                setError('Error al cargar reclamo');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchReclamo();
        } else {
            setError('No se proporcionó número de reclamo');
            setLoading(false);
        }
    }, [id]);

    const handleGuardar = async () => {
        try {
            setGuardando(true);
            await axios.put(`http://localhost:3000/api/reclamos/${id}/estado`, { estado });

            await Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Estado actualizado correctamente.',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false,
                allowEscapeKey: false,
            });

            navigate('/adminpanel/reclamos');
        } catch (err) {
            console.error('Error al guardar estado:', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudieron guardar los cambios.',
            });
        } finally {
            setGuardando(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] text-white">
                Cargando reclamo...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] text-red-400 font-bold">
                {error}
            </div>
        );
    }

    if (!reclamo) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] text-white">
                No hay reclamo para mostrar.
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] min-h-screen flex justify-center items-center p-4 sm:p-6">
            <div className="bg-white/10 rounded-2xl border border-white/20 p-6 sm:p-10 w-full max-w-3xl shadow-xl backdrop-blur-md text-white">
                <h2 className="text-center mb-6 sm:mb-8 text-2xl font-bold text-white">
                    EDITAR ESTADO DEL RECLAMO
                </h2>

                <div className="mb-4 space-y-2">
                    <p><strong className="text-white/80">Número de Reclamo:</strong> {reclamo.numeroReclamo}</p>
                    <p><strong className="text-white/80">Nombre:</strong> {reclamo.nombres} {reclamo.apellido}</p>
                    <p><strong className="text-white/80">Asunto:</strong> {reclamo.asunto || '-'}</p>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold text-white/80" htmlFor="estado">Estado:</label>
                    <select
                        id="estado"
                        value={estado}
                        onChange={e => setEstado(e.target.value)}
                        //className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        className="w-full px-4 py-2 bg-[#002c73] text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"

                        disabled={guardando}
                    >
                        <option value="Pendiente">Pendiente</option>
                        <option value="En proceso">En proceso</option>
                        <option value="Resuelto">Resuelto</option>
                        <option value="Cancelado">Cancelado</option>
                    </select>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <button
                        onClick={handleGuardar}
                        disabled={guardando}
                        className="bg-[#002c73] hover:bg-[#002c73]/90 text-white px-4 py-2 rounded-lg font-semibold shadow-md disabled:opacity-50"
                    >
                        {guardando ? 'Guardando...' : 'Guardar Cambios'}
                    </button>
                    <button
                        onClick={() => navigate('/adminpanel/reclamos')}
                        className="text-white/80 hover:underline"
                        disabled={guardando}
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditarReclamo;