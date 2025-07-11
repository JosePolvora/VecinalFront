import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const NovedadDetalle = () => {
    const { id } = useParams();
    const [novedad, setNovedad] = useState(null);

    useEffect(() => {
        const obtenerNovedad = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/novedades/${id}`);
                setNovedad(res.data.body);
            } catch (error) {
                console.error("Error al obtener la novedad:", error);
            }
        };
        obtenerNovedad();
    }, [id]);

    if (!novedad) return <p className="text-center mt-10">Cargando novedad...</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8">
                <h1 className="text-xl md:text-2xl font-semibold text-black mb-6 text-left leading-relaxed">
                    {novedad.titulo}
                </h1>


                <div className="flex justify-center mb-6">
                    <img
                        src={
                            novedad.imagen_url
                                ? `http://localhost:3000${novedad.imagen_url}`
                                : "https://via.placeholder.com/800x450"
                        }
                        alt={novedad.titulo}
                        className="w-full max-w-3xl h-auto rounded-xl shadow-md object-cover"
                    />
                </div>

                <p className="text-gray-700 text-lg leading-[2.5] text-justify">
                    {novedad.descripcion}
                </p>

            </div>
        </div>
    );
};

export default NovedadDetalle;
