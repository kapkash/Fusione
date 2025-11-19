import React from 'react';
import { ArrowLeft, ShieldAlert, Lock, Eye, Baby } from 'lucide-react';

interface ProtectPlusProps {
  onBack: () => void;
}

export const ProtectPlus: React.FC<ProtectPlusProps> = ({ onBack }) => {
  return (
    <div className="bg-fusione-cream min-h-screen pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={onBack} className="group flex items-center gap-2 font-bold text-fusione-black mb-8 hover:text-fusione-yellow transition-colors">
          <div className="bg-white border-2 border-fusione-black p-2 rounded-full shadow-neo-sm group-hover:shadow-neo transition-all">
            <ArrowLeft size={20} strokeWidth={3} />
          </div>
          Back home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <div className="inline-block bg-fusione-blue text-white px-3 py-1 rounded-md border-2 border-fusione-black font-bold text-sm uppercase tracking-widest mb-4 shadow-neo-sm">
                    Add-on
                </div>
                <h1 className="font-serif text-5xl md:text-6xl font-black text-fusione-black mb-6 leading-tight">
                    Fusione <br/> <span className="text-fusione-blue">Protect+</span>
                </h1>
                <p className="text-xl font-medium text-gray-700 mb-8">
                    The digital bouncer for your home network. Keep the nasties out and stop the kids buying crypto with your credit card.
                </p>
                <div className="text-3xl font-black text-fusione-black mb-2">£5 <span className="text-lg text-gray-500 font-bold">/mo</span></div>
                <p className="text-sm font-bold text-gray-500 mb-8">First 3 months free, obviously.</p>
                
                <button className="bg-fusione-blue text-white border-2 border-fusione-black px-8 py-4 rounded-xl font-black text-lg shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all">
                    Add to Broadband
                </button>
            </div>

            <div className="relative">
                <div className="bg-white border-2 border-fusione-black rounded-3xl p-8 shadow-neo-lg z-10 relative">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-fusione-cream p-4 rounded-xl border-2 border-fusione-black">
                            <ShieldAlert className="mb-2 text-fusione-coral" size={32}/>
                            <h4 className="font-bold">Virus Blocker</h4>
                            <p className="text-xs text-gray-600 font-bold">Stops malware at the door.</p>
                        </div>
                        <div className="bg-fusione-cream p-4 rounded-xl border-2 border-fusione-black">
                            <Baby className="mb-2 text-fusione-mint" size={32}/>
                            <h4 className="font-bold">Parental Controls</h4>
                            <p className="text-xs text-gray-600 font-bold">Block the dodgy stuff.</p>
                        </div>
                        <div className="bg-fusione-cream p-4 rounded-xl border-2 border-fusione-black">
                            <Lock className="mb-2 text-fusione-purple" size={32}/>
                            <h4 className="font-bold">Password Vault</h4>
                            <p className="text-xs text-gray-600 font-bold">Forget your logins safely.</p>
                        </div>
                        <div className="bg-fusione-cream p-4 rounded-xl border-2 border-fusione-black">
                            <Eye className="mb-2 text-fusione-yellow" size={32}/>
                            <h4 className="font-bold">Dark Web Monitor</h4>
                            <p className="text-xs text-gray-600 font-bold">We watch, so you don't have to.</p>
                        </div>
                     </div>
                </div>
                {/* Decoration */}
                <div className="absolute -top-4 -right-4 w-full h-full bg-fusione-blue rounded-3xl border-2 border-fusione-black -z-0"></div>
            </div>
        </div>

      </div>
    </div>
  );
};