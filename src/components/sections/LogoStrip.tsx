'use client'

import React from 'react'
import Image from 'next/image'

const LogoStrip = () => {
  const logos = [
    { name: 'Brandly', src: '/logos/logos1.png' },
    { name: 'Meridian Co.', src: '/logos/logos2.webp' },
    { name: 'Aether Labs', src: '/logos/logos3.png' },
    { name: 'Stackwell', src: '/logos/logos4.png' },
    { name: 'Novaform', src: '/logos/logos5.png' },
    { name: 'Crossfield', src: '/logos/logos6.webp' },
    { name: 'Vantage DTC', src: '/logos/logos7.png' },
    { name: 'Praxis Retail', src: '/logos/logos8.jpeg' },
    { name: 'Praxis Retail', src: '/logos/logos9.png' },
    { name: 'Praxis Retail', src: '/logos/logos10.png' },
    { name: 'Praxis Retail', src: '/logos/logos11.png' },
    { name: 'Praxis Retail', src: '/logos/logos12.png' },
  ]

  return (
    <section className="border-b border-[rgba(28,35,33,0.09)] bg-[#EAE5D5] py-8 px-5 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex items-center gap-0">
        
        <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#7a7a72] whitespace-nowrap pr-10 border-r border-[rgba(28,35,33,0.09)] mr-10 flex-shrink-0">
          Trusted by
        </span>

        <div className="overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,black_10%,black_94%,transparent)]">
          
          <div className="flex gap-14 items-center w-max animate-logo-scroll hover:animation-paused">
            
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation */}
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