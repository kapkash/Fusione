import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Rocket, Coffee, Frown, PartyPopper } from 'lucide-react';

interface OurJourneyProps {
  onBack: () => void;
}

export const OurJourney: React.FC<OurJourneyProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            if(containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if(containerRef.current) observer.observe(containerRef.current);
    return () => { if(containerRef.current) observer.unobserve(containerRef.current); }
  }, []);

  const timeline = [
    {
      year: "2022",
      title: "The Meltdown",
      icon: <Frown size={24} />,
      desc: "Our founder, Dave, tried to watch a football match in 4K. It buffered during the penalty shootout. Dave threw a coaster at the TV. Fusione was born out of pure rage."
    },
    {
      year: "2023",
      title: "The Caffeinated Phase",
      icon: <Coffee size={24} />,
      desc: "We drank 4,000 coffees and figured out how to lay fibre optic cables without digging up the entire country. We hired people who actually know what a router is."
    },
    {
      year: "2024",
      title: "Liftoff",
      icon: <Rocket size={24} />,
      desc: "We launched. Our first customer, Mrs. Higgins, downloaded a knitting pattern in 0.002 seconds. She was thrilled. We had a cake."
    },
    {
      year: "Today",
      title: "World Domination (ish)",
      icon: <PartyPopper size={24} />,
      desc: "We are now the ISP for people who hate ISPs. We are taking over the UK, one fast connection at a time. Still no robots."
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
          Back home
        </button>

        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block bg-fusione-yellow text-fusione-black border-2 border-fusione-black px-4 py-1 rounded-full shadow-neo mb-6 -rotate-1 animate-wiggle">
            <span className="text-sm font-black uppercase tracking-wide">Origin Story</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-black text-fusione-black mb-8 leading-[0.9] animate-slide-up">
            We started in a <br/> <span className="text-fusione-purple">pub.</span> Obviously.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Fusione wasn't built in a boardroom by suits. It was built because we were tired of terrible service, hidden fees, and Hold Music from Hell.
          </p>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-fusione-black transform md:-translate-x-1/2 transition-all duration-1000 origin-top ${isVisible ? 'scale-y-100' : 'scale-y-0'}`}></div>

            <div className="space-y-12">
                {timeline.map((item, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Dot */}
                        <div className={`absolute left-8 md:left-1/2 w-6 h-6 bg-fusione-yellow border-2 border-fusione-black rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_0_4px_#FFFDF5] transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ transitionDelay: `${index * 200 + 500}ms` }}></div>

                        {/* Content Card */}
                        <div className={`w-full md:w-1/2 pl-20 md:pl-0 transition-all duration-700 ${
                            isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}>
                            <div className={`bg-white p-6 rounded-2xl border-2 border-fusione-black shadow-neo hover:shadow-neo-hover transition-all hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="font-black text-2xl text-fusione-purple">{item.year}</span>
                                    <div className="p-2 bg-fusione-cream rounded-lg border-2 border-fusione-black group-hover:rotate-12 transition-transform">
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { strokeWidth: 2.5 })}
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600 font-medium">{item.desc}</p>
                            </div>
                        </div>
                        
                        {/* Empty space for other side */}
                        <div className="hidden md:block w-1/2"></div>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-24 text-center">
            <h3 className="font-serif text-3xl font-bold mb-6">Join the rebellion</h3>
            <p className="text-gray-600 font-medium mb-8 max-w-lg mx-auto">We promise to never treat you like a number. Unless that number is "Number 1 Customer". (Cheesy, sorry).</p>
            <button onClick={onBack} className="bg-fusione-black text-white px-8 py-4 rounded-xl font-bold text-lg shadow-neo border-2 border-transparent hover:bg-fusione-yellow hover:text-fusione-black hover:border-fusione-black hover:shadow-neo-hover transition-all animate-bounce-slow">
                See our Plans
            </button>
        </div>

      </div>
    </div>
  );
};