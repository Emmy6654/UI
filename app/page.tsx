'use client';

import React from 'react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import SecondaryButton from '@/components/buttons/SecondaryButton';
import MainTitle from '@/components/titles/MainTitle';
import SectionTitle from '@/components/titles/SectionTitle';
import NavBar from '@/components/menu/NavBar';
import InfoCard from '@/components/cards/InfoCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00FFA3] selection:text-black">
      {/* Menu Component */}
      <NavBar />
      
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24">
        
        {/* Banner / Hero Section */}
        <section className="text-center space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00FFA3]/30 text-[#00FFA3] text-sm uppercase tracking-wider mb-4 bg-[#00FFA3]/5">
            Design System v1.0
          </div>
          <MainTitle>
            The Future of <br className="hidden md:block" /> Tokenization
          </MainTitle>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl">
            A complete suite of UI components designed deeply in dark mode aesthetics with vibrant aqua accents.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <PrimaryButton onClick={() => alert('Minting...')}>
              Start Minting
            </PrimaryButton>
            <SecondaryButton onClick={() => alert('Learning more...')}>
              Read Documentation
            </SecondaryButton>
          </div>
        </section>

        {/* Components Grid */}
        <section className="grid md:grid-cols-2 gap-16">
            
            {/* Buttons Showcase */}
            <div className="space-y-6">
                <SectionTitle>Interactive Buttons</SectionTitle>
                <div className="p-8 border border-[#222] rounded-xl bg-[#0a0a0a] flex flex-col gap-4 items-start">
                    <p className="text-gray-500 text-sm mb-2">Primary Action</p>
                    <PrimaryButton className="w-full md:w-auto">Confirm Transaction</PrimaryButton>
                    
                    <p className="text-gray-500 text-sm mb-2 mt-4">Secondary Action</p>
                    <SecondaryButton className="w-full md:w-auto">View Details</SecondaryButton>
                </div>
            </div>

            {/* Typography Showcase */}
            <div className="space-y-6">
                 <SectionTitle>Typography Styles</SectionTitle>
                 <div className="p-8 border border-[#222] rounded-xl bg-[#0a0a0a] space-y-6">
                    <div>
                        <p className="text-gray-500 text-sm mb-2">Main Title</p>
                        <MainTitle className="!text-4xl">Heading 1</MainTitle>
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm mb-2">Section Title</p>
                        <SectionTitle>Heading 2</SectionTitle>
                    </div>
                 </div>
            </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-8">
            <div className="text-center">
                <SectionTitle className="mx-auto">Feature Cards</SectionTitle>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                <InfoCard 
                    title="Secure Storage"
                    description="Your assets are protected by enterprise-grade encryption and multi-sig wallets."
                />
                <InfoCard 
                    title="Instant Swaps"
                    description="Lightning fast token swaps with zero slippage and minimal gas fees."
                />
                 <InfoCard 
                    title="Real-time Analytics"
                    description="Track your portfolio performance with advanced charting tools."
                />
            </div>
        </section>

      </main>

      <footer className="border-t border-[#222] py-12 text-center text-gray-600 text-sm">
        <p>&copy; 2026 Tokenizer UI Kit. All rights reserved.</p>
      </footer>
    </div>
  );
}
