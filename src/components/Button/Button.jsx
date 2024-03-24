import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick, style, type }) => {
  return (
    <StyledButton type={type} style={{ ...style }} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
