import styled from 'styled-components';
import { theme } from '../../styles';

export const FormGroup = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: ${theme.fonts.mainFont};
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.inputPlaceholderText};
`;

export const Icon = styled.svg`
  position: absolute;
  left: 18px;
  top: 100%;
  transform: translateY(-38px);

  height: 20px;
  width: 18px;
  stroke: ${theme.colors.inputPlaceholderText};
  fill: transparent;

  transition: ${`stroke  ${theme.animation.cubicBezier}`};
`;

export const Field = styled.input`
  padding: 18px 18px 18px 44px;
  width: 360px;
  height: 56px;

  border: none;
  border-radius: ${theme.radii.sm};

  background-color: ${theme.colors.inputs};

  font-family: ${theme.fonts.mainFont};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  color: ${theme.colors.main};
  outline: transparent;

  &::placeholder {
    color: ${theme.colors.inputPlaceholderText};
  }

  /* transition: ${`outline  ${theme.animation.cubicBezier}`}; */

  &:focus {
    /* outline: 1px solid ${theme.colors.accent}; */

    + ${Icon} {
      stroke: ${theme.colors.main};
    }
  }
`;
