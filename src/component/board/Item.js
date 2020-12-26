import React from 'react';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { showDialog } from '../../modules/dialog';

const Tr = styled.tr`
  justify-content: space-between;
  text-align: center;
`;

const Td = styled.td`
  padding: 15px;
  border: 1px solid #dfe8f1;
`;

const StyledAiFillDelete = styled(AiFillDelete)`
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    fill: red;
  }
`;

const item = ({ val }) => {
  const dispatch = useDispatch();
  const { id, name, username, email } = val;

  return (
    <Tr>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{username}</Td>
      <Td>{email}</Td>
      <Td>
        <StyledAiFillDelete onClick={() => dispatch(showDialog())} />
      </Td>
    </Tr>
  );
};

export default item;
