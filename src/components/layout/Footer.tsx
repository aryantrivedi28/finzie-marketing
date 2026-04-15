'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#1C2321] py-[72px] px-5 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px] pb-[60px] border-b border-white/8 mb-9">
          <div>
            <div className="font-['Cormorant_Garamond',serif] text-xl font-medium tracking-[0.14em] uppercase text-white mb-4">
              ExecuMarketing
            </div>
            <p className="text-[13px] leading-[1.8] text-white/40 max-w-[220px] mb-7">
              Marketing execution for businesses that can't afford to get it wrong.
            </p>
            <div className="flex gap-3.5">
              <a href="#" className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-white/40 no-underline text-[13px] font-medium font-['Jost',sans-serif] transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                in
              </a>
              <a href="#" className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-white/40 no-underline text-[13px] font-medium font-['Jost',sans-serif] transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                𝕏
              </a>
              <a href="#" className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-white/40 no-underline text-[13px] font-medium font-['Jost',sans-serif] transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                ig
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">Services</div>
            <ul className="list-none flex flex-col gap-3">
              <li><Link href="/services/ads" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Paid Media</Link></li>
              <li><Link href="/services/seo" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">SEO & Content</Link></li>
              <li><Link href="/services/social" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Social Media</Link></li>
              <li><Link href="/services/shopify" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">E-commerce & CRO</Link></li>
              <li><Link href="/services/content" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">CRM & Automation</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">Company</div>
            <ul className="list-none flex flex-col gap-3">
              <li><Link href="/about" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">About Us</Link></li>
              <li><Link href="/how" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">How It Works</Link></li>
              {/* <li><Link href="/case-studies" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Our Work</Link></li> */}
              <li><Link href="/business" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Join as a Specialist</Link></li>
              <li><Link href="/contact" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">Let's Talk</div>
            <p className="text-[13px] text-white/40 leading-[1.8] mb-5">
              Ready to start a project or just want to explore options? We respond within one business day.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2.5 bg-[#44A194] text-white font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.18em] uppercase py-[13px] px-6 no-underline transition-all duration-300 hover:bg-[#38857a]">
              Work With Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-white/25 tracking-[0.1em]">© 2026 ExecuMarketing. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[11px] text-white/25 no-underline tracking-[0.1em] transition-colors duration-300 hover:text-white/50">Privacy Policy</Link>
            <Link href="/terms" className="text-[11px] text-white/25 no-underline tracking-[0.1em] transition-colors duration-300 hover:text-white/50">Terms of Service</Link>
            <Link href="/contact" className="text-[11px] text-white/25 no-underline tracking-[0.1em] transition-colors duration-300 hover:text-white/50">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer