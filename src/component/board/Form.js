import React, { useEffect } from 'react';
import Input from '../lib/Input';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeSubject, changeTitle } from '../../modules/dialog';

const StyledForm = styled.form`
  padding: 30px;
`;

const StyledFormEle = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 20px;
  }
`;

const StyledLabel = styled.label`
  padding: 10px;
  border: 3px solid #dfe8f1;
  border-radius: 5px;
  background-color: #f8f9fa;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  height: 200px;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  font-size: 1.2rem;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Form = ({ board }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeTitle(board.nttSj));
    dispatch(changeSubject(board.nttCn));
  }, []);
  const title = useSelector((state) => state.dialog.title);
  const subject = useSelector((state) => state.dialog.subject);
  return (
    <StyledForm>
      <StyledFormEle>
        <StyledLabel htmlFor="subject">제목</StyledLabel>
        <Input
          type="text"
          id="subject"
          value={title || ''}
          onChange={(e) => dispatch(changeTitle(e.target.value))}
        ></Input>
      </StyledFormEle>
      <StyledFormEle>
        <StyledLabel htmlFor="contents">내용</StyledLabel>
        <StyledTextarea
          type="text"
          id="contents"
          value={subject || ''}
          onChange={(e) => dispatch(changeSubject(e.target.value))}
        ></StyledTextarea>
      </StyledFormEle>
    </StyledForm>
  );
};

export default Form;
