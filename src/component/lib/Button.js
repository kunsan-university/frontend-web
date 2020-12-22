import style from 'styled-components';

const ButtonStyle = style.button`
  font:red
`;
const Button = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default Button;
