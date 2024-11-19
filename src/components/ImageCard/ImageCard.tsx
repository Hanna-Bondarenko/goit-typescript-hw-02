import styles from "./ImageCard.module.css";

// Розширений інтерфейс для типу пропсів
interface ImageCardProps {
  image: {
    id: string; // Унікальний ідентифікатор зображення
    urls: {
      small: string; // URL для зображення малого розміру
      regular: string; // URL для зображення середнього розміру
    };
    alt_description: string | null; // Альтернативний текст опису
    description?: string; // Додатковий опис зображення (опціональний)
    user?: {
      name: string; // Ім'я користувача, який завантажив зображення
      profile_image: string; // URL аватару користувача
    };
  };
  onClick?: (id: string) => void; // Колбек для обробки кліку
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={() => onClick?.(image.id)}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "Image"}
        className={styles.image}
      />
      <div className={styles.description}>
        <p>{image.description || "No description available"}</p>
        {image.user && (
          <div className={styles.user}>
            <img
              src={image.user.profile_image}
              alt={`${image.user.name}'s profile`}
              className={styles.profileImage}
            />
            <span>{image.user.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
