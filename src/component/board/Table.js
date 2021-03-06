import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Tbody = styled.tbody`
  & > tr:nth-child(even) {
    background-color: #f8f9fa;
  }
  & > tr:hover {
    background-color: #bcd277;
  }
`;

const List = ({ list }) => {
  return (
    <Tbody>
      {list.map((item) => (
        <Item key={item.nttId} val={item} />
      ))}
    </Tbody>
  );
};

const TableStyle = styled.table`
  width: 100%;
  margin-bottom: 30px;
  border: 1px solid #ddd;
`;

const Table = ({ list }) => {
  return (
    <TableStyle>
      {/* <thead>
        <tr>
          <th>순번</th>
          <th>이름</th>
          <th>전화번호</th>
          <th>주소</th>
          <th>직위</th>
        </tr>
      </thead> */}
      <List list={list} />
    </TableStyle>
  );
};

Table.defaultProps = {
  list: [],
};

export default Table;
