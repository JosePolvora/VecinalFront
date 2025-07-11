import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[#002c73]">Panel de Administración</h1>

      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span>Usuario Admin</span>
        <Link
          to="/"
          className="flex items-center gap-1 text-[#002c73] font-semibold hover:underline"
        >
          <i className="fas fa-home"></i>
          Volver al sitio
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;
