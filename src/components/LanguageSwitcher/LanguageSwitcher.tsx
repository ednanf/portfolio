import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => changeLanguage('en')}
        className={i18n.language.startsWith('en') ? styles.active : ''}
        disabled={i18n.language.startsWith('en')}
      >
        EN
      </button>
      <span className={styles.separator}>|</span>
      <button
        onClick={() => changeLanguage('pt')}
        className={i18n.language.startsWith('pt') ? styles.active : ''}
        disabled={i18n.language.startsWith('pt')}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
