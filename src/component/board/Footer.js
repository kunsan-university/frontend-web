import React from 'react';
import styled from 'styled-components';
import Button from '../lib/Button';
import { changeOffset } from '../../modules/board';
import { useDispatch } from 'react-redux';
const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Li = styled.li`
  display: inline-block;
  & + & {
    margin-left: 10px;
  }
`;

const Footer = ({ count, total, offset }) => {
  const dispatch = useDispatch();
  const pageCount = total / count + (total % count ? 1 : 0);
  const countArr = Array(pageCount)
    .fill()
    .map((ele, idx) => idx + 1);

  const handleoOnButton = (preOrNext) => {
    let setOffset = 0;
    if (preOrNext) {
      setOffset = offset + count < total ? offset + count : offset;
    } else {
      setOffset = offset - count >= 0 ? offset - count : 0;
    }
    dispatch(changeOffset(Number(setOffset)));
  };
  return (
    <Template>
      <ul>
        <Li>
          <Button color={'gray'} onClick={() => handleoOnButton(false)}>
            이전
          </Button>
        </Li>
        {countArr.map((ele, idx) => {
          const color = idx === offset / count ? 'pink' : 'blue';
          return (
            <Li key={idx}>
              <Button color={color}>{ele}</Button>
            </Li>
          );
        })}
        <Li>
          <Button color={'gray'} onClick={() => handleoOnButton(true)}>
            다음
          </Button>
        </Li>
      </ul>
    </Template>
  );
};

export default Footer;
