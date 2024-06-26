import styled from 'styled-components';
import { theme } from '../../styles';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 173px;
  height: 56px;
  padding: 16px;
  border-radius: ${theme.radii.xxl};

  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  letter-spacing: -0.01em;
  color: ${theme.colors.buttonText};

  background-color: ${theme.colors.button};

  transition: ${`background-color ${theme.animation.cubicBezier}`};

  &:hover,
  &:focus {
    background-color: ${theme.colors.buttonHover};
  }
`;
