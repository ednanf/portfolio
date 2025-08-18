import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.tsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.tsx';
import NavBar from './NavBar/NavBar.tsx';
import AnimatedLines from '../AnimatedLines/AnimatedLines';
import styles from './HeaderBar.module.css';

type HeaderBarProps = {
  theme: string;
  toggleTheme: () => void;
};

const HeaderBar = ({ theme, toggleTheme }: HeaderBarProps) => {
  return (
    <div className={styles.headerBarBody}>
      <div className={styles.topSection}>
        <div className={styles.title}>
          <h1>EDNAN::PORTFOLIO</h1>
        </div>
        <AnimatedLines />
        <div className={styles.switchers}>
          <ThemeSwitcher onClick={toggleTheme} theme={theme} />
          <LanguageSwitcher />
        </div>
      </div>
      <div className={styles.desktopAnimatedLines}>
        <AnimatedLines />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default HeaderBar;
