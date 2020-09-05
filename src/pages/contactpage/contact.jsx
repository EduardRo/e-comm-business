import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>The name is {name}</p>
    </div>
  );
};
export default ContactPage;
