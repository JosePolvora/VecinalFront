// import { Link } from 'react-router-dom';
// import LogoCv from '../../imagenes/imgLogo/LogoCv.png';

// export default function Navbar() {
//     return (
//         // <header className="bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] text-white shadow-md">
//         //<header className="bg-gradient-to-b from-[#002c73] via-[#006a8e] to-[#66ffd9] text-white shadow-md">
//         <header id="inicio" className="bg-gradient-to-b from-[#002c73] via-[#0057b7] to-[#66ccff] text-white shadow-md">
//             <div className="container mx-auto px-4 py-1 flex items-center justify-between">
//                 <div className="flex items-center">

//                     <div className="flex flex-col text-center">
//                         <span className="text-lg font-montserrat font-bold uppercase" style={{ lineHeight: '1' }}>
//                             NUESTRO<br />BARRIO
//                         </span>

//                         <div
//                             className="w-full h-[2px] bg-white my-1 mx-auto"
//                             style={{
//                                 clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
//                             }}
//                         ></div>

//                         <span className="text-xs italic tracking-wide">Santa Isabel 2</span>
//                     </div>

//                     <img
//                         src={LogoCv}
//                         alt="Logo"
//                         className="h-24 w-auto"
//                     />
//                 </div>

//                 <nav className="space-x-6 text-base font-semibold uppercase">
//                     <Link to="/" className="hover:underline">Inicio</Link>
//                     <Link to="/institucional" className="hover:underline">Institucional</Link>
//                     {/* <Link to="/digital" className="hover:underline">Santa Isabel Digital</Link> */}
//                     <Link to="/novedades" className="hover:underline">Novedades</Link>
//                     <Link to="/contacto" className="hover:underline">Contacto</Link>
//                 </nav>
//             </div>
//         </header>
//     );
// }


import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LogoCv from '../../imagenes/imgLogo/LogoCv.png';

export default function Navbar() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header
            id="inicio"
            className="bg-gradient-to-b from-[#002c73] via-[#0057b7] to-[#66ccff] text-white shadow-md"
        >
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                {/* Logo + Título */}
                <div className="flex items-center space-x-2">
                    <div className="flex flex-col text-center leading-tight">
                        <span className="text-sm sm:text-base md:text-lg font-montserrat font-bold uppercase">
                            NUESTRO<br />BARRIO
                        </span>
                        <div
                            className="w-full h-[2px] bg-white my-1 mx-auto"
                            style={{
                                clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
                            }}
                        ></div>
                        <span className="text-[10px] sm:text-xs italic tracking-wide">
                            Santa Isabel 2
                        </span>
                    </div>
                    <img
                        src={LogoCv}
                        alt="Logo"
                        className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
                    />
                </div>

                {/* Menú grande (desktop) */}
                <nav className="hidden md:flex space-x-6 text-sm sm:text-base font-semibold uppercase">
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <Link to="/institucional" className="hover:underline">Institucional</Link>
                    <Link to="/novedades" className="hover:underline">Novedades</Link>
                    <Link to="/contacto" className="hover:underline">Contacto</Link>
                </nav>

                {/* Botón menú hamburguesa (mobile) */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    {menuAbierto ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú desplegable (mobile) */}
            {menuAbierto && (
                <div className="md:hidden bg-[#002c73] px-4 py-3 space-y-3 text-sm font-semibold uppercase">
                    <Link to="/" className="block hover:underline" onClick={() => setMenuAbierto(false)}>Inicio</Link>
                    <Link to="/institucional" className="block hover:underline" onClick={() => setMenuAbierto(false)}>Institucional</Link>
                    <Link to="/novedades" className="block hover:underline" onClick={() => setMenuAbierto(false)}>Novedades</Link>
                    <Link to="/contacto" className="block hover:underline" onClick={() => setMenuAbierto(false)}>Contacto</Link>
                </div>
            )}
        </header>
    );
}
