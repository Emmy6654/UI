interface MainTitleProps {
  children: React.ReactNode;
  className?: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 
      className={`
        text-5xl md:text-7xl 
        font-extrabold 
        text-transparent bg-clip-text bg-gradient-to-r from-[#00FFA3] to-[#00b875]
        tracking-tight
        drop-shadow-lg
        ${className}
      `}
    >
      {children}
    </h1>
  );
};

export default MainTitle;
