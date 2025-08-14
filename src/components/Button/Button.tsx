import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import LightThemeIcon from '../../assets/graphics/buttonDetailLight.svg?react';

type ButtonProps = {
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled: boolean;
  children?: React.ReactNode;
};

const Button = ({ to, type = 'button', onClick, disabled, children }: ButtonProps) => {
  const buttonText = children ? children.toString().toUpperCase() : '';

  if (to && to.trim() !== '') {
    return (
      <Link to={to} className={styles.buttonBody}>
        <span className={styles.icon}>
          <LightThemeIcon />
        </span>
        <span className={styles.text}>{buttonText}</span>
      </Link>
    );
  }

  return (
    <button className={styles.buttonBody} onClick={onClick} type={type} disabled={disabled}>
      <span className={styles.icon}>
        <LightThemeIcon />
      </span>
      <span className={styles.text}>{buttonText}</span>
    </button>
  );
};

export default Button;
