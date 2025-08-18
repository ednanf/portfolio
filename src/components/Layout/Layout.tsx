import { Outlet } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar.tsx';
import styles from './Layout.module.css';
import useTheme from '../../hooks/useTheme.tsx';

const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.layout}>
      <HeaderBar theme={theme} toggleTheme={toggleTheme} />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
