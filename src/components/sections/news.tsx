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
      image: "/blog1.png",
      hasLargeTitle: false
    },
    {
      title: "Grass Privacy & Security", 
      description: "Reclaim Your Internet: How Grass Lets You Safely Share Your Internet",
      date: "October 08",
      category: "Basics",
      image: "/blog2.png",
      hasLargeTitle: false
    },
    {
      title: "Enter The Data Wars",
      description: "Enter The Data Wars", 
      date: "August 11",
      categories: ["Research", "Discovery"],
      image: "/blog3.webp",
      hasLargeTitle: false
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
            className=""
            variant="black"
          />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <ShadowCard key={index} hoverShadow="bottom-right" className="overflow-hidden p-0 h-full rounded-[50px]">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1">
                <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 leading-snug">
                  {item.description}
                </h4>
                
                {/* Categories */}
                <div className="flex gap-3 flex-wrap">
                  {item.category && (
                    <span className="text-teal-600 text-sm font-medium">
                      {item.category}
                    </span>
                  )}
                  {item.categories && item.categories.map((cat, i) => (
                    <span 
                      key={i} 
                      className={`text-sm font-medium ${
                        cat === 'Research' ? 'text-teal-600' : 'text-teal-500'
                      }`}
                    >
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