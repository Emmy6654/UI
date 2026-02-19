interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
        <h2 
        className={`
            text-3xl md:text-4xl 
            font-bold 
            text-white
            mb-2
        `}
        >
        {children}
        </h2>
        <div className="h-1 w-1/3 bg-[#00FFA3] rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
