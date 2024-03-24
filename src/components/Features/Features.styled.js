import styled from 'styled-components';
import { theme } from '../../styles';

export const FeaturesWrapper = styled.div`
  display: flex;
  width: 902px;
  gap: 24px;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;

  gap: 44px;
`;

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

export const FormBlockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SecondColumn = styled.div`
  display: flex;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  padding: 24px;
  width: 448px;
`;
