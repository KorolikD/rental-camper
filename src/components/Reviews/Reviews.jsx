import { theme } from '../../styles';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import {
  ListItem,
  ReviewsList,
  StarsWrapper,
  UserFirstLetter,
  UserInfoWrapper,
  UserName,
  UserWrapper,
} from './Reviews.styled';

export const Reviews = ({ camperData }) => {
  const createTemplate = (camperData) =>
    camperData.reviews.map(
      ({ reviewer_name, reviewer_rating, comment }, idx) => {
        const icons = [];

        for (let index = 0; index < 5; index++) {
          const color =
            index < reviewer_rating
              ? theme.colors.rating
              : theme.colors.blockFeatures;

          icons.push(
            <SvgCustom
              key={index + 'star'}
              icon={'rating-star'}
              height={16}
              width={16}
              color={color}
            />
          );
        }

        return (
          <ListItem key={idx}>
            <UserInfoWrapper>
              <UserFirstLetter>{reviewer_name[0]}</UserFirstLetter>
              <UserWrapper>
                <UserName>{reviewer_name}</UserName>
                <StarsWrapper>{icons}</StarsWrapper>
              </UserWrapper>
            </UserInfoWrapper>
            <p>{comment}</p>
          </ListItem>
        );
      }
    );

  return <ReviewsList>{createTemplate(camperData)}</ReviewsList>;
};
