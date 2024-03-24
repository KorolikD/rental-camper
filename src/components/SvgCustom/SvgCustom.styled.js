import styled from 'styled-components';
import { theme } from '../../styles';

export const SvgWrap = styled.svg`
  stroke: ${({ $stroke }) => ($stroke ? $stroke : 'transparent')};
  fill: ${({ $color }) => ($color ? $color : 'transparent')};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};

  transition: ${`all ${theme.animation.cubicBezier}`};

  &:hover,
  &:focus {
    stroke: ${({ $hover }) => $hover};
    fill: ${({ $color, $hover }) => ($color ? $hover : 'none')};
  }
`;
