"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

const CTASection1 = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="w-[80%] mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Now You're Getting{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Real Value</span>
              <motion.svg 
                className="absolute bottom-[-5px] left-0 w-full h-3" 
                viewBox="0 0 200 12" 
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              >
                <path 
                  d="M2,7 Q50,3 100,7 T198,7" 
                  stroke="#bef264" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <br />
            From A Resource You Didn't Know You Had
          </h2>
        </div>

        {/* Green CTA Card */}
        <div className="bg-lime-400 rounded-3xl h-[225px] p-8 md:p-12 relative overflow-visible">
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
            
            {/* Right side illustration */}
            <div className="flex-shrink-0 absolute right-0 top-[-110px]">
              <Image
                src="/cta-1.png" 
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
  const [highlightedWord, setHighlightedWord] = useState<number>(0);
  const words = ["You're", "Already", "Paying", "For", "Internet"];

  useEffect(() => {
    // Pick a random word index (excluding first word for better visual)
    const randomIndex = Math.floor(Math.random() * (words.length - 1)) + 1;
    setHighlightedWord(randomIndex);
  }, []);

  return (
    <motion.section
      className="py-16 md:py-24"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="w-[80%] mx-auto">
        {/* Header Text */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {words.map((word, index) => (
              <span key={index}>
                {index === highlightedWord ? (
                  <span className="relative inline-block mx-2">
                    <span className="relative z-10">{word}</span>
                    <motion.svg 
                      className="absolute bottom-[-5px] left-0 w-full h-3" 
                      viewBox="0 0 150 12" 
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                      viewport={{ once: true }}
                      style={{ transformOrigin: "left" }}
                    >
                      <path 
                        d="M2,7 Q37.5,3 75,7 T148,7" 
                        stroke="#bef264" 
                        strokeWidth="6" 
                        fill="none" 
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>
                ) : (
                  <span className="mx-2">{word}</span>
                )}
              </span>
            ))}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get Something Back For It.
          </h3>
        </motion.div>

        {/* Background Image Card */}
        <motion.div
          className="relative bg-[url('/download-grass-today.png')] bg-cover bg-center rounded-3xl p-8 md:p-16 min-h-[900px] flex items-center justify-center overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* CTA Content */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Download Grass Today
            </h3>
            <Button
              title="DOWNLOAD GRASS"
              variant="green"
              className=""
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export { CTASection1, CTASection2 };