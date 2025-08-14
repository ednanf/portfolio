import NavBar from './NavBar/NavBar.tsx';
import styles from './HeaderBar.module.css';

const HeaderBar = () => {
  return (
    <div className={styles.headerBarBody}>
      <div>
        <h2 className={styles.headerTitle}>EDNAN::PORTFOLIO</h2>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
export default HeaderBar;
