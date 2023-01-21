import React from 'react';
import styles from './Input.module.scss';

interface Props {
    id?: string;
    type: 'text' | 'number'
    value: string | number;
    placeholder: string;
    onChange: React.EventHandler<any>
}

const Input: React.FC<Props> = ({id, type,value, placeholder, onChange}) => {
    return <input id={id} className={styles.input} type={type} value={value} onChange={onChange} placeholder={placeholder}/>;
}

export default Input;
