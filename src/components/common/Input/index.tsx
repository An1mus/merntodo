import React from 'react';
import styles from './Input.module.scss';

interface Props {
    type: 'text' | 'number'
    value: string | number;
    placeholder: string;
    onChange: React.EventHandler<any>
}

const Input: React.FC<Props> = ({type,value, placeholder, onChange}) => {
    return <input className={styles.input} type={type} value={value} onChange={onChange} placeholder={placeholder}/>;
}

export default Input;
