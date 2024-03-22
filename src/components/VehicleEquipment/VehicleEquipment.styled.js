import styled from 'styled-components';
import { theme } from '../../styles';

export const Title = styled.h3`
  position: relative;
  font-weight: 600;
  font-size: ${theme.fontSizes.medium};
  line-height: 125%;
  color: ${theme.colors.main};
  margin-bottom: 48px;

  &::before {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.horizontalLine};

    content: '';
    position: absolute;
    top: 100%;
    transform: translateY(24px);
  }
`;

export const VehicleEquipmentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radii.sm};
  padding: 18px 0;
  width: 114px;
  height: 96px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: ${theme.fontSizes.small};
  line-height: 125%;
  color: ${theme.colors.main};
`;
