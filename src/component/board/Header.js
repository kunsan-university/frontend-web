import React from 'react';
import styled from 'styled-components';

import Button from '../lib/Button';
import Input from '../lib/Input';
import { useDispatch } from 'react-redux';
import { showDialog2 } from '../../modules/dialog';

const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Search = styled.div``;

const Select = styled.select`
  height: 36px;
  padding: 6px 12px;
  font-size: 14px;
  color: #2b2f33;
  border: #dfe8f1 solid 1px;
  box-shadow: inset 1px 1px 3px #f6f6f6;
  margin-right: 10px;
`;
const Headers = ({ onChangeInput }) => {
  const dispatch = useDispatch();
  return (
    <Template>
      <Search>
        <Select name="">
          <option value="">10</option>
          <option value="">25</option>
          <option value="">50</option>
          <option value="">100</option>
        </Select>
        <Input onChange={(e) => onChangeInput(e.target.value)} />
        <Button color={'pink'}>Search</Button>
      </Search>
      <Button onClick={() => dispatch(showDialog2())}>등록</Button>
    </Template>
  );
};

export default Headers;
