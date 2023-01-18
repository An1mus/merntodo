import React  from 'react';
import styles from './Textarea.module.scss';

interface Props {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({ placeholder, value, onChange }) => {
    return (
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default TextArea;
