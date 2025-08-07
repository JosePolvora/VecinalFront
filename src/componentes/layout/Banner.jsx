import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/banners/all");
        if (res.status === 200 && res.data.body) {
          // Filtramos los que NO son 'auspiciantes'
          const principales = res.data.body.filter(
            (b) => !b.tipo || b.tipo.toLowerCase() !== "auspiciantes"
          );
          setBanners(principales);
        }
      } catch (error) {
        console.error("Error al cargar banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return <div>Cargando banners...</div>;
  }

  if (banners.length === 0) {
    return <div>No hay banners para mostrar</div>;
  }

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[100vw] h-64 sm:h-80 xl:h-96 2xl:h-[30rem] -mt-6">
      <Carousel pauseOnHover>
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={`http://localhost:3000${banner.imagen_url}`}
            alt={banner.descripcion || "Banner"}
            className="w-full h-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
