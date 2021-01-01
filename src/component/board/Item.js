import React from 'react';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { showDialog, showDialog2 } from '../../modules/dialog';
import { readBoard, changeId } from '../../modules/board';

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
  const { nttId, nttSj, frstRegisterNm } = val;

  const handleDoubleClick = (e) => {
    const id = e.target.parentNode.firstElementChild.innerText;
    dispatch(readBoard(id));
    dispatch(showDialog2());
  };

  const handleClick = (e) => {
    const id =
      e.target.parentElement.parentElement.parentElement.firstElementChild
        .innerText;
    dispatch(changeId(id));
    dispatch(showDialog());
  };

  return (
    <Tr onDoubleClick={handleDoubleClick}>
      <Td>{nttId}</Td>
      <Td>{nttSj}</Td>
      <Td>{frstRegisterNm}</Td>
      <Td>
        <StyledAiFillDelete onClick={handleClick} />
      </Td>
    </Tr>
  );
};

export default item;
