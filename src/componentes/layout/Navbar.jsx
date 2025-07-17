import { Link } from 'react-router-dom';
import LogoCv from '../../imagenes/LogoCv.png';

export default function Navbar() {
    return (
        <header className="bg-gradient-to-b from-[#002c73] via-[#5e267b] to-[#e70063] text-white shadow-md">
            <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                <div className="flex items-center">

                    <div className="flex flex-col text-center">
                        <span className="text-lg font-montserrat font-bold uppercase" style={{ lineHeight: '1' }}>
                            NUESTRO<br />BARRIO
                        </span>

                        <div
                            className="w-full h-[2px] bg-white my-1 mx-auto"
                            style={{
                                clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
                            }}
                        ></div>

                        <span className="text-xs italic tracking-wide">Santa Isabel 2</span>
                    </div>

                    <img
                        src={LogoCv}
                        alt="Logo"
                        className="h-24 w-auto"
                    />
                </div>

                <nav className="space-x-6 text-base font-semibold uppercase">
                    <Link to="/" className="hover:underline">Inicio</Link>
                    <Link to="/institucional" className="hover:underline">Institucional</Link>
                    {/* <Link to="/digital" className="hover:underline">Santa Isabel Digital</Link> */}
                    <Link to="/novedades" className="hover:underline">Novedades</Link>
                    <Link to="/contacto" className="hover:underline">Contacto</Link>
                </nav>
            </div>
        </header>
    );
}
