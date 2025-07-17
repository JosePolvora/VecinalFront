import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const AdminHeader = ({ onLogout }) => {
  // Obtener usuario del localStorage (asegurate que se guarde con esta clave)
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#002c73]">Panel de Administración</h1>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        {/* Mostrar saludo con nombre, si existe usuario */}
        {usuario ? (
          <span>Hola {usuario.nombre}</span>
        ) : (
          <span>Usuario Admin</span>
        )}

        <Link
          to="/"
          className="flex items-center gap-1 text-[#002c73] font-semibold hover:underline"
        >
          <i className="fas fa-home"></i>
          Ir al sitio
        </Link>

        <button
          onClick={onLogout}
          className="flex items-center gap-2 text-red-600 font-semibold hover:underline"
        >
          <LogOut size={16} />
          Salir
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
