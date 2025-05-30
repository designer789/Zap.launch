import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Instant Token & NFT Minting",
    description: "Create tokens or NFTs by replying on X or uploading short videos. Smart contracts are auto-generated — no coding needed."
  },
  {
    id: 2,
    title: "Bonding Curve Integration",
    description: "Each token includes a customizable bonding curve that defines pricing and supply, enabling fair, dynamic price discovery."
  },
  {
    id: 3,
    title: "Auto DEX Deployment",
    description: "When a token reaches $80K market cap, it's auto-listed on DEXs with liquidity from bonding curve reserves for immediate trading."
  },
  {
    id: 4,
    title: "Integrated NFT Marketplace",
    description: "Built-in NFT trading with auctions, batch listings, and story tags — plus social boosting for trending assets."
  },
  {
    id: 5,
    title: "Short Video Explorer",
    description: "TikTok-style feed for top-performing token videos, featuring instant swap access and real-time market data."
  }
];

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
            Zap Overview
          </h2>
        </div>

        {/* Bento Grid: 2-1-2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Row 1: Two items side by side */}
          <div className="group relative">
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-white mb-4">
                  {features[0].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  {features[0].description}
                </p>
              </div>
              
              {/* Instant Token & NFT Minting Image */}
              <div className="aspect-video rounded-2xl border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/p4.png"
                  alt="Instant Token & NFT Minting Interface"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="group relative">
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-white mb-4">
                  {features[1].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  {features[1].description}
                </p>
              </div>
              
              {/* Bonding Curve Integration Image */}
              <div className="aspect-video rounded-2xl border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/p1.png"
                  alt="Bonding Curve Integration Interface"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Row 2: Full width single item */}
          <div className="lg:col-span-2 group relative">
            <div className="relative p-12 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-medium text-white mb-4">
                  {features[2].title}
                </h3>
                <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
                  {features[2].description}
                </p>
              </div>
              
              {/* Auto DEX Deployment Image */}
              <div className="flex-1 min-h-[200px] aspect-video rounded-2xl relative">
                <Image
                  src="/images/p5.png"
                  alt="Auto DEX Deployment Interface"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Row 3: Two items side by side */}
          <div className="group relative">
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-white mb-4">
                  {features[3].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  {features[3].description}
                </p>
              </div>
              
              {/* NFT Marketplace Image */}
              <div className="aspect-video rounded-2xl border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/p2.png"
                  alt="Integrated NFT Marketplace Interface"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          <div className="group relative">
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-white mb-4">
                  {features[4].title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed mb-6">
                  {features[4].description}
                </p>
              </div>
              
              {/* Short Video Explorer Image */}
              <div className="aspect-video rounded-2xl border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/p3.png"
                  alt="Short Video Explorer Interface"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 