import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Table from './Table';
import Form from './Form';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '../lib/Dialog';
import { hideDialog, hideDialog2 } from '../../modules/dialog';
import {
  updateBoard,
  readBoards,
  changeOffset,
  deleteBoard,
} from '../../modules/board';

const Template = styled.div``;

const index = ({ onChangeInput, onChangeCount, boards, loadingBoards }) => {
  const count = useSelector((state) => state.board.count);
  const total = useSelector((state) => state.board.total);
  const offset = useSelector((state) => state.board.offset);
  const visible = useSelector((state) => state.dialog.visible);
  const visible2 = useSelector((state) => state.dialog.visible2);
  const board = useSelector((state) => state.board.board);
  const loadingBoard = useSelector((state) => state.board.loadingBoard);
  const title = useSelector((state) => state.dialog.title);
  const subject = useSelector((state) => state.dialog.subject);
  const id = useSelector((state) => state.board.id);
  const dispatch = useDispatch();

  const handleOnConfirm = (e) => {
    dispatch(
      updateBoard(board.nttId, {
        ...board,
        title,
        subject,
      }),
    );
    dispatch(
      readBoards({
        firstIndex: 0,
      }),
    );
    dispatch(hideDialog2());
  };
  const handleOnDelete = (e) => {
    dispatch(updateBoard(id));
    dispatch(
      readBoards({
        firstIndex: 0,
      }),
    );
    dispatch(hideDialog2());
  };
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
      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        visible={visible}
        onCancel={() => dispatch(hideDialog())}
        onConfirm={handleOnDelete}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
      <Dialog
        title={
          board ? `공지사항/${board.nttId}/${board.frstRegisterNm}` : '공지사항'
        }
        confirmText={board ? '수정' : '등록'}
        width={'400px'}
        visible={visible2}
        onCancel={() => dispatch(hideDialog2())}
        onConfirm={handleOnConfirm}
      >
        {!loadingBoard && board && <Form board={board} />}
      </Dialog>
    </Template>
  );
};

export default index;
