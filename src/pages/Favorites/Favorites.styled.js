import styled from 'styled-components';
import { theme } from '../../styles';
import { NavLink } from 'react-router-dom';

export const CamperCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
  padding-bottom: 40px;
`;

export const Text = styled.p`
  padding-top: 60px;
  font-size: ${theme.fontSizes.medium};
  font-weight: 500;
`;

export const NavigateLink = styled(NavLink)`
  padding: 8px 8px;

  color: ${theme.colors.button};
  cursor: pointer;
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  min-width: 80px;

  transition: ${`color ${theme.animation.cubicBezier}`};

  &:hover,
  &:focus {
    color: ${theme.colors.buttonHover};
  }
`;
