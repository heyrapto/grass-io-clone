import OverviewCard from "../ui/overview-card"

const OverviewSection = () => {
    return (
        <section className="w-[80%] max-w-[1500px] mx-auto flex flex-col">
            <OverviewCard
                subtitle="Why It Matters"
                title="You pay for internet every month. But most of it goes unused, doing nothing for you. Grass puts the unused part of your connection to work, and turns it into rewards. It's a resource you've always had. Now it works for you."
                content={[]}
                image="/overview/1.webp"
            />

            <OverviewCard
                subtitle="How It Works"
                title="In just three clicks, you can install the app and automatically earn by sharing the unused part of your internet connection with verified institutions."
                content={[
                    "Your participation is tracked through Grass Points, which help determine how many Grass Token rewards you receive over time. Grass cannot see your personal data or online activity — only the unused part of your connection is ever shared."
                ]}
                image="/overview/2.webp"
                buttonText="LEARN MORE"
                buttonLink="https://www.grass.io/learn/grass-101-what-is-grass"
                reverse
            />

            <OverviewCard
                subtitle="Why People Trust It"
                title="You are in control. Grass is made for you to share your unused bandwidth, nothing more. With Grass, no one, not even us, can access your private information or view your personal online activity. Regularly audited and constantly monitored, Grass is recognized as safe to use by all of the leading antivirus providers."
                content={[
                    "Grass is built with your privacy in mind and designed to stay out of your way."
                ]}
                image="/overview/3.webp"
                badges={["Privacy", "Security", "Control"]}
                buttonText="LEARN MORE"
                buttonLink="https://www.grass.io/learn/grass-puts-privacy-and-security-first"
            />
        </section>
    )
}

export default OverviewSection