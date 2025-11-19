import React from 'react';
import { ArrowLeft, Eye, Bug } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const Accessibility: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="bg-fusione-cream min-h-screen pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={onBack} className="group flex items-center gap-2 font-bold text-fusione-black mb-8 hover:text-fusione-yellow transition-colors">
          <div className="bg-white border-2 border-fusione-black p-2 rounded-full shadow-neo-sm group-hover:shadow-neo transition-all">
            <ArrowLeft size={20} strokeWidth={3} />
          </div>
          Back home
        </button>

        <div className="mb-12">
            <div className="inline-block bg-fusione-black text-white px-4 py-1 rounded-full border-2 border-fusione-black mb-4 font-bold uppercase tracking-widest">
                Legals
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-black text-fusione-black mb-6">
                Vulnerability & Accessibility
            </h1>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
                Making sure the web is safe and usable for everyone.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
            
            {/* Accessibility Section */}
            <div className="bg-white border-2 border-fusione-black rounded-3xl p-8 md:p-12 shadow-neo">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-fusione-mint text-fusione-black rounded-xl border-2 border-fusione-black flex items-center justify-center shadow-neo-sm">
                        <Eye size={24}/>
                    </div>
                    <h2 className="font-serif text-3xl font-bold">Accessibility</h2>
                </div>
                
                <p className="text-gray-600 font-medium mb-4 text-lg">
                    The internet is for everyone. We try our best to make the Fusione website usable for all, regardless of ability or technology.
                </p>

                <h3 className="font-bold text-xl mb-2">What we're doing:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-medium mb-6">
                    <li>High contrast colours (Neo-Brutalism is actually great for this).</li>
                    <li>Clear fonts (Plus Jakarta Sans is very legible).</li>
                    <li>Keyboard navigation support.</li>
                    <li>Alt text on images (even the quirky ones).</li>
                </ul>

                <p className="text-gray-600 font-medium">
                    Struggling to use the site? We want to know. Email <a href="mailto:access@fusione.co.uk" className="font-bold underline">access@fusione.co.uk</a> and we'll fix it.
                </p>
            </div>

            {/* Vulnerability Disclosure */}
            <div className="bg-fusione-black text-white border-2 border-fusione-black rounded-3xl p-8 md:p-12 shadow-neo">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-fusione-coral text-fusione-black rounded-xl border-2 border-white flex items-center justify-center shadow-neo-sm">
                        <Bug size={24}/>
                    </div>
                    <h2 className="font-serif text-3xl font-bold">Vulnerability Disclosure</h2>
                </div>

                <p className="text-gray-300 font-medium mb-6 text-lg">
                    Found a bug? A security hole? A way to get free internet? (Please don't do that). We take security seriously and welcome reports from researchers.
                </p>

                <div className="bg-white/10 p-6 rounded-2xl border-2 border-white/20">
                    <h4 className="font-bold text-fusione-yellow mb-2">Reporting Process</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-300 font-medium">
                        <li>Do not exploit the vulnerability (obviously).</li>
                        <li>Email details to <span className="text-white font-bold">security@fusione.co.uk</span>.</li>
                        <li>Give us time to fix it before telling the world.</li>
                        <li>We might send you some swag as a thank you.</li>
                    </ol>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};