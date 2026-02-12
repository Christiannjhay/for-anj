"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [volume, setVolume] = useState(0.1); // default 10%
    const [muted, setMuted] = useState(true); // start muted
  
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
      
        audioRef.current.play().catch(() => {
          // Autoplay might fail; handled silently
        });
      }
    }, [volume, muted]);

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h1 className="text-xl font-bold hidden">Now Playing: Teddy Adhitya - Just You</h1>
      <audio className="" ref={audioRef} controls loop>
        <source src="/audio/Teddy Adhitya - Just You.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Volume Slider */}
      <div className="flex items-center justify-center space-x-2">
        <label htmlFor="volume" className="font-medium text-white">
          Volume:
        </label>
        <input
          id="volume"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          className="text-white"
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
        <span className="text-white">{Math.round(volume * 100)}%</span>
      </div>
    </div>
  );
}
