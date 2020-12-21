import React from 'react';

const Head = ({ title }) => {
  return (
    <thead>
      <tr>{title && title.map((key) => <th key={key}>{key}</th>)}</tr>
    </thead>
  );
};

export default Head;
