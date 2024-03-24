import { CamperItem } from '../../components';
import { CampersList } from './CamperCards.styled';

export const CamperCards = ({ campers }) => {
  return (
    <>
      <CampersList>
        {campers.map((camper) => (
          <CamperItem key={camper._id} camperData={camper} />
        ))}
      </CampersList>
    </>
  );
};
