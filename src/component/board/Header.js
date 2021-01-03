import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../lib/Button';
import Input from '../lib/Input';
import { useDispatch, useSelector } from 'react-redux';
import { showDialog2 } from '../../modules/dialog';
import { changeOffset, readBoards, changeBtn } from '../../modules/board';

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
const Headers = ({ onChangeInput, onChangeCount }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.board.count);
  const search = useSelector((state) => state.board.search);
  const handleChange = (e) => {
    dispatch(onChangeCount(+e.target.value));
    dispatch(
      readBoards({
        firstIndex: 0,
      }),
    );
    dispatch(changeOffset(0));
  };

  const handleSearch = (e) => {
    dispatch(
      readBoards({
        searchWrd: search,
        firstIndex: 0,
      }),
    );
    dispatch(changeOffset(0));
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleShow = (e) => {
    dispatch(changeBtn('등록'));
    dispatch(showDialog2());
  };

  return (
    <Template>
      <Search>
        <Select value={count} name="" onChange={handleChange}>
          <option value="5">5</option>
          <option value="10">10</option>
        </Select>
        <Input
          onChange={(e) => onChangeInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="완전일치만 지원"
        />
        <Button color={'pink'} onClick={handleSearch}>
          Search
        </Button>
      </Search>
      <Button onClick={handleShow}>등록</Button>
    </Template>
  );
};

export default React.memo(Headers);
