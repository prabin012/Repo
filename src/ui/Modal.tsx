import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}
const Modal: React.FC<ModalProps> = ({ children, showModal, setShowModal }) => {
  console.log(showModal);
  return (
    <>
      {showModal && (
        <div className="w-[90%] min-h-[90%] p-5 bg-gray-100 absolute left-[5%] top-[6%] ">
          <div className="flex justify-between px-5 border-b border-gray-200 py-2">
            <span>title</span>
            <span
              className="cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              cancel
            </span>
          </div>
          <div className="px-5 py-5">{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
