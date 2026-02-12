'use client';

export default function SpotifyEmbed() {
  return (
    <div className="flex justify-center items-center my-8">
      <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/2E24YEXrIBBgQSySQvfTWX?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}
