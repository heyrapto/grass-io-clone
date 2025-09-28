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
            className={`py-20 flex flex-col md:flex-row items-center md:justify-between gap-12 ${reverse ? "md:flex-row-reverse" : ""
                }`}
        >

            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-6">
                <h3 className="text-green-600 text-lg font-semibold">{subtitle}</h3>
                <h2 className="text-3xl font-bold text-gray-900 leading-snug">{title}</h2>

                {badges && (
                    <div className="flex gap-3 flex-wrap">
                        {badges.map((badge, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-col gap-4 text-lg text-gray-700">
                    {content.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>

                {buttonText && buttonLink && (
                    <Link href={buttonLink}>
                        <Button title={buttonText} className="" />
                    </Link>
                )}
            </div>

            {/* Image */}
            <div className="flex-1 relative flex justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="object-cover max-w-full h-auto"
                />
            </div>

        </section>
    );
};

export default OverviewCard;
