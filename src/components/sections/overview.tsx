import OverviewCard from "../ui/overview-card"

const OverviewSection = () => {
    return (
        <section className="w-[80%] max-w-[1500px] mx-auto  flex flex-col">
            <OverviewCard
                subtitle="Why It Matters"
                title="You pay for internet every month. But most of it goes unused."
                content={[
                    "Grass puts the unused part of your connection to work, and turns it into rewards.",
                    "It's a resource you've always had. Now it works for you.",
                ]}
                image="/overview/1.webp"
            />

            <OverviewCard
                subtitle="How It Works"
                title="In just three clicks, you can install the app..."
                content={[
                    "Your participation is tracked through Grass Points...",
                    "Grass cannot see your personal data or online activity.",
                ]}
                image="/overview/2.webp"
                buttonText="Learn More"
                buttonLink="https://www.grass.io/learn/grass-101-what-is-grass"
                reverse
            />

            <OverviewCard
                subtitle="Why People Trust It"
                title="You are in control."
                content={[
                    "Grass is made for you to share your unused bandwidth, nothing more.",
                    "Grass is built with your privacy in mind and designed to stay out of your way.",
                ]}
                image="/overview/3.webp"
                badges={["Privacy", "Security", "Control"]}
                buttonText="Learn More"
                buttonLink="https://www.grass.io/learn/grass-puts-privacy-and-security-first"
            />

        </section>
    )
}

export default OverviewSection