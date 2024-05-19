"use client";

import Image from "next/image";

const styles = {
  hero: "absolute w-full bg-white h-[calc(100vh-64px)]",
  heroOverlay:
    "absolute top-0 left-0 right-0 bottom-0 bg-black/80 z-1 flex items-center justify-center flex-col gap-3",
};

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        src="/hero-bg.jpg"
        alt="Hero"
        objectFit="cover"
        fill
        className="pointer-events-none relative"
      />
      <div className={styles.heroOverlay}>
        <h1 className="text-7xl font-bold z-1">Samplicity</h1>
        <h3 className="text-lg">
          Free and premium, high quality sample packs.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
