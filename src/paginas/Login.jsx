import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; // <-- Importa SweetAlert2
import algarrobo from "../imagenes/imgLogin/algarrobo.png";

import { API_URL } from "../config";

export default function Login({ onLogin }) {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/adminpanel", { replace: true });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      //const res = await axios.post("http://localhost:3000/api/login",
      const res = await axios.post(`${API_URL}/login`, {
        correo,
        clave,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("usuario", JSON.stringify(res.data.usuario));

      if (onLogin) onLogin(res.data.usuario);

      navigate("/adminpanel", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Error de conexión");
    } finally {
      setCargando(false);
    }
  };

  // Función para pedir clave de autorización con SweetAlert2
  const pedirClaveAutorizacion = async () => {
    const { value: clave } = await Swal.fire({
      title: "Clave de autorización",
      input: "password",
      inputLabel: "Ingresa la clave para poder registrarte",
      inputPlaceholder: "Clave secreta",
      inputAttributes: {
        maxlength: 50,
        autocapitalize: "off",
        autocorrect: "off",
      },
      showCancelButton: true,
    });

    if (clave) {
      if (clave === "CvSantaIsabel2*") {
        // acá poné tu clave real
        navigate("/registro");
      } else {
        Swal.fire({
          icon: "error",
          title: "Clave incorrecta",
          text: "No tienes acceso al registro.",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LADO IZQUIERDO - Imagen */}

      <div className="w-1/2 hidden md:block relative overflow-hidden ring-4 ring-blue-500/30 rounded-xl">
        <img
          src={algarrobo}
          alt="Login visual"
          className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-[3000ms] brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-800/40 to-blue-700/60 transition-opacity duration-700 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10 px-8">
          <div className="text-white text-center space-y-4 animate-fade-in drop-shadow-lg">
            <h1 className="text-4xl font-bold text-blue-100 animate-pulse uppercase">
              ¡Bienvenido!
            </h1>
          </div>
        </div>
      </div>

      {/* LADO DERECHO - Login */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-white/20 backdrop-blur-lg p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] p-10 rounded-2xl text-white space-y-6 w-full max-w-md shadow-2xl border border-white/30"
        >
          <h2 className="text-2xl font-bold text-center">INICIAR SESIÓN</h2>

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
            {cargando ? "Cargando..." : "Entrar"}
          </button>

          <p className="text-center text-sm text-white mt-4">
            ¿No tienes usuario?{" "}
            <span
              onClick={pedirClaveAutorizacion}
              className="underline cursor-pointer hover:text-blue-200 transition"
            >
              Regístrate aquí
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
