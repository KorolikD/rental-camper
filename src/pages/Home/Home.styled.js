import styled from 'styled-components';
import backgroundImage from '../../img/home-background.jpg';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 60px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;

    background-image: url(${backgroundImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: -1;
  }
`;

export const Title = styled.h1`
  width: 800px;
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  color: ${theme.colors.main};
`;

export const Text = styled.p`
  width: 700px;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: ${theme.colors.main};
`;
