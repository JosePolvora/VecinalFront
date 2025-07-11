import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-[#002c73] text-white min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold">MENÚ</h2>

      {/* Enlace al sitio público */}
      <Link to="" className="flex items-center gap-2 text-sm text-white/80 hover:underline">
        <i className="fas fa-home"></i>
        Volver al inicio
      </Link>

      <nav className="space-y-3 pt-4 border-t border-white/20">
        <Link to="/adminpanel/formnovedad" className="flex items-center gap-2 hover:underline">
          <i className="fas fa-bullhorn"></i>
          Crear Novedad
        </Link>

        <Link to="/adminpanel/formimagen" className="flex items-center gap-2 hover:underline">
          <i className="fas fa-image"></i>
          Subir Imagen
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
