'use client';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // Allow custom styling
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 
        bg-[#00FFA3] 
        text-black 
        font-bold 
        rounded-lg 
        shadow-[0_0_15px_rgba(0,255,163,0.4)]
        hover:shadow-[0_0_25px_rgba(0,255,163,0.6)]
        hover:bg-[#33ffb5]
        transition-all duration-300
        transform hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
