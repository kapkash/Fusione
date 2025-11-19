import React from 'react';
import { ArrowLeft, Cookie, Lock } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
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
                Privacy Policy
            </h1>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
                We don't sell your secrets. Here is what we actually do with your data.
            </p>
        </div>

        <div className="bg-white border-2 border-fusione-black rounded-3xl p-8 md:p-12 shadow-neo space-y-12">
            
            <section>
                <div className="w-12 h-12 bg-fusione-purple text-white rounded-xl border-2 border-fusione-black flex items-center justify-center mb-4 shadow-neo-sm">
                    <Lock size={24}/>
                </div>
                <h2 className="font-serif text-2xl font-bold mb-4">What we collect</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 font-medium">
                    <li>**Basics:** Name, address, email, phone number (so we can install your internet).</li>
                    <li>**Financial:** Bank details (for the Direct Debit). We don't store credit card numbers ourselves; our payment processor does that.</li>
                    <li>**Technical:** Your IP address and how you use our site (so we can fix bugs).</li>
                </ul>
            </section>

            <section>
                <h2 className="font-serif text-2xl font-bold mb-4">How we use it</h2>
                <p className="text-gray-600 font-medium mb-4">
                    To provide you with broadband. That's it. We might email you occasionally about service updates or if we launch a cool new feature, but we won't spam you with nonsense.
                </p>
                <p className="text-gray-600 font-medium mb-4 bg-fusione-cream p-4 rounded-xl border-2 border-fusione-black">
                    <strong>Crucial Point:</strong> We do not sell your browsing history to advertisers. We are an ISP, not a spy agency.
                </p>
            </section>

            <section>
                <div className="w-12 h-12 bg-fusione-yellow text-fusione-black rounded-xl border-2 border-fusione-black flex items-center justify-center mb-4 shadow-neo-sm">
                    <Cookie size={24}/>
                </div>
                <h2 className="font-serif text-2xl font-bold mb-4">Cookies</h2>
                <p className="text-gray-600 font-medium mb-4">
                    We use cookies to make the site work (like remembering you're logged in) and to see how many people visit us. You can turn them off in your browser, but the site might act a bit weird.
                </p>
            </section>

             <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-600 font-medium mb-4">
                    You have the right to ask us what we know about you, ask us to delete it (if you leave), or correct it if we've spelled your name wrong. Just email <a href="mailto:privacy@fusione.co.uk" className="font-bold underline">privacy@fusione.co.uk</a>.
                </p>
            </section>

        </div>

      </div>
    </div>
  );
};