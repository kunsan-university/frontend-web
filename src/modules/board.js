import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';

const CHANGE_INPUT = 'board/CHANGE_INPUT';
const NEXT_PAGE = 'board/NEXT_PAGE';
const PREV_PAGE = 'board/PREV_PAGE';

const GET_USERS = 'board/GET_USERS';
const GET_USERS_SUCCESS = 'board/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'board/GET_USERS_FAILURE';

export const getUser = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    const response = await api.getUser();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
};

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

const initialState = {
  loading: { GET_USERS: false },
  users: null,
  input: '',
};

const board = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: true },
    }),
    [GET_USERS_SUCCESS]: (state, { payload: users }) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
      users,
    }),
    [GET_USERS_FAILURE]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
    }),
  },
  initialState,
);

export default board;
