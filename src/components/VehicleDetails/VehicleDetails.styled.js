import styled from 'styled-components';
import { theme } from '../../styles';

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  text-align: center;
  color: ${theme.colors.main};
`;
