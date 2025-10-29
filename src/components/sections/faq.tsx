"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number>(-1);

  const faqs = [
    {
      question: "What is Grass?",
      answer: [
        "Grass is a network of millions of people who are earning rewards for sharing unused internet bandwidth with the Grass network.",
        "Your participation in the Grass network represents your contribution to building a more equitable internet and provides you with the opportunity to own a part of the Grass network. Since everyone already pays for internet, why not put your idle connection to work?"
      ]
    },
    {
      question: "How does Grass work?",
      answer: ["Information about how Grass works will be displayed here."]
    },
    {
      question: "What are Grass Points?",
      answer: ["Information about Grass Points will be displayed here."]
    },
    {
      question: "What are Grass Tokens?",
      answer: ["Information about Grass Tokens will be displayed here."]
    },
    {
      question: "When and How are Grass Tokens Awarded?",
      answer: ["Information about Grass Token awards will be displayed here."]
    },
    {
      question: "Who can receive Grass Tokens?",
      answer: ["Information about who can receive Grass Tokens will be displayed here."]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="w-[80%] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <div className="text-2xl text-gray-500">
                  {openQuestion === index ? "−" : "+"}
                </div>
              </button>

              {/* Animated Answer */}
              <AnimatePresence initial={false}>
                {openQuestion === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-gray-100"
                  >
                    <div className="px-8 pb-6 pt-4 space-y-4">
                      {faq.answer.map((paragraph, i) => (
                        <p key={i} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Have more questions? Check out our full{" "}
            <a href="/faq" className="text-black underline font-medium">
              FAQ
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;