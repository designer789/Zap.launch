"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    id: 1,
    title: "Post Content",
    description: "Reply on X or upload videos to instantly create tokenized content",
    icon: "📝"
  },
  {
    id: 2,
    title: "Mint Token/NFT",
    description: "Auto-generated smart contracts with custom bonding curves - no coding needed",
    icon: "🪙"
  },
  {
    id: 3,
    title: "Trade & Earn",
    description: "Automatic DEX listing at $80K market cap, earn 15% creator rewards",
    icon: "💰"
  }
];

export default function StepsSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let stepInterval: NodeJS.Timeout;

    const startProgress = () => {
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / 600); // 6000ms / 10ms intervals = 600 steps
        });
      }, 10);
    };

    const startStepTimer = () => {
      stepInterval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 6000); // Change every 6 seconds
    };

    startProgress();
    startStepTimer();

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  useEffect(() => {
    // Reset progress when step changes
    setProgress(0);
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  return (
    <section id="steps" className="pt-36 pb-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left side - Heading */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-24">
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 tracking-tight leading-tight">
                3 Steps To<br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Launch
                </span>
              </h2>
            </div>
          </div>

          {/* Right side - Steps Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4 h-[480px] lg:h-[520px]">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeStep === index ? "transform scale-102" : ""
                  }`}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Accordion Item */}
                  <div
                    className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${
                      activeStep === index
                        ? "bg-white/5 border-white/30 shadow-2xl"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-start gap-4 lg:gap-6">
                      {/* Icon and Step Number */}
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-xl lg:text-2xl transition-all duration-500 ${
                            activeStep === index
                              ? "bg-white text-black"
                              : "bg-white/10 text-white/60"
                          }`}
                        >
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3
                            className={`text-xl lg:text-2xl font-medium transition-all duration-500 ${
                              activeStep === index ? "text-white" : "text-white/70"
                            }`}
                          >
                            {step.title}
                          </h3>
                          <div
                            className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-500 ${
                              activeStep === index 
                                ? "bg-white/10 text-white/60" 
                                : "bg-white/5 text-white/40"
                            }`}
                          >
                            STEP {step.id}
                          </div>
                        </div>
                        
                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            activeStep === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-white/80 font-light leading-relaxed lg:text-lg">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-500 ${
                            activeStep === index ? "rotate-180" : "rotate-0"
                          } ${
                            activeStep === index ? "text-white" : "text-white/40"
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
                    </div>

                    {/* Progress bar at bottom of active card */}
                    {activeStep === index && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-2xl overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-white to-white/60 transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Glow effect for active item */}
                  {activeStep === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl blur-xl -z-10 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 