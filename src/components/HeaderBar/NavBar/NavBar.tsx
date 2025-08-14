import Button from '../../Button/Button.tsx';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={styles.navBarBody}>
      <Button disabled={false}>Curriculum</Button>
      <Button disabled={false}>Projects</Button>
      <Button disabled={false}>Contact</Button>
    </div>
  );
};
export default NavBar;
