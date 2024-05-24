import React from "react";
import "./Modal.scss";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  title?: string; // Add title prop
}

const Modal: React.FC<ModalProps> = ({ children, onClose, title = "Modal Title" }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            <IoMdCloseCircle />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
