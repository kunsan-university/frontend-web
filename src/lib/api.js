import axios from 'axios';
axios.defaults.baseURL = 'http://junho-dev.tk:8082';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export const readBoards = ({ searchWrd, recordCountPerPage, firstIndex }) => {
  let query = `?`;
  if (typeof searchWrd !== 'undefined') query += `&searchWrd=${searchWrd}`;
  if (typeof recordCountPerPage !== 'undefined')
    query += `&recordCountPerPage=${recordCountPerPage}`;
  if (typeof firstIndex !== 'undefined') query += `&firstIndex=${firstIndex}`;
  return axios.get(`board/BBSMSTR_AAAAAAAAAAAA/${query}`);
};

export const readBoard = (id) => axios.get(`board/BBSMSTR_AAAAAAAAAAAA/${id}`);

export const insertBoard = (body) =>
  axios.post(`board/BBSMSTR_AAAAAAAAAAAA`, body);

export const updateBoard = (id, body) =>
  axios.put(`board/BBSMSTR_AAAAAAAAAAAA/${id}`, body);

export const deleteBoard = (id, body) =>
  axios.delete(`board/BBSMSTR_AAAAAAAAAAAA/${id}`, body);
