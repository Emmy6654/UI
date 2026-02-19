interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon }) => {
  return (
    <div 
      className={`
        bg-[#111] 
        border border-[#222] 
        p-8 
        rounded-xl 
        hover:border-[#00FFA3] 
        hover:shadow-[0_0_20px_rgba(0,255,163,0.1)] 
        transition-all duration-300 
        group
        cursor-default
      `}
    >
      <div className="mb-4 text-[#00FFA3] transform group-hover:scale-110 transition-transform duration-300">
        {icon ? icon : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00FFA3] transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default InfoCard;
