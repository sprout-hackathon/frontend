const Suggestion = ({ text, selected = false }) => {
  return selected ? (
    <div className='max-w-72 whitespace-pre-line rounded-2xl border border-blue bg-blue-light p-3 text-sm leading-4'>
      {text}
    </div>
  ) : (
    <div className='max-w-72 whitespace-pre-line rounded-2xl border p-3 text-sm leading-4'>
      {text}
    </div>
  );
};

export default Suggestion;
