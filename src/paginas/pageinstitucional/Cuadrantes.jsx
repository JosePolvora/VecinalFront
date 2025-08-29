import mapa from "../../imagenes/cuadrante.png";

const coordinadores = [
  { id: 1, nombre: "Raúl Mansilla", foto: "https://via.placeholder.com/150" },
  { id: 2, nombre: "Luis Miranda", foto: "https://via.placeholder.com/150" },
  { id: 3, nombre: "Jorge Guzmán", foto: "https://via.placeholder.com/150" },
  { id: 4, nombre: "Jazmín Ruiz", foto: "https://via.placeholder.com/150" },
  { id: 5, nombre: "Berta Loyola", foto: "https://via.placeholder.com/150" },
  { id: 6, nombre: "Mariel García", foto: "https://via.placeholder.com/150" },
  { id: 7, nombre: "Matías Valor", foto: "https://via.placeholder.com/150" },
  { id: 8, nombre: "Guadalupe Freite", foto: "https://via.placeholder.com/150" },
  { id: 9, nombre: "Daniel Tello", foto: "https://via.placeholder.com/150" },
  { id: 10, nombre: "José Herrera", foto: "https://via.placeholder.com/150" },
  { id: 11, nombre: "Ángel Rodriguez", foto: "https://via.placeholder.com/150" },
  { id: 12, nombre: "Sabrina Montoya", foto: "https://via.placeholder.com/150" },
  { id: 13, nombre: "Claudia Barraza", foto: "https://via.placeholder.com/150" },
];

const Cuadrantes = () => {
  return (
    <section className="px-4 py-8 sm:py-12 bg-gray-100">
      <h1 className="text-xl sm:text-3xl font-bold text-[#00527A] mb-6 ml-2 sm:ml-10 font-sans">
        INFORMACIÓN DE CUADRANTES
      </h1>

      <p className="m-8 text-gray-700 text-base sm:text-lg leading-loose text-justify font-sans font-semibold pb-10">
        Para organizar mejor nuestro barrio y garantizar que todos los vecinos
        puedan ser atendidos de manera eficiente, hemos dividido la zona en
        cuadrantes. Cada cuadrante tiene un coordinador responsable que facilita
        la comunicación entre los vecinos y la comisión directiva, asegurando
        que cada necesidad y propuesta sea escuchada y atendida rápidamente.
      </p>

      {/* Mapa del barrio */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <img
          src={mapa}
          alt="Mapa del barrio"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Tarjeta blanca con coordinadores */}
      <div className="max-w-screen-xl mx-auto bg-white rounded-xl p-5 sm:p-10 space-y-8 shadow-md">
        <h2 className="font-semibold text-[#00527A] text-xl sm:text-2xl mb-6 text-center">
          Coordinadores de Cuadrantes
        </h2>

        <div className="w-full flex flex-col gap-8">
          {/* Fila 1 → 3 coordinadores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coordinadores.slice(0, 3).map((coord) => (
              <Card key={coord.id} coord={coord} span="col-span-1" />
            ))}
          </div>

          {/* Fila 2 → 3 coordinadores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coordinadores.slice(3, 6).map((coord) => (
              <Card key={coord.id} coord={coord} span="col-span-1" />
            ))}
          </div>

          {/* Fila 3 → 3 coordinadores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coordinadores.slice(6, 9).map((coord) => (
              <Card key={coord.id} coord={coord} span="col-span-1" />
            ))}
          </div>

          {/* Fila 4 → 4 coordinadores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {coordinadores.slice(9, 13).map((coord) => (
              <Card key={coord.id} coord={coord} span="col-span-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ coord, span }) => (
  <div
    className={`${span} bg-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition`}
  >
    <img
      src={coord.foto}
      alt={coord.nombre}
      className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-gray-300"
    />
    <h3 className="text-lg font-semibold">{coord.nombre}</h3>
    <p className="text-sm text-gray-600">
      Coordinador del cuadrante {coord.id}
    </p>
  </div>
);

export default Cuadrantes;
