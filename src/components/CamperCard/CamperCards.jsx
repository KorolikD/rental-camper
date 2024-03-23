import { useState } from 'react';
import { firstLetterToUpperCase } from '../../helpers/firstLetterToUpperCase';
import { theme } from '../../styles';
import { Button } from '../Button';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import { CategoriesList, ListItem, Text } from './CamperCards.styled';
import { BasicModalWindow } from '../BasicModalWindow';

export const CamperCards = ({ campers }) => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createTemplate = (campers) => {
    return (
      <>
        {campers.map((camper) => {
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
            details: {
              airConditioner,
              kitchen,
              beds,
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
            },
          } = camper;

          return (
            <li key={_id}>
              <img src={gallery[0]} alt={name} />
              <div>
                <div>
                  <h2>{name}</h2>
                  <p>{`€${price}.00`}</p>
                  <SvgCustom
                    icon={'heart'}
                    height={24}
                    width={24}
                    stroke={theme.colors.main}
                  />
                </div>

                <div>
                  <SvgCustom
                    icon={'rating-star'}
                    height={16}
                    width={16}
                    color={theme.colors.rating}
                  />
                  <Text>{`${rating}(${reviews.length} Reviews)`}</Text>
                  <SvgCustom
                    icon={'location-small'}
                    height={16}
                    width={16}
                    stroke={theme.colors.main}
                  />
                  <Text>{location}</Text>

                  <p>{description}</p>

                  <ul>
                    {(adults || adults !== 0) && (
                      <ListItem>
                        <SvgCustom
                          icon={'categories-adults'}
                          color={theme.colors.main}
                        />
                        <Text>{`${adults} adults`}</Text>
                      </ListItem>
                    )}

                    {transmission && (
                      <ListItem>
                        <SvgCustom
                          icon={'categories-transmission'}
                          stroke={theme.colors.main}
                        />
                        <Text>{`${firstLetterToUpperCase(transmission)}`}</Text>
                      </ListItem>
                    )}

                    {engine && (
                      <ListItem>
                        <SvgCustom
                          icon={'categories-engine'}
                          color={theme.colors.main}
                        />
                        <Text>{firstLetterToUpperCase(engine)}</Text>
                      </ListItem>
                    )}

                    {(kitchen || kitchen !== 0) && (
                      <ListItem>
                        <SvgCustom
                          icon={'categories-kitchen'}
                          stroke={theme.colors.main}
                        />
                        <Text>Kitchen</Text>
                      </ListItem>
                    )}

                    {(beds || beds !== 0) && (
                      <ListItem>
                        <SvgCustom
                          icon={'categories-beds'}
                          stroke={theme.colors.main}
                        />
                        <Text>{`${beds} ${beds < 2 ? 'bed' : 'beds'}`}</Text>
                      </ListItem>
                    )}

                    {(airConditioner || airConditioner !== 0) && (
                      <ListItem>
                        <SvgCustom
                          icon={'categories-AC'}
                          color={theme.colors.main}
                        />
                        <Text>AC</Text>
                      </ListItem>
                    )}
                  </ul>

                  <BasicModalWindow
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                  >
                    <div style={{ height: '500px', width: '500px' }}></div>
                  </BasicModalWindow>
                  <Button onClick={openModal}>Show more</Button>
                </div>
              </div>
            </li>
          );
        })}
      </>
    );
  };

  return <CategoriesList>{createTemplate(campers)}</CategoriesList>;
};
