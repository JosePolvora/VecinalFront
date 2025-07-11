import { Routes, Route } from "react-router-dom";
import FormNovedad from "../componentes/admin/FormNovedad";
import FormSubirImagen from "../componentes/admin/FormSubirImagen";
import AdminHeader from "../componentes/admin/AdminHeader";
import AdminSidebar from "../componentes/admin/AdminSidebar";
import AdminInicio from "../componentes/admin/AdminInicio";

const AdminPanel = () => {
    return (
        <div className="flex min-h-screen">
            <AdminSidebar />
            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <main className="p-6 bg-gray-100 flex-grow">
                    <Routes>
                        <Route path="" element={<AdminInicio />} /> {/* ruta inicial */}
                        <Route path="formnovedad" element={<FormNovedad />} />
                        <Route path="formimagen" element={<FormSubirImagen />} />

                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default AdminPanel;
