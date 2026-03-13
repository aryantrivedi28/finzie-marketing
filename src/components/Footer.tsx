import React from 'react'

const Footer = () => {
  return (
    <footer className="py-[26px] px-12 border-t border-[rgba(28,35,33,0.08)] flex justify-between items-center bg-[#F4F0E4]">
      <span className="text-[10px] text-[#8a8a82] tracking-[0.1em]">
        © 2024 ExecuMarketing. A Finzie Company.
      </span>
      <div className="flex gap-6">
        <a href="#" className="text-[10px] text-[#8a8a82] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-[#44A194]">
          Privacy
        </a>
        <a href="#" className="text-[10px] text-[#8a8a82] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-[#44A194]">
          Terms
        </a>
        <a href="#" className="text-[10px] text-[#8a8a82] no-underline tracking-[0.1em] transition-colors duration-300 hover:text-[#44A194]">
          Contact
        </a>
      </div>
    </footer>
  )
}

export { Footer }