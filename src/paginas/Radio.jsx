import { useNavigate } from "react-router-dom";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useRef, useState } from "react";

const Radio = () => {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const barsCount = 20;

  return (
    <div className="flex justify-center pt-2">
      <div className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] backdrop-blur-lg rounded-3xl p-3 max-w-xl w-full text-white text-center shadow-2xl space-y-6">
        <div className="flex justify-center">
          <img
            src="/src/imagenes/parlante.png"
            alt="Parlante"
            className="w-56 h-56 object-contain drop-shadow-xl animate-pulse"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">RADIO NUESTRO BARRIO</h2>
          <p className="text-white/70 italic">En vivo desde Córdoba</p>
        </div>

        <audio
          ref={audioRef}
          src="https://frontend.radiohdvivo.com/los40/live"
          type="audio/mpeg"
          preload="none"
        />

        <div className="flex justify-between items-end gap-1 h-24 mt-6 w-full max-w-full px-4">
          {[...Array(barsCount)].map((_, i) => (
            <div
              key={i}
              className={`rounded-sm ${isPlaying ? "animate-bounce" : ""}`}
              style={{
                width: "4%",
                background: `linear-gradient(to top, rgb(191,2,0), rgb(59,130,246))`,
                animationDelay: isPlaying ? `${i * 0.1}s` : "0s",
                height: `${20 + Math.random() * 60}px`,
              }}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={togglePlay}
            className="w-16 h-16 border-4 border-gray-500/90 rounded-full bg-[rgb(191,2,0)] hover:bg-[rgb(160,0,0)] text-white shadow-lg flex items-center justify-center transition-all duration-300"
          >
            {isPlaying ? (
              <FaPause className="text-2xl" />
            ) : (
              <FaPlay className="text-2xl" />
            )}
          </button>
        </div>

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gray-700/60 hover:bg-gray-600 text-white shadow-lg flex items-center justify-center transition-all duration-300"
          aria-label="Mute"
        >
          {isMuted ? (
            <FaVolumeMute className="text-lg" />
          ) : (
            <FaVolumeUp className="text-lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Radio;
