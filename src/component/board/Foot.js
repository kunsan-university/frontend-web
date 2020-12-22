import React from 'react';
import Button from '../lib/Button';

const Foot = ({ prevPage, nextPage }) => {
  return (
    <div>
      <Button onClick={prevPage}>이전</Button>
      <Button onClick={nextPage}>다음</Button>
    </div>
  );
};

export default Foot;
