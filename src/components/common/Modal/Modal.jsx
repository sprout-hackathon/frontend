import closeIcon from "../../../assets/icons/close-black.svg";

const Modal = ({ children, onClickClose }) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-black/20 flex">
      <div className="bg-white w-10/12 rounded-xl m-auto p-5 flex flex-col gap-2">
        <button onClick={onClickClose} className="ml-auto">
          <img src={closeIcon} alt="close icon" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
