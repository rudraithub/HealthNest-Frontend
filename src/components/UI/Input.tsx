import React from "react";
import styles from './Input.module.css'

interface propTypes {
    label?: string,
    type?: string,
    id?: string,
    name: string,
    value?: string,
    placeholder?: string,
    defaultValue?: string,
    pattern?: string,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number,
    min?: string,
    max?: string,
    className?: string,
    required? : boolean,
    checked? : boolean,
    disabled?: boolean,
};

const Input: React.FC<propTypes> = ({label, id, type, placeholder,disabled, maxLength, value, onChange, required, name,checked, className = ''}) => {
    return (
    <div className={`${styles.inputContainer} ${className}`}>
        {label && <label htmlFor={id}>{label}</label>}
        <input
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            required={required}
            className={styles.input}
            checked={checked}
            disabled={disabled}
        />
    </div>
    );
}


export default Input