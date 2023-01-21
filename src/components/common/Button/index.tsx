import React from 'react';
import styles from './Button.module.scss';

interface Props {
    id?: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    children?: JSX.Element | string;
}

const Button: React.FC<Props> = ({id, onClick, variant, children}) => {
    return <button id={id} className={`${styles.button} ${variant || 'primary'}`} onClick={onClick}>{children}</button>;
}

export default Button;
