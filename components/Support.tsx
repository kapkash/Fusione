import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MessageSquare, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const Support: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqs: FAQItem[] = [
    {
      question: "How long till I'm surfing?",
      answer: "Standard installation takes 2-3 hours. Our engineer will pop round, drill a tiny hole, plug in the magic box, and try not to drink all your tea. Usually sorted within 10 working days."
    },
    {
      question: "Can I keep the landline?",
      answer: "Yes, if you must. We know your Nan still rings it. Just select 'Keep my number' at checkout and we'll handle the boring porting stuff."
    },
    {
      question: "What if I move house?",
      answer: "If you move to another address within our kingdom (coverage area), you can take us with you for free. If not, you can leave us without penalty, though we'll be very sad."
    },
    {
      question: "How does billing work?",
      answer: "Your first bill lands 14 days after you go live. We take it via Direct Debit so you don't have to remember. It's painless, we promise."
    },
    {
      question: "Any data caps?",
      answer: "Never. Download the entire internet. Download it twice. We don't care. Unlimited means unlimited."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="support" ref={sectionRef} className="py-24 bg-fusione-yellow border-b-2 border-fusione-black relative">
       {/* Decorative Pattern */}
       <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 py-1 px-3 bg-fusione-black text-white border-2 border-white font-bold text-sm uppercase tracking-wider mb-4 rotate-1 shadow-neo-sm">
               <HelpCircle size={16}/> Help & Support
            </div>
            <h3 className="font-serif text-4xl md:text-5xl font-black text-fusione-black">We're here to sort it out.</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* FAQs */}
          <div>
            <h4 className="font-serif text-2xl font-bold text-fusione-black mb-6 flex items-center gap-2">
               <span className="bg-white border-2 border-fusione-black px-2 rounded-lg shadow-neo-sm animate-wiggle">?</span> Frequently Asked
            </h4>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl overflow-hidden border-2 border-fusione-black transition-all duration-300 ${
                    openIndex === index ? 'shadow-neo' : 'shadow-sm hover:shadow-neo-sm'
                  } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                  >
                    <span className="font-bold text-lg text-fusione-black group-hover:text-fusione-purple transition-colors">{faq.question}</span>
                    <div className={`transition-transform duration-300 border-2 border-fusione-black rounded-full p-1 ${openIndex === index ? 'rotate-180 bg-fusione-yellow' : 'bg-gray-100'}`}>
                        <ChevronDown className="text-fusione-black" size={18} strokeWidth={3} />
                    </div>
                  </button>
                  <div 
                    className={`px-6 text-gray-700 font-medium leading-relaxed transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-48 py-4 opacity-100 pb-6 border-t-2 border-fusione-black bg-fusione-cream' : 'max-h-0 py-0 opacity-0'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif text-2xl font-bold text-fusione-black mb-2">Give us a bell</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Phone */}
               <div className={`bg-white p-8 rounded-2xl border-2 border-fusione-black shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all group cursor-pointer ${isVisible ? 'animate-pop' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                  <div className="w-12 h-12 bg-fusione-mint rounded-lg border-2 border-fusione-black flex items-center justify-center text-fusione-black mb-4 shadow-neo-sm group-hover:rotate-12 transition-transform">
                     <Phone size={24} strokeWidth={2.5} />
                  </div>
                  <h5 className="font-bold text-xl text-fusione-black mb-1">Ring Us</h5>
                  <p className="text-sm text-gray-500 mb-4 font-bold">Mon-Fri: 8am - 8pm</p>
                  <a href="tel:08001234567" className="text-fusione-black font-black text-lg hover:bg-fusione-yellow px-1">0800 123 4567</a>
               </div>

               {/* Email */}
               <div className={`bg-white p-8 rounded-2xl border-2 border-fusione-black shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all group cursor-pointer ${isVisible ? 'animate-pop' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                  <div className="w-12 h-12 bg-fusione-coral rounded-lg border-2 border-fusione-black flex items-center justify-center text-fusione-black mb-4 shadow-neo-sm group-hover:rotate-12 transition-transform">
                     <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <h5 className="font-bold text-xl text-fusione-black mb-1">Email Us</h5>
                  <p className="text-sm text-gray-500 mb-4 font-bold">We reply super fast</p>
                  <a href="mailto:hello@fusione.co.uk" className="text-fusione-black font-black text-lg hover:bg-fusione-yellow px-1">hello@fusione.co.uk</a>
               </div>
            </div>

            {/* Live Chat CTA */}
            <div className={`bg-fusione-black p-8 rounded-2xl shadow-neo-lg text-white flex flex-col md:flex-row items-center justify-between gap-6 mt-auto border-2 border-white ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                     <MessageSquare size={28} className="text-fusione-yellow animate-bounce-slow" />
                     <h5 className="font-serif font-bold text-2xl">Have a chin-wag</h5>
                  </div>
                  <p className="text-gray-300 font-medium">Chat to Fiber (our clever bot) or a human.</p>
               </div>
               <button 
                  onClick={() => document.querySelector('button[aria-label="Open Chat"]')?.dispatchEvent(new MouseEvent('click', {bubbles: true}))}
                  className="bg-fusione-yellow text-fusione-black border-2 border-transparent hover:border-white px-6 py-3 rounded-xl font-bold hover:bg-fusione-black hover:text-white transition-colors whitespace-nowrap shadow-neo-sm"
               >
                  Start Chat
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};