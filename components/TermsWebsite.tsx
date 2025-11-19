import React from 'react';
import { ArrowLeft, Globe } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const TermsWebsite: React.FC<Props> = ({ onBack }) => {
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
                Terms of Website Use
            </h1>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
                Rules of the digital road. Basically, don't hack us.
            </p>
        </div>

        <div className="bg-white border-2 border-fusione-black rounded-3xl p-8 md:p-12 shadow-neo space-y-12">
            
            <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Accessing our site</h2>
                <p className="text-gray-600 font-medium mb-4">
                    Our site is free to use. We don't guarantee it will always be available or uninterrupted. We might take it down to fix things or just to move pixels around.
                </p>
            </section>

            <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-gray-600 font-medium mb-4">
                    We own the content on this site. The Fusione logo, the quirky text, the neo-brutalist blocks. You can't copy it, sell it, or pretend it's yours. If you do, our lawyers (who are surprisingly scary) will be in touch.
                </p>
            </section>

            <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Viruses & Hacking</h2>
                <p className="text-gray-600 font-medium mb-4">
                    Don't introduce viruses, trojans, worms, or other malicious material. Don't try to gain unauthorized access to our server. In short: behave yourself.
                </p>
            </section>

             <section>
                <h2 className="font-serif text-2xl font-bold mb-4">Linking to us</h2>
                <p className="text-gray-600 font-medium mb-4">
                    You can link to our home page, provided you do so in a way that is fair and legal and doesn't damage our reputation. Don't imply we endorse you unless we actually do.
                </p>
            </section>

        </div>

      </div>
    </div>
  );
};