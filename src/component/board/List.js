import React from 'react';
import Item from './Item';

const List = ({ list }) => {
  return (
    <tbody>
      {list.map((item) => (
        <Item key={item.id} val={item} />
      ))}
    </tbody>
  );
};

export default List;
