import styled from 'styled-components';
import { theme } from '../../styles';

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: ${theme.radii.xl};
  padding: 12px 18px;
  height: 44px;

  background-color: ${theme.colors.blockFeatures};
  mix-blend-mode: multiply;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  color: ${theme.colors.main};
`;
