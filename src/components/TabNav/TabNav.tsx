import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  return (
    <nav className={styles.tabNav}>
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          to={tab.path}
          className={`${styles.tabButton} ${location.pathname === tab.path ? styles.active : ''}`}
        >
          {tab.label.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
};

export default TabNav;
