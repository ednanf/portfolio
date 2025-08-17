import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.tsx';
import NavBar from './NavBar/NavBar.tsx';
import styles from './HeaderBar.module.css';

const HeaderBar = () => {
  return (
    <div className={styles.headerBarBody}>
      <div className={styles.topSection}>
        <h2 className={styles.headerTitle}>EDNAN::PORTFOLIO</h2>
        <LanguageSwitcher />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
export default HeaderBar;
