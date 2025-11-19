import React from 'react';
import { ArrowLeft, Zap, Divide, Cable, Rocket } from 'lucide-react';

interface FullFibreProps {
  onBack: () => void;
}

export const FullFibre: React.FC<FullFibreProps> = ({ onBack }) => {
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
          Back home
        </button>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-black text-fusione-black mb-6 leading-[0.9]">
            What on earth is <br/> <span className="text-fusione-mint text-shadow-black">Full-Fibre?</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed">
            It's the difference between a Ferrari and a shopping trolley.
          </p>
        </div>

        {/* The Main Explainer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
           <div className="bg-white border-2 border-fusione-black rounded-3xl p-8 shadow-neo-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fusione-yellow rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
                <h3 className="font-serif text-3xl font-bold mb-4 relative z-10">The Old Way (FTTC)</h3>
                <p className="text-gray-600 font-medium mb-6 relative z-10">
                    Fibre to the Cabinet. This uses fancy fibre optics to the green box down the street, but then switches to old, crusty copper phone wires to reach your house. It's like driving a Formula 1 car into a traffic jam.
                </p>
                <div className="flex items-center gap-4 opacity-50">
                    <Cable size={48} />
                    <div className="h-2 bg-gray-300 flex-grow rounded-full relative overflow-hidden">
                         <div className="absolute top-0 left-0 h-full w-1/2 bg-red-400"></div>
                    </div>
                    <span className="font-bold text-red-500">Slow</span>
                </div>
           </div>

           <div className="bg-fusione-black border-2 border-fusione-black rounded-3xl p-8 shadow-neo-lg text-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-fusione-mint rounded-full blur-3xl opacity-20 -ml-10 -mb-10"></div>
                <h3 className="font-serif text-3xl font-bold mb-4 relative z-10 text-fusione-mint">The Fusione Way (FTTP)</h3>
                <p className="text-gray-300 font-medium mb-6 relative z-10">
                    Fibre to the Premises. We run the glass fibre cable right into your hallway. No copper. No slowing down. Just pure beams of light delivering cat videos at the speed of... well, light.
                </p>
                <div className="flex items-center gap-4 text-fusione-mint">
                    <Zap size={48} className="fill-current"/>
                    <div className="h-2 bg-gray-700 flex-grow rounded-full relative overflow-hidden">
                         <div className="absolute top-0 left-0 h-full w-full bg-fusione-mint animate-pulse"></div>
                    </div>
                    <span className="font-bold">Rapid</span>
                </div>
           </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
                { icon: <Rocket/>, title: "Hypersonic Speed", desc: "Up to 1000Mbps. Download a game faster than you can make a brew." },
                { icon: <Divide/>, title: "Low Latency", desc: "Ping so low gamers will accuse you of cheating. No lag, just frags." },
                { icon: <Cable/>, title: "Future Proof", desc: "This cable can handle speeds faster than computers can even process yet." }
            ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border-2 border-fusione-black shadow-neo hover:-translate-y-1 transition-transform">
                    <div className="w-12 h-12 bg-fusione-yellow rounded-lg border-2 border-fusione-black flex items-center justify-center mb-4 shadow-neo-sm">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 2.5 })}
                    </div>
                    <h4 className="font-serif text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 font-medium">{item.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};