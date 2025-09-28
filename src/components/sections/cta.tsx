import { Button } from "../ui/button";
import Image from "next/image";

const CTASection1 = () => {
    return (
      <section className="py-16 md:py-24">
        <div className="w-[80%] mx-auto">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Now You're Getting{" "}
              <span className="relative">
                <span className="bg-lime-300 px-2 py-1 rounded-lg">Real Value</span>
              </span>
              <br />
              From A Resource You Didn't Know You Had
            </h2>
          </div>
  
          {/* Green CTA Card */}
          <div className="bg-lime-400 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Download The App Now!
                </h3>
                <p className="text-lg text-black mb-6">
                  Start earning rewards just by sharing your internet.
                </p>
                <Button
                  title="DOWNLOAD GRASS"
                  className="bg-black text-white"
                />
              </div>
              
              {/* Right side illustration - placeholder for actual image */}
              <div className="flex-shrink-0 relative">
                <Image
                  src="/cta-illustration.png" // Replace with actual image path
                  alt="Download App Illustration"
                  width={300}
                  height={300}
                  className="object-contain"
                />
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
  
          {/* Background Image Card */}
          <div 
            className="relative bg-[url('/download-grass-today.png')] bg-cover bg-center rounded-3xl p-8 md:p-16 min-h-[900px] flex items-center justify-center overflow-hidden"
          >
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