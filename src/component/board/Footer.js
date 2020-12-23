import React from 'react';
import styled from 'styled-components';
import Button from '../lib/Button';
const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Template>
      <Button color={'gray'}>이전</Button>
      <Button color={'gray'}>다음</Button>
    </Template>
  );
};

export default Footer;
