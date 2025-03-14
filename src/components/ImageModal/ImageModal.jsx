import { useEffect } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ onClose, onModalValue, value }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (onModalValue) {
      window.addEventListener("keyup", handleEscape);
    }
    return () => {
      window.removeEventListener("keyup", handleEscape);
    };
  }, [onClose, onModalValue]);

  return (
    <div>
      <Modal
        isOpen={onModalValue}
        onRequestClose={onClose}
        overlayClassName={css["modal-overlay"]}
        className={css["modal-content"]}
      >
        <img src={value} alt="image" />
      </Modal>
    </div>
  );
}
