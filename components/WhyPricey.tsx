import React from 'react';
import { ArrowLeft, Server, Shield, Coffee, Heart } from 'lucide-react';

interface WhyPriceyProps {
  onBack: () => void;
}

export const WhyPricey: React.FC<WhyPriceyProps> = ({ onBack }) => {
  const reasons = [
    {
      icon: <Server size={32} strokeWidth={2.5} />,
      title: "We don't cram the pipes",
      bg: "bg-fusione-mint",
      desc: "Cheap ISPs are like a rush-hour train. They squeeze thousands of people onto one line and hope nobody notices. We keep our network uncongested. You're paying for elbow room."
    },
    {
      icon: <Shield size={32} strokeWidth={2.5} />,
      title: "Your data is yours",
      bg: "bg-fusione-purple",
      desc: "We sell internet, not your browsing history. Many 'cheap' providers make their profit by selling your data to advertisers. We think that's gross. We'd rather just charge you for the broadband."
    },
    {
      icon: <Coffee size={32} strokeWidth={2.5} />,
      title: "We pay humans properly",
      bg: "bg-fusione-yellow",
      desc: "Our support team aren't reading off a script in a dungeon. They are real tech experts who can actually fix things. We pay them good wages so they stay happy. Happy staff = happy you."
    },
    {
      icon: <Heart size={32} strokeWidth={2.5} />,
      title: "Hardware that isn't e-waste",
      bg: "bg-fusione-coral",
      desc: "Most free routers are cheap plastic potatoes. We give you an eero 6+. It's a Wi-Fi 6 beast that actually reaches the back bedroom. Good kit costs money, simple as that."
    }
  ];

  return (
    <div className="bg-fusione-cream min-h-screen pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 font-bold text-fusione-black mb-8 hover:text-fusione-yellow transition-colors"
        >
          <div className="bg-white border-2 border-fusione-black p-2 rounded-full shadow-neo-sm group-hover:shadow-neo transition-all">
            <ArrowLeft size={20} strokeWidth={3} />
          </div>
          Back to normal
        </button>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-fusione-black text-fusione-yellow border-2 border-fusione-black px-4 py-1 rounded-full shadow-neo mb-6 rotate-2">
            <span className="text-sm font-black uppercase tracking-wide">The Elephant in the Room</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-fusione-black mb-8 leading-[0.9]">
            Yep, we cost <br/> a few quid more.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
            Most ISPs fight to be the cheapest. We fight to be the only one you don't want to throw out the window.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white border-2 border-fusione-black rounded-2xl p-8 shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all">
              <div className={`w-16 h-16 ${reason.bg} border-2 border-fusione-black rounded-xl flex items-center justify-center mb-6 shadow-neo-sm`}>
                <div className="text-fusione-black">{reason.icon}</div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-fusione-black mb-4">{reason.title}</h3>
              <p className="text-gray-700 font-medium leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The "Worth It" Conclusion */}
        <div className="bg-fusione-black text-white rounded-3xl p-8 md:p-12 border-2 border-fusione-black shadow-neo-lg text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-fusione-yellow opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
           <div className="relative z-10">
             <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">So, is it worth it?</h3>
             <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
               If you enjoy staring at a loading spinner, probably not. If you want internet that works as hard as you do, then absolutely.
             </p>
             <button 
               onClick={onBack}
               className="bg-fusione-yellow text-fusione-black border-2 border-white px-8 py-4 rounded-xl font-black text-lg shadow-[4px_4px_0px_0px_#fff] hover:translate-y-1 hover:shadow-none transition-all"
             >
               Fair enough, take my money
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};