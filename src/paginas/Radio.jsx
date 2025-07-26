// import React from 'react';
// import { FaBroadcastTower } from 'react-icons/fa';

// const Radio = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
//         <div className="flex justify-center mb-4 text-orange-500 text-5xl">
//           <FaBroadcastTower />
//         </div>
//         <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Radio Nuestro Barrio</h2>
//         <p className="text-gray-600 mb-6">🎶 Transmitiendo en vivo desde Córdoba</p>
//         <audio
//           controls
//           className="w-full rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
//         >
//           <source src="https://01.solumedia.com.ar:8020/stream" type="audio/mpeg" />
//           Tu navegador no soporta el reproductor de audio.
//         </audio>
//       </div>
//     </div>
//   );
// };

// export default Radio;



import { useNavigate } from 'react-router-dom';
import { FaBroadcastTower } from 'react-icons/fa';

const Radio = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="bg-gradient-to-b from-[#002c73] via-[#004c99] to-[#66a3ff] w-full max-w-3xl text-white p-8 sm:p-12 text-center rounded-2xl space-y-6 shadow-xl">


                <div className="flex justify-center text-5xl text-white mb-4">
                    <FaBroadcastTower />
                </div>

                <h2 className="text-3xl font-bold">RADIO NUESTRO BARRIO</h2>
                <p className="text-white/80">📻 Transmitiendo en vivo desde Córdoba</p>

                <audio
                    controls
                    className="w-full rounded-full border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
                >
                    <source src="https://01.solumedia.com.ar:8020/stream" type="audio/mpeg" />
                    Tu navegador no soporta el reproductor de audio.
                </audio>
            </div>
        </div>
    );
};

export default Radio;

