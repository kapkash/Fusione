import React, { useEffect, useRef, useState } from 'react';
import { Plan } from '../types';
import { Check, ArrowRight, Star, HelpCircle, Wifi, Layers, House } from 'lucide-react';
import { PageView } from '../App';

interface PackagesProps {
    onNavigate: (page: PageView) => void;
}

const plans: Plan[] = [
  {
    id: '300',
    name: "Fusione - 300",
    speedDown: 300,
    speedUp: 50,
    price: 30,
    dataLimit: 'Unlimited',
    description: 'The "Just Right" one. Perfect for couples or small flats. Stream in 4K without a hiccup and scroll TikTok until your thumbs fall off.',
    features: ['300 Mbps Download', '50 Mbps Upload', 'eero 6+', 'Priority Support', 'Wi-Fi Guarantee', '18 Month Contract'],
  },
  {
    id: '500',
    name: "Fusione - 500",
    speedDown: 500,
    speedUp: 75,
    price: 38,
    dataLimit: 'Unlimited',
    isPopular: true,
    description: 'The family peacekeeper. Stop the kids screaming about "lag" while you binge-watch a crime drama in the other room. Everyone wins.',
    features: ['500 Mbps Download', '75 Mbps Upload', 'eero 6+', 'Priority Support', 'Wi-Fi Guarantee', '18 Month Contract'],
  },
  {
    id: '900',
    name: "Fusione - 900",
    speedDown: 900,
    speedUp: 115,
    price: 45,
    dataLimit: 'Unlimited',
    description: 'Absolute overkill. You probably don\'t need this speed, but it feels good to know you can download a 100GB game while making a piece of toast.',
    features: ['900 Mbps Download', '115 Mbps Upload', 'eero 6+', 'VIP Priority Support', 'Static IP', '18 Month Contract'],
  },
  ];

export const Packages: React.FC<PackagesProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if(sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="packages" className="py-24 bg-white border-b-2 border-fusione-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-fusione-black text-white font-bold text-sm uppercase tracking-wider mb-4 rotate-2 animate-wiggle">Simple Pricing</span>
          <h3 className="font-serif text-4xl md:text-6xl font-black text-fusione-black mb-6">Pick your poison.</h3>
          <p className="text-xl font-medium text-gray-600 max-w-2xl mx-auto">
            Three plans. Serious speeds. No messing about.
          </p>
        </div>

        {/* Plans Grid */}
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-7xl mx-auto"
        >
          {plans.map((plan, idx) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col bg-white border-2 border-fusione-black rounded-2xl transition-all duration-300 ${
                plan.isPopular 
                  ? 'shadow-neo-lg transform md:-translate-y-4 z-10' 
                  : 'shadow-neo hover:shadow-neo-hover hover:-translate-y-2'
              } ${isVisible ? 'opacity-100 animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fusione-yellow text-fusione-black border-2 border-fusione-black px-4 py-1 rounded-full text-sm font-black uppercase tracking-wider flex items-center gap-1 shadow-[2px_2px_0px_0px_#000] w-max animate-bounce">
                  <Star size={16} className="fill-black" /> Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className={`p-6 border-b-2 border-fusione-black ${plan.isPopular ? 'bg-fusione-yellow/10' : 'bg-gray-50'} rounded-t-xl`}>
                <h4 className="font-serif text-2xl lg:text-3xl font-bold text-fusione-black mb-2">{plan.name}</h4>
                <div className="flex items-baseline">
                  <span className="text-4xl lg:text-5xl font-black text-fusione-black">£{plan.price}</span>
                  <span className="text-gray-600 font-bold ml-1">/mo</span>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex-grow">
                <p className="text-gray-600 font-medium mb-6 min-h-[5.5rem] text-base leading-relaxed">{plan.description}</p>
                
                {/* Speed Box */}
                <div className="flex gap-0 mb-3 border-2 border-fusione-black rounded-xl overflow-hidden bg-white shadow-sm group hover:shadow-neo-sm transition-shadow">
                    <div className="flex-1 py-3 px-1 text-center border-r-2 border-fusione-black bg-fusione-cream group-hover:bg-fusione-yellow transition-colors">
                        <span className="block text-2xl font-black text-fusione-black">{plan.speedDown}</span>
                        <span className="text-[9px] uppercase font-black text-gray-500 tracking-wider">Mbps Down</span>
                    </div>
                    <div className="flex-1 py-3 px-1 text-center bg-white group-hover:bg-fusione-mint transition-colors">
                        <span className="block text-2xl font-black text-fusione-black">{plan.speedUp}</span>
                        <span className="text-[9px] uppercase font-black text-gray-500 tracking-wider">Mbps Up</span>
                    </div>
                </div>
                
                <p className="text-[9px] text-gray-400 font-bold text-center mb-6 italic leading-tight">
                    *Actual speeds may vary and are subject to network conditions.
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-fusione-black w-4 h-4 mr-3 flex-shrink-0 mt-1" strokeWidth={3} />
                      <span className="text-gray-700 font-bold text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 pt-0">
                <button className={`w-full py-3 rounded-xl font-bold text-lg border-2 border-fusione-black transition-all flex items-center justify-center gap-2 group ${
                    plan.isPopular
                    ? 'bg-fusione-black text-fusione-yellow hover:bg-white hover:text-fusione-black shadow-neo-sm hover:shadow-neo'
                    : 'bg-white text-fusione-black hover:bg-fusione-yellow shadow-neo-sm hover:shadow-neo'
                }`}>
                    I'll Take It <ArrowRight size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Meet The Kit - Eero Section */}
        <div className="mb-16 max-w-6xl mx-auto">
            <div className="bg-fusione-black text-white rounded-3xl p-8 md:p-12 border-2 border-fusione-black shadow-neo-lg relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                {/* Abstract Pattern */}
                <div className="absolute right-0 top-0 w-1/2 h-full bg-fusione-yellow opacity-5 transform skew-x-12 hidden md:block"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block bg-fusione-mint text-fusione-black px-3 py-1 rounded-md font-bold text-xs uppercase tracking-widest mb-4 shadow-[4px_4px_0px_0px_#fff] border-2 border-white animate-pulse">
                           Included Free
                        </div>
                        <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                           Meet the beast: <br/>
                           <span className="text-fusione-yellow">eero 6+</span>
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 font-medium">
                           We don't give you a cheap plastic potato. We give you the eero 6+. It's got 160 MHz channel support (tech speak for 'very fast'), Gigabit+ speeds, and looks better than most modern art.
                        </p>

                        <div className="space-y-6">
                           {/* Feature 1 */}
                           <div className="flex gap-4 group">
                               <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border-2 border-white/20 group-hover:bg-fusione-yellow group-hover:border-fusione-black group-hover:text-fusione-black transition-all">
                                   <Wifi className="current-color" />
                               </div>
                               <div>
                                   <h5 className="font-bold text-lg text-white">Wi-Fi 6 + 160 MHz</h5>
                                   <p className="text-sm text-gray-400">Access wider channels. Think of it as upgrading your Wi-Fi from a B-road to a motorway.</p>
                               </div>
                           </div>
                           
                           {/* Feature 2 */}
                           <div className="flex gap-4 group">
                               <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border-2 border-white/20 group-hover:bg-fusione-mint group-hover:border-fusione-black group-hover:text-fusione-black transition-all">
                                   <Layers className="current-color" />
                               </div>
                               <div>
                                   <h5 className="font-bold text-lg text-white">Gigabit+ Speeds</h5>
                                   <p className="text-sm text-gray-400">Supports speeds up to 1 Gbps. Streaming 4K in the attic? Easy.</p>
                               </div>
                           </div>

                           {/* Feature 3 */}
                           <div className="flex gap-4 group">
                               <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border-2 border-white/20 group-hover:bg-fusione-coral group-hover:border-fusione-black group-hover:text-fusione-black transition-all">
                                   <House className="current-color" />
                               </div>
                               <div>
                                   <h5 className="font-bold text-lg text-white">Smart Home Hub</h5>
                                   <p className="text-sm text-gray-400">Built-in Zigbee hub connects your smart lights and locks without extra dongles.</p>
                               </div>
                           </div>
                        </div>
                    </div>
                    
                    {/* Illustration */}
                    <div className="order-1 lg:order-2 flex justify-center">
                        <div className="relative w-full max-w-md">
                             {/* Decorative blobs behind */}
                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-fusione-purple rounded-full blur-3xl opacity-30 animate-float"></div>
                             
                             <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                <svg viewBox="0 0 400 350" className="w-full h-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <filter id="shadow">
                                            <feDropShadow dx="8" dy="8" stdDeviation="0" floodColor="#121212"/>
                                        </filter>
                                    </defs>
                                    
                                    {/* Stylized Router Shape - Isometric-ish Wedge */}
                                    <g filter="url(#shadow)">
                                        {/* Main Body */}
                                        <path 
                                            d="M 80 200 
                                               L 320 200 
                                               L 340 240 
                                               L 60 240 
                                               Z" 
                                            fill="#FFFFFF" 
                                            stroke="#121212" 
                                            strokeWidth="4"
                                            strokeLinejoin="round"
                                        />
                                        
                                        {/* Top Face (Curved) */}
                                        <path 
                                            d="M 80 200 
                                               C 80 200, 100 120, 140 110 
                                               L 260 110 
                                               C 300 120, 320 200, 320 200 
                                               Z" 
                                            fill="#FFFFFF" 
                                            stroke="#121212" 
                                            strokeWidth="4"
                                            strokeLinejoin="round"
                                        />
                                        
                                        {/* Gloss/Reflection line */}
                                        <path 
                                            d="M 150 130 L 250 130" 
                                            stroke="#E5E7EB" 
                                            strokeWidth="6" 
                                            strokeLinecap="round"
                                        />
                                        
                                        {/* LED Status Light */}
                                        <circle cx="200" cy="220" r="6" fill="#34D399" stroke="#121212" strokeWidth="2" />
                                    </g>

                                    {/* Floating Signal Elements */}
                                    <g className="animate-bounce-slow">
                                        <circle cx="50" cy="100" r="20" fill="#FFD600" stroke="#121212" strokeWidth="3" />
                                        <path d="M40 90 L60 110 M60 90 L40 110" stroke="#121212" strokeWidth="3" strokeLinecap="round" />
                                    </g>
                                    
                                    <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                                        <rect x="320" y="60" width="40" height="40" rx="8" fill="#F87171" stroke="#121212" strokeWidth="3" transform="rotate(15 340 80)" />
                                        <path d="M335 80 L345 80 M340 75 L340 85" stroke="#121212" strokeWidth="3" strokeLinecap="round" transform="rotate(15 340 80)" />
                                    </g>

                                    <g className="animate-bounce" style={{ animationDuration: '2.5s' }}>
                                         <path d="M 160 60 L 240 60 L 200 10 Z" fill="#60A5FA" stroke="#121212" strokeWidth="3" />
                                    </g>

                                </svg>

                                <div className="absolute bottom-10 right-0 bg-fusione-yellow text-fusione-black text-sm font-black px-4 py-2 rounded-lg border-2 border-black uppercase transform -rotate-6 shadow-neo-sm hover:rotate-0 hover:scale-110 transition-all cursor-default">
                                    Worth £139
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* The Elephant in the Room Section */}
        <div className="max-w-4xl mx-auto bg-fusione-cream border-2 border-fusione-black rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-neo group hover:shadow-neo-hover transition-all">
           <div className="bg-white p-4 rounded-full border-2 border-fusione-black shadow-neo-sm flex-shrink-0 group-hover:rotate-12 transition-transform">
             <HelpCircle size={40} className="text-fusione-black"/>
           </div>
           <div className="text-center md:text-left flex-grow">
              <h4 className="font-serif text-2xl font-bold text-fusione-black mb-2">Eyeing the price tag?</h4>
              <p className="font-medium text-gray-700">
                 Yes, we cost more than the "bargain basement" providers. We aren't ashamed of it. Want to know where your extra tenner actually goes?
              </p>
           </div>
           <button 
             onClick={() => onNavigate('why-pricey')}
             className="bg-white text-fusione-black border-2 border-fusione-black px-6 py-3 rounded-xl font-bold hover:bg-fusione-black hover:text-fusione-yellow transition-all shadow-neo-sm hover:shadow-neo whitespace-nowrap"
           >
              Explain Why
           </button>
        </div>

      </div>
    </section>
  );
};