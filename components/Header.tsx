import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { PageView } from '../App';

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onNavigate: (page: PageView) => void;
  currentPage: PageView;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu, onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string | PageView, e: React.MouseEvent) => {
    e.preventDefault();
    setDesktopMenuOpen(null); // Close dropdowns on click

    // Helper to check if string is a PageView
    const isPage = (t: string): t is PageView => {
        return ['home', 'why-pricey', 'full-fibre', 'sim-o', 'protect-plus', 'our-journey', 'contact', 'terms-business', 'terms-website', 'privacy', 'accessibility'].includes(t);
    };

    if (isPage(target)) {
        onNavigate(target);
    } else {
      // It's an anchor or hash
      if (currentPage !== 'home') {
          onNavigate('home');
          setTimeout(() => {
            const element = document.querySelector(target);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
      } else {
          const element = document.querySelector(target);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Explicitly close menu after navigation
    if(isMenuOpen) {
        toggleMenu();
    }
  };

  // Navigation Structure
  const navStructure = [
    { 
      label: 'Solutions', 
      type: 'dropdown', 
      items: [
        { label: 'Full-Fibre', target: 'full-fibre' },
        { label: 'SIM-O', target: 'sim-o' },
        { label: 'Protect+', target: 'protect-plus' },
      ]
    },
    { label: 'Why So Pricey?', target: 'why-pricey', type: 'link' },
    { label: 'Fusione - Our Journey', target: 'our-journey', type: 'link' },
    { label: 'Help & Support', target: '#support', type: 'link' },
    { label: 'Contact', target: 'contact', type: 'link' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-300 relative z-50 ${
        scrolled 
          ? 'bg-white border-2 border-fusione-black shadow-neo rounded-full px-6 py-2' 
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={(e) => handleNavClick('home', e)}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group relative z-50"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home', e as any)}
          >
            <div className={`w-10 h-10 bg-fusione-black rounded-lg flex items-center justify-center text-fusione-yellow border-2 border-transparent group-hover:bg-fusione-yellow group-hover:text-fusione-black group-hover:border-fusione-black transition-all duration-300 ${!scrolled && 'shadow-neo-sm'}`}>
              {/* New Interlocking Squares Logo */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2.5" />
                <rect x="9" y="9" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <span className={`font-serif font-bold text-2xl tracking-tight transition-colors text-fusione-black`}>
              Fusione
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navStructure.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.type === 'dropdown' ? (
                  <button 
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-all hover:bg-fusione-yellow/20 ${desktopMenuOpen === item.label ? 'bg-fusione-yellow/20' : ''}`}
                    onMouseEnter={() => setDesktopMenuOpen(item.label)}
                    onClick={() => setDesktopMenuOpen(desktopMenuOpen === item.label ? null : item.label)}
                    aria-expanded={desktopMenuOpen === item.label}
                    aria-haspopup="true"
                  >
                    {item.label} <ChevronDown size={16} strokeWidth={3}/>
                  </button>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => handleNavClick(item.target!, e)}
                    className={`px-4 py-2 rounded-lg text-sm font-bold transition-all hover:bg-fusione-yellow/20 hover:underline decoration-2 underline-offset-4 ${
                        currentPage === item.target ? 'bg-fusione-yellow text-fusione-black' : 'text-fusione-black'
                    }`}
                  >
                    {item.label}
                  </a>
                )}

                {/* Desktop Dropdown */}
                {item.type === 'dropdown' && desktopMenuOpen === item.label && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white border-2 border-fusione-black shadow-neo rounded-xl overflow-hidden py-2 animate-fade-in-up"
                    onMouseLeave={() => setDesktopMenuOpen(null)}
                    role="menu"
                  >
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.label}
                        href="#"
                        onClick={(e) => handleNavClick(subItem.target, e)}
                        className="block px-4 py-2 text-sm font-bold hover:bg-fusione-yellow hover:text-fusione-black transition-colors"
                        role="menuitem"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#check-availability"
              onClick={(e) => handleNavClick('#check-availability', e)}
              className="bg-fusione-yellow text-fusione-black border-2 border-fusione-black px-6 py-2.5 rounded-full text-sm font-bold shadow-neo hover:shadow-neo-hover hover:-translate-y-0.5 transition-all active:translate-y-0 active:shadow-neo"
            >
              Can I Get It?
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="p-2 rounded-lg text-fusione-black hover:bg-black/5 transition-colors relative z-50"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay & Backdrop */}
      {isMenuOpen && (
        <>
            {/* Backdrop for clicking outside to close */}
            <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden animate-fade-in-up"
                onClick={toggleMenu}
                aria-hidden="true"
            />
            
            {/* Menu Card */}
            <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white border-2 border-fusione-black shadow-neo rounded-2xl overflow-hidden z-40 max-h-[80vh] overflow-y-auto animate-pop origin-top">
            <div className="flex flex-col p-2">
                {navStructure.map((item, idx) => (
                <div key={idx}>
                    {item.type === 'dropdown' ? (
                    <div className="px-4 py-3 bg-gray-50 rounded-xl mb-2 border-2 border-transparent focus-within:border-fusione-yellow/30">
                        <span className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">{item.label}</span>
                        <div className="pl-4 border-l-4 border-fusione-yellow space-y-3">
                            {item.items?.map(subItem => (
                            <a
                                key={subItem.label}
                                href="#"
                                onClick={(e) => handleNavClick(subItem.target, e)}
                                className="block font-bold text-lg text-fusione-black hover:text-fusione-purple transition-colors"
                            >
                                {subItem.label}
                            </a>
                            ))}
                        </div>
                    </div>
                    ) : (
                    <a
                        href="#"
                        onClick={(e) => handleNavClick(item.target!, e)}
                        className={`block px-4 py-3 rounded-xl text-lg font-serif font-bold hover:bg-fusione-yellow transition-colors mb-1 ${
                            currentPage === item.target ? 'bg-fusione-yellow text-fusione-black shadow-neo-sm' : 'text-fusione-black'
                        }`}
                    >
                        {item.label}
                    </a>
                    )}
                </div>
                ))}
                
                <div className="h-px bg-fusione-black/10 my-3 mx-2"></div>
                <a
                href="#check-availability"
                onClick={(e) => handleNavClick('#check-availability', e)}
                className="block text-center bg-fusione-black text-white border-2 border-transparent px-4 py-4 rounded-xl font-bold mx-2 mb-2 hover:bg-fusione-yellow hover:text-fusione-black hover:border-fusione-black transition-all shadow-neo-sm active:shadow-none active:translate-y-1"
                >
                Can I Get It?
                </a>
            </div>
            </div>
        </>
      )}
    </header>
  );
};