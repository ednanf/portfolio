import { Outlet } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar.tsx';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Dynamic UI Elements */}
      <div className="dynamic-line"></div>
      <div className="dynamic-circle"></div>
      
      <HeaderBar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
