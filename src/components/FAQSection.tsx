"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is Zap.launch?",
    answer: "Zap.launch is a SocialFi platform that lets users instantly mint tokens or NFTs from X replies and short videos, turning content into on-chain tradable assets."
  },
  {
    id: 2,
    question: "How do I create a token or NFT?",
    answer: "Reply to @ZapLaunchX with a token command (e.g., \"ARTCOIN ArtToken Art\") or upload a short video to the Zap.launch dApp — your asset is created instantly."
  },
  {
    id: 3,
    question: "What is the bonding curve mechanism?",
    answer: "Each token is backed by a customizable bonding curve that determines pricing and liquidity. It ensures fair distribution and enables automated DEX deployment."
  },
  {
    id: 4,
    question: "How does staking work?",
    answer: "Users can stake $ZAP to earn dynamic rewards. NFT holders also passively receive a share of the staking pool without needing to lock tokens."
  },
  {
    id: 5,
    question: "When is my token deployed to a DEX?",
    answer: "Once your token's market cap reaches $80,000, the platform automatically creates a liquidity pool and deploys it on supported DEXs like Raydium."
  },
  {
    id: 6,
    question: "What fees are involved?",
    answer: "Each trade has a 0.2% fee: 15% goes to the token/NFT creator, and 85% to the liquidity pool. A 0.0006 SOL protocol fee also supports buybacks, DAO, and $ZAP holders."
  },
  {
    id: 7,
    question: "What chains does Zap.launch support?",
    answer: "Zap.launch is built on Solana for low fees and high speed. Cross-chain support for Ethereum and Polygon is planned via Wormhole."
  },
  {
    id: 8,
    question: "Who can use Zap.launch?",
    answer: "Anyone — creators, collectors, degens, or meme lords. If you can post, you can launch."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors duration-200"
                >
                  <h3 className="text-lg font-medium text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                        openFAQ === faq.id ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFAQ === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-white/70 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
} 