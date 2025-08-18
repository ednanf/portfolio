import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.tsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.tsx';
import NavBar from './NavBar/NavBar.tsx';
import styles from './HeaderBar.module.css';

type HeaderBarProps = {
  theme: string;
  toggleTheme: () => void;
};

const HeaderBar = ({ theme, toggleTheme }: HeaderBarProps) => {
  return (
    <div className={styles.headerBarBody}>
      <div className={styles.topSection}>
        <h2 className={styles.headerTitle}>EDNAN::PORTFOLIO</h2>
        <div className={styles.switchers}>
          <ThemeSwitcher onClick={toggleTheme} theme={theme} />
          <LanguageSwitcher />
        </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};
export default HeaderBar;
