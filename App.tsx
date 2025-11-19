import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Packages } from './components/Packages';
import { Support } from './components/Support';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { WhyPricey } from './components/WhyPricey';
import { FullFibre } from './components/FullFibre';
import { SimO } from './components/SimO';
import { ProtectPlus } from './components/ProtectPlus';
import { OurJourney } from './components/OurJourney';
import { Contact } from './components/Contact';
import { TermsBusiness } from './components/TermsBusiness';
import { TermsWebsite } from './components/TermsWebsite';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Accessibility } from './components/Accessibility';
import { Toaster } from 'react-hot-toast';

export type PageView = 'home' | 'why-pricey' | 'full-fibre' | 'sim-o' | 'protect-plus' | 'our-journey' | 'contact' | 'terms-business' | 'terms-website' | 'privacy' | 'accessibility';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-fusione-cream text-fusione-black font-sans transition-colors duration-300">
      <Toaster position="top-center" toastOptions={{
         style: {
            borderRadius: '0px',
            border: '2px solid #121212',
            background: '#fff',
            color: '#121212',
            fontFamily: 'Plus Jakarta Sans',
            fontWeight: 700,
            boxShadow: '4px 4px 0px 0px #121212'
         },
         success: {
            iconTheme: {
               primary: 'var(--color-brand)',
               secondary: '#121212',
            }
         }
      }} />
      
      <Header 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        onNavigate={navigateTo}
        currentPage={currentPage}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <Packages onNavigate={navigateTo} />
            <Features />
            <Support />
          </>
        )}
        {currentPage === 'why-pricey' && (
          <WhyPricey onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'full-fibre' && (
          <FullFibre onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'sim-o' && (
          <SimO onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'protect-plus' && (
          <ProtectPlus onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'our-journey' && (
          <OurJourney onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'contact' && (
          <Contact onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'terms-business' && (
          <TermsBusiness onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'terms-website' && (
          <TermsWebsite onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPolicy onBack={() => navigateTo('home')} />
        )}
        {currentPage === 'accessibility' && (
          <Accessibility onBack={() => navigateTo('home')} />
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      
      {/* Tools */}
      <ThemeSwitcher />
      <ChatWidget />
    </div>
  );
};

export default App;