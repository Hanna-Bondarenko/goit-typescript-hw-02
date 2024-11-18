import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    maxWidth: "80vw",
    maxHeight: "90vh",
    overflow: "hidden",
  },
};

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={styles.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.modalImage}
        />
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
