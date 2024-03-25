import { theme } from '../../styles';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import {
  ContentWrapper,
  DescriptionText,
  FirstColumn,
  Gallery,
  Image,
  LinkWrapper,
  ModalNavigate,
  Price,
  RadioButton,
  RatingLocationWrapper,
  ReviewText,
  ScrollWrapper,
  SecondColumn,
  SvgTextWrapper,
  Text,
  Title,
  TitleWrapper,
  UnderLinkContentWrapper,
} from './CamperModalContent.styled';
import { useEffect, useRef, useState } from 'react';
import { CamperBookingForm, Features, Reviews } from '../../components';

export const CamperModalContent = ({ camperData }) => {
  const [checkedButton, setCheckedButton] = useState('');
  const { name, gallery, price, rating, reviews, location, description } =
    camperData;

  const featuresButtonRef = useRef(null);
  const reviewsButtonRef = useRef(null);

  useEffect(() => {
    setCheckedButton('features');
  }, []);

  useEffect(() => {
    checkedButton === 'features'
      ? (featuresButtonRef.current.checked = true)
      : (featuresButtonRef.current.checked = false);

    checkedButton === 'reviews'
      ? (reviewsButtonRef.current.checked = true)
      : (reviewsButtonRef.current.checked = false);
  }, [checkedButton]);

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

        <Price>{`€${price},00`}</Price>
      </TitleWrapper>

      <ScrollWrapper>
        <Gallery>
          {gallery.map((item, idx) => (
            <li key={idx}>
              <Image src={item} alt={name} />
            </li>
          ))}
        </Gallery>
        <DescriptionText>{description}</DescriptionText>
        <LinkWrapper>
          <RadioButton
            ref={featuresButtonRef}
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
            ref={reviewsButtonRef}
            type="radio"
            name="modal-navigate"
            id="modal-navigate-reviews"
            value="reviews"
            onClick={handleButtonCheck}
          />
          <ModalNavigate htmlFor="modal-navigate-reviews">
            Reviews
          </ModalNavigate>
        </LinkWrapper>
        <UnderLinkContentWrapper>
          <FirstColumn>
            {checkedButton === 'features' && (
              <Features camperData={camperData} />
            )}
            {checkedButton === 'reviews' && <Reviews camperData={camperData} />}
          </FirstColumn>
          <SecondColumn>
            <CamperBookingForm />
          </SecondColumn>
        </UnderLinkContentWrapper>
      </ScrollWrapper>
    </ContentWrapper>
  );
};
