'use client';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Allow custom styling
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        bg-transparent 
        border-2 border-[#00FFA3] 
        text-[#00FFA3] 
        font-bold 
        rounded-lg 
        hover:bg-[#00FFA3] 
        hover:text-black 
        transition-all duration-300
        transform hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
