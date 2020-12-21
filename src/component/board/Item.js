import React from 'react';

const item = ({ val }) => {
  const { id, name, phone, address, position } = val;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{address}</td>
      <td>{position}</td>
    </tr>
  );
};

export default item;
