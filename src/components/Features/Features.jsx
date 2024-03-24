import { Categories, VehicleDetails } from '../../components';
import { Title } from './Features.styled';

export const Features = ({ camperData }) => {
  return (
    <>
      <Categories camper={camperData} />
      <div>
        <Title>Vehicle details</Title>
        <VehicleDetails camperData={camperData} />
      </div>
    </>
  );
};
