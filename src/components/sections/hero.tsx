// components/HeroSection.tsx
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  const people = ["/hero-1.webp", "/hero-2.webp", "/hero-3.webp"];

  return (
    <section className="relative h-screen bg-[url('/hero-bg.webp')] bg-cover bg-center">
      {/* container: mobile-first, but EXACT desktop layout restored with lg: classes */}
      <div className="w-[45%] lg:w-[80%] mx-auto h-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between pb-0 lg:pb-[200px]">
        {/* Left content */}
        <div className="flex flex-col gap-2 max-w-full lg:max-w-[450px] text-white z-10 items-center lg:items-start text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-tight">
            Get Rewarded For The Internet You Don’t Use
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-[25px] text-gray-200 pt-4 lg:pt-[15px]">
            Grass turns your unused internet into rewards automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto justify-center lg:justify-start">
            <Button
              title="JOIN IN 3 CLICKS"
              className="w-full sm:w-auto lg:min-w-[180px] text-[14px] lg:text-[16px] font-medium flex lg:justify-start justify-center"
              variant="white"
            />
            <Button
              title="DOWNLOAD GRASS"
              className="w-full sm:w-auto lg:min-w-[180px] text-[14px] lg:text-[16px] font-medium flex lg:justify-start justify-center"
              variant="green"
            />
          </div>
        </div>

        {/* Trusted badge (mobile stacks under content; desktop remains to the right) */}
        <div className="mt-6 lg:mt-0 flex lg:flex-row flex-col items-center gap-3 lg:bg-white bg-transparent rounded-full px-5 py-3">
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
          <span className="text-sm font-medium lg:text-gray-800 text-white lg:text-left text-center">
            Trusted by over 3M users worldwide
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;