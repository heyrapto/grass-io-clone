import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  const people = ["/hero-1.webp", "/hero-2.webp", "/hero-3.webp"];

  return (
    <section className="relative h-screen bg-[url('https://www.grass.io/images/grass-header-3.webp')] bg-cover bg-center">

      {/* Container */}
      <div className="w-[80%] mx-auto h-full flex items-end pb-[150px] justify-between">
        
        {/* Left content */}
        <div className="flex flex-col gap-6 max-w-[450px] text-white z-10">
          <h1 className="text-[55px] font-bold leading-tight">
            Get Rewarded For The Internet You Don’t Use
          </h1>
          <p className="text-[25px] text-gray-200">
            Grass turns your unused internet into rewards automatically.
          </p>

          <div className="flex gap-4 mt-6">
            <Button
              title="JOIN IN 3 CLICKS"
              className="min-w-[180px] text-[16px] font-medium"
              variant="white"
            />
            <Button
              title="DOWNLOAD GRASS"
              className="min-w-[180px] text-[16px] font-medium"
              variant="green"
            />
          </div>
        </div>

        {/* Right trusted badge */}
        <div className="flex items-center gap-3 bg-white rounded-full shadow-md px-5 py-3">
          <div className="flex -space-x-2">
            {people.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="User avatar"
                width={42}
                height={42}
                className="rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-800">
            Trusted by over 3M users worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
