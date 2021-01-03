import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';

const CHANGE_BTN = 'board/CHANGE_BTN';
const CHANGE_ID = 'board/CHANGE_ID';
const CHANGE_SEARCH = 'board/CHANGE_SEARCH';
const CHANGE_COUNT = 'board/CHANGE_COUNT';
const CHANGE_TOTAL = 'board/CHANGE_TOTAL';
const CHANGE_OFFSET = 'board/CHANGE_OFFSET';

const READ_BOARDS = 'board/READ_BOARDS';
const READ_BOARDS_SUCCESS = 'board/READ_BOARDS_SUCCESS';
const READ_BOARDS_FAILURE = 'board/READ_BOARDS_FAILURE';

const READ_BOARD = 'board/READ_BOARD';
const READ_BOARD_SUCCESS = 'board/READ_BOARD_SUCCESS';
const READ_BOARD_FAILURE = 'board/READ_BOARD_FAILURE';

const INSERT_BOARD = 'board/INSERT_BOARD';
const INSERT_BOARD_SUCCESS = 'board/INSERT_BOARD_SUCCESS';
const INSERT_BOARD_FAILURE = 'board/INSERT_BOARD_FAILURE';

const UPDATE_BOARD = 'board/UPDATE_BOARD';
const UPDATE_BOARD_SUCCESS = 'board/UPDATE_BOARD_SUCCESS';
const UPDATE_BOARD_FAILURE = 'board/UPDATE_BOARD_FAILURE';

const DELETE_BOARD = 'board/DELETE_BOARD';
const DELETE_BOARD_SUCCESS = 'board/DELETE_BOARD_SUCCESS';
const DELETE_BOARD_FAILURE = 'board/DELETE_BOARD_FAILURE';

const NEXT_PAGE = 'board/NEXT_PAGE';
const NEXT_PAGE_SUCCESS = 'board/NEXT_PAGE_SUCCESS';
const NEXT_PAGE_FAILURE = 'board/NEXT_PAGE_FAILURE';

const PREV_PAGE = 'board/PREV_PAGE';
const PREV_PAGE_SUCCESS = 'board/PREV_PAGE_SUCCESS';
const PREV_PAGE_FAILURE = 'board/PREV_PAGE_FAILURE';

export const readBoards = ({
  searchWrd,
  recordCountPerPage,
  firstIndex,
}) => async (dispatch) => {
  dispatch({ type: READ_BOARDS });
  try {
    const response = await api.readBoards({
      searchWrd,
      recordCountPerPage,
      firstIndex,
    });
    dispatch({
      type: READ_BOARDS_SUCCESS,
      payload: response.data.filter((ele) => ele.useAt === 'Y'),
    });
  } catch (e) {
    dispatch({
      type: READ_BOARDS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const readBoard = (id) => async (dispatch) => {
  dispatch({ type: READ_BOARD });
  try {
    const response = await api.readBoard(id);
    dispatch({
      type: READ_BOARD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: READ_BOARD_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const insertBoard = (body) => async (dispatch) => {
  dispatch({ type: INSERT_BOARD });
  try {
    const response = await api.insertBoard(body);
    dispatch({
      type: INSERT_BOARD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: INSERT_BOARD_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const updateBoard = (id, body) => async (dispatch) => {
  dispatch({ type: UPDATE_BOARD });
  try {
    const response = await api.updateBoard(id, body);
    dispatch({
      type: UPDATE_BOARD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_BOARD_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};
export const deleteBoard = (id) => async (dispatch) => {
  dispatch({ type: DELETE_BOARD });
  try {
    const response = await api.deleteBoard(id);
    dispatch({
      type: DELETE_BOARD_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: DELETE_BOARD_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const changeBtn = createAction(CHANGE_BTN, (btn) => btn);
export const changeInput = createAction(CHANGE_SEARCH, (input) => input);
export const changeCount = createAction(CHANGE_COUNT, (count) => count);
export const changeOffset = createAction(CHANGE_OFFSET, (offset) => offset);
export const changeId = createAction(CHANGE_ID, (id) => id);
export const changeTotal = (total) => async (dispatch) => {
  if (typeof total === 'undefined') {
    const arr = (await api.readBoards({})).data.filter(
      (ele) => ele.useAt === 'Y',
    );
    total = arr.length;
  }
  dispatch({ type: CHANGE_TOTAL, payload: total });
};

const initialState = {
  loading: {
    READ_BOARDS: false,
    READ_BOARD: false,
    INSERT_BOARD: false,
    UPDATE_BOARD: false,
    DELETE_BOARD: false,
  },
  boards: null,
  board: null,
  search: '',
  count: 5,
  total: '',
  offset: 0,
  id: '',
  btn: '',
};

const board = handleActions(
  {
    [CHANGE_BTN]: (state, { payload: btn }) => ({
      ...state,
      btn,
    }),
    [CHANGE_ID]: (state, { payload: id }) => ({
      ...state,
      id,
    }),
    [CHANGE_SEARCH]: (state, { payload: search }) => ({
      ...state,
      search,
    }),
    [CHANGE_COUNT]: (state, { payload: count }) => ({
      ...state,
      count,
    }),
    [CHANGE_OFFSET]: (state, { payload: offset }) => ({
      ...state,
      offset,
    }),
    [CHANGE_TOTAL]: (state, { payload: total }) => ({
      ...state,
      total,
    }),
    [READ_BOARDS]: (state) => ({
      ...state,
      loading: { ...state.loading, READ_BOARDS: true },
    }),
    [READ_BOARDS_SUCCESS]: (state, { payload: boards }) => ({
      ...state,
      loading: { ...state.loading, READ_BOARDS: false },
      boards,
      total: boards.length,
    }),
    [READ_BOARDS_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, READ_BOARDS: false },
    }),

    [READ_BOARD]: (state) => ({
      ...state,
      loading: { ...state.loading, READ_BOARD: true },
    }),
    [READ_BOARD_SUCCESS]: (state, { payload: board }) => ({
      ...state,
      loading: { ...state.loading, READ_BOARD: false },
      board,
    }),
    [READ_BOARD_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, READ_BOARD: false },
    }),

    [INSERT_BOARD]: (state) => ({
      ...state,
      loading: { ...state.loading, INSERT_BOARD: true },
    }),
    [INSERT_BOARD_SUCCESS]: (state) => ({
      ...state,
      loading: { ...state.loading, INSERT_BOARD: false },
    }),
    [INSERT_BOARD_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, INSERT_BOARD: false },
    }),
    [UPDATE_BOARD]: (state) => ({
      ...state,
      loading: { ...state.loading, UPDATE_BOARD: true },
    }),
    [UPDATE_BOARD_SUCCESS]: (state) => ({
      ...state,
      loading: { ...state.loading, UPDATE_BOARD: false },
    }),
    [UPDATE_BOARD_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, UPDATE_BOARD: false },
    }),
    [DELETE_BOARD]: (state) => ({
      ...state,
      loading: { ...state.loading, DELETE_BOARD: true },
    }),
    [DELETE_BOARD_SUCCESS]: (state) => ({
      ...state,
      loading: { ...state.loading, DELETE_BOARD: false },
    }),
    [DELETE_BOARD_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, DELETE_BOARD: false },
    }),
  },
  initialState,
);

export default board;
