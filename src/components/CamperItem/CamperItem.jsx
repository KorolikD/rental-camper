import { useState } from 'react';
import { firstLetterToUpperCase } from '../../helpers';
import { theme } from '../../styles';
import {
  Button,
  SvgCustom,
  BasicModalWindow,
  CamperModalContent,
} from '../../components';
import {
  CategoriesItemText,
  CategoriesList,
  CategoriesListItem,
  ContentWrapper,
  DescriptionText,
  Image,
  ListItem,
  Price,
  PriceWrapper,
  RatingLocationWrapper,
  ReviewText,
  SvgTextWrapper,
  Text,
  Title,
  TitleWrapper,
} from './CamperItem.styled';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/campersSlice';

export const CamperItem = ({ camperData }) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleFavoriteButtonClick = () => {
    dispatch(toggleFavorite(camperData));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    _id,
    adults,
    transmission,
    engine,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    details: { airConditioner, kitchen, beds },
  } = camperData;

  return (
    <>
      {modalIsOpen && (
        <BasicModalWindow isOpen={modalIsOpen} onRequestClose={closeModal}>
          <CamperModalContent camperData={camperData} />
        </BasicModalWindow>
      )}
      <ListItem key={_id}>
        <Image src={gallery[0]} alt={name} />
        <ContentWrapper>
          <div>
            <TitleWrapper>
              <Title>{name}</Title>
              <PriceWrapper>
                <Price>{`€${price}.00`}</Price>
                <button onClick={handleFavoriteButtonClick}>
                  <SvgCustom
                    icon={'heart'}
                    height={24}
                    width={24}
                    stroke={theme.colors.main}
                  />
                </button>
              </PriceWrapper>
            </TitleWrapper>

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
          </div>

          <DescriptionText>{description}</DescriptionText>

          <CategoriesList>
            {(adults || adults !== 0) && (
              <CategoriesListItem>
                <SvgCustom
                  icon={'categories-adults'}
                  color={theme.colors.main}
                />
                <CategoriesItemText>{`${adults} adults`}</CategoriesItemText>
              </CategoriesListItem>
            )}

            {transmission && (
              <CategoriesListItem>
                <SvgCustom
                  icon={'categories-transmission'}
                  stroke={theme.colors.main}
                />
                <CategoriesItemText>{`${firstLetterToUpperCase(
                  transmission
                )}`}</CategoriesItemText>
              </CategoriesListItem>
            )}

            {engine && (
              <CategoriesListItem>
                <SvgCustom
                  icon={'categories-engine'}
                  color={theme.colors.main}
                />
                <CategoriesItemText>
                  {firstLetterToUpperCase(engine)}
                </CategoriesItemText>
              </CategoriesListItem>
            )}

            {(kitchen || kitchen !== 0) && (
              <CategoriesListItem>
                <SvgCustom
                  icon={'categories-kitchen'}
                  stroke={theme.colors.main}
                />
                <CategoriesItemText>Kitchen</CategoriesItemText>
              </CategoriesListItem>
            )}

            {(beds || beds !== 0) && (
              <CategoriesListItem>
                <SvgCustom
                  icon={'categories-beds'}
                  stroke={theme.colors.main}
                />
                <CategoriesItemText>{`${beds} ${
                  beds < 2 ? 'bed' : 'beds'
                }`}</CategoriesItemText>
              </CategoriesListItem>
            )}

            {(airConditioner || airConditioner !== 0) && (
              <CategoriesListItem>
                <SvgCustom icon={'categories-AC'} color={theme.colors.main} />
                <CategoriesItemText>AC</CategoriesItemText>
              </CategoriesListItem>
            )}
          </CategoriesList>
          <Button onClick={openModal}>Show more</Button>
        </ContentWrapper>
      </ListItem>
    </>
  );
};
