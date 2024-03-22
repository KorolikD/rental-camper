import sprite from '../../img/sprite.svg';
import { SvgWrap } from './SvgCustom.styled';

export const SvgCustom = ({
  icon,
  width = 20,
  height = 20,
  color,
  stroke,
  hover,
}) => {
  return (
    <SvgWrap
      $width={width}
      $height={height}
      $color={color}
      $stroke={stroke}
      $hover={hover}
    >
      <use href={`${sprite}#${icon}`} />
    </SvgWrap>
  );
};
