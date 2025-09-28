import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
    const people = ["/hero-1.webp", "/hero-2.webp", "/hero-3.webp"];

    return (
        <section className="relative h-screen flex items-center justify-center bg-[url('/hero-1.webp')] bg-cover bg-center">
            {/* Left content */}
            <div className="flex flex-col gap-6 max-w-[500px] text-white">
                <h1 className="text-[48px] font-bold leading-[1.2]">
                    Get Rewarded For The Internet You Don’t Use
                </h1>
                <p className="text-lg">
                    Grass turns your unused internet into rewards automatically.
                </p>

                <div className="flex gap-4 mt-4">
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

            {/* Bottom right trusted badge */}
            <div className="absolute bottom-12 right-12 flex items-center gap-3 bg-white rounded-full shadow-md px-4 py-2">
                <div className="flex -space-x-2">
                    {people.map((src, i) => (
                        <Image
                            key={i}
                            src={src}
                            alt="User avatar"
                            width={32}
                            height={32}
                            className="rounded-full border-2 border-white"
                        />
                    ))}
                </div>
                <span className="text-sm font-medium text-gray-800">
                    Trusted by over 3M users worldwide
                </span>
            </div>
        </section>
    );
};

export default HeroSection;