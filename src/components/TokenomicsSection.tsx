const utilities = [
  {
    id: 1,
    title: "Staking for Rewards",
    description: "Stake $ZAP to earn protocol rewards and access boosted earning opportunities."
  },
  {
    id: 2,
    title: "Passive Yield via NFT Holding",
    description: "NFT holders receive a share of staking rewards without needing to lock tokens."
  },
  {
    id: 3,
    title: "Launch Access & Creator Tools",
    description: "Unlock advanced token/NFT launch features, analytics, and customization tools."
  },
  {
    id: 4,
    title: "Governance Participation",
    description: "Propose and vote on key platform decisions through DAO governance."
  },
  {
    id: 5,
    title: "Revenue Sharing",
    description: "Earn protocol revenue distributed from trading fees and ecosystem activity."
  }
];

export default function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-medium text-white mb-8 tracking-tight">
            Tokenomics
          </h2>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5">
            <span className="text-2xl font-bold text-white">Token:</span>
            <span className="text-2xl font-black text-white">$ZAP</span>
          </div>
        </div>

        <div>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {utilities.map((utility, index) => (
              <div
                key={utility.id}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
                  {/* Number indicator */}
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <span className="text-white font-medium text-sm">
                      {utility.id}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-white mb-3">
                    {utility.title}
                  </h4>
                  
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    {utility.description}
                  </p>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
} 