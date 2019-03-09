import React from 'react';

export default function Form({ placeholder, type, name }) {
  return (
    <div>
      <input className="formInput" type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
