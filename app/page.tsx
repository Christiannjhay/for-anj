
"use client";

import dynamic from "next/dynamic";
import { ImagesCarousel } from "./components/ImagesCarousel";
import SwiperComponent from "./components/SwiperComponent";
import { Toaster } from "@/components/ui/sonner"
import SpotifyEmbed from "./components/SpotifyEmbed";
import MusicPlayer from "./components/MusicPlayer";
import LetterCard from "./components/LetterCard";
import HeartPopup from "./components/HeartPopup";

const BackgroundStickers = dynamic(
  () => import("./components/BackgroundStickers"),
  { ssr: false }
);
export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black  font-sans">
      <HeartPopup/>
      <BackgroundStickers/>
      <Toaster richColors />
      <main className=" flex mx-auto max-w-360 flex-col gap-4 md:flex-row min-h-screen w-full pt-8 px-3">
        <ImagesCarousel/>
        <div className="flex z-10 mx-auto w-full flex-col gap-4 max-w-125">
          <SwiperComponent/>
          <SpotifyEmbed/>
          <LetterCard/>
          <MusicPlayer/>
        </div>
      </main>
    </div>
  );
}
