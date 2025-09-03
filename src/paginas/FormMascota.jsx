import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
//import mascotaImg from "../imagenes/imgLogo/3logoMascota.png"; // 👈 tu imagen

const FormMascota = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [sexo, setSexo] = useState("");
  const [tamano, setTamano] = useState("");
  const [condicion, setCondicion] = useState("");
  const [lugar, setLugar] = useState("");
  const [contactoNombre, setContactoNombre] = useState("");
  const [contactoTelefono, setContactoTelefono] = useState("");
  const [imagen, setImagen] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (
      !nombre ||
      !tipo ||
      !raza ||
      !edad ||
      !sexo ||
      !tamano ||
      !condicion ||
      !lugar ||
      !contactoNombre ||
      !contactoTelefono ||
      !imagen
    ) {
      setMensaje("Completa todos los campos e incluí una imagen.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("tipo", tipo);
    formData.append("raza", raza);
    formData.append("edad", edad);
    formData.append("sexo", sexo);
    formData.append("tamano", tamano);
    formData.append("condicion", condicion);
    formData.append("lugar", lugar);
    formData.append("contacto_nombre", contactoNombre);
    formData.append("contacto_telefono", contactoTelefono);
    formData.append("fecha", new Date()); // o dejar que el backend lo genere
    formData.append("imagen", imagen);

    try {
      await axios.post(`${API_URL}/mascotas`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMensaje("Mascota creada con éxito ✅");

      // Limpiar formulario
      setNombre("");
      setTipo("");
      setRaza("");
      setEdad("");
      setSexo("");
      setTamano("");
      setCondicion("");
      setLugar("");
      setContactoNombre("");
      setContactoTelefono("");
      setImagen(null);
    } catch (error) {
      console.error(error);
      setMensaje("Error al crear la mascota ❌");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center p-4 sm:p-6 ">
      <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#0059b3] rounded-2xl border border-white/20 p-8 sm:p-12 w-full max-w-4xl shadow-2xl backdrop-blur-md">
        <form
          onSubmit={handleSubmit}
          className="text-white grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* <div className="w-28 h-28">
            <img src={null} alt="Mascota" className="" />
          </div> */}

          <button
            onClick={() => navigate("/mascotas")}
            className="mb-6 px-3 py-1 sm:px-4 sm:py-1.5 bg-white text-[#002c73] font-semibold rounded-xl shadow hover:bg-white/90 transition flex items-center w-auto"
            aria-label="Volver"
            title="Volver"
          >
            <FaArrowLeft className="text-sm" />
          </button>

          <h2 className="col-span-1 md:col-span-2 text-3xl font-bold text-center mb-6">
            CARGAR MASCOTA
          </h2>

          {/* Campos */}
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="Tipo (perro, gato...)"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            placeholder="Raza"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            placeholder="Edad"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            placeholder="Sexo"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={tamano}
            onChange={(e) => setTamano(e.target.value)}
            placeholder="Tamaño"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={condicion}
            onChange={(e) => setCondicion(e.target.value)}
            placeholder="Condición"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            placeholder="Lugar"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="text"
            value={contactoNombre}
            onChange={(e) => setContactoNombre(e.target.value)}
            placeholder="Nombre de contacto"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />
          <input
            type="tel"
            value={contactoTelefono}
            onChange={(e) => setContactoTelefono(e.target.value)}
            placeholder="Teléfono de contacto"
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 w-full"
          />

          {/* File input */}
          <input
            type="file"
            onChange={(e) => setImagen(e.target.files[0])}
            className="col-span-1 md:col-span-2 w-full text-sm text-white file:!bg-[#002c73] file:!border-none file:!text-white file:px-4 file:py-2 file:rounded-lg file:cursor-pointer bg-white/10 border border-white/20 rounded-lg"
          />

          {/* Submit */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
          >
            ACEPTAR
          </button>

          {mensaje && (
            <p className="col-span-1 md:col-span-2 text-center text-sm mt-2 text-white/90">
              {mensaje}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormMascota;
