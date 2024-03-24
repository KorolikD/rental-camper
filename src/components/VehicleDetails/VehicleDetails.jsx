import {
  convertCamelCaseToNormal,
  firstLetterToUpperCase,
} from '../../helpers';
import { ListItem, Text, VehicleDetailsList } from './VehicleDetails.styled';

export const VehicleDetails = ({ camperData }) => {
  const createTemplate = (camperData) => {
    const { form, length, width, height, tank, consumption } = camperData;

    const keys = Object.keys({
      form,
      length,
      width,
      height,
      tank,
      consumption,
    }).map((el) => firstLetterToUpperCase(el));

    const values = Object.values({
      form,
      length,
      width,
      height,
      tank,
      consumption,
    }).map((el) =>
      convertCamelCaseToNormal(el)
        .replace(/(\d)([a-zA-Z])/g, '$1 $2')
        .replace(/\//g, ' / ')
    );

    return keys.map((key, index) => (
      <ListItem key={key}>
        <Text>{key}</Text>
        <Text>{values[index]}</Text>
      </ListItem>
    ));
  };

  return <VehicleDetailsList>{createTemplate(camperData)}</VehicleDetailsList>;
};
