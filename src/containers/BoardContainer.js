import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from '../component/board';
import {
  readBoards,
  changeInput,
  changeCount,
  changeTotal,
} from '../modules/board';

const BoardContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      readBoards({
        firstIndex: 0,
      }),
    );
    dispatch(changeTotal());
  }, []);
  const search = useSelector((state) => state.board.search);
  const boards = useSelector((state) => state.board.boards);
  const loadingBoards = useSelector((state) => state.board.loading.READ_BOARDS);

  return (
    <Board
      boards={boards}
      loadingBoards={loadingBoards}
      search={search}
      onChangeInput={(input) => dispatch(changeInput(input))}
      onChangeCount={changeCount}
    />
  );
};

export default React.memo(BoardContainer);
