import TabNav from '../../TabNav/TabNav.tsx';
import styles from './NavBar.module.css';

const TABS = [
  { label: 'Curriculum', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

const NavBar = () => {
  return (
    <nav className={styles.navBarBody}>
      <TabNav tabs={TABS} />
    </nav>
  );
};

export default NavBar;
