import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, openModal, updateModalStateData }) => {
  return (
    <ul className={styles.itemsContainer}>
      {gallery.map(({ id, alt_description, urls, likes }) => (
        <li
          className={styles.cardItem}
          key={id}
          onClick={() => {
            updateModalStateData(urls.regular, alt_description, likes);
            openModal();
          }}
        >
          <ImageCard urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
