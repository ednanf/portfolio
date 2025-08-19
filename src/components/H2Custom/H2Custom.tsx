import React from 'react';
import H2Bullet from '../../assets/graphics/H2Bullet.svg?react';
import styles from './H2Custom.module.css';

type H2CustomProps = {
  children?: React.ReactNode;
  iconSize?: number;
  /** fontSize accepts the same values as React.CSSProperties.fontSize (e.g. 16, '1rem', '20px') */
  fontSize?: React.CSSProperties['fontSize'];
};

const H2Custom = ({ children, iconSize = 12, fontSize }: H2CustomProps) => {
  return (
    <h2 className={styles.container}>
      <H2Bullet className={styles.icon} height={iconSize} width={iconSize} />
      <span className={styles.text} style={fontSize ? { fontSize } : undefined}>
        {children}
      </span>
    </h2>
  );
};
export default H2Custom;
