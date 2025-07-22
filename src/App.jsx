import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "./componentes/layout/PublicLayout";
import Inicio from "./paginas/Inicio";
import Institucional from "./paginas/Institucional";
import Novedades from "./paginas/Novedades";
import NovedadDetalle from "./paginas/NovedadDetalle";
import Contacto from "./paginas/Contacto";
import AdminPanel from "./paginas/AdminPanel";
import FormularioReclamos from "./paginas/FormularioReclamos";
import CamaraVivo from "./paginas/CamaraVivo";

import RevistasLista from "./paginas/RevistasLista"; // <--- nueva lista
import RevistaDetalle from "./paginas/RevistaDetalle";
import Login from "./paginas/Login";

import PrivateRoute from './componentes/admin/PrivateRoute';
import ConsultaReclamo from "./paginas/ConsultaReclamo";
import ReclamosHistorial from "./paginas/ReclamosHistorial";
//import ConsejosHogar from "./paginas/ConsejosHogar";


function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/novedades/:id" element={<NovedadDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reclamos" element={<FormularioReclamos />} />
        <Route path="/revistas" element={<RevistasLista />} />  {/* Lista revistas */}
        <Route path="/revistas/:id" element={<RevistaDetalle />} /> {/* Detalle revista */}
        <Route path="/camara/vivo" element={<CamaraVivo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reclamos/consulta" element={<ConsultaReclamo />} />
        <Route path="reclamos/historial" element={<ReclamosHistorial />} />
        {/* <Route path="/consejos/hogar" element={<ConsejosHogar />} /> */}
      </Route>

      {/* <Route path="/adminpanel/*" element={<AdminPanel />} /> */}

      <Route
        path="/adminpanel/*"
        element={
          <PrivateRoute>
            <AdminPanel />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
