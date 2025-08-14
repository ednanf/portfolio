import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import ButtonIcon from '../../assets/graphics/ButtonIcon.svg?react';

// TODO: implement logic for dark theme icon
// TODO: add an 'active' prop to change styles with the useLocation hook

type ButtonProps = {
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled: boolean;
  children?: React.ReactNode;
};

const Button = ({ to, type = 'button', onClick, disabled, children }: ButtonProps) => {
  const buttonText = children ? children.toString().toUpperCase() : '';

  // Use CSS variable for color
  const iconStyle = { color: 'var(--color-text-primary)' };

  if (to && to.trim() !== '') {
    return (
      <Link to={to} className={styles.buttonBody}>
        <ButtonIcon style={iconStyle} height="12" width="6" />
        <span className={styles.text}>{buttonText}</span>
      </Link>
    );
  }

  return (
    <button className={styles.buttonBody} onClick={onClick} type={type} disabled={disabled}>
      <ButtonIcon style={iconStyle} height="12" width="6" />
      <span className={styles.text}>{buttonText}</span>
    </button>
  );
};

export default Button;
