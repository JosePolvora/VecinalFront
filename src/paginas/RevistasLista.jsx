import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RevistasLista = () => {
    const [revistas, setRevistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatearMesAnio = (mesString) => {
        if (!mesString) return "";
        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        const [anio, mes] = mesString.split("-");
        const mesNombre = meses[parseInt(mes, 10) - 1];
        return `${mesNombre} de ${anio}`;
    };

    useEffect(() => {
        const fetchRevistas = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/revistas");
                setRevistas(res.data.body || []);
            } catch (err) {
                setError("Error al cargar revistas");
            } finally {
                setLoading(false);
            }
        };
        fetchRevistas();
    }, []);

    if (loading)
        return <p className="text-center py-10">Cargando revistas...</p>;
    if (error)
        return <p className="text-center py-10 text-red-600">{error}</p>;
    if (revistas.length === 0)
        return <p className="text-center py-10">No hay revistas disponibles.</p>;

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h2 className="text-3xl font-black mb-8 text-[#00527A] text-center border-b-2 border-[#00527A] pb-4 uppercase">
                REVISTAS NUESTRO BARRIO
            </h2>
            <ul className="space-y-4">
                {revistas.map((revista) => (
                    <li
                        key={revista.id}
                        className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 bg-[#4CAF50] hover:bg-[#388E3C]"
                    >
                        <Link
                            to={`/revistas/${revista.id}`}
                            className="flex items-center text-white"
                        >
                            <i className="fa fa-file-text-o mr-3 text-xl" aria-hidden="true"></i>

                            <div className="flex-grow">
                                <div className="flex flex-wrap justify-between items-center">
                                    <span className="font-semibold text-lg">
                                        {formatearMesAnio(revista.mes)}
                                    </span>
                                    <span className="text-white text-sm text-center flex-1">
                                        {revista.descripcion}
                                    </span>

                                </div>
                            </div>

                            <i className="fa fa-chevron-right ml-auto text-white" aria-hidden="true"></i>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RevistasLista;
