import React from 'react';

const SelectField = (props) => {
    const { name, options } = props;
    return (
        <select
            name={name}
            onChange={props.onChange}
        >
            {options.map((option, index) => (
                <option
                    key={`${option.value}${index}`}
                    value={option.value}
                >
                    {option.text}
                </option>
            ))}
        </select>
    )
};

export default SelectField;
