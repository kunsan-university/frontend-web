import axios from 'axios';
//axios.defaults.baseURL = 'http://junho-dev.tk:8082';
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

export const readBoards = ({ searchWrd, recordCountPerPage, firstIndex }) => {
  let query = `?`;
  if (typeof searchWrd !== 'undefined') query += `&searchWrd=${searchWrd}`;
  if (typeof recordCountPerPage !== 'undefined') {
    query += `&recordCountPerPage=${recordCountPerPage}`;
  } else {
    query += `&recordCountPerPage=100`;
  }
  if (typeof firstIndex !== 'undefined') query += `&firstIndex=${firstIndex}`;
  return axios.get(`board/BBSMSTR_AAAAAAAAAAAA/${query}`);
};

export const readBoard = (id) => axios.get(`board/BBSMSTR_AAAAAAAAAAAA/${id}`);
export const insertBoard = (body) => axios.post(`board`, body);
export const updateBoard = (body) => axios.put(`board`, body);
export const deleteBoard = (body) => axios.delete(`board`, { data: body });
