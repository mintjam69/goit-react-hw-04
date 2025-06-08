import styles from "./ImageCard.module.css";

const ImageCard = ({ alt_description, urls }) => {
  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.cardImage}
        src={urls.small}
        alt={alt_description}
      />
      <p className={styles.cardDescription}>{alt_description}</p>
    </div>
  );
};

export default ImageCard;
