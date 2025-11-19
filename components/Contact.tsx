import React, { useState } from 'react';
import { ArrowLeft, Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface ContactProps {
  onBack: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent! We'll get back to you before you can make a cuppa.");
    }, 1500);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column - Intro & Info */}
            <div>
                <div className="inline-block bg-fusione-mint text-fusione-black border-2 border-fusione-black px-4 py-1 rounded-full shadow-neo mb-6 -rotate-2">
                    <span className="text-sm font-black uppercase tracking-wide">Don't be shy</span>
                </div>
                <h1 className="font-serif text-5xl md:text-7xl font-black text-fusione-black mb-6 leading-[0.9]">
                    Give us a <br/> <span className="text-fusione-coral">shout.</span>
                </h1>
                <p className="text-xl font-medium text-gray-700 mb-12 leading-relaxed">
                    Got a burning question? Internet acting possessed? Just want to tell us a joke? We're all ears.
                </p>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border-2 border-fusione-black shadow-neo flex items-start gap-4 hover:-translate-y-1 transition-transform">
                        <div className="bg-fusione-yellow p-3 rounded-lg border-2 border-fusione-black flex-shrink-0 shadow-neo-sm">
                            <Phone size={24} strokeWidth={2.5}/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-1 text-fusione-black">The Blower</h4>
                            <p className="text-gray-600 font-bold mb-1">0800 123 4567</p>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Mon-Fri: 8am - 8pm</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-fusione-black shadow-neo flex items-start gap-4 hover:-translate-y-1 transition-transform">
                        <div className="bg-fusione-purple text-white p-3 rounded-lg border-2 border-fusione-black flex-shrink-0 shadow-neo-sm">
                            <Mail size={24} strokeWidth={2.5}/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-1 text-fusione-black">The Inbox</h4>
                            <p className="text-gray-600 font-bold mb-1">hello@fusione.co.uk</p>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">We reply faster than your ex.</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border-2 border-fusione-black shadow-neo flex items-start gap-4 hover:-translate-y-1 transition-transform">
                        <div className="bg-fusione-black text-white p-3 rounded-lg border-2 border-fusione-black flex-shrink-0 shadow-neo-sm">
                            <MapPin size={24} strokeWidth={2.5}/>
                        </div>
                        <div>
                            <h4 className="font-serif text-xl font-bold mb-1 text-fusione-black">Snail Mail</h4>
                            <p className="text-gray-600 font-medium text-sm leading-tight">
                                Fusione Communications Ltd.<br/>
                                123 Fibre Lane, Tech City,<br/>
                                London, EC1A 1BB
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-3xl border-2 border-fusione-black shadow-neo-lg p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fusione-yellow rounded-full blur-3xl opacity-30 -mr-10 -mt-10"></div>
                
                <h3 className="font-serif text-3xl font-bold mb-8 relative z-10 text-fusione-black">Drop us a line</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="font-bold text-sm uppercase tracking-wide text-gray-500">Name</label>
                            <input 
                                type="text" 
                                required
                                placeholder="Joe Bloggs" 
                                className="w-full bg-gray-50 border-2 border-fusione-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:shadow-neo-sm focus:bg-white transition-all text-fusione-black placeholder:text-gray-300"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="font-bold text-sm uppercase tracking-wide text-gray-500">Email</label>
                            <input 
                                type="email" 
                                required
                                placeholder="joe@example.com" 
                                className="w-full bg-gray-50 border-2 border-fusione-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:shadow-neo-sm focus:bg-white transition-all text-fusione-black placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wide text-gray-500">Topic</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border-2 border-fusione-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:shadow-neo-sm focus:bg-white transition-all appearance-none text-fusione-black cursor-pointer">
                                <option>I want to join Fusione</option>
                                <option>My internet is broken</option>
                                <option>Billing query</option>
                                <option>Just saying hello</option>
                            </select>
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 4L6 8L10 4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="font-bold text-sm uppercase tracking-wide text-gray-500">Message</label>
                        <textarea 
                            rows={4}
                            required
                            placeholder="Tell us what's on your mind..." 
                            className="w-full bg-gray-50 border-2 border-fusione-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:shadow-neo-sm focus:bg-white transition-all resize-none text-fusione-black placeholder:text-gray-300"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-fusione-black text-white border-2 border-transparent hover:border-fusione-black hover:bg-fusione-yellow hover:text-fusione-black py-4 rounded-xl font-black text-lg shadow-neo transition-all flex items-center justify-center gap-2 group"
                    >
                        {isSubmitting ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                                Send it <Send size={20} strokeWidth={3} className="group-hover:translate-x-1 transition-transform"/>
                            </>
                        )}
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};