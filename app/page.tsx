
"use client";

import dynamic from "next/dynamic";
import { ImagesCarousel } from "./components/ImagesCarousel";
import SwiperComponent from "./components/SwiperComponent";

import { Toaster } from "@/components/ui/sonner"
import SpotifyEmbed from "./components/SpotifyEmbed";
import MusicPlayer from "./components/MusicPlayer";
import ApologyButtons from "./components/ApologyButtons";

const BackgroundStickers = dynamic(
  () => import("./components/BackgroundStickers"),
  { ssr: false }
);
export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black  font-sans ">
      
      <BackgroundStickers/>
      <Toaster
        richColors
      />
      <main className=" flex mx-auto max-w-[1440px] flex-col gap-4 md:flex-row min-h-screen w-full pt-8 px-3">
        <ImagesCarousel/>
        <div className="flex z-10 mx-auto w-full flex-col gap-4 max-w-[500px]">
          

          <h1 className="text-white text-center text-xl font-bold">TOP 10 FACTS I KNOW ABOUT YOU 💖</h1>
          
          <SwiperComponent/>
          <SpotifyEmbed/>
          <div className="w-full flex px-4 mx-auto max-w-[500px] py-4 flex-col lg:mt-2 h-fit rounded-3xl bg-white/30 backdrop-blur-xs">
            <h2 className="text-white font-bold">Hi Anj,</h2>
            <div className="flex text-white mt-5 flex-col gap-5">
              <p>I have some free time today and I made this website, but don’t judge ha, it’s like very rush, and it’s not perfect lol.</p>
              <p>Lovey, I really miss you so much na. Please balik na 🥹. I don’t know what to do jud pag wala ka, like akong kamot mangatol na mag chat or mag update saimoha 🥲 and I’m still hoping na you’ll give me a chance. I’m really sorry for what I did, and will for sure, never do that again. I am too careless sakong mga actions, and never thought about the worst case scenario. Sorry if i did bring chaos, and ruin your peace of mind. I can assure you na that won’t happen again.</p>
              <p>Love, let’s restart 🥲 Let’s try again, please. I want to work things out jud between us, tho it may be challenging, lalo na for you, but please, let’s give it a shot. I love you so much, my lovey.</p>
              <p>Also, let’s go dinner or coffee later? You can answer using the buttons sa baba</p>
            </div>
            <h2 className="text-white font-bold mt-5">All my love,<span className="block">Christian</span></h2>
          </div>

          <ApologyButtons/>

          <MusicPlayer/>

          
        </div>
        
        
      
      </main>
    </div>
  );
}
