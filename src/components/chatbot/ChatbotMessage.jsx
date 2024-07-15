const ChatbotMessage = ({ text }) => {
  return (
    <div className='max-w-72 whitespace-pre-line rounded-2xl bg-gray-200 p-3 text-sm leading-4'>
      {text}
    </div>
  );
};

export default ChatbotMessage;
