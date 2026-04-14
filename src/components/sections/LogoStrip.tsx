'use client'

import React from 'react'

const LogoStrip = () => {
  const logos = ['Brandly', 'Meridian Co.', 'Aether Labs', 'Stackwell', 'Novaform', 'Crossfield', 'Vantage DTC', 'Praxis Retail']
  
  return (
    <section className="border-b border-[rgba(28,35,33,0.09)] bg-[#EAE5D5] py-8 px-5 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex items-center gap-0">
        <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#7a7a72] whitespace-nowrap pr-10 border-r border-[rgba(28,35,33,0.09)] mr-10 flex-shrink-0">
          Trusted by
        </span>
        <div className="overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div className="flex gap-14 items-center w-max animate-logo-scroll hover:animation-paused">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-logo-scroll {
          animation: logoScroll 28s linear infinite;
        }
        
        .hover\\:animation-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default LogoStrip