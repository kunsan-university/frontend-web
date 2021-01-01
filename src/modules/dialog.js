import { createAction, handleActions } from 'redux-actions';

const SHOW_DIALOG = 'dialog/SHOW_DIALOG';
const HIDE_DIALOG = 'dialog/HIDE_DIALOG';
const SHOW_DIALOG2 = 'dialog/SHOW_DIALOG2';
const HIDE_DIALOG2 = 'dialog/HIDE_DIALOG2';

const CHANGE_TITLE = 'dialog/CHANGE_TITLE';
const CHANGE_SUBJECT = 'dialog/CHANGE_SUBJECT';

export const showDialog = createAction(SHOW_DIALOG);
export const hideDialog = createAction(HIDE_DIALOG);
export const showDialog2 = createAction(SHOW_DIALOG2);
export const hideDialog2 = createAction(HIDE_DIALOG2);

export const changeTitle = createAction(CHANGE_TITLE, (title) => title);
export const changeSubject = createAction(CHANGE_SUBJECT, (subject) => subject);
const initialState = {
  visible: false,
  visible2: false,
  title: '',
  subject: '',
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
    [CHANGE_TITLE]: (state, { payload: title }) => ({
      ...state,
      title,
    }),
    [CHANGE_SUBJECT]: (state, { payload: subject }) => ({
      ...state,
      subject,
    }),
  },
  initialState,
);

export default dialog;
