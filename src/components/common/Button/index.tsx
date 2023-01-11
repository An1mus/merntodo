import React from 'react';
import styles from './Button.module.scss';

interface Props {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    children: JSX.Element | string;
}

const Button: React.FC<Props> = ({onClick, variant, children}) => {
    return <button className={`${styles.button} ${variant || 'primary'}`} onClick={onClick}>{children}</button>;
}

export default Button;
