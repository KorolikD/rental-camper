import { Outlet } from 'react-router-dom';
import { theme } from '../../styles';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import {
  ContentWrapper,
  DescriptionText,
  Gallery,
  Image,
  LinkWrapper,
  NavLink,
  Price,
  RatingLocationWrapper,
  ReviewText,
  SvgTextWrapper,
  Text,
  Title,
} from './CamperModalContent.styled';

export const CamperModalContent = ({ camperData }) => {
  console.log('🤬>>>  camperData:\n', camperData);
  const {
    // _id,
    // adults,
    // transmission,
    // engine,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    // details: {
    //   airConditioner,
    //   kitchen,
    //   beds,
    // CD,
    // TV,
    // radio,
    // hob,
    // toilet,
    // shower,
    // freezer,
    // gas,
    // water,
    // microwave,
    // },
  } = camperData;

  return (
    <ContentWrapper>
      <div>
        <Title>{name}</Title>

        <RatingLocationWrapper>
          <SvgTextWrapper>
            <SvgCustom
              icon={'rating-star'}
              height={16}
              width={16}
              color={theme.colors.rating}
            />
            <ReviewText>{`${rating}(${reviews.length} Reviews)`}</ReviewText>
          </SvgTextWrapper>
          <SvgTextWrapper>
            <SvgCustom
              icon={'location-small'}
              height={16}
              width={16}
              stroke={theme.colors.main}
            />
            <Text>{location}</Text>
          </SvgTextWrapper>
        </RatingLocationWrapper>

        <Price>{`€${price}.00`}</Price>
      </div>

      <Gallery>
        {gallery.map((item, idx) => (
          <li key={idx}>
            <Image src={item} alt={name} />
          </li>
        ))}
      </Gallery>

      <DescriptionText>{description}</DescriptionText>

      <LinkWrapper>
        <NavLink to={'features'}>Features</NavLink>
        <NavLink to={'reviews'}>Reviews</NavLink>
      </LinkWrapper>

      <Outlet />
    </ContentWrapper>
  );
};
