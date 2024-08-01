const UserMessage = ({ text, audio }) => {
  return (
    <div className='animate-float ml-auto max-w-72 whitespace-pre-line rounded-2xl bg-yellow p-3 text-sm leading-4'>
      {audio !== undefined && <audio className="w-60 h-11 [&::-webkit-media-controls-panel]:bg-yellow" controls  src={audio}/>}
      {text}
    </div>
  );
};

export default UserMessage;
