import React, { useEffect, useState } from "react";
import "../styles/revistaViewerStyles.css";

const RevistaViewer = ({ revista }) => {
  const [paginas, setPaginas] = useState([]);
  const [paginaActual, setPaginaActual] = useState(0);
  const [fade, setFade] = useState(true); // para animar

  const verificarImagenes = async (urls) => {
    const verificadas = await Promise.all(
      urls.map(
        (url) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
            img.onerror = () => resolve(null);
          })
      )
    );
    return verificadas.filter((url) => url !== null);
  };

  useEffect(() => {
    if (revista && revista.paginas_carpeta) {
      const baseUrl = `http://localhost:3000${revista.paginas_carpeta}`;
      const urls = [];
      for (let i = 1; i <= 30; i++) {
        urls.push(`${baseUrl}/pagina-${String(i).padStart(2, "0")}.jpg`);
      }
      verificarImagenes(urls).then((validas) => {
        setPaginas(validas);
        setPaginaActual(0);
      });
    }
  }, [revista]);

  if (!revista || paginas.length === 0) return null;

  const cambiarPagina = (nuevaPagina) => {
    setFade(false);
    setTimeout(() => {
      setPaginaActual(nuevaPagina);
      setFade(true);
    }, 300); // duración de la animación
  };

  const siguiente = () => {
    if (paginaActual < paginas.length - 1) {
      cambiarPagina(paginaActual + 1);
    }
  };

  const anterior = () => {
    if (paginaActual > 0) {
      cambiarPagina(paginaActual - 1);
    }
  };

  return (
    <div className="revista-fullscreen">
      <button
        onClick={anterior}
        className="revista-flecha izquierda"
        disabled={paginaActual === 0}
        aria-label="Página anterior"
      >
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </button>

      <div className={`revista-pagina-sola ${fade ? "fade-in" : "fade-out"}`}>
        <img
          src={paginas[paginaActual]}
          alt={`Página ${paginaActual + 1}`}
        />
      </div>

      <button
        onClick={siguiente}
        className="revista-flecha derecha"
        disabled={paginaActual >= paginas.length - 1}
        aria-label="Página siguiente"
      >
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default RevistaViewer;
