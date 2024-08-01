const ChatbotMessage = ({ text, ...props }) => {
  return (
    <div
      className='animate-float mr-auto max-w-72 whitespace-pre-line rounded-2xl bg-gray-200 p-3 text-sm leading-4'
      {...props}
    >
      {text}
    </div>
  );
};

export default ChatbotMessage;
