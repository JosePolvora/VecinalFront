import { Routes, Route, useNavigate } from "react-router-dom";
import FormNovedad from "../componentes/admin/FormNovedad";
import FormSubirImagen from "../componentes/admin/FormSubirImagen";
import AdminHeader from "../componentes/admin/AdminHeader";
import AdminSidebar from "../componentes/admin/AdminSidebar";
import AdminInicio from "../componentes/admin/AdminInicio";
import FormSubirRevista from "../componentes/admin/FormSubirRevista";
import Imagenes from "../componentes/admin/Imagenes";
import Novedades from "../componentes/admin/Novedades";

const AdminPanel = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Cerrando sesión...");
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        navigate("/"); // Redirige al inicio
    };

    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                {/* Le pasamos la función de logout como prop */}
                <AdminHeader onLogout={handleLogout} />
                <main className="p-6 bg-gray-100 flex-grow">
                    <Routes>
                        <Route path="" element={<AdminInicio />} /> {/* ruta inicial */}
                        <Route path="formnovedad" element={<FormNovedad />} />
                        <Route path="formimagen" element={<FormSubirImagen />} />
                        <Route path="formrevista" element={<FormSubirRevista />} />

                        <Route path="imagenes" element={<Imagenes />} />
                        <Route path="novedades" element={<Novedades />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
