import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.loadmorebtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
