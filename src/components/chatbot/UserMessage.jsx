const UserMessage = ({ text }) => {
  return (
    <div className='animate-float ml-auto max-w-72 whitespace-pre-line rounded-2xl bg-yellow p-3 text-sm leading-4'>
      {text}
    </div>
  );
};

export default UserMessage;
