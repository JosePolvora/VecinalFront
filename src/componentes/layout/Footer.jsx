import { Link } from 'react-router-dom';
import LogoCvB from "../../imagenes/LogoCvB.png";

import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (

        <footer className="bg-gradient-to-t from-[#002c73] via-[#426ab3] to-[#e5eaf5]">

            <div className="max-w-screen-xl mx-auto px-5">
                <div className="border-t-2 border-t-[#002c73] pt-5">
                    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10">
                        <div className="flex items-center">
                            {/* Contenedor de los textos uno arriba del otro */}
                            <div className="flex flex-col text-center">
                                <span
                                    className="text-lg font-montserrat font-bold uppercase text-white"
                                    style={{ lineHeight: '1' }}
                                >
                                    NUESTRO<br />BARRIO
                                </span>

                                <div
                                    className="w-full h-[2px] bg-white my-1 mx-auto"
                                    style={{
                                        clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)',
                                    }}
                                ></div>

                                <span className="text-xs italic tracking-wide text-white">Santa Isabel 2</span>
                            </div>

                            <img src={LogoCvB}
                                alt="Logo"
                                className="h-24 w-auto" />

                        </div>

                        <div className="flex justify-end items-center gap-5 text-2xl">
                            <a
                                href="https://www.facebook.com/"
                                title="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#002c73] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://www.instagram.com/nuestrobarriolista21/?igsh=cWVvNnZodTh3c3dh#"
                                title="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#002c73] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://x.com/"
                                title="X / Twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-[#002c73] w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                            >
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="text-white font-semibold text-sm flex flex-col sm:flex-row justify-center items-center gap-5 pb-10">
                        <Link to="/" className="hover:text-gray-300 transition-colors">
                            Inicio
                        </Link>
                        <Link to="/institucional" className="hover:text-gray-300 transition-colors">
                            Institucional
                        </Link>
                        {/* <Link to="/digital" className="hover:text-gray-300 transition-colors">
                            Santa Isabel Digital
                        </Link> */}
                        <Link to="/novedades" className="hover:text-gray-300 transition-colors">
                            Novedades
                        </Link>
                        <Link to="/contacto" className="hover:text-gray-300 transition-colors">
                            Contacto
                        </Link>
                    </div>

                    <div className="text-center pb-10 text-xs text-white font-semibold">
                        © {new Date().getFullYear()} Nuestro Barrio - Santa Isabel 2
                    </div>
                </div>
            </div>
        </footer>
    );
}
