import React, { useEffect, useState } from 'react';
import { Palette, X } from 'lucide-react';

type Theme = 'bumble' | 'lilac' | 'mint' | 'candy';

export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('bumble');

  useEffect(() => {
    // Apply theme to body
    const body = document.body;
    body.classList.remove('theme-bumble', 'theme-lilac', 'theme-mint', 'theme-candy');
    if (currentTheme !== 'bumble') {
        body.classList.add(`theme-${currentTheme}`);
    }
  }, [currentTheme]);

  const themes: { id: Theme; name: string; color: string }[] = [
    { id: 'bumble', name: 'Bumble', color: '#FFD600' },
    { id: 'lilac', name: 'Lilac', color: '#C084FC' },
    { id: 'mint', name: 'Mint', color: '#34D399' },
    { id: 'candy', name: 'Candy', color: '#FB7185' },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-fusione-black text-white p-3 rounded-full shadow-neo transition-all hover:-translate-y-1 hover:shadow-neo-hover border-2 border-white flex items-center gap-2"
        >
          <Palette size={20} />
          <span className="font-bold text-sm hidden md:inline">Theme</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white border-2 border-fusione-black rounded-xl p-4 shadow-neo-lg animate-fade-in-up flex flex-col gap-3 min-w-[180px]">
            <div className="flex justify-between items-center border-b-2 border-gray-100 pb-2 mb-1">
                <span className="font-serif font-bold text-lg text-fusione-black">Pick a Vibe</span>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-fusione-black">
                    <X size={18} />
                </button>
            </div>
            
            <div className="space-y-2">
                {themes.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => setCurrentTheme(theme.id)}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg border-2 transition-all ${
                            currentTheme === theme.id 
                            ? 'bg-gray-100 border-fusione-black shadow-neo-sm' 
                            : 'border-transparent hover:bg-gray-50'
                        }`}
                    >
                        <div 
                            className="w-6 h-6 rounded-full border-2 border-black shadow-[1px_1px_0px_0px_#000]" 
                            style={{ backgroundColor: theme.color }}
                        ></div>
                        <span className="font-bold text-sm text-fusione-black">{theme.name}</span>
                    </button>
                ))}
            </div>
        </div>
      )}
    </div>
  );
};