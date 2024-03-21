import styled from 'styled-components';
import { theme } from './styles';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.backdropBackground};

  background-repeat: no-repeat;
  background-position: left top;
  background-size: 100% 100%;
`;
