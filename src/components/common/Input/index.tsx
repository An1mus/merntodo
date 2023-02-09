import React from 'react';
import styles from './Input.module.scss';

interface Props {
    type: 'text' | 'number';
    value: string | number;
    placeholder: string;
    onChange: React.EventHandler<any>;
    isError?: boolean;
    id?: string;
    onKeyDown?: React.EventHandler<any>
}

const Input: React.FC<Props> = ({
                                    type,
                                    value,
                                    placeholder,
                                    onChange,
                                    isError = false,
                                    id,
                                    onKeyDown
    }) => {
    return <input
        id={id} className={`${styles.input} ${isError ? styles.error : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
    />;
}

export default Input;
