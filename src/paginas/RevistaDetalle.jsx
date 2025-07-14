// src/paginas/RevistaDetalle.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RevistaViewer from "./RevistaViewer";

const RevistaDetalle = () => {
    const { id } = useParams();
    const [revista, setRevista] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRevista = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await axios.get(`http://localhost:3000/api/revistas/${id}`);
                if (!res.data.body) {
                    setError("Revista no encontrada");
                } else {
                    setRevista(res.data.body);
                }
            } catch {
                setError("Error al cargar la revista");
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchRevista();
        else {
            setError("ID inválido");
            setLoading(false);
        }
    }, [id]);

    if (loading) return <p className="text-center py-10">Cargando revista...</p>;
    if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

    return <RevistaViewer revista={revista} />;
};

export default RevistaDetalle;
