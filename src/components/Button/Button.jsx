import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton style={{ ...style }} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
