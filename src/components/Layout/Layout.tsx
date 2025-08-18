import { Outlet } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar.tsx';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Nier Automata-inspired UI elements */}
      <div className="nier-ui-line"></div>
      <div className="nier-ui-circle"></div>
      
      <HeaderBar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
