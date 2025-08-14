import { Link, useLocation } from 'react-router-dom';
import ButtonIcon from '../../assets/graphics/ButtonIcon.svg?react';
import styles from './TabNav.module.css';

type Tab = {
  label: string;
  path: string;
};

type TabNavProps = {
  tabs: Tab[];
};

const TabNav = ({ tabs }: TabNavProps) => {
  const location = useLocation();

  const iconStyle = { color: 'var(--color-screen-decoration-primary)' };

  return (
    <nav className={styles.tabNav}>
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`${styles.tabButton} ${location.pathname === tab.path ? styles.active : ''}`}
        >
          {<ButtonIcon style={iconStyle} height="18px" width="8px" />}
          {tab.label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
};

export default TabNav;
