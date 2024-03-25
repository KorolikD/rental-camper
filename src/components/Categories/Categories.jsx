import { firstLetterToUpperCase } from '../../helpers';
import { theme } from '../../styles';
import { SvgCustom } from '../../components';
import { CategoriesList, ListItem, Text } from './Categories.styled';

export const Categories = ({ camper }) => {
  const createTemplate = (camper) => {
    const {
      adults,
      transmission,
      engine,
      details: {
        airConditioner,
        kitchen,
        beds,
        CD,
        TV,
        radio,
        hob,
        toilet,
        shower,
        freezer,
        gas,
        water,
        microwave,
      },
    } = camper;

    return (
      <>
        {(adults || adults !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-adults'} color={theme.colors.main} />
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

        {(airConditioner || airConditioner !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-AC'} color={theme.colors.main} />
            <Text>AC</Text>
          </ListItem>
        )}

        {engine && (
          <ListItem>
            <SvgCustom icon={'categories-engine'} color={theme.colors.main} />
            <Text>{firstLetterToUpperCase(engine)}</Text>
          </ListItem>
        )}

        {(kitchen || kitchen !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-kitchen'} stroke={theme.colors.main} />
            <Text>Kitchen</Text>
          </ListItem>
        )}

        {(beds || beds !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-beds'} stroke={theme.colors.main} />
            <Text>{`${beds} ${beds < 2 ? 'bed' : 'beds'}`}</Text>
          </ListItem>
        )}

        {(airConditioner || airConditioner !== 0) && (
          <ListItem>
            <SvgCustom
              icon={'categories-airConditioner'}
              stroke={theme.colors.main}
            />
            <Text>{`${airConditioner} ${
              airConditioner < 2 ? 'Air conditioner' : 'Air conditioners'
            }`}</Text>
          </ListItem>
        )}

        {(CD || CD !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-CD'} stroke={theme.colors.main} />
            <Text>CD</Text>
          </ListItem>
        )}

        {(TV || TV !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-TV'} stroke={theme.colors.main} />
            <Text>TV</Text>
          </ListItem>
        )}

        {(radio || radio !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-radio'} stroke={theme.colors.main} />
            <Text>Radio</Text>
          </ListItem>
        )}

        {(hob || hob !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-hob'} stroke={theme.colors.main} />
            <Text>{`${hob} ${hob < 2 ? 'hob' : 'hobs'}`}</Text>
          </ListItem>
        )}

        {(toilet || toilet !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-toilet'} color={theme.colors.main} />
            <Text>Toilet</Text>
          </ListItem>
        )}

        {(shower || shower !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-shower'} stroke={theme.colors.main} />
            <Text>Shower</Text>
          </ListItem>
        )}

        {(freezer || freezer !== 0) && (
          <ListItem>
            <SvgCustom icon={'categories-freezer'} stroke={theme.colors.main} />
            <Text>Freezer</Text>
          </ListItem>
        )}

        {gas && (
          <ListItem>
            <SvgCustom icon={'categories-gas'} color={theme.colors.main} />
            <Text>Gas</Text>
          </ListItem>
        )}

        {water && (
          <ListItem>
            <SvgCustom icon={'categories-water'} stroke={theme.colors.main} />
            <Text>Water</Text>
          </ListItem>
        )}

        {(microwave || microwave !== 0) && (
          <ListItem>
            <SvgCustom
              icon={'categories-microwave'}
              stroke={theme.colors.main}
            />
            <Text>Microwave</Text>
          </ListItem>
        )}
      </>
    );
  };

  return <CategoriesList>{createTemplate(camper)}</CategoriesList>;
};
