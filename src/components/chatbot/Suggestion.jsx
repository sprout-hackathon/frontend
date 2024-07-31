const Suggestion = ({ text, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className='max-w-72 whitespace-pre-line rounded-2xl border p-3 text-left text-sm leading-4'
    >
      {text}
    </button>
  );
};

export default Suggestion;
