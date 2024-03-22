import { theme } from '../../styles';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import {
  Title,
  VehicleEquipmentList,
  ListItem,
  Text,
} from './VehicleEquipment.styled';

export const VehicleEquipment = () => {
  return (
    <>
      <Title>Vehicle equipment</Title>
      <VehicleEquipmentList>
        <ListItem>
          <SvgCustom
            icon={'filters-AC'}
            color={theme.colors.main}
            height={32}
            width={32}
          />
          <Text>AC</Text>
        </ListItem>
        <ListItem>
          <SvgCustom
            icon={'filters-transmission'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Text>Automatic</Text>
        </ListItem>

        <ListItem>
          <SvgCustom
            icon={'filters-kitchen'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Text>Kitchen</Text>
        </ListItem>
        <ListItem>
          <SvgCustom
            icon={'filters-TV'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Text>TV</Text>
        </ListItem>
        <ListItem>
          <SvgCustom
            icon={'filters-shower-WC'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Text>Shower/WC</Text>
        </ListItem>
      </VehicleEquipmentList>
    </>
  );
};
