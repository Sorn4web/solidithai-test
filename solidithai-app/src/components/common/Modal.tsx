import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

      <dialog id="global_modal" className="modal z-50" open={isOpen}>
        <div className="modal-box">
          {children}
          <div className="modal-action">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
