// import { Link } from "react-router-dom";
// import LogoCvB from "../../imagenes/imgLogo/LogoCvB.png";

// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-t from-[#002c73] via-[#426ab3] to-[#e5eaf5]">
//       <div className="max-w-screen-xl mx-auto px-5">
//         <div className="border-t-2 border-t-[#002c73] pt-5">
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10">
//             <div className="flex items-center">
//               {/* Contenedor de los textos uno arriba del otro */}
//               <div className="flex flex-col text-center">
//                 <span
//                   className="text-lg font-montserrat font-bold uppercase text-white"
//                   style={{ lineHeight: "1" }}
//                 >
//                   NUESTRO
//                   <br />
//                   BARRIO
//                 </span>

//                 <div
//                   className="w-full h-[2px] bg-white my-1 mx-auto"
//                   style={{
//                     clipPath:
//                       "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
//                   }}
//                 ></div>

//                 <span className="text-xs italic tracking-wide text-white">
//                   Santa Isabel 2
//                 </span>
//               </div>

//               <img src={LogoCvB} alt="Logo" className="h-24 w-auto" />
//             </div>

//             <div className="flex justify-end items-center gap-5 text-2xl">
//               <a
//                 href="https://www.facebook.com/"
//                 title="Facebook"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-[#002c73] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://www.instagram.com/nuestrobarriolista21/?igsh=cWVvNnZodTh3c3dh#"
//                 title="Instagram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-[#002c73] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://x.com/"
//                 title="X / Twitter"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-[#002c73] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
//               >
//                 <FaXTwitter />
//               </a>
//             </div>
//           </div>

//           <div className="text-white font-semibold text-sm flex flex-col sm:flex-row justify-center items-center gap-5 pb-10">
//             <a href="http://localhost:5173" className="hover:text-gray-300 transition-colors">
//               Inicio
//             </a>

//             <Link
//               to="/institucional"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Institucional
//             </Link>

//             <Link
//               to="/novedades"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Novedades
//             </Link>

//             <Link
//               to="/contacto"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Contacto
//             </Link>

//             <Link
//               to={localStorage.getItem("token") ? "/adminpanel" : "/login"}
//               className="hover:text-gray-300 transition-colors font-bold underline"
//             >
//               Admin
//             </Link>
//           </div>

//           <div className="text-center pb-10 text-xs text-white font-semibold">
//             © {new Date().getFullYear()} José Oviedo - Nuestro Barrio
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import { Link } from "react-router-dom";
// import LogoCvB from "../../imagenes/imgLogo/LogoCvB.png";
// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-t from-[#002c73] via-[#426ab3] to-[#e5eaf5]">
//       <div className="max-w-screen-xl mx-auto px-5">
//         <div className="border-t-2 border-t-[#002c73] pt-5">
//           {/* Logo + Redes */}
//           <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 gap-6">
//             {/* Logo + Texto */}
//             <div className="flex items-center">
//               <div className="flex flex-col text-center">
//                 <span
//                   className="text-lg font-montserrat font-bold uppercase text-white leading-tight"
//                 >
//                   NUESTRO
//                   <br />
//                   BARRIO
//                 </span>

//                 <div
//                   className="w-full h-[2px] bg-white my-1 mx-auto"
//                   style={{
//                     clipPath:
//                       "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
//                   }}
//                 ></div>

//                 <span className="text-xs italic tracking-wide text-white">
//                   Santa Isabel 2
//                 </span>
//               </div>

//               <img
//                 src={LogoCvB}
//                 alt="Logo"
//                 className="h-16 sm:h-20 md:h-24 w-auto"
//               />
//             </div>

//             {/* Redes sociales */}
//             <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-5 text-xl sm:text-2xl">
//               <a
//                 href="https://www.facebook.com/"
//                 title="Facebook"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-[#002c73] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="https://www.instagram.com/nuestrobarriolista21/?igsh=cWVvNnZodTh3c3dh#"
//                 title="Instagram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-[#002c73] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://x.com/"
//                 title="X / Twitter"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-[#002c73] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
//               >
//                 <FaXTwitter />
//               </a>
//             </div>
//           </div>

//           {/* Menú de enlaces */}
//           <div className="text-white font-semibold text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 pb-8">
//             <a
//               href="/"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Inicio
//             </a>

//             <Link
//               to="/institucional"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Institucional
//             </Link>

//             <Link
//               to="/novedades"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Novedades
//             </Link>

//             <Link
//               to="/contacto"
//               className="hover:text-gray-300 transition-colors"
//             >
//               Contacto
//             </Link>

//             <Link
//               to={localStorage.getItem("token") ? "/adminpanel" : "/login"}
//               className="hover:text-gray-300 transition-colors font-bold underline"
//             >
//               Admin
//             </Link>
//           </div>

//           {/* Derechos reservados */}
//           <div className="text-center pb-6 text-[10px] sm:text-xs text-white font-semibold">
//             © {new Date().getFullYear()} José Oviedo - Nuestro Barrio
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";
import LogoCvB from "../../imagenes/imgLogo/LogoCvB.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#002c73] via-[#426ab3] to-[#e5eaf5]">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="border-t-2 border-t-[#002c73] pt-5">
          
          {/* Logo + Redes */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 gap-6">
            
            {/* Logo + Texto (solo en pantallas medianas en adelante) */}
            <div className="hidden md:flex items-center">
              <div className="flex flex-col text-center">
                <span
                  className="text-lg font-montserrat font-bold uppercase text-white leading-tight"
                >
                  NUESTRO
                  <br />
                  BARRIO
                </span>

                <div
                  className="w-full h-[2px] bg-white my-1 mx-auto"
                  style={{
                    clipPath:
                      "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
                  }}
                ></div>

                <span className="text-xs italic tracking-wide text-white">
                  Santa Isabel 2
                </span>
              </div>

              <img
                src={LogoCvB}
                alt="Logo"
                className="h-16 sm:h-20 md:h-24 w-auto"
              />
            </div>

            {/* Redes sociales */}
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-5 text-xl sm:text-2xl">
              <a
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#002c73] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/nuestrobarriolista21/?igsh=cWVvNnZodTh3c3dh#"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#002c73] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/"
                title="X / Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#002c73] w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Menú de enlaces */}
          <div className="text-white font-semibold text-xs sm:text-sm flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 pb-8">
            <a
              href="https://www.santaisabel2.com/"
              className="hover:text-gray-300 transition-colors"
            >
              Inicio
            </a>

            <Link
              to="/institucional"
              className="hover:text-gray-300 transition-colors"
            >
              Institucional
            </Link>

            <Link
              to="/novedades"
              className="hover:text-gray-300 transition-colors"
            >
              Novedades
            </Link>

            <Link
              to="/contacto"
              className="hover:text-gray-300 transition-colors"
            >
              Contacto
            </Link>

            <Link
              to={localStorage.getItem("token") ? "/adminpanel" : "/login"}
              className="hover:text-gray-300 transition-colors font-bold underline"
            >
              Admin
            </Link>
          </div>

          {/* Derechos reservados */}
          <div className="text-center pb-6 text-[10px] sm:text-xs text-white font-semibold">
            © {new Date().getFullYear()} José Oviedo - Nuestro Barrio
          </div>
        </div>
      </div>
    </footer>
  );
}
