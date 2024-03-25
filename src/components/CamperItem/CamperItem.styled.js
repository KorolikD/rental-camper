import styled from 'styled-components';
import { theme } from '../../styles';
import { SvgWrap } from '../SvgCustom/SvgCustom.styled';

export const ListItem = styled.li`
  display: flex;
  gap: 24px;
  padding: 24px;

  width: 888px;
  height: 360px;

  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.lg};
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: ${theme.radii.sm};
  width: 290px;
  height: 310px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  gap: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  line-height: 125%;
  color: ${theme.colors.main};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 10px;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  line-height: 125%;
  color: ${theme.colors.main};
`;

export const SvgButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover > ${SvgWrap} {
    stroke: ${theme.colors.button};
  }
`;

export const RatingLocationWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const SvgTextWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.main};
`;

export const ReviewText = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  text-decoration: underline;

  text-decoration-skip-ink: none;

  color: ${theme.colors.main};
`;

export const DescriptionText = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;

  width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: ${theme.colors.main};
`;

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
