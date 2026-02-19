import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-[#00FFA3]/20 py-4 px-8 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[#00FFA3]">◆</span>
            <span className="text-white tracking-widest">TOKENIZER</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-gray-300 hover:text-[#00FFA3] transition-colors duration-200 text-sm font-medium tracking-wide uppercase">Dashboard</Link>
            <Link href="#" className="text-gray-300 hover:text-[#00FFA3] transition-colors duration-200 text-sm font-medium tracking-wide uppercase">Markets</Link>
            <Link href="#" className="text-gray-300 hover:text-[#00FFA3] transition-colors duration-200 text-sm font-medium tracking-wide uppercase">Wallet</Link>
        </div>

        {/* Action Button (Reuse PrimaryButton visually) */}
        <button className="hidden md:block px-4 py-2 bg-[#00FFA3] text-black text-sm font-bold rounded hover:bg-[#33ffb5] transition-colors">
            Connect Wallet
        </button>

         {/* Mobile Menu Icon (Placeholder) */}
         <div className="md:hidden text-[#00FFA3] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         </div>
      </div>
    </nav>
  );
};

export default NavBar;
