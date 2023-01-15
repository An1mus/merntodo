import React, { useState } from 'react';
import styles from './Textarea.module.scss';

interface Props {
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<Props> = ({ placeholder, value, onChange }) => {
    const [text, setText] = useState(value);

    return (
        <textarea
            className={styles.textarea}
            placeholder={placeholder}
            value={text}
            onChange={e => {
                setText(e.target.value);
                if (onChange) {
                    onChange(e);
                }
            }}
        />
    );
};

export default TextArea;
