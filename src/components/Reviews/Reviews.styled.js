import styled from 'styled-components';
import { theme } from '../../styles';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;

  gap: 16px;
`;

export const UserFirstLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;
  border-radius: 50%;

  background: ${theme.colors.blockFeatures};

  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  line-height: 125%;
  color: ${theme.colors.button};
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 4px;
`;

export const UserName = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 133%;
  color: ${theme.colors.main};
`;

export const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const ReviewText = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.text};
`;
