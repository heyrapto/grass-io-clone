import { Button } from "../ui/button";
import Image from "next/image";

const CTASection1 = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="w-[80%] mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Now You're Getting{" "}
            <span className="bg-lime-300 px-2 py-1 rounded">Real Value</span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            From A Resource You Didn't Know You Had
          </h3>
        </div>

        {/* Green CTA Card */}
        <div className="bg-lime-400 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Download The App Now!
            </h3>
            <p className="text-lg text-black mb-6">
              Start earning rewards just by sharing your internet.
            </p>
            <Button
              title="DOWNLOAD GRASS"
              variant="black"
              className=""
            />
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Phone mockup - you can replace with actual image */}
              <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl p-4 flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400">Phone App UI</span>
                </div>
              </div>
              {/* Character illustration - simplified version */}
              <div className="absolute -right-12 top-8 w-24 h-32 bg-lime-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection2 = () => {
    return (
      <section className="py-16 md:py-24">
        <div className="w-[80%] mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              You're Already{" "}
              <span className="bg-lime-300 px-2 py-1 rounded">Paying</span>{" "}
              For Internet.
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get Something Back For It.
            </h3>
          </div>
  
          {/* Plant Growing Illustration Card */}
          <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-3xl p-8 md:p-16 min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background plant/hands illustration - simplified SVG version */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Simplified hands holding plant */}
                <div className="flex items-center justify-center">
                  <div className="w-32 h-16 bg-amber-700 rounded-full transform -rotate-12 mr-4"></div>
                  <div className="w-32 h-16 bg-amber-600 rounded-full transform rotate-12 ml-4"></div>
                </div>
                {/* Plant stem */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-16 bg-green-400"></div>
                {/* Leaves */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-12 bg-green-400 rounded-full transform -rotate-45 -ml-2"></div>
                  <div className="w-8 h-12 bg-green-500 rounded-full transform rotate-45 ml-2 -mt-6"></div>
                </div>
              </div>
            </div>
  
            {/* CTA Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Download Grass Today
              </h3>
              <Button
                title="DOWNLOAD GRASS"
                variant="green"
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

export { CTASection1, CTASection2 };