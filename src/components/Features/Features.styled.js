import styled from 'styled-components';
import { theme } from '../../styles';

export const Title = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;

  position: relative;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  line-height: 120%;
  color: ${theme.colors.main};
  margin-bottom: 48px;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.horizontalLine};

    top: 100%;
    transform: translateY(24px);
  }
`;
