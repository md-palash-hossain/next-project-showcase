import React from 'react';

const CheckedItem = ({ label, value, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        id={`${value}Input`}
        className="mr-2"
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`${value}Input`} className="text-sm">
        {label}
      </label>
    </div>
  );
};

export default CheckedItem;
