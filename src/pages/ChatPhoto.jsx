import { useNavigate } from 'react-router-dom';
import leftChevronIcon from '../assets/icons/left-chevron.svg';
import sendIcon from '../assets/icons/send-gray.svg';
import imageIcon from '../assets/icons/image-gray.svg';
import hideImageIcon from '../assets/icons/hide-image-gray.svg';
import { useRef, useState } from 'react';

const ChatPhoto = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const [images, setImages] = useState([]);
  const inputRef = useRef();

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
    setImages((images) => [
      ...images,
      ...Array.from(files).map((file) => URL.createObjectURL(file)),
    ]);
  };

  return (
    <div className='flex h-dvh flex-col'>
      <div className='flex w-full flex-row border-b px-5 py-4'>
        <button onClick={() => navigate(-1)}>
          <img src={leftChevronIcon} alt='back icon' />
        </button>
        <h1 className='mx-auto text-lg font-semibold'>사진으로 질문하기</h1>
      </div>
      <div className='grow'></div>
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
        <button>
          <img src={sendIcon} alt='send icon' className='ml-2 mt-1' />
        </button>
      </div>
      {images.length > 0 && (
        <div className='flex flex-row gap-2 overflow-x-auto p-3'>
          {images.map((image) => (
            <img
              key={image}
              src={image}
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
