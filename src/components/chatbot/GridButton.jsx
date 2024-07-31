const GridButton = ({ text, icon = null, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='flex flex-col items-center justify-center gap-1 rounded-2xl border border-gray-300 bg-gray-100 px-2'
    >
      {icon && <img src={icon} alt='icon' />}
      <p className='whitespace-pre-line text-center text-xs font-normal leading-4 text-gray-500'>
        {text}
      </p>
    </button>
  );
};

export default GridButton;
