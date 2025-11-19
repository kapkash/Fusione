import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const TermsBusiness: React.FC<Props> = ({ onBack }) => {
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
                Terms of Business
            </h1>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
                The boring but necessary contract stuff. Grab a coffee, this might take a while.
            </p>
        </div>

        <div className="bg-white border-2 border-fusione-black rounded-3xl p-8 md:p-12 shadow-neo space-y-12">
            
            <section>
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-fusione-yellow px-2 rounded border-2 border-fusione-black text-sm">1.0</span>
                    The Service
                </h2>
                <p className="text-gray-600 font-medium mb-4">
                    1.1 We provide internet. You pay for it. Ideally, the internet works and you pay on time. That is the basis of our relationship.
                </p>
                <p className="text-gray-600 font-medium mb-4">
                    1.2 Speeds mentioned (like "Turbo" and "Warp") are averages. Your actual speed might vary if your house is built of lead or if your neighbor is running a server farm.
                </p>
            </section>

            <section>
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-fusione-mint px-2 rounded border-2 border-fusione-black text-sm">2.0</span>
                    Money Stuff
                </h2>
                <p className="text-gray-600 font-medium mb-4">
                    2.1 We will bill you monthly via Direct Debit. Please don't cancel this, or our automated system gets very grumpy and sends sad emails.
                </p>
                <p className="text-gray-600 font-medium mb-4">
                    2.2 If you don't pay, we will pause your service. We won't send the boys round, but we will turn off the Netflix access.
                </p>
            </section>

            <section>
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-fusione-coral px-2 rounded border-2 border-fusione-black text-sm">3.0</span>
                    Leaving Us
                </h2>
                <p className="text-gray-600 font-medium mb-4">
                    3.1 If you are in a contract (usually 18 months), leaving early incurs a fee. It's basically the remaining cost of your contract.
                </p>
                <p className="text-gray-600 font-medium mb-4">
                    3.2 If you use our "Love It or Bin It" guarantee (first 30 days), you can leave for free. We'll even give you a virtual high-five for trying.
                </p>
            </section>

             <section>
                <h2 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2">
                    <span className="bg-fusione-purple px-2 rounded border-2 border-fusione-black text-sm">4.0</span>
                    The Kit
                </h2>
                <p className="text-gray-600 font-medium mb-4">
                    4.1 The eero router remains the property of Fusione. If you leave, you must send it back. If you keep it, we will charge you for it (and it's not cheap).
                </p>
            </section>

            <div className="bg-gray-50 p-6 rounded-xl border-2 border-fusione-black mt-8">
                <p className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">Last Updated</p>
                <p className="font-serif text-lg font-bold">October 2024</p>
            </div>

        </div>

      </div>
    </div>
  );
};