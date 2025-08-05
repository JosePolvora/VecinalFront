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
import RevistasLista from "./paginas/RevistasLista";
import RevistaDetalle from "./paginas/RevistaDetalle";
import Login from "./paginas/Login";
import Registro from "./paginas/Registro";
import PrivateRoute from "./componentes/admin/PrivateRoute";
import ConsultaReclamo from "./paginas/ConsultaReclamo";
import ReclamosHistorial from "./paginas/ReclamosHistorial";
import Radio from "./paginas/Radio";

import SecCultura from "./paginas/pageinstitucional/SecCultura";
import SecDeporte from "./paginas/pageinstitucional/SecDeporte";
import SecInfraestructura from "./paginas/pageinstitucional/SecInfraestructura";
import SecComunicacion from "./paginas/pageinstitucional/SecCominicacion";
import SecJuventud from "./paginas/pageinstitucional/SecJuventud";
import SecSeguridad from "./paginas/pageinstitucional/SecSeguridad";

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
        <Route path="/reclamos/consulta" element={<ConsultaReclamo />} />
        <Route path="reclamos/historial" element={<ReclamosHistorial />} />
        <Route path="/revistas" element={<RevistasLista />} />
        <Route path="/revistas/:id" element={<RevistaDetalle />} />
        <Route path="/camara/vivo" element={<CamaraVivo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="radio" element={<Radio />} />

        <Route path="integrantes/seccultura" element={<SecCultura />} />
        <Route path="integrantes/secdeporte" element={<SecDeporte />} />
        <Route
          path="integrantes/seccomunicacion"
          element={<SecComunicacion />}
        />
        <Route
          path="integrantes/secinfraestructura"
          element={<SecInfraestructura />}
        />
        <Route path="integrantes/secjuventud" element={<SecJuventud />} />
        <Route path="integrantes/secseguridad" element={<SecSeguridad />} />
      </Route>

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
