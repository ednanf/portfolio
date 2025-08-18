import styles from './AnimatedLines.module.css';

const AnimatedLines = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.line} ${styles.line1}`} />
      <div className={`${styles.line} ${styles.line2}`} />
      <div className={`${styles.line} ${styles.line3}`} />
    </div>
  );
};

export default AnimatedLines;
