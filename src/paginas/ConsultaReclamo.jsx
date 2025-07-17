import { useState } from 'react';
import axios from 'axios';

const ConsultaReclamo = () => {
  const [numero, setNumero] = useState('');
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
      const res = await axios.get(`http://localhost:3000/api/reclamos/numero/${numero}`);
      setReclamo(res.data.body);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('Número de reclamo no encontrado');
      } else {
        setError('Error al consultar el reclamo');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl text-white bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] space-y-6"
    >
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
          {loading ? 'Consultando...' : 'Consultar'}
        </button>
      </div>

      {error && <p className="text-red-300 font-semibold">{error}</p>}

      {reclamo && (
        <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-white space-y-2">
          <h3 className="text-xl font-bold">Detalles del Reclamo</h3>
          <p><strong>Número:</strong> {reclamo.numeroReclamo}</p>
          <p><strong>Asunto:</strong> {reclamo.asunto}</p>
          <p><strong>Descripción:</strong> {reclamo.descripcion}</p>
          <p><strong>Estado:</strong> {reclamo.estado || 'Pendiente'}</p>
        </div>
      )}
    </form>
  );
};

export default ConsultaReclamo;
