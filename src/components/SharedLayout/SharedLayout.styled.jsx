import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles';

export const NavList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const NavigateLink = styled(NavLink)`
  display: block;
  padding: 8px 8px;
  text-align: center;
  color: ${theme.colors.main};
  cursor: pointer;
  font-size: ${theme.fontSizes.small};
  font-weight: 600;
  min-width: 80px;

  &.active {
    color: ${theme.colors.accent};
  }

  transition: ${`color ${theme.animation.cubicBezier}`};

  &:hover,
  &:focus {
    color: ${theme.colors.buttonHover};
  }
`;

export const Header = styled.header`
  background-color: ${theme.colors.mainBackground};

  padding: 16px 0;
  margin-bottom: 60px;
  box-shadow: ${theme.shadows.custom};
`;
