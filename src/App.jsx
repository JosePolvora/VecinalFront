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
import SecAccionSocial from "./paginas/pageinstitucional/SecAccionSocial";
import SecCultura from "./paginas/pageinstitucional/SecCultura";
import SecDeporte from "./paginas/pageinstitucional/SecDeporte";
import SecObras from "./paginas/pageinstitucional/SecObras";
import SecGenero from "./paginas/pageinstitucional/SecGenero";
import Cuadrantes from "./paginas/pageinstitucional/Cuadrantes";
import Mascotas from "./paginas/Mascotas";
import MascotasDetalle from "./paginas/MascotasDetalle";
import FormMascota from "./paginas/FormMascota";

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
        <Route path="cuadrante" element={<Cuadrantes />} />
        <Route
          path="integrantes/secaccionsocial"
          element={<SecAccionSocial />}
        />
        <Route path="integrantes/seccultura" element={<SecCultura />} />
        <Route path="integrantes/secdeporte" element={<SecDeporte />} />

        <Route path="integrantes/secobras" element={<SecObras />} />
        <Route path="integrantes/secgenero" element={<SecGenero />} />

        <Route path="mascotas" element={<Mascotas />} />
        <Route path="/mascotas/:id" element={<MascotasDetalle />} />
        <Route path="/mascotas/formulario" element={<FormMascota />} />
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
