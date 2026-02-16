
"use client";

import dynamic from "next/dynamic";
import { ImagesCarousel } from "./components/ImagesCarousel";
import SwiperComponent from "./components/SwiperComponent";

import { Toaster } from "@/components/ui/sonner"
import SpotifyEmbed from "./components/SpotifyEmbed";
import MusicPlayer from "./components/MusicPlayer";
import ApologyButtons from "./components/ApologyButtons";
import LetterCard from "./components/LetterCard";

const BackgroundStickers = dynamic(
  () => import("./components/BackgroundStickers"),
  { ssr: false }
);
export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black  font-sans ">
      <BackgroundStickers/>
      <Toaster richColors />
      <main className=" flex mx-auto max-w-[1440px] flex-col gap-4 md:flex-row min-h-screen w-full pt-8 px-3">
        <ImagesCarousel/>
        <div className="flex z-10 mx-auto w-full flex-col gap-4 max-w-[500px]">
          <SwiperComponent/>
          <SpotifyEmbed/>
          <LetterCard/>
          <MusicPlayer/>
        </div>
      </main>
    </div>
  );
}
