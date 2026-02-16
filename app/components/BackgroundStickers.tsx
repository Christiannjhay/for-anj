"use client";

import Image from "next/image";
import { useMemo } from "react";

const stickerImages = [
    "/background-stickers/sticker_1.png",
    "/background-stickers/sticker_3.png",
    "/background-stickers/sticker_4.png",
    "/background-stickers/sticker_9.png",
    "/background-stickers/sticker_10.png",
    "/background-stickers/sticker_15.png",
    "/background-stickers/sticker_18.png",
    "/background-stickers/sticker_26.png",
    "/background-stickers/sticker_28.png",
    "/background-stickers/sticker_29.png",
    "/background-stickers/sticker_30.png",

];

export default function BackgroundStickers() {
    const stickers = useMemo(() => {
        // Shuffle stickers array so all are used once
        const shuffled = [...stickerImages].sort(() => Math.random() - 0.5);
    
        const cols = 4; // number of columns
        const rows = Math.ceil(shuffled.length / cols);
    
        const maxWidthPercent = 100;  // use full width
        const maxHeightPercent = 100; // use full height
    
        return shuffled.map((image, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
    
          const leftPercent =
            (col / cols) * maxWidthPercent +
            Math.random() * (maxWidthPercent / cols - 10); // small random offset
    
          const topPercent =
            (row / rows) * maxHeightPercent +
            Math.random() * (maxHeightPercent / rows - 10);
    
          const rotate = Math.random() * 360;
    
          return {
            image,
            top: topPercent,
            left: leftPercent,
            rotate,
          };
        });
      }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      {stickers.map((sticker, i) => (
        <Image
          key={i}
          src={sticker.image}
          alt="sticker"
          width={100}
          height={100}
          className="absolute opacity-50"
          style={{
            top: `${sticker.top}%`,
            left: `${sticker.left}%`,
            
          }}
        />
      ))}
    </div>
  );
}
