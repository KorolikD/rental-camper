import sprite from '../../img/sprite.svg';
import { SvgWrap } from './SvgCustom.styled';

const SvgCustom = ({ icon, width, height, color, stroke, hover, tabSize }) => {
  return (
    <SvgWrap
      $width={width}
      $height={height}
      $color={color}
      $stroke={stroke}
      $hover={hover}
      $tabSize={tabSize}
    >
      <use href={`${sprite}#${icon}`} />
    </SvgWrap>
  );
};

export default SvgCustom;
