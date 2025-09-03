import { Link } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = () => {
  const [openNovedades, setOpenNovedades] = useState(false);
  const [openImagenes, setOpenImagenes] = useState(false);
  const [openBanners, setOpenBanners] = useState(false);
  const [openRevistas, setOpenRevistas] = useState(false);
  const [openReclamos, setOpenReclamos] = useState(false);

  const [openMascotasGestor, setOpenMascotasGestor] = useState(false);

  return (
    <aside className="w-64 bg-[#002c73] text-white min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold">MENÚ</h2>

      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-white/80 hover:underline"
      >
        <i className="fas fa-home"></i>
        Volver al inicio
      </Link>

      <nav className="space-y-6 pt-4 border-t border-white/20">
        {/* NOVEDADES */}
        <div>
          <button
            onClick={() => setOpenNovedades(!openNovedades)}
            className="w-full flex items-center justify-between font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-bullhorn"></i>
              Novedades
            </span>
            <i
              className={`fas fa-chevron-${openNovedades ? "up" : "down"}`}
            ></i>
          </button>

          {openNovedades && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link
                to="/adminpanel/formnovedad"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-plus-circle"></i>
                Crear Novedad
              </Link>
              <Link
                to="/adminpanel/novedades"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-tasks"></i>
                Gestor Novedad
              </Link>
            </div>
          )}
        </div>

        {/* IMÁGENES */}
        <div>
          <button
            onClick={() => setOpenImagenes(!openImagenes)}
            className="w-full flex items-center justify-between font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-image"></i>
              Imágenes
            </span>
            <i className={`fas fa-chevron-${openImagenes ? "up" : "down"}`}></i>
          </button>

          {openImagenes && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link
                to="/adminpanel/formimagen"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-upload"></i>
                Subir Imagen
              </Link>
              <Link
                to="/adminpanel/imagenes"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-folder-open"></i>
                Gestor Imagen
              </Link>
            </div>
          )}
        </div>

        {/* BANNERS */}
        <div>
          <button
            onClick={() => setOpenBanners(!openBanners)}
            className="w-full flex items-center justify-between font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-flag"></i>{" "}
              {/* O cualquier ícono que prefieras */}
              Banners
            </span>
            <i className={`fas fa-chevron-${openBanners ? "up" : "down"}`}></i>
          </button>

          {openBanners && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link
                to="/adminpanel/formbanner"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-upload"></i>
                Subir Banner
              </Link>
              <Link
                to="/adminpanel/banners"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-folder-open"></i>
                Gestor Banners
              </Link>
            </div>
          )}
        </div>

        {/* REVISTAS */}
        <div>
          <button
            onClick={() => setOpenRevistas(!openRevistas)}
            className="w-full flex items-center justify-between font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-book"></i>
              Revistas
            </span>
            <i className={`fas fa-chevron-${openRevistas ? "up" : "down"}`}></i>
          </button>

          {openRevistas && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link
                to="/adminpanel/formrevista"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-upload"></i>
                Subir Revista
              </Link>

              <Link
                to="/adminpanel/revistas"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-folder-open"></i>
                Gestor Revistas
              </Link>
            </div>
          )}
        </div>

        {/* RECLAMOS */}
        <div>
          <button
            onClick={() => setOpenReclamos(!openReclamos)}
            className="w-full flex items-center justify-between font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-exclamation-circle"></i>
              Reclamos
            </span>
            <i className={`fas fa-chevron-${openReclamos ? "up" : "down"}`}></i>
          </button>

          {openReclamos && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link
                to="/adminpanel/reclamos/lista"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-edit"></i>
                Modificar Estado Reclamo
              </Link>
            </div>
          )}
        </div>

        {/* MASCOTAS */}
        <div>
          <button
            onClick={() => setOpenMascotasGestor(!openMascotasGestor)}
            className="w-full flex items-center justify-between font-semibold hover:underline"
          >
            <span className="flex items-center gap-2">
              <i className="fas fa-paw"></i>
              Mascotas
            </span>
            <i
              className={`fas fa-chevron-${openMascotasGestor ? "up" : "down"}`}
            ></i>
          </button>

          {openMascotasGestor && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link
                to="/adminpanel/mascotas/gestor"
                className="flex items-center gap-2 hover:underline"
              >
                <i className="fas fa-edit"></i>
                Gestor Mascotas
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
