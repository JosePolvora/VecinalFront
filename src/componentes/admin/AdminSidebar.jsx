// import { Link } from "react-router-dom";


// const AdminSidebar = () => {
//   return (
//     <aside className="w-64 bg-[#002c73] text-white min-h-screen p-6 space-y-6">
//       <h2 className="text-2xl font-bold">MENÚ</h2>

//       {/* Enlace al sitio público */}
//       <Link to="" className="flex items-center gap-2 text-sm text-white/80 hover:underline">
//         <i className="fas fa-home"></i>
//         Volver al inicio
//       </Link>

//       <nav className="space-y-3 pt-4 border-t border-white/20">

//         <Link to="/adminpanel/formnovedad" className="flex items-center gap-2 hover:underline">
//           <i className="fas fa-bullhorn"></i>
//           Crear Novedad
//         </Link>
//         <Link to="/adminpanel/novedades" className="flex items-center gap-2 hover:underline">
//           <i className="fas fa-bullhorn"></i>
//           Gestor Novedad
//         </Link>


//         <Link to="/adminpanel/formimagen" className="flex items-center gap-2 hover:underline">
//           <i className="fas fa-image"></i>
//           Subir Imagen
//         </Link>
//         <Link to="/adminpanel/imagenes" className="flex items-center gap-2 hover:underline">
//           <i className="fas fa-image"></i>
//           Gestor Imagen
//         </Link>

//         <Link to="/adminpanel/formrevista" className="flex items-center gap-2 hover:underline">
//           <i className="fas fa-file-pdf"></i>
//           Subir Revista
//         </Link>




//       </nav>
//     </aside>
//   );
// };

// export default AdminSidebar;


import { Link } from "react-router-dom";
import { useState } from "react";

const AdminSidebar = () => {
  const [openNovedades, setOpenNovedades] = useState(false);
  const [openImagenes, setOpenImagenes] = useState(false);
  const [openRevistas, setOpenRevistas] = useState(false);

  return (
    <aside className="w-64 bg-[#002c73] text-white min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold">MENÚ</h2>

      <Link to="/" className="flex items-center gap-2 text-sm text-white/80 hover:underline">
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
              Administrador de Novedades
            </span>
            <i className={`fas fa-chevron-${openNovedades ? "up" : "down"}`}></i>
          </button>

          {openNovedades && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link to="/adminpanel/formnovedad" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-plus-circle"></i>
                Crear Novedad
              </Link>
              <Link to="/adminpanel/novedades" className="flex items-center gap-2 hover:underline">
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
              Administrador de Imágenes
            </span>
            <i className={`fas fa-chevron-${openImagenes ? "up" : "down"}`}></i>
          </button>

          {openImagenes && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link to="/adminpanel/formimagen" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-upload"></i>
                Subir Imagen
              </Link>
              <Link to="/adminpanel/imagenes" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-folder-open"></i>
                Gestor Imagen
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
              Administrador de Revistas
            </span>
            <i className={`fas fa-chevron-${openRevistas ? "up" : "down"}`}></i>
          </button>

          {openRevistas && (
            <div className="ml-5 mt-2 space-y-1 text-sm">
              <Link to="/adminpanel/formrevista" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-upload"></i>
                Subir Revista
              </Link>
              <Link to="/adminpanel/revistas" className="flex items-center gap-2 hover:underline">
                <i className="fas fa-folder-open"></i>
                Gestor Revista
              </Link>
            </div>
          )}
        </div>

      </nav>
    </aside>
  );
};

export default AdminSidebar;
