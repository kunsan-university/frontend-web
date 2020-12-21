import React from 'react';

const Foot = ({ prevPage, nextPage }) => {
  return (
    <div>
      <button onClick={prevPage}>이전</button>
      <button onClick={nextPage}>다음</button>
    </div>
  );
};

export default Foot;
