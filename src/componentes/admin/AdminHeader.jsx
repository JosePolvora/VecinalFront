import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

const AdminHeader = ({ onLogout }) => {
  // Obtener usuario del localStorage (asegurate que se guarde con esta clave)
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#002c73]">Panel de Administración</h1>

      <div className="flex items-center gap-4 text-sm text-gray-600">

        {usuario ? (
          <span className="font-semibold text-lg italic">Bienvenido {usuario.nombre} {usuario.apellido} </span>
        ) : (
          <span>Usuario Admin</span>
        )}

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
