import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import algarrobo from "../imagenes/imgLogin/algarrobo.png";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [claveAutorizacion, setClaveAutorizacion] = useState(""); // NUEVO
  const [rol, setRol] = useState("admin");
  const [activo, setActivo] = useState(true);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      await axios.post("http://localhost:3000/api/usuarios", {
        nombre,
        apellido,
        correo,
        clave,
        rol,
        activo,
        claveAutorizacion, // Enviamos la clave al backend
      });

      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Error al registrar usuario");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LADO IZQUIERDO */}
      <div className="w-1/2 hidden md:block relative overflow-hidden ring-4 ring-blue-500/30 rounded-xl">
        <img
          src={algarrobo}
          alt="Registro visual"
          className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-[3000ms] brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-800/40 to-blue-700/60 transition-opacity duration-700 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 px-8">
          <div className="text-white text-center space-y-4 animate-fade-in drop-shadow-lg">
            <h1 className="text-4xl font-bold text-blue-100 animate-pulse uppercase">
              ¡Registrate!
            </h1>
          </div>
        </div>
      </div>

      {/* LADO DERECHO */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white/20 backdrop-blur-lg p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] p-10 rounded-2xl text-white space-y-6 w-full max-w-md shadow-2xl border border-white/30"
        >
          <h2 className="text-2xl font-bold text-center">REGISTRARSE</h2>

          {/* Campos existentes... */}

          <div>
            <label className="block mb-1 text-sm font-medium">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004c99] text-[#002c73]"
              placeholder="Nombre"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004c99] text-[#002c73]"
              placeholder="Apellido"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004c99] text-[#002c73]"
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Contraseña</label>
            <input
              type="password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004c99] text-[#002c73]"
              placeholder="********"
            />
          </div>

          {/* NUEVO campo clave autorización */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Clave de autorización
            </label>
            <input
              type="password"
              value={claveAutorizacion}
              onChange={(e) => setClaveAutorizacion(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004c99] text-[#002c73]"
              placeholder="Clave secreta para registrarse"
            />
          </div>

          {error && (
            <p className="text-center text-sm mt-2 text-red-500 font-semibold">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={cargando}
            className="w-full py-3 bg-[#004c99] text-white font-bold rounded-lg hover:bg-[#003366] transition"
          >
            {cargando ? "Registrando..." : "Registrarse"}
          </button>
        </form>
      </div>
    </div>
  );
}
