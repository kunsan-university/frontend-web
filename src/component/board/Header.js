import React from 'react';
import styled from 'styled-components';

import Button from '../lib/Button';
import Input from '../lib/Input';

const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Search = styled.div``;

const Limit = styled.div`
  display: inline-block;
`;

const Select = styled.select`
  height: 36px;
  padding: 6px 12px;
  font-size: 14px;
  color: #2b2f33;
  border: #dfe8f1 solid 1px;
  box-shadow: inset 1px 1px 3px #f6f6f6;
`;
const Headers = () => {
  return (
    <Template>
      <Search>
        <Input />
        <Button>Search</Button>
      </Search>
      <Limit>
        <Select name="">
          <option value="">10</option>
          <option value="">25</option>
          <option value="">50</option>
          <option value="">100</option>
        </Select>
      </Limit>
    </Template>
  );
};

export default Headers;
