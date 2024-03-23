import { useEffect, useState } from 'react';
import { theme } from '../../styles';
import { LocationInput } from '../LocationInput';
import { SvgCustom } from '../SvgCustom/SvgCustom';
import {
  Title,
  Label,
  FormBlockWrapper,
  Checkbox,
  RadioButton,
  BlockTitle,
} from './Filters.styled';
import { Button } from '../Button';

export const Filters = () => {
  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [showerWC, setShowerWC] = useState(false);
  const [radioButton, setRadioButton] = useState(null);

  useEffect(() => {
    console.log('🤬>>>  radioButton:\n', radioButton);
  }, [radioButton]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <LocationInput />

      <BlockTitle>Filters</BlockTitle>

      <Title>Vehicle equipment</Title>
      <FormBlockWrapper>
        <Label>
          <SvgCustom
            icon={'filters-AC'}
            color={theme.colors.main}
            height={32}
            width={32}
          />
          <Checkbox
            type="checkbox"
            checked={ac}
            onChange={() => {
              setAc(!ac);
            }}
            name="vehicle-equipment"
            value="ac"
          />
          AC
        </Label>

        <Label>
          <SvgCustom
            icon={'filters-transmission'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Checkbox
            type="checkbox"
            checked={automatic}
            onChange={() => {
              setAutomatic(!automatic);
            }}
            name="vehicle-equipment"
            value="automatic"
          />
          Automatic
        </Label>

        <Label>
          <SvgCustom
            icon={'filters-kitchen'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Checkbox
            type="checkbox"
            checked={kitchen}
            onChange={() => {
              setKitchen(!kitchen);
            }}
            name="vehicle-equipment"
            value="kitchen"
          />
          Kitchen
        </Label>

        <Label>
          <SvgCustom
            icon={'filters-TV'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Checkbox
            type="checkbox"
            checked={tv}
            onChange={() => {
              setTv(!tv);
            }}
            name="vehicle-equipment"
            value="tv"
          />
          TV
        </Label>

        <Label>
          <SvgCustom
            icon={'filters-shower-WC'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          <Checkbox
            type="checkbox"
            checked={showerWC}
            onChange={() => {
              setShowerWC(!showerWC);
            }}
            name="vehicle-equipment"
            value="shower-WC"
          />
          Shower/WC
        </Label>
      </FormBlockWrapper>

      <Title style={{ marginTop: '32px' }}>Vehicle type</Title>
      <FormBlockWrapper>
        <Label>
          <SvgCustom
            icon={'filters-van'}
            color={theme.colors.main}
            height={28}
            width={40}
          />
          <RadioButton
            type="radio"
            onChange={(event) => {
              setRadioButton(event.target.value);
            }}
            name="vehicle-type"
            value="van"
          />
          Van
        </Label>

        <Label style={{ padding: `8px 0` }}>
          <SvgCustom
            icon={'filters-fully-integrated'}
            color={theme.colors.main}
            height={28}
            width={40}
          />
          <RadioButton
            type="radio"
            onChange={(event) => {
              setRadioButton(event.target.value);
            }}
            name="vehicle-type"
            value="fully-integrated"
          />
          Fully <br />
          Integrated
        </Label>

        <Label>
          <SvgCustom
            icon={'filters-alcove'}
            color={theme.colors.main}
            height={28}
            width={40}
          />
          <RadioButton
            type="radio"
            onChange={(event) => {
              setRadioButton(event.target.value);
            }}
            name="vehicle-type"
            value="alcove"
          />
          Alcove
        </Label>
      </FormBlockWrapper>

      <Button
        style={{ marginTop: '80px' }}
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </Button>
    </form>
  );
};
