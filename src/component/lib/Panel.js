import React from 'react';
import styled from 'styled-components';

const PanelStyle = styled.div`
  width: ${(props) => props.width || '70vw'};
  padding: 40px 50px;
  border: 3px solid #dfe8f1;
  background-color: white;
`;

const Panel = ({ children, width }) => {
  return <PanelStyle>{children}</PanelStyle>;
};

export default Panel;
