import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ onLogin }) {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setCargando(true);

        console.log("Intentando login con:", { correo, clave });

        try {

            const res = await axios.post('http://localhost:3000/api/login', { correo, clave });

            console.log("Respuesta recibida:", res.data);

            // Guardar token y usuario
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('usuario', JSON.stringify(res.data.usuario));

            if (onLogin) onLogin(res.data.usuario);

            // Redirigir al panel admin
            navigate('/adminpanel', { replace: true });

        } catch (err) {
            console.error("Error en login:", err);
            setError(err.response?.data?.message || 'Error de conexión');
        } finally {
            setCargando(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-8 rounded-2xl shadow-xl text-white bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] space-y-6"
        >
            <h2 className="text-2xl font-bold text-center">INICIAR SESIÓN</h2>

            <div>
                <label className="block mb-1 text-sm font-medium">Correo</label>
                <input
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 text-white"
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
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70 text-white"
                    placeholder="********"
                />
            </div>

            {error && (
                <p className="text-center text-sm mt-2 text-red-400 font-semibold">{error}</p>
            )}

            <button
                type="submit"
                disabled={cargando}
                className="w-full py-3 bg-white text-[#002c73] font-bold rounded-lg hover:bg-white/90 transition"
            >
                {cargando ? 'Cargando...' : 'Entrar'}
            </button>
        </form>
    );
}
