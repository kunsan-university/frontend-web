import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
  display: inline-block;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  font-size: 1rem;
  height: 34px;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const Input = ({ children, onChangeInput, ...rest }) => {
  return <InputStyle {...rest}>{children}</InputStyle>;
};

export default Input;
