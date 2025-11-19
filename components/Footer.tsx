import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { PageView } from '../App';

interface FooterProps {
    onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (target: PageView | string, e: React.MouseEvent) => {
      e.preventDefault();
      
      const isPage = (t: string): t is PageView => {
        return ['home', 'why-pricey', 'full-fibre', 'sim-o', 'protect-plus', 'our-journey', 'contact', 'terms-business', 'terms-website', 'privacy', 'accessibility'].includes(t);
      };

      if(isPage(target)) {
          onNavigate(target);
      } else {
          onNavigate('home');
          setTimeout(() => {
            const el = document.querySelector(target);
            if(el) el.scrollIntoView({behavior: 'smooth'});
          }, 100);
      }
  }

  return (
    <footer className="bg-fusione-black text-white py-16 border-t-2 border-fusione-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-10 h-10 bg-fusione-yellow text-fusione-black rounded-lg border-2 border-white flex items-center justify-center shadow-[4px_4px_0px_0px_#fff]">
                 {/* New Interlocking Squares Logo */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2.5" />
                    <rect x="9" y="9" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
               </div>
               <span className="font-serif font-bold text-2xl tracking-tight">Fusione</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-bold">
              Broadband, Mobile, and Security. United at last.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-fusione-yellow">Solutions</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li><a href="#" onClick={(e) => handleNav('full-fibre', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Full-Fibre Broadband</a></li>
              <li><a href="#" onClick={(e) => handleNav('sim-o', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">SIM-Only Mobile</a></li>
              <li><a href="#" onClick={(e) => handleNav('protect-plus', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Protect+ Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-fusione-yellow">Company</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li><a href="#" onClick={(e) => handleNav('our-journey', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Our Journey</a></li>
              <li><a href="#" onClick={(e) => handleNav('why-pricey', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Why So Pricey?</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-fusione-yellow">Legal</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li><a href="#" onClick={(e) => handleNav('terms-business', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Terms of Business</a></li>
              <li><a href="#" onClick={(e) => handleNav('terms-website', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Terms of Website Use</a></li>
              <li><a href="#" onClick={(e) => handleNav('privacy', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => handleNav('accessibility', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Vulnerability & Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-fusione-yellow">Support</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-300">
              <li><a href="#" onClick={(e) => handleNav('#support', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Help & Support</a></li>
              <li><a href="#" className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Status</a></li>
              <li><a href="#" onClick={(e) => handleNav('contact', e)} className="hover:text-white hover:underline decoration-fusione-yellow decoration-2 underline-offset-4 transition-all">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="text-center md:text-left">
                <p className="text-gray-500 text-sm font-bold">
                  © {new Date().getFullYear()} Fusione Communications Limited.
                </p>
                <p className="text-gray-600 text-xs font-bold mt-0.5">
                  Company Reg: 16808417
                </p>
            </div>
            <a href="#" onClick={(e) => handleNav('privacy', e)} className="text-gray-500 text-sm font-bold hover:text-fusione-yellow transition-colors">
              Cookies Policy
            </a>
          </div>
          <div className="flex space-x-6">
             <a href="#" className="text-gray-400 hover:text-fusione-yellow transition-colors transform hover:-translate-y-1"><Facebook size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-fusione-yellow transition-colors transform hover:-translate-y-1"><Twitter size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-fusione-yellow transition-colors transform hover:-translate-y-1"><Instagram size={20} /></a>
             <a href="#" className="text-gray-400 hover:text-fusione-yellow transition-colors transform hover:-translate-y-1"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};