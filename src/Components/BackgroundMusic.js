import React, { useEffect, useRef } from 'react';

const BackgroundMusic = ({ src }) => {
    const audioRef = useRef(null);

    useEffect(() => {
        const audioElement = audioRef.current;
        audioElement.volume = 0.8; // Ajusta el volumen según sea necesario
        audioElement.play();
    }, []);

    return (
        <audio ref={audioRef} src={src} loop autoPlay />
    );
};

export default BackgroundMusic;