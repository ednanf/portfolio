import { useTranslation } from 'react-i18next';
import TabNav from '../../TabNav/TabNav.tsx';
import styles from './NavBar.module.css';

const NavBar = () => {
  const { t } = useTranslation();

  const TABS = [
    { label: t('nav.curriculum'), path: '/' },
    { label: t('nav.projects'), path: '/projects' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={styles.navBarBody}>
      <TabNav tabs={TABS} />
    </nav>
  );
};

export default NavBar;
