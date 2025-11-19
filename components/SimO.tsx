import React from 'react';
import { ArrowLeft, Smartphone, Wifi, Globe } from 'lucide-react';

interface SimOProps {
  onBack: () => void;
}

export const SimO: React.FC<SimOProps> = ({ onBack }) => {
  const plans = [
    { name: "The Light One", data: "30GB", price: 10, color: "bg-fusione-yellow" },
    { name: "The Heavy One", data: "100GB", price: 15, color: "bg-fusione-mint" },
    { name: "The Greedy One", data: "Unlimited", price: 20, color: "bg-fusione-coral", popular: true },
  ];

  return (
    <div className="bg-fusione-cream min-h-screen pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button onClick={onBack} className="group flex items-center gap-2 font-bold text-fusione-black mb-8 hover:text-fusione-yellow transition-colors">
          <div className="bg-white border-2 border-fusione-black p-2 rounded-full shadow-neo-sm group-hover:shadow-neo transition-all">
            <ArrowLeft size={20} strokeWidth={3} />
          </div>
          Back home
        </button>

        <div className="text-center mb-16">
            <div className="inline-block bg-fusione-black text-white px-4 py-1 rounded-full border-2 border-fusione-black mb-4 -rotate-2 font-bold uppercase tracking-widest">
                New!
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-black text-fusione-black mb-6 leading-tight">
                Fusione <span className="text-fusione-purple">SIM-O</span>
            </h1>
            <p className="text-xl font-medium text-gray-700 max-w-2xl mx-auto">
                Data that doesn't run out when you're on the bus. 5G speeds that match our broadband. 
                30-day rolling contracts because commitment is scary.
            </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {plans.map((plan, i) => (
                <div key={i} className={`relative bg-white border-2 border-fusione-black rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 ${plan.popular ? 'shadow-neo-lg scale-105 z-10' : 'shadow-neo'}`}>
                    {plan.popular && (
                        <div className="bg-fusione-black text-white text-center py-1 font-bold text-xs uppercase tracking-widest">Most Popular</div>
                    )}
                    <div className={`p-6 ${plan.color} border-b-2 border-fusione-black text-center`}>
                        <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                        <div className="flex justify-center items-baseline">
                            <span className="text-4xl font-black">£{plan.price}</span>
                            <span className="font-bold text-fusione-black/70">/mo</span>
                        </div>
                    </div>
                    <div className="p-8 text-center">
                        <div className="text-5xl font-black mb-2">{plan.data}</div>
                        <div className="font-bold text-gray-500 uppercase tracking-wide text-sm mb-8">5G Data</div>
                        <ul className="space-y-3 text-left inline-block mx-auto">
                            <li className="flex items-center gap-2 font-bold"><Smartphone size={18}/> Unlimited Calls</li>
                            <li className="flex items-center gap-2 font-bold"><Wifi size={18}/> Unlimited Texts</li>
                            <li className="flex items-center gap-2 font-bold"><Globe size={18}/> EU Roaming</li>
                        </ul>
                        <button className="w-full mt-8 bg-white border-2 border-fusione-black text-fusione-black py-3 rounded-xl font-bold hover:bg-fusione-black hover:text-white transition-colors shadow-neo-sm hover:shadow-neo">
                            Order SIM
                        </button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};