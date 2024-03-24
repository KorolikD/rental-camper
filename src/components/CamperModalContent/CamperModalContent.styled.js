import styled from 'styled-components';
import { theme } from '../../styles';
// import { NavLink as Link } from 'react-router-dom';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 902px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h3`
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
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  text-decoration: underline;

  text-decoration-skip-ink: none;

  color: ${theme.colors.main};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.main};
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  line-height: 125%;
  color: ${theme.colors.main};
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

// export const NavLink = styled(Link)`
//   display: block;
//   padding-bottom: 24px;
//   cursor: pointer;
//   position: relative;

//   font-weight: 600;
//   font-size: ${theme.fontSizes.medium};
//   line-height: 120%;
//   color: ${theme.colors.main};

//   &.active::after {
//     content: '';
//     display: block;
//     height: 5px;
//     width: 100%;
//     position: absolute;
//     top: 100%;
//     left: 0;
//     transform: translateY(-3px);

//     background-color: ${theme.colors.accent};
//   }

//   transition: ${`color ${theme.animation.cubicBezier}`};

//   &:hover {
//     color: ${theme.colors.buttonHover};
//   }
// `;

export const ModalNavigate = styled.label`
  display: block;
  padding-bottom: 24px;
  cursor: pointer;
  position: relative;

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
  }

  &:hover + ${ModalNavigate} {
    color: ${theme.colors.buttonHover};
  }
`;

// !!!!!!!!!!!!!!!!!!!!!!!!!

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CategoriesListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: ${theme.radii.xl};
  padding: 12px 18px;
  height: 44px;

  background-color: ${theme.colors.blockFeatures};
`;

export const CategoriesItemText = styled.p`
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  text-align: center;

  color: ${theme.colors.main};
`;
