import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ImageModal.module.css";
import { Image } from "../../services/imageApi";

interface ImageModalProps {
  images: Image[];
  currentImage: Image;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const customStyles: ReactModal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    maxWidth: "1000px",
    height: "80vh",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    border: "none",
    borderRadius: "10px",
    background: "rgba(0, 0, 0, 0.9)", // Темний фон
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentImage,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!currentImage) return null;

  return (
    <Modal
      isOpen={!!currentImage}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={styles.modalContainer}>
        <button className={styles.prevButton} onClick={onPrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          src={currentImage.urls.regular}
          alt={currentImage.alt_description}
          className={styles.modalImage}
        />
        <button className={styles.nextButton} onClick={onNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
