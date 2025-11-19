import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Zap, HeartHandshake, Router } from 'lucide-react';

export const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      icon: <Router className="w-8 h-8 text-fusione-black" strokeWidth={2.5} />,
      bg: "bg-fusione-yellow",
      title: "Wi-Fi That Reaches The Loo",
      description: "Included eero 6+ blasts signal through thick walls, floors, and stubborn ceilings using Wi-Fi 6 tech."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-fusione-black" strokeWidth={2.5} />,
      bg: "bg-fusione-mint",
      title: "Love It Or Bin It",
      description: "Try us for 30 days. If we're rubbish, you can leave. No hard feelings."
    },
    {
      icon: <Zap className="w-8 h-8 text-fusione-black" strokeWidth={2.5} />,
      bg: "bg-fusione-coral",
      title: "Symmetrical Speeds",
      description: "Upload as fast as you download. Great for Zoom calls where you don't freeze face-first."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-fusione-black" strokeWidth={2.5} />,
      bg: "bg-fusione-blue",
      title: "Real Human Support",
      description: "Call us and speak to a real person. No robots, no nonsense."
    }
  ];

  return (
    <section id="features" className="py-24 bg-fusione-cream relative overflow-hidden border-b-2 border-fusione-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-20" ref={sectionRef}>
            <span className="inline-block py-1 px-3 border-2 border-fusione-black bg-white text-fusione-black font-bold text-sm tracking-wide uppercase mb-6 shadow-neo-sm -rotate-2">Why Us?</span>
            <h3 className="font-serif text-4xl md:text-5xl font-black text-fusione-black mb-8 leading-tight">
              Less buffering.<br/> More living.
            </h3>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
              We were fed up with rubbish internet, so we built our own. Ditch the rusty copper wires for pure fiber optics. It's basically magic glass tubes.
            </p>
        </div>
            
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-start bg-white p-8 rounded-2xl border-2 border-fusione-black transition-all duration-700 ease-out transform hover:shadow-neo ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 ${item.bg} rounded-xl border-2 border-fusione-black flex items-center justify-center mr-6 flex-shrink-0 shadow-neo-sm`}>
                {item.icon}
              </div>
              <div>
                 <h4 className="font-serif text-xl font-bold text-fusione-black mb-2">{item.title}</h4>
                 <p className="text-gray-600 font-medium leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};