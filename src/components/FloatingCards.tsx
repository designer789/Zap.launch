"use client";

import { useEffect } from "react";
import React from "react";

// Extend Window interface for Twitter widgets
declare global {
  interface Window {
    twttr: {
      ready: (callback: () => void) => void;
    };
  }
  
  namespace JSX {
    interface IntrinsicElements {
      'gecko-coin-list-widget': {
        locale?: string;
        'dark-mode'?: string;
        outlined?: string;
        'coin-ids'?: string;
        'initial-currency'?: string;
      };
      'gecko-coin-price-chart-widget': {
        locale?: string;
        'dark-mode'?: string;
        outlined?: string;
        'coin-id'?: string;
        'initial-currency'?: string;
        width?: string;
      };
      'gecko-coin-price-static-headline-widget': {
        locale?: string;
        'dark-mode'?: string;
        outlined?: string;
        'coin-ids'?: string;
        'initial-currency'?: string;
      };
    }
  }
}

interface FloatingCardsProps {
  mousePosition: { x: number; y: number };
  getParallaxTransform: (intensity: number, rotation: number) => {
    transform: string;
    transition: string;
  };
}

export default function FloatingCards({ mousePosition, getParallaxTransform }: FloatingCardsProps) {

  useEffect(() => {
    // Load Twitter widgets script
    const twitterScript = document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    twitterScript.async = true;
    twitterScript.charset = 'utf-8';
    
    document.body.appendChild(twitterScript);

    // Load CoinGecko widget script
    const coingeckoScript = document.createElement('script');
    coingeckoScript.src = 'https://widgets.coingecko.com/gecko-coin-list-widget.js';
    coingeckoScript.async = true;
    
    document.body.appendChild(coingeckoScript);

    // Load CoinGecko price chart widget script
    const priceChartScript = document.createElement('script');
    priceChartScript.src = 'https://widgets.coingecko.com/gecko-coin-price-chart-widget.js';
    priceChartScript.async = true;
    
    document.body.appendChild(priceChartScript);

    // Load CoinGecko static headline widget script
    const headlineScript = document.createElement('script');
    headlineScript.src = 'https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js';
    headlineScript.async = true;
    
    document.body.appendChild(headlineScript);

    return () => {
      const existingTwitterScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingTwitterScript) {
        document.body.removeChild(existingTwitterScript);
      }
      
      const existingCoingeckoScript = document.querySelector('script[src="https://widgets.coingecko.com/gecko-coin-list-widget.js"]');
      if (existingCoingeckoScript) {
        document.body.removeChild(existingCoingeckoScript);
      }

      const existingPriceChartScript = document.querySelector('script[src="https://widgets.coingecko.com/gecko-coin-price-chart-widget.js"]');
      if (existingPriceChartScript) {
        document.body.removeChild(existingPriceChartScript);
      }

      const existingHeadlineScript = document.querySelector('script[src="https://widgets.coingecko.com/gecko-coin-price-static-headline-widget.js"]');
      if (existingHeadlineScript) {
        document.body.removeChild(existingHeadlineScript);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      
      {/* Floating Decorative Elements */}
      
      {/* Small glowing orbs - visible on all screens but scaled */}
      <div 
        className="absolute top-[15%] left-[35%] w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 blur-sm"
        style={getParallaxTransform(8, 0)}
      />
      <div 
        className="absolute top-[70%] right-[40%] w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-400/30 blur-sm"
        style={getParallaxTransform(12, 0)}
      />
      <div 
        className="absolute bottom-[60%] left-[70%] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-purple-400/20 blur-sm"
        style={getParallaxTransform(6, 0)}
      />
      
      {/* Geometric shapes - hidden on mobile, progressively larger */}
      <div 
        className="absolute top-[25%] right-[15%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border border-white/10 rotate-45 hidden sm:block"
        style={getParallaxTransform(10, 0)}
      />
      <div 
        className="absolute bottom-[40%] left-[15%] w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border border-gray-400/20 rounded-full hidden sm:block"
        style={getParallaxTransform(14, 0)}
      />
      <div 
        className="absolute top-[60%] left-[40%] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-white/10 to-transparent rotate-12 hidden sm:block"
        style={getParallaxTransform(9, 0)}
      />
      
      {/* Floating lines - hidden on mobile */}
      <div 
        className="absolute top-[80%] right-[30%] w-20 h-1 sm:w-24 sm:h-1 md:w-32 md:h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 hidden md:block"
        style={getParallaxTransform(7, 0)}
      />
      <div 
        className="absolute top-[20%] left-[60%] w-16 h-1 sm:w-20 sm:h-1 md:w-24 md:h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -rotate-45 hidden md:block"
        style={getParallaxTransform(11, 0)}
      />
      
      {/* Larger glowing elements - scaled responsively */}
      <div 
        className="absolute bottom-[20%] right-[60%] w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-md"
        style={getParallaxTransform(5, 0)}
      />
      <div 
        className="absolute top-[40%] right-[80%] w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-400/15 to-transparent blur-sm hidden sm:block"
        style={getParallaxTransform(13, 0)}
      />
      
      {/* Subtle triangular shapes - hidden on mobile */}
      <div 
        className="absolute top-[50%] left-[25%] w-0 h-0 border-l-6 border-r-6 border-b-8 sm:border-l-8 sm:border-r-8 sm:border-b-12 border-transparent border-b-white/10 hidden sm:block"
        style={getParallaxTransform(16, 0)}
      />
      <div 
        className="absolute bottom-[70%] right-[20%] w-0 h-0 border-l-6 border-r-6 border-t-8 sm:border-l-8 sm:border-r-8 sm:border-t-12 border-transparent border-t-blue-400/20 rotate-180 hidden sm:block"
        style={getParallaxTransform(4, 0)}
      />
      
      {/* Additional floating dots - scaled */}
      <div 
        className="absolute top-[35%] left-[75%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white/30"
        style={getParallaxTransform(18, 0)}
      />
      <div 
        className="absolute bottom-[45%] right-[85%] w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-blue-300/20"
        style={getParallaxTransform(3, 0)}
      />
      
      {/* Floating hexagonal shapes - hidden on mobile */}
      <div 
        className="absolute top-[75%] left-[55%] w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border border-white/15 rotate-45 transform skew-x-12 hidden sm:block"
        style={getParallaxTransform(8, 0)}
      />
      
      {/* More glowing orbs - scaled */}
      <div 
        className="absolute bottom-[80%] right-[50%] w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-cyan-400/25 blur-sm"
        style={getParallaxTransform(15, 0)}
      />
      <div 
        className="absolute top-[85%] left-[30%] w-5 h-5 sm:w-6 sm:h-6 md:w-9 md:h-9 rounded-full bg-indigo-400/20 blur-sm"
        style={getParallaxTransform(7, 0)}
      />

      {/* Main Content Cards */}
      
      {/* Top Left - Portrait 3:4 */}
      <div 
        className="absolute top-[14%] left-[8%] w-[300px] sm:w-[400px] lg:w-[500px] h-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 backdrop-blur-sm shadow-2xl pointer-events-none hidden xl:block"
        style={getParallaxTransform(20, 0)}
      >
        <div className="overflow-hidden rounded-xl">
          {React.createElement('gecko-coin-price-static-headline-widget', {
            locale: 'en',
            'dark-mode': 'true',
            outlined: 'false',
            'coin-ids': 'bitcoin,ethereum,solana',
            'initial-currency': 'usd'
          })}
        </div>
        <div className="absolute inset-0 bg-black/10 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Top Center - Landscape 4:3 */}
      <div 
        className="absolute top-[5%] left-[30%] sm:left-[35%] lg:left-[45%] w-auto h-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 backdrop-blur-sm hover:scale-105 shadow-2xl hidden xl:block"
        style={getParallaxTransform(15, 0)}
      >
        <div className="overflow-hidden rounded-xl">
          <iframe 
            height="250" 
            width="320" 
            className="lg:h-[300px] lg:w-[400px] rounded-xl"
            src="https://www.tiktok.com/player/v1/7481675637829274910?autoplay=1&mute=1&loop=1" 
            allow="fullscreen" 
            title="TikTok Player"/>
        </div>
        <div className="absolute inset-0 bg-black/30 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Top Right - Portrait 3:4 */}
      <div 
        className="absolute top-[-5%] right-[5%] w-[280px] sm:w-[350px] lg:w-[400px] h-auto rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/10 backdrop-blur-sm shadow-2xl pointer-events-none hidden xl:block"
        style={getParallaxTransform(-18, 0)}
      >
        <div className="overflow-hidden rounded-xl">
          {React.createElement('gecko-coin-price-chart-widget', {
            locale: 'en',
            'dark-mode': 'true',
            outlined: 'false',
            'coin-id': 'solana',
            'initial-currency': 'usd',
            width: '280'
          })}
        </div>
        <div className="absolute inset-0 bg-black/10 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Left Side - Portrait 3:4 with Twitter Embed */}
      <div 
        className="absolute top-[40%] left-[8%] w-auto max-w-60 sm:max-w-72 lg:max-w-80 h-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 backdrop-blur-sm shadow-2xl pointer-events-none hidden xl:block"
        style={getParallaxTransform(25, 0)}
      >
        <div className="w-full h-full overflow-hidden rounded-xl m-0">
          
          {/* Actual Twitter Embed */}
          <blockquote 
            className={`twitter-tweet m-0`}
            data-theme="dark"
            style={{ 
              margin: '0 !important',
              marginTop: '0 !important',
              marginBottom: '0 !important',
              marginLeft: '0 !important',
              marginRight: '0 !important'
            }}
          >
            <p lang="en" dir="ltr">
              And Grok said, "Let there be voice," and there was voice. 
              <a href="https://t.co/BlGi0aKVDg">pic.twitter.com/BlGi0aKVDg</a>
            </p>
            &mdash; Grok (@grok) 
            <a href="https://twitter.com/grok/status/1919099647991177712?ref_src=twsrc%5Etfw">
              May 4, 2025
            </a>
          </blockquote>
        </div>
        <div className="absolute inset-0 bg-black/20 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Right Side - Portrait 3:4 */}
      <div 
        className="absolute top-[30%] right-[12%] w-auto max-w-60 sm:max-w-72 lg:max-w-80 h-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 backdrop-blur-sm hover:scale-105 shadow-2xl hidden xl:block"
        style={getParallaxTransform(-22, 0)}
      >
        <div>
          <blockquote 
          className="twitter-tweet"
           data-theme="dark">
              <p lang="en" dir="ltr">
                  For now 
                  <a href="https://t.co/eoNi1Yee7k">https://t.co/eoNi1Yee7k</a>
                  </p>&mdash; Elon Musk (@elonmusk) 
                  <a href="https://twitter.com/elonmusk/status/1927018101083689471?ref_src=twsrc%5Etfw">May 26, 2025</a>
                  </blockquote> 
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
        <div className="absolute inset-0 bg-black/20 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Bottom Left - Landscape 4:3 */}
      <div 
        className="absolute bottom-[2%] left-[10%] sm:left-[15%] lg:left-[20%] w-[320px] sm:w-[400px] lg:w-[500px] h-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 backdrop-blur-sm shadow-2xl pointer-events-none hidden xl:block"
        style={getParallaxTransform(28, 0)}
      >
        <div className="rounded-xl overflow-hidden">
          {React.createElement('gecko-coin-list-widget', {
            locale: 'en',
            'dark-mode': 'true',
            outlined: 'false',
            'coin-ids': 'pepe,dogwifcoin,cat-in-a-dogs-world,maga',
            'initial-currency': 'usd'
          })}
        </div>
        <div className="absolute inset-0 bg-black/10 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Bottom Right - TikTok Embed */}
      <div 
        className="absolute bottom-[7%] right-[15%] sm:right-[20%] lg:right-[25%] w-auto h-auto rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 backdrop-blur-sm shadow-2xl pointer-events-none hidden xl:block"
        style={getParallaxTransform(-25, 0)}
      >
        <div className="overflow-hidden rounded-xl">
          <iframe 
            height="250" 
            width="320" 
            className="lg:h-[300px] lg:w-[400px] rounded-xl"
            src="https://www.tiktok.com/player/v1/6718335390845095173?autoplay=1&mute=1&loop=1" 
            allow="fullscreen" 
            title="TikTok Player"/>
        </div>
        <div className="absolute inset-0 bg-black/30 rounded-xl z-10 pointer-events-none"></div>
      </div>

      {/* Mobile-specific smaller floating elements */}
      <div className="block xl:hidden">
        {/* Small mobile decorative elements */}
        <div 
          className="absolute top-[20%] right-[10%] w-6 h-6 rounded-full bg-white/20 blur-sm"
          style={getParallaxTransform(8, 0)}
        />
        <div 
          className="absolute bottom-[25%] left-[15%] w-8 h-8 rounded-full bg-blue-400/30 blur-sm"
          style={getParallaxTransform(12, 0)}
        />
        <div 
          className="absolute top-[60%] right-[20%] w-10 h-10 border border-white/10 rotate-45"
          style={getParallaxTransform(10, 0)}
        />
        <div 
          className="absolute bottom-[40%] left-[10%] w-12 h-12 border border-gray-400/20 rounded-full"
          style={getParallaxTransform(14, 0)}
        />
      </div>
      
    </div>
  );
} 