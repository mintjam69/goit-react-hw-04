import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader
        loading={true}
        size={80}
        color="#646cff"
        aria-label="Loading Spinner"
      />
    </div>
  );
};

export default Loader;
