import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-root">
      <div className="bg-black-line" aria-hidden="true" />
      <div className="bg-circle" aria-hidden="true" />
      <div className="app-content">
        <h1>TESTE</h1>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;