import React from 'react';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
const Tr = styled.tr`
  justify-content: space-between;
  &:last-child() {
    text-align: center;
  }
`;

const Td = styled.td`
  padding: 15px;
  border: 1px solid #dfe8f1;
`;

const item = ({ val }) => {
  const { id, name, username, email } = val;

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{username}</Td>
      <Td>{email}</Td>
      <Td>
        <AiFillDelete />
      </Td>
    </Tr>
  );
};

export default item;
