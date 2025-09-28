import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

type OverviewCardProps = {
    subtitle: string;
    title: string;
    content: string[];
    image: string;
    badges?: string[];
    buttonText?: string;
    buttonLink?: string;
    reverse?: boolean;
};

const OverviewCard = ({
    subtitle,
    title,
    content,
    image,
    badges,
    buttonText,
    buttonLink,
    reverse = false,
}: OverviewCardProps) => {
    return (
        <section
            className={`py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                reverse ? "lg:flex-row-reverse" : ""
            }`}
        >
            {/* Text Content */}
            <div className="flex-1 max-w-lg">
                {/* Subtitle */}
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    {subtitle}
                </h3>

                {/* Badges - positioned after subtitle for "Why People Trust It" */}
                {badges && (
                    <div className="flex gap-3 mb-6">
                        {badges.map((badge, i) => {
                            const badgeColors = [
                                "bg-green-100 text-green-700", // Privacy
                                "bg-blue-100 text-blue-700",   // Security  
                                "bg-purple-100 text-purple-700" // Control
                            ];
                            return (
                                <span
                                    key={i}
                                    className={`px-4 py-2 text-sm font-medium rounded-full ${badgeColors[i] || "bg-gray-100 text-gray-700"}`}
                                >
                                    {badge}
                                </span>
                            );
                        })}
                    </div>
                )}

                {/* Main Title */}
                <h2 className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-normal">
                    {title}
                </h2>

                {/* Content Paragraphs */}
                <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                    {content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>

                {/* Button */}
                {buttonText && buttonLink && (
                    <Link href={buttonLink}>
                        <Button 
                            title={buttonText} 
                            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium" 
                        />
                    </Link>
                )}
            </div>

            {/* Image Container */}
            <div className="flex-1 relative max-w-2xl">
                <div className="relative w-full">
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default OverviewCard;