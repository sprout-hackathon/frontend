import { useState } from 'react';

const UserImageMessage = ({ text, images }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='animate-float flex flex-col'>
      <button
        onClick={() => setShowModal(true)}
        className='relative mb-2 ml-auto h-48 w-36 rounded-2xl border'
      >
        <img
          src={URL.createObjectURL(images[0])}
          alt='img'
          className='h-full w-full rounded-2xl object-cover'
        />
        {images.length > 1 && (
          <div className='absolute bottom-2 right-2 rounded-full bg-black/30 px-2 text-sm text-white'>
            +{images.length - 1}
          </div>
        )}
      </button>
      <div className='ml-auto max-w-72 whitespace-pre-line rounded-2xl bg-yellow p-3 text-sm leading-4'>
        {text}
      </div>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className='absolute inset-0 flex flex-row gap-3 overflow-x-auto bg-black/30 px-5'
        >
          {images.map((image) => (
            <img
              key={URL.createObjectURL(image)}
              onClick={(e) => e.stopPropagation()}
              src={URL.createObjectURL(image)}
              alt='img'
              className='my-auto w-[99%] rounded-lg'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserImageMessage;
