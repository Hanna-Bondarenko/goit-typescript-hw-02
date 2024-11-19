import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

// Типізуємо компонент як React.FC, який не приймає жодних пропсів
const Loader: React.FC = () => (
  <div className={styles.loader}>
    <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />
  </div>
);

export default Loader;
