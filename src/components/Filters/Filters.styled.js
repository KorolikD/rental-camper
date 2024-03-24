import styled from 'styled-components';
import { theme } from '../../styles';

export const Form = styled.form`
  width: 364px;
`;

export const BlockTitle = styled.h3`
  margin-top: 32px;
  margin-bottom: 14px;

  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 150%;
  color: ${theme.colors.text};
`;

export const Title = styled.h4`
  position: relative;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  line-height: 125%;
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

export const FormBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  padding: 18px 0;
  width: 114px;
  height: 96px;

  font-weight: 500;
  text-align: center;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  color: ${theme.colors.main};

  transition: ${`border ${theme.animation.cubicBezier}`};
`;

export const Checkbox = styled.input`
  visibility: hidden;
  position: absolute;

  &:checked + ${Label} {
    border: 1px solid ${theme.colors.accent};
  }
`;

export const RadioButton = styled.input`
  visibility: hidden;
  position: absolute;

  &:checked + ${Label} {
    border: 1px solid ${theme.colors.accent};
  }
`;
