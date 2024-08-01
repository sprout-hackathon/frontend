const ImageModal = ({ images, onClose }) => {
  return (
    <div
      onClick={onClose}
      className='absolute inset-0 flex flex-row gap-3 overflow-x-auto bg-black/30 px-5'
    >
      {images.map((image) => (
        <img
          key={image}
          src={image}
          onClick={(e) => e.stopPropagation()}
          alt='img'
          draggable={false}
          className='my-auto w-[99%] select-none rounded-lg'
        />
      ))}
    </div>
  );
};

export default ImageModal;
