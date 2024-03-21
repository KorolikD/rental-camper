import styled from 'styled-components';
import { theme } from '../../styles';

export const Field = styled.input`
  padding: 18px;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border: none;
  border-radius: ${theme.radii.sm};

  background-color: ${theme.colors.inputs};

  font-family: ${theme.fonts.mainFont};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  color: ${theme.colors.main};

  &::placeholder {
    color: ${theme.colors.inputPlaceholderText};
  }

  transition: ${`outline ${theme.animation.cubicBezier}`};

  &:focus {
    outline: 1px solid ${theme.colors.accent};
  }
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: ${theme.fonts.mainFont};
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.inputPlaceholderText};
`;
