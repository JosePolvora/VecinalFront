// import { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Contacto = () => {
//   const [formData, setFormData] = useState({
//     nombre: "",
//     apellido: "",
//     correo: "", // <-- cambiado de 'email' a 'correo'
//     mensaje: "",
//     celular: "",
//     mensaje_enviar: true,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const confirm = await Swal.fire({
//       title: "¿Estás seguro?",
//       text: "¿Deseas enviar este mensaje?",
//       icon: "question",
//       showCancelButton: true,
//       confirmButtonColor: "#00527A",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Sí, enviar",
//       cancelButtonText: "Cancelar",
//     });

//     if (confirm.isConfirmed) {
//       try {
//         await axios.post("http://localhost:3000/api/mensajes", formData);

//         Swal.fire({
//           icon: "success",
//           title: "Mensaje enviado",
//           text: "Tu mensaje fue enviado correctamente.",
//           confirmButtonColor: "#00527A",
//         });

//         setFormData({
//           nombre: "",
//           apellido: "",
//           correo: "",
//           mensaje: "",
//           celular: "",
//           mensaje_enviar: true,
//         });
//       } catch (error) {
//         console.error("Error al enviar el mensaje:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Ocurrió un error al enviar el mensaje. Intenta nuevamente.",
//           confirmButtonColor: "#00527A",
//         });
//       }
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-[#00527A] mb-6">CONTACTO</h1>
//       <div className="bg-[#e5eaf5]">
//         <div className="flex flex-col md:flex-row md:space-x-8">
//           <div className="md:w-1/2 mb-8 md:mb-0 bg-white rounded-xl p-6 shadow-sm">
//             <h3 className="text-2xl font-semibold mb-10 text-[#00527A]">
//               Formulario de contacto
//             </h3>

//             <form className="space-y-4" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-1">Nombre</label>
//                 <input
//                   type="text"
//                   id="nombre"
//                   name="nombre"
//                   value={formData.nombre}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="apellido" className="block text-gray-700 font-semibold mb-1">Apellido</label>
//                 <input
//                   type="text"
//                   id="apellido"
//                   name="apellido"
//                   value={formData.apellido}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="correo" className="block text-gray-700 font-semibold mb-1">Correo electrónico</label>
//                 <input
//                   type="email"
//                   id="correo"
//                   name="correo"
//                   value={formData.correo}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-1">Mensaje</label>
//                 <textarea
//                   id="mensaje"
//                   name="mensaje"
//                   rows="5"
//                   value={formData.mensaje}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[#00527A] text-white px-6 py-2 rounded-lg hover:bg-[#003d5c] transition"
//               >
//                 Enviar
//               </button>
//             </form>
//           </div>

//           {/* Mapa a la derecha */}
//           <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm">
//             <h3 className="text-2xl font-semibold mb-10 text-[#00527A]">Información de contacto</h3>

//             <h4 className="font-semibold mb-5 text-xl text-gray-500">Centro Vecinal</h4>
//             <div className="mb-2"><span className="font-semibold">Dirección: </span>Cajamarca 2200, Córdoba, Capital, Argentina</div>
//             <div className="mb-2"><span className="font-semibold">Código Postal: </span>5017</div>
//             <div className="mb-10"><span className="font-semibold">Teléfonos: </span>351 xxxxxx / 351 xxxxxx (Centro Vecinal)</div>

//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5722.511066757937!2d-64.23827973768995!3d-31.479488266746365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a319f8adc519%3A0x9d05532c195f5f25!2sCentro%20Vecinal%20Barrio%20Santa%20Isabel%202!5e0!3m2!1ses!2sar!4v1751587855748!5m2!1ses!2sar"
//               width="100%"
//               height="320"
//               allowFullScreen
//               loading="lazy"
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


import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
    celular: "",
    mensaje_enviar: true,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas enviar este mensaje?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#00527A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        await axios.post("http://localhost:3000/api/mensajes", formData);

        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Tu mensaje fue enviado correctamente.",
          confirmButtonColor: "#00527A",
        });

        setFormData({
          nombre: "",
          apellido: "",
          correo: "",
          mensaje: "",
          celular: "",
          mensaje_enviar: true,
        });
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al enviar el mensaje. Intenta nuevamente.",
          confirmButtonColor: "#00527A",
        });
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#00527A] mb-6 text-center sm:text-left">
        CONTACTO
      </h1>
      <div className="bg-[#e5eaf5] rounded-xl p-4 sm:p-8">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Formulario */}
          <div className="md:w-1/2 mb-8 md:mb-0 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-10 text-[#00527A] text-center md:text-left">
              Formulario de contacto
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                />
              </div>

              <div>
                <label
                  htmlFor="apellido"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                />
              </div>

              <div>
                <label
                  htmlFor="correo"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00527A]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#00527A] text-white px-6 py-2 rounded-lg hover:bg-[#003d5c] transition"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Mapa */}
          <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-10 text-[#00527A] text-center md:text-left">
              Información de contacto
            </h3>

            <h4 className="font-semibold mb-5 text-xl text-gray-500">
              Centro Vecinal
            </h4>
            <div className="mb-2">
              <span className="font-semibold">Dirección: </span>Cajamarca 2200,
              Córdoba, Capital, Argentina
            </div>
            <div className="mb-2">
              <span className="font-semibold">Código Postal: </span>5017
            </div>
            <div className="mb-10">
              <span className="font-semibold">Teléfonos: </span>351 xxxxxx / 351
              xxxxxx (Centro Vecinal)
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5722.511066757937!2d-64.23827973768995!3d-31.479488266746365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a319f8adc519%3A0x9d05532c195f5f25!2sCentro%20Vecinal%20Barrio%20Santa%20Isabel%202!5e0!3m2!1ses!2sar!4v1751587855748!5m2!1ses!2sar"
              width="100%"
              height="320"
              allowFullScreen
              loading="lazy"
              title="Mapa - Centro Vecinal Barrio Santa Isabel 2"
              className="rounded-lg"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
