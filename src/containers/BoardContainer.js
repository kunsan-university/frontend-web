import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Board from '../component/board';
import { changeInput, getUser } from '../modules/board';

const BoardContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const input = useSelector((state) => state.board.input);
  const users = useSelector((state) => state.board.users);
  const loadingUsers = useSelector((state) => state.board.loading.GET_USERS);

  return (
    <Board
      users={users}
      loadingUsers={loadingUsers}
      input={input}
      onChangeInput={(input) => dispatch(changeInput(input))}
    />
  );
};

export default React.memo(BoardContainer);
