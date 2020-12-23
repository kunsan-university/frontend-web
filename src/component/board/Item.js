import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
  justify-content: space-between;
`;

const Td = styled.td`
  padding: 15px;
  border: 1px solid #dfe8f1;
`;

const item = ({ val }) => {
  const { id, name, phone, address, position } = val;

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{phone}</Td>
      <Td>{address}</Td>
      <Td>{position}</Td>
    </Tr>
  );
};

export default item;
