import styled from 'styled-components';

export const SvgWrap = styled.svg`
  stroke: ${({ $stroke }) => ($stroke ? $stroke : 'transparent')};
  fill: ${({ $color }) => ($color ? $color : 'transparent')};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
`;
