import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import { useSelector } from 'react-redux';

const Template = styled.div``;

const index = ({ onChangeInput, onChangeCount, boards, loadingBoards }) => {
  const count = useSelector((state) => state.board.count);
  const total = useSelector((state) => state.board.total);
  const offset = useSelector((state) => state.board.offset);
  return (
    <Template>
      <div>
        <Header onChangeInput={onChangeInput} onChangeCount={onChangeCount} />
        {loadingBoards && '로딩 중'}
        {!loadingBoards && boards && (
          <Table list={boards.slice(offset, offset + count)} />
        )}
        <Footer count={count} total={total} offset={offset} />
      </div>
    </Template>
  );
};

export default index;
