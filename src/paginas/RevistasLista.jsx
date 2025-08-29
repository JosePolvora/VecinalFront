import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.santaisabel2.com/api/revistas"; // URL real en producción

const RevistaLista = () => {
  const [revistas, setRevistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        const res = await axios.get(API_URL);
        //console.log("📌 Respuesta completa del backend:", res.data);

        const revistasArray = Array.isArray(res.data.body) ? res.data.body : [];
        //console.log("📌 Revistas extraídas:", revistasArray);

        setRevistas(revistasArray);
      } catch (err) {
        console.error("❌ Error al obtener revistas:", err);
        setError("No se pudieron cargar las revistas.");
      } finally {
        setLoading(false);
      }
    };
    fetchRevistas();
  }, []);

  const verRevista = (revista) => {
    navigate(`/revistas/${revista.id}`);
  };

  if (loading) return <p className="text-center py-10">Cargando revistas...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (revistas.length === 0)
    return <p className="text-center py-10">No hay revistas disponibles.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#00527A] border-b-2 border-[#00527A] pb-4 uppercase">
        REVISTAS NUESTRO BARRIO
      </h2>
      <ul className="space-y-4">
        {revistas.map((revista) => (
          <li
            key={revista.id}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center bg-[#66ccff] hover:bg-[#3399cc] transition-colors duration-300"
          >
            <div>
              {/* <h3 className="text-lg font-semibold text-white uppercase border-l-4 border-white pl-2">
                {revista.mes}
              </h3> */}
              <h3 className="text-lg font-semibold text-white uppercase border-r-4 border-white pr-2">
                {revista.mes}
              </h3>

              {/* <p className="text-sm text-white">{revista.descripcion}</p> */}
            </div>
            <button
              onClick={() => verRevista(revista)}
              className="bg-white text-[#00527A] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 w-32"
            >
              Leer Edición
            </button>
             <a
                href={`https://api.santaisabel2.com/api/revistas/${revista.id}/download`}
                className="bg-white text-[#00527A] px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 w-32 text-center"
              >
                Descargar Revista
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevistaLista;
