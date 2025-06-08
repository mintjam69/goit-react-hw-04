import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ modalIsOpen, closeModal, src, alt, likes }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={closeModal} className={styles.modalBtn}>
        close
      </button>
      <div>
        <img className={styles.modalImg} src={src} alt={alt} />
        <p className={styles.modalText}>{alt}</p>
        {likes !== null && (
          <p className={styles.modalText}>❤️ Лайків: {likes}</p>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
