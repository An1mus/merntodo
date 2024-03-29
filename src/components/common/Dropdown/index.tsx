import React, { useState } from 'react';
import style from './Dropdown.module.scss';

interface DropdownProps {
    id?: string;
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ id, options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.dropdown}>
            <button id={id} className={style.selected} onClick={() => setIsOpen(!isOpen)}>
                {selected}
            </button>
            {isOpen && (
                <ul className={style.dropdownContent}>
                    {options.map(option => (
                        <li
                            key={option}
                            className={style.dropdownItem}
                            onClick={() => {
                                setIsOpen(false);
                                onSelect(option);
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
