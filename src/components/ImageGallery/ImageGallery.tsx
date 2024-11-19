import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { Image } from "../../services/imageApi";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={styles.galleryItem}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
