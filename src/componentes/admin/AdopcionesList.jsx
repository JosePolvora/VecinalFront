// src/components/AdopcionesList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.santaisabel2.com/api";

const AdopcionesList = () => {
  const [adopciones, setAdopciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdopciones = async () => {
      try {
        const res = await axios.get(`${API_URL}/adopciones`);
        setAdopciones(res.data.body || []);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar adopciones:", error);
        setLoading(false);
      }
    };

    fetchAdopciones();
  }, []);

  if (loading) return <p>Cargando adopciones...</p>;

  return (
    <div>
      <h2>Listado de Adopciones</h2>
      {adopciones.length === 0 ? (
        <p>No hay adopciones registradas</p>
      ) : (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {adopciones.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.nombre}</td>
                <td>{a.telefono}</td>
                <td>{a.direccion}</td>
                <td>{a.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdopcionesList;
