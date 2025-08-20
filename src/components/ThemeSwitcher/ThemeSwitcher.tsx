import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonLine } from 'react-icons/ri';
import styles from './ThemeSwitcher.module.css';

type ThemeSwitcherProps = {
  onClick: () => void;
  theme: string;
};

const ThemeSwitcher = ({ onClick, theme }: ThemeSwitcherProps) => {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {theme === 'light' ? <MdOutlineWbSunny size={16} /> : <RiMoonLine size={16} />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
