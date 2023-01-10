import React from 'react';
import styles from './Button.module.scss';

interface Props {
    title: string;
    onClick: () => void;
}

const Button: React.FC<Props> = ({onClick, title}) => {
    return <button className={styles.button}>{title}</button>;
}

export default Button;
