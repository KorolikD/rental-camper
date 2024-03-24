import { Categories, VehicleDetails } from '../../components';
import {
  FeaturesWrapper,
  FirstColumn,
  SecondColumn,
  Title,
} from './Features.styled';

export const Features = ({ camperData }) => {
  return (
    <FeaturesWrapper>
      <FirstColumn>
        <Categories camper={camperData} />
        <div>
          <Title>Vehicle details</Title>
          <VehicleDetails camperData={camperData} />
        </div>
      </FirstColumn>
      <SecondColumn></SecondColumn>
    </FeaturesWrapper>
  );
};
