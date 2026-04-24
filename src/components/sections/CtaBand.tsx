// components/sections/CTABand.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  youtubeVideoId?: string;
  videoTitle?: string;
}

const CTABand = ({ 
  title = "Ready to fix the gaps<br>and <em class='italic'>start executing?</em>", 
  description = "Tell us what you need. One call. Your team activated within 48 hours.",
  primaryText = "Book a Discovery Call",
  primaryHref = "/contact",
  youtubeVideoId = "tGBID831V8g", // Replace with your actual YouTube video ID
  videoTitle = "Watch our founder's vision"
}: CtaBandProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section className="py-[100px] px-5 sm:px-6 md:px-8 lg:px-12 bg-[#44A194] border-b border-[rgba(28,35,33,0.09)]">
        <div className="max-w-[1240px] mx-auto">
          {/* Main CTA Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
            <div className="text-center lg:text-left">
              <h2 
                className="font-['Cormorant_Garamond',serif] text-[clamp(30px,3.8vw,52px)] font-light text-white leading-[1.15] max-w-[560px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-sm text-white/65 mt-3 max-w-[500px]">
                {description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                href={primaryHref} 
                className="inline-flex items-center gap-2.5 bg-white text-[#44A194] font-['Jost',sans-serif] text-xs font-semibold tracking-[0.18em] uppercase py-[18px] px-[38px] no-underline transition-all duration-300 hover:bg-[#1C2321] hover:text-white"
              >
                <span>{primaryText}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 15l5-3-5-3v6zm9-11H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/>
                </svg>
                <span className="text-white text-xs font-['Jost',sans-serif] tracking-wide uppercase">
                  {videoTitle}
                </span>
              </div>
            </div>

            {/* Video Thumbnail / Player */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-black/20">
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to medium quality if maxresdefault doesn't exist
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 group-hover:from-black/60 transition-all duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300" />
                    <div className="relative bg-[#44A194] rounded-full p-4 md:p-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <svg 
                        className="w-8 h-8 md:w-12 md:h-12 text-white ml-1" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Caption */}
            <p className="text-center text-white/60 text-sm mt-4 font-['Jost',sans-serif]">
              Watch this video to see how we can transform your business
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/80 hover:bg-black text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
              aria-label="Close video"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Modal Info */}
            <div className="p-4 bg-[#1C2321]">
              <h3 className="text-white font-['Cormorant_Garamond',serif] text-lg font-semibold">
                Founder's Message
              </h3>
              <p className="text-white/70 text-sm mt-1">
                Watch this quick 3-minute video to understand our approach and how we can help you succeed.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add animation keyframes for modal */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation-duration: 0.3s;
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation-name: fade-in;
        }
        
        .zoom-in {
          animation-name: zoom-in;
        }
      `}</style>
    </>
  )
}

export default CTABand