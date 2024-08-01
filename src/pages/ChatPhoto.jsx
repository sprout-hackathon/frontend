import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import sendIcon from '../assets/icons/send-gray.svg';
import imageIcon from '../assets/icons/image-gray.svg';
import hideImageIcon from '../assets/icons/hide-image-gray.svg';
import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postCreateImageRoom, postSendImageMessage } from '../api/imageChats';
import ChatbotMessage from '../components/chatbot/ChatbotMessage';
import UserImageMessage from '../components/chatbot/UserImageMessage';

const firstMessage = `반가워요!
저는 사용자님의 한국 생활을 도와줄 수 있는
사진 챗봇이에요.

저에게 사진과 함께 질문을 보내주세요!`;

const ChatPhoto = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [images, setImages] = useState([]);
  const [messageList, setMessageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatroomIdRef = useRef();
  const inputRef = useRef();

  const { mutate: createChatRoom } = useMutation({
    mutationFn: (title, files) => postCreateImageRoom(title, files),
    onSuccess: (data) => {
      chatroomIdRef.current = data.chatRoomId;
      setIsLoading(false);
      setMessageList((list) => [
        ...list,
        { content: data.content, bot: data.bot },
      ]);
    },
  });

  const { mutate: sendImageMessage } = useMutation({
    mutationFn: (content, files) =>
      postSendImageMessage(chatroomIdRef.current, content, files),
    onSuccess: (data) => {
      setIsLoading(false);
      setMessageList((list) => [
        ...list,
        { content: data.content, bot: data.bot },
      ]);
    },
  });

  const handleClickImage = () => {
    if (images.length === 0) {
      inputRef.current.click();
    } else {
      setImages([]);
    }
  };

  const handleSelectImage = (e) => {
    if (!e.target.files) return;
    const files = e.target.files;
    setImages((images) => [...images, ...Array.from(files)]);
  };

  const handleSend = () => {
    if (isLoading || !inputText || images.length === 0) return;
    setMessageList((list) => [
      ...list,
      { content: inputText, images: images, bot: false },
    ]);
    setIsLoading(true);
    if (messageList.length === 0) {
      createChatRoom(inputText, images);
    } else {
      sendImageMessage(inputText, images);
    }
    setInputText('');
    setImages([]);
  };

  return (
    <div className='relative flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>사진으로 질문하기</h1>
      </div>
      <div className='flex grow flex-col gap-3 overflow-y-auto p-4'>
        <ChatbotMessage text={firstMessage} />
        {messageList.map((message, index) =>
          message.bot ? (
            <ChatbotMessage key={index} text={message.content} />
          ) : (
            <UserImageMessage
              key={index}
              text={message.content}
              images={message.images}
            />
          )
        )}
        {isLoading && (
          <ChatbotMessage
            key={-1}
            text={'생각하는 중...'}
            style={{ color: '#a3a3a3' }}
          />
        )}
      </div>
      <div className='flex flex-row items-start border-y p-3'>
        <button onClick={handleClickImage}>
          <img
            src={images.length === 0 ? imageIcon : hideImageIcon}
            alt='icon'
            className='-ml-0.5 mr-2 mt-1 h-7 w-7'
          />
        </button>
        <input
          ref={inputRef}
          type='file'
          accept='image/*'
          multiple
          hidden
          onInput={handleSelectImage}
        />
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className='grow rounded-lg border bg-gray-100 px-3 py-2 text-sm focus:outline-none'
        />
        <button onClick={handleSend}>
          <img src={sendIcon} alt='send icon' className='ml-2 mt-1' />
        </button>
      </div>
      {images.length > 0 && (
        <div className='flex flex-row gap-2 overflow-x-auto p-3'>
          {images.map((image) => (
            <img
              key={URL.createObjectURL(image)}
              src={URL.createObjectURL(image)}
              alt='selected'
              className='h-40 w-28 shrink-0 rounded-xl border object-cover'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatPhoto;
