import React, { useState } from 'react';
import { MapPin, CheckCircle2, Loader2, XCircle, ArrowDown } from 'lucide-react';
import toast from 'react-hot-toast';

export const Hero: React.FC = () => {
  const [postcode, setPostcode] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<'none' | 'success' | 'fail'>('none');

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postcode.trim()) return;
    
    setChecking(true);
    setResult('none');
    
    setTimeout(() => {
      setChecking(false);
      if (postcode.length > 5) {
        setResult('success');
        toast.success("Get in! We can connect you.");
      } else {
        setResult('fail');
        toast.error("Computer says no.");
      }
    }, 1500);
  };

  return (
    <section id="check-availability" className="relative bg-fusione-yellow min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 border-b-2 border-fusione-black">
      
      {/* Geometric Decorations */}
      <div className="absolute top-20 left-[10%] w-16 h-16 border-2 border-fusione-black bg-fusione-purple rounded-full shadow-neo animate-float hidden md:block"></div>
      <div className="absolute bottom-20 right-[10%] w-24 h-24 border-2 border-fusione-black bg-fusione-coral rounded-none rotate-12 shadow-neo animate-float hidden md:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-[5%] w-12 h-12 border-2 border-fusione-black bg-white rounded-full shadow-neo animate-bounce-slow hidden md:block"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        <div className="inline-block bg-white border-2 border-fusione-black px-4 py-1 rounded-full shadow-neo-sm mb-8 rotate-[-2deg] hover:rotate-0 transition-transform hover:animate-wiggle cursor-default opacity-0 animate-pop" style={{ animationDelay: '0.2s' }}>
            <span className="text-fusione-black text-sm font-bold uppercase tracking-wide">📺 Official Sponsor of "Just one more episode"</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black text-fusione-black tracking-tight mb-6 leading-[0.9]">
          <span className="block opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>Broadband</span>
          <span className="relative inline-block opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <span className="relative z-10">minus the</span>
            <svg className="absolute -bottom-2 left-0 w-full h-4 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="#F87171" strokeWidth="8" fill="none" />
            </svg>
          </span>
          <br/>
          <span className="text-white text-shadow-black opacity-0 animate-slide-up" style={{ animationDelay: '0.8s' }}>codswallop.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-fusione-black max-w-2xl mb-12 font-medium leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          Proper speeds | No waffle | Zero faff
        </p>

        {/* Availability Checker - Chunky Style */}
        <div className="w-full max-w-xl relative z-20 opacity-0 animate-pop" style={{ animationDelay: '1.2s' }}>
          
          <form onSubmit={handleCheck} className="relative flex flex-col md:flex-row items-stretch bg-white p-2 rounded-2xl border-2 border-fusione-black shadow-neo-lg transform transition-transform hover:-translate-y-1">
            <div className="flex-grow flex items-center px-4 py-2">
              <MapPin className="text-fusione-black mr-3" size={28} />
              <input
                type="text"
                placeholder="ENTER POSTCODE"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                className="w-full bg-transparent border-none focus:ring-0 text-fusione-black placeholder:text-gray-400 font-bold text-xl outline-none uppercase tracking-wider"
              />
            </div>
            <button 
              type="submit"
              disabled={checking}
              className="bg-fusione-black text-fusione-yellow px-8 py-4 md:py-0 rounded-xl font-bold text-lg border-2 border-transparent hover:bg-fusione-yellow hover:text-fusione-black hover:border-fusione-black transition-all flex items-center justify-center gap-2 min-w-[160px] mt-2 md:mt-0"
            >
              {checking ? (
                 <><Loader2 size={20} className="animate-spin"/> Checking</>
              ) : (
                 <>Check Now</>
              )}
            </button>
          </form>
          
          {/* Result Cards */}
          {result !== 'none' && (
            <div className={`mt-4 p-6 rounded-xl border-2 border-fusione-black shadow-neo flex items-start gap-4 text-left animate-pop ${
              result === 'success' ? 'bg-fusione-mint' : 'bg-fusione-coral'
            }`}>
              {result === 'success' ? (
                 <CheckCircle2 className="w-8 h-8 flex-shrink-0 text-fusione-black" strokeWidth={3} />
              ) : (
                 <XCircle className="w-8 h-8 flex-shrink-0 text-fusione-black" strokeWidth={3} />
              )}
              
              <div>
                <p className="font-serif font-bold text-xl text-fusione-black leading-tight mb-1">
                  {result === 'success' ? "Winner Winner!" : "Ah, pants."}
                </p>
                <p className="font-bold text-fusione-black/80 text-sm">
                  {result === 'success' ? "We can hook you up. Let's get this party started." : "Not in your street yet. We're digging as fast as we can!"}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute bottom-8 w-full text-center animate-bounce opacity-0 animate-fade-in-up" style={{ animationDelay: '2s' }}>
         <p className="text-sm font-bold uppercase tracking-widest mb-2">Scroll for the good stuff</p>
         <ArrowDown className="mx-auto text-fusione-black" size={24} />
      </div>
    </section>
  );
};