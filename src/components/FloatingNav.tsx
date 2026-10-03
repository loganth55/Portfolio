import React from 'react';

interface FloatingNavProps {
  activeSection: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ activeSection }) => {
  const sections = [
    { id: 'home', num: '01', label: 'Home' },
    { id: 'about', num: '02', label: 'About' },
    { id: 'projects', num: '03', label: 'Projects' },
    { id: 'experience', num: '04', label: 'Experience' },
    { id: 'skills', num: '05', label: 'Skills' },
    { id: 'contact', num: '06', label: 'Contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Section navigation indicator"
      className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6"
    >
      <div className="flex flex-col gap-3.5 bg-[#101218]/60 backdrop-blur-md p-3 rounded-2xl border border-white/[0.05]">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => handleClick(e, sec.id)}
              className="group flex items-center gap-3 py-1 transition-all duration-300 focus:outline-none"
            >
              <div
                className={`w-1 transition-all duration-300 rounded-full ${
                  isActive
                    ? 'h-6 bg-[#00D5FF] shadow-[0_0_8px_#00D5FF]'
                    : 'h-2 bg-white/20 group-hover:h-3.5 group-hover:bg-white/40'
                }`}
              />
              <span
                className={`font-mono-num text-[11px] transition-colors duration-200 ${
                  isActive
                    ? 'text-[#00D5FF] font-semibold'
                    : 'text-[#626775] group-hover:text-[#9296A3]'
                }`}
              >
                {sec.num}
              </span>
              <span
                className={`text-[11px] tracking-wide transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#626775] group-hover:text-[#9296A3]'
                }`}
              >
                {sec.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
