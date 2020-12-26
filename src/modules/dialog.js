import { createAction, handleActions } from 'redux-actions';

const SHOW_DIALOG = 'dialog/SHOW_DIALOG';
const HIDE_DIALOG = 'dialog/HIDE_DIALOG';
const SHOW_DIALOG2 = 'dialog/SHOW_DIALOG2';
const HIDE_DIALOG2 = 'dialog/HIDE_DIALOG2';

export const showDialog = createAction(SHOW_DIALOG);
export const hideDialog = createAction(HIDE_DIALOG);
export const showDialog2 = createAction(SHOW_DIALOG2);
export const hideDialog2 = createAction(HIDE_DIALOG2);

const initialState = {
  visible: false,
  visible2: false,
};

const dialog = handleActions(
  {
    [SHOW_DIALOG]: (state) => ({
      visible: true,
    }),
    [HIDE_DIALOG]: (state) => ({
      visible: false,
    }),
    [SHOW_DIALOG2]: (state) => ({
      visible2: true,
    }),
    [HIDE_DIALOG2]: (state) => ({
      visible2: false,
    }),
  },
  initialState,
);

export default dialog;
