import { Button } from "../ui/button";
import Image from "next/image";
import { ShadowCard } from "../ui/card-shadow";

const NewsSection = () => {
  const newsItems = [
    {
      title: "Grass 101: What Is Grass",
      description: "Grass 101: What is Grass?",
      date: "October 14",
      category: "Basics",
      image: "/news/grass-101.webp",
      logo: "/grass-logo.svg"
    },
    {
      title: "Grass Privacy & Security",
      description: "Reclaim Your Internet: How Grass Lets You Safely Share Your Internet",
      date: "October 08",
      category: "Basics",
      image: "/news/privacy-security.webp",
      logo: "/grass-logo.svg"
    },
    {
      title: "Enter The Data Wars",
      description: "Enter The Data Wars",
      date: "August 11",
      categories: ["Research", "Discovery"],
      image: "/news/data-wars.webp",
      logo: "/grass-logo.svg"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="w-[80%] mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Browse Our Latest News
          </h2>
          <Button
            title="LEARN MORE"
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
          />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <ShadowCard key={index} hoverShadow="bottom-right" className="overflow-hidden p-0">
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                )}
                {/* Logo Overlay */}
                <div className="absolute top-4 left-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <span>🌱</span>
                    <span>grass</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.description}
                </h3>
                
                {/* Categories */}
                <div className="flex gap-2 flex-wrap">
                  {item.category && (
                    <span className="text-green-600 text-sm font-medium">
                      {item.category}
                    </span>
                  )}
                  {item.categories && item.categories.map((cat, i) => (
                    <span key={i} className="text-green-600 text-sm font-medium">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </ShadowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;