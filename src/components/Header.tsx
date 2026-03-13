'use client'


interface HeaderProps {
  activePage: string
  onNavClick: (page: string) => void
}

const Header = ({ activePage, onNavClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 border-b border-[rgba(28,35,33,0.08)] bg-[#F4F0E4]">
      <div
        onClick={() => onNavClick('home')}
        className="flex flex-col gap-0.5 cursor-pointer"
      >
        <span className="font-['Cormorant_Garamond',serif] text-xl font-medium tracking-[0.12em] uppercase text-[#1C2321]">
          ExecuMarketing
        </span>
        <span className="text-[9px] tracking-[0.24em] uppercase text-[#44A194]">
          A Finzie Company
        </span>
      </div>

      <nav className="flex items-center gap-9">
        <NavButton
          label="Home"
          pageId="home"
          isActive={activePage === 'home'}
          onClick={() => onNavClick('home')}
        />
        <NavButton
          label="For Business"
          pageId="business"
          isActive={activePage === 'business'}
          onClick={() => onNavClick('business')}
        />
        <NavButton
          label="For Freelancers"
          pageId="freelancers"
          isActive={activePage === 'freelancers'}
          onClick={() => onNavClick('freelancers')}
        />
        <NavButton
          label="About Us"
          pageId="about"
          isActive={activePage === 'about'}
          onClick={() => onNavClick('about')}
        />
        <button
          onClick={() => onNavClick('home')}
          className="bg-[#44A194] text-white border-none px-[22px] py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#38857a]"
        >
          Start a Project
        </button>
      </nav>
    </header>
  )
}

interface NavButtonProps {
  label: string
  pageId: string
  isActive: boolean
  onClick: () => void
}

const NavButton = ({ label, pageId, isActive, onClick }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-none border-none font-['Jost',sans-serif] text-[11px] font-normal tracking-[0.18em] uppercase pb-0.5 relative transition-colors duration-300 ${
        isActive ? 'text-[#1C2321]' : 'text-[#8a8a82] hover:text-[#1C2321]'
      }`}
    >
      {label}
      <span
        className={`absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#44A194] transition-transform duration-300 origin-left ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </button>
  )
}

export { Header }