import styled from 'styled-components';
import { theme } from '../../styles';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 926px;
  height: 720px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.mainFont};
  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  line-height: 125%;
  color: ${theme.colors.main};
  margin-bottom: 8px;
`;

export const RatingLocationWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const SvgTextWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ReviewText = styled.p`
  font-family: ${theme.fonts.mainFont};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  text-decoration: underline;

  text-decoration-skip-ink: none;

  color: ${theme.colors.main};
`;

export const Text = styled.p`
  font-family: ${theme.fonts.mainFont};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.main};
`;

export const Price = styled.p`
  font-family: ${theme.fonts.mainFont};
  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  line-height: 125%;
  color: ${theme.colors.main};
`;

export const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 926px;
  padding-right: 24px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Фон прокрутки */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Бар прокрутки */
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.scroll};
    border-radius: ${theme.radii.sm};
  }

  /* При наведенні на бар прокрутки */
  &::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
    background: ${theme.colors.scrollHover};
  }
`;

export const Gallery = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: ${theme.radii.sm};
  width: 290px;
  height: 310px;
`;

export const DescriptionText = styled.p`
  display: inline-block;
  font-family: ${theme.fonts.mainFont};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;

  width: 100%;

  color: ${theme.colors.main};

  margin-bottom: 44px;
`;

export const LinkWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 40px;
  margin-bottom: 44px;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.horizontalLine};

    top: 100%;
    transform: translateY(-1px);
  }
`;

export const ModalNavigate = styled.label`
  display: block;
  padding-bottom: 24px;
  cursor: pointer;
  position: relative;

  font-family: ${theme.fonts.mainFont};
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  line-height: 120%;
  color: ${theme.colors.main};

  transition: ${`all ${theme.animation.cubicBezier}`};
`;

export const RadioButton = styled.input`
  visibility: hidden;
  position: absolute;

  &:checked + ${ModalNavigate}::after {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateY(-3px);

    background-color: ${theme.colors.accent};

    transition: ${`all ${theme.animation.cubicBezier}`};
    z-index: 1;
  }

  &:hover + ${ModalNavigate} {
    color: ${theme.colors.buttonHover};
  }
`;

export const UnderLinkContentWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;

  gap: 44px;
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  padding: 24px;
  width: 448px;
  height: max-content;
`;
