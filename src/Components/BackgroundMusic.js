import React, { useEffect, useRef } from 'react';
import miku from "../sounds/miku.mp3";
const BackgroundMusic = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [play]); // Ejecuta el efecto cada vez que play cambia

  return (
    <audio ref={audioRef} loop>
      <source src={miku} type="audio/mp3" />
      Tu navegador no soporta la reproducción de audio.
    </audio>
  );
};

export default BackgroundMusic;