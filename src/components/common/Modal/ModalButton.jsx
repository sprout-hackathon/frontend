const ModalButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg py-2 bg-blue text-white"
    >
      {text}
    </button>
  );
};

export default ModalButton;
