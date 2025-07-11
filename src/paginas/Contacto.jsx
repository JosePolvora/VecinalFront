// const Contacto = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-3xl font-bold text-[#00527A] mb-6">CONTACTO</h1>

//       <div className="bg-[#e5eaf5]  ">


//         {/* Contenedor flex para mapa y formulario */}
//         <div className="flex flex-col md:flex-row md:space-x-8">

//           {/* Formulario a la izquierda */}
//           <div className="md:w-1/2 mb-8 md:mb-0 bg-white rounded-xl p-6 shadow-sm">

//             <h3 className="text-2xl font-semibold mb-10 text-[#00527A]">Formulario de contacto</h3>
//             <iframe
//               src="https://docs.google.com/forms/d/e/1FAIpQLSehO72uK-hryYtuzkjJoUMvEMy8oKxrSGxvojBVfmIKfYNwlA/viewform?embedded=true"
//               width="100%"
//               height="600"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               title="Formulario de contacto"
//               className="rounded-lg"
//               style={{ border: 'none', minHeight: '600px' }}
//             >
//               Cargando…
//             </iframe>
//           </div>

//           {/* Mapa a la derecha */}
//           <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm">

//             <h3 className="text-2xl font-semibold mb-10 text-[#00527A]">Información de contacto</h3>

//             <h4 className="font-semibold mb-5 text-xl text-gray-500">Centro Vecinal</h4>

//             <div className="mb-2">
//               <span className="font-semibold">Dirección: </span>
//               <span>Cajamarca , Córdoba, Capital, Argentina</span>
//             </div>

//             <div className="mb-2">
//               <span className="font-semibold">Código Postal: </span>
//               <span>5017</span>
//             </div>

//             <div className="mb-10">
//               <span className="font-semibold">Teléfonos: </span>
//               <span>351 xxxxxx / 351 xxxxxx (Centro Vecinal)</span>
//             </div>

//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5722.511066757937!2d-64.23827973768995!3d-31.479488266746365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a319f8adc519%3A0x9d05532c195f5f25!2sCentro%20Vecinal%20Barrio%20Santa%20Isabel%202!5e0!3m2!1ses!2sar!4v1751587855748!5m2!1ses!2sar"
//               width="100%"
//               height="320"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="Mapa - Centro Vecinal Barrio Santa Isabel 2"
//               className="rounded-lg"
//               style={{ border: 'none' }}
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contacto;

const Contacto = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#00527A] mb-6">CONTACTO</h1>

      <div className="bg-[#e5eaf5]">

        {/* Contenedor flex para mapa y formulario */}
        <div className="flex flex-col md:flex-row md:space-x-8">

          {/* Formulario a la izquierda */}
          <div className="md:w-1/2 mb-8 md:mb-0 bg-white rounded-xl p-6 shadow-sm">

            <h3 className="text-2xl font-semibold mb-10 text-[#00527A]">Formulario de contacto</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="apellido">Apellido</label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="correo">Correo electrónico</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#00527A] text-white px-6 py-2 rounded-lg hover:bg-[#003d5c] transition"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Mapa a la derecha */}
          <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-10 text-[#00527A]">Información de contacto</h3>

            <h4 className="font-semibold mb-5 text-xl text-gray-500">Centro Vecinal</h4>

            <div className="mb-2">
              <span className="font-semibold">Dirección: </span>
              <span>Cajamarca, Córdoba, Capital, Argentina</span>
            </div>

            <div className="mb-2">
              <span className="font-semibold">Código Postal: </span>
              <span>5017</span>
            </div>

            <div className="mb-10">
              <span className="font-semibold">Teléfonos: </span>
              <span>351 xxxxxx / 351 xxxxxx (Centro Vecinal)</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5722.511066757937!2d-64.23827973768995!3d-31.479488266746365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a319f8adc519%3A0x9d05532c195f5f25!2sCentro%20Vecinal%20Barrio%20Santa%20Isabel%202!5e0!3m2!1ses!2sar!4v1751587855748!5m2!1ses!2sar"
              width="100%"
              height="320"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa - Centro Vecinal Barrio Santa Isabel 2"
              className="rounded-lg"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
