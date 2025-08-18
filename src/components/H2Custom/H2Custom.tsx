import React from 'react';
import H2Bullet from '../../assets/graphics/H2Bullet.svg?react';
import styles from './H2Custom.module.css';

type H2CustomProps = {
  children?: React.ReactNode;
};

const H2Custom = ({ children }: H2CustomProps) => {
  return (
    <h2 className={styles.container}>
      <H2Bullet className={styles.icon} height="12" width="12" />
      {children}
    </h2>
  );
};
export default H2Custom;
