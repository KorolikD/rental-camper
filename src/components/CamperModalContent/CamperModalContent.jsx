// import { Outlet } from 'react-router-dom';
import { theme } from '../../styles';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import {
  ContentWrapper,
  DescriptionText,
  Gallery,
  Image,
  LinkWrapper,
  ModalNavigate,
  // NavLink,
  Price,
  RadioButton,
  RatingLocationWrapper,
  ReviewText,
  SvgTextWrapper,
  Text,
  Title,
  TitleWrapper,
} from './CamperModalContent.styled';
import { useState } from 'react';
import { Features, Reviews } from '../../components';

export const CamperModalContent = ({ camperData }) => {
  const [checkedButton, setCheckedButton] = useState('features');
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

  const handleButtonCheck = (event) => {
    setCheckedButton(event.target.value);
  };

  return (
    <ContentWrapper>
      <TitleWrapper>
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
      </TitleWrapper>

      <Gallery>
        {gallery.map((item, idx) => (
          <li key={idx}>
            <Image src={item} alt={name} />
          </li>
        ))}
      </Gallery>

      <DescriptionText>{description}</DescriptionText>

      <LinkWrapper>
        {/* <NavLink to={'features'}>Features</NavLink>
        <NavLink to={'reviews'}>Reviews</NavLink> */}
        {/* <Outlet /> */}
        <RadioButton
          type="radio"
          name="modal-navigate"
          id="modal-navigate-features"
          value="features"
          onClick={handleButtonCheck}
        />
        <ModalNavigate htmlFor="modal-navigate-features">
          Features
        </ModalNavigate>

        <RadioButton
          type="radio"
          name="modal-navigate"
          id="modal-navigate-reviews"
          value="reviews"
          onClick={handleButtonCheck}
        />
        <ModalNavigate htmlFor="modal-navigate-reviews">Reviews</ModalNavigate>
      </LinkWrapper>

      {checkedButton === 'features' && <Features camperData={camperData} />}
      {checkedButton === 'reviews' && <Reviews camperData={camperData} />}
    </ContentWrapper>
  );
};
