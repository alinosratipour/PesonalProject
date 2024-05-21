import React from "react";
import "./Modal.scss";

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    // Other props...
  }
  
const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
