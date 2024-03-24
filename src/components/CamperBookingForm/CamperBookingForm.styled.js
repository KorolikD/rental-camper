import styled from 'styled-components';
import { theme } from '../../styles';

export const FormTitle = styled.h4`
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  line-height: 120%;
  color: ${theme.colors.main};
  margin-bottom: 8px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${theme.fontSizes.small};

  line-height: 150%;
  color: ${theme.colors.text};
  margin-bottom: 24px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 24px;
`;

export const TextArea = styled.textarea`
  padding: 18px;
  width: 100%;
  height: 114px;

  border: none;
  border-radius: ${theme.radii.sm};

  background-color: ${theme.colors.inputs};

  font-family: ${theme.fonts.mainFont};
  font-weight: 400;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  color: ${theme.colors.main};
  outline: transparent;
  resize: none;

  transition: ${`all ${theme.animation.cubicBezier}`};

  &::placeholder {
    color: ${theme.colors.inputPlaceholderText};
  }

  /* Стилізація вертикальної прокрутки */
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
