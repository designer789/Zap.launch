import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Instant Launch, Zero Code",
    description: "Launch tokens and NFTs directly from social content — no smart contract knowledge or dev work needed.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Creator Rewards Built-In",
    description: "Earn 15% of trading fees from every transaction tied to your token or NFT — monetization made native.",
    icon: (
      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Token-NFT Swap Ready",
    description: "Swap between project tokens and NFTs at creator-defined ratios, supported by an integrated AMM for smooth conversion."
  },
  {
    id: 4,
    title: "Stake to Earn, Hold to Gain",
    description: "Stake $ZAP to earn dynamic rewards — NFT holders also passively receive a small share of the staking pool, no lock-up needed.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Designed for SocialFi Growth",
    description: "Engineered for viral discovery, enabling content-first asset launches across X and short-form video.",
    icon: (
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export default function WhySection() {
  return (
    <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
            Why Zap.launch
          </h2>
        </div>

        {/* Bento Grid: 3 Columns - 2|1|2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Two items stacked vertically */}
          <div className="flex flex-col gap-6 h-full">
            <div className="group relative flex-1">
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {features[0].icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">
                  {features[0].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {features[0].description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="group relative flex-1">
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {features[1].icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">
                  {features[1].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {features[1].description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Column 2: One full-height item */}
          <div className="group relative h-full">
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
              
              {/* Token-NFT Swap Ready Image */}
              <div className="flex-1 min-h-[200px] rounded-2xl overflow-hidden relative mb-6">
                <Image
                  src="/images/p6.png"
                  alt="Token-NFT Swap Ready Interface"
                  fill
                  className="object-contain opacity-50"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                />
                
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-medium text-white">
                  {features[2].title}
                </h3>
                <p className="text-lg text-white/70 font-light leading-relaxed">
                  {features[2].description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Column 3: Two items stacked vertically */}
          <div className="flex flex-col gap-6 h-full">
            <div className="group relative flex-1">
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {features[3].icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">
                  {features[3].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {features[3].description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="group relative flex-1">
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {features[4].icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">
                  {features[4].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  {features[4].description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 