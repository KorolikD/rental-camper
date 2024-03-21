import styled from 'styled-components';
import { theme } from '../../styles';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 145px;
  height: 56px;
  padding: 16px;
  border-radius: ${theme.radii.xxl};
  border: 1px solid ${theme.colors.buttonBorder};

  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  letter-spacing: -0.01em;
  color: ${theme.colors.main};

  transition: ${`border ${theme.animation.cubicBezier}`};

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.buttonHover};
  }
`;
