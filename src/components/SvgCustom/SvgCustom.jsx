import sprite from '../../img/sprite.svg';
import { SvgWrap } from './SvgCustom.styled';

const SvgCustom = ({ icon, width = 20, height = 20, color, stroke }) => {
  return (
    <SvgWrap $width={width} $height={height} $color={color} $stroke={stroke}>
      <use href={`${sprite}#${icon}`} />
    </SvgWrap>
  );
};

export default SvgCustom;
