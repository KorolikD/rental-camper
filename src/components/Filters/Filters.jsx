import { useState } from 'react';
import { theme } from '../../styles';
import {
  Title,
  Label,
  FormBlockWrapper,
  Checkbox,
  RadioButton,
  BlockTitle,
  Form,
} from './Filters.styled';
import { Button, SvgCustom, LocationInput } from '../../components';

export const Filters = () => {
  const [ac, setAc] = useState(false);
  const [automatic, setAutomatic] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTv] = useState(false);
  const [showerWC, setShowerWC] = useState(false);
  const [setRadioButton] = useState(null);

  // const [radioButton, setRadioButton] = useState(null);

  // useEffect(() => {
  //   console.log('🤬>>>  radioButton:\n', radioButton);
  // }, [radioButton]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleButtonCheck = (event) => {
    setRadioButton(event.target.value);
  };

  return (
    <Form>
      <LocationInput />

      <BlockTitle>Filters</BlockTitle>

      <Title>Vehicle equipment</Title>
      <FormBlockWrapper>
        <Checkbox
          type="checkbox"
          checked={ac}
          onChange={() => {
            setAc(!ac);
          }}
          name="vehicle-equipment"
          id="vehicle-equipment-ac"
          value="ac"
        />
        <Label htmlFor="vehicle-equipment-ac">
          <SvgCustom
            icon={'filters-AC'}
            color={theme.colors.main}
            height={32}
            width={32}
          />
          AC
        </Label>

        <Checkbox
          type="checkbox"
          checked={automatic}
          onChange={() => {
            setAutomatic(!automatic);
          }}
          id="vehicle-equipment-automatic"
          name="vehicle-equipment"
          value="automatic"
        />
        <Label htmlFor="vehicle-equipment-automatic">
          <SvgCustom
            icon={'filters-transmission'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          Automatic
        </Label>

        <Checkbox
          type="checkbox"
          checked={kitchen}
          onChange={() => {
            setKitchen(!kitchen);
          }}
          id="vehicle-equipment-kitchen"
          name="vehicle-equipment"
          value="kitchen"
        />
        <Label htmlFor="vehicle-equipment-kitchen">
          <SvgCustom
            icon={'filters-kitchen'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          Kitchen
        </Label>

        <Checkbox
          type="checkbox"
          checked={tv}
          onChange={() => {
            setTv(!tv);
          }}
          id="vehicle-equipment-tv"
          name="vehicle-equipment"
          value="tv"
        />
        <Label htmlFor="vehicle-equipment-tv">
          <SvgCustom
            icon={'filters-TV'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          TV
        </Label>

        <Checkbox
          type="checkbox"
          checked={showerWC}
          onChange={() => {
            setShowerWC(!showerWC);
          }}
          id="vehicle-equipment-shower-WC"
          name="vehicle-equipment"
          value="shower-WC"
        />
        <Label htmlFor="vehicle-equipment-shower-WC">
          <SvgCustom
            icon={'filters-shower-WC'}
            stroke={theme.colors.main}
            height={32}
            width={32}
          />
          Shower/WC
        </Label>
      </FormBlockWrapper>

      <Title style={{ marginTop: '32px' }}>Vehicle type</Title>
      <FormBlockWrapper>
        <RadioButton
          type="radio"
          onChange={handleButtonCheck}
          id="vehicle-type-van"
          name="vehicle-type"
          value="van"
        />
        <Label htmlFor="vehicle-type-van">
          <SvgCustom
            icon={'filters-van'}
            color={theme.colors.main}
            height={28}
            width={40}
          />
          Van
        </Label>

        <RadioButton
          type="radio"
          onChange={handleButtonCheck}
          id="vehicle-type-fully-integrated"
          name="vehicle-type"
          value="fully-integrated"
        />
        <Label
          htmlFor="vehicle-type-fully-integrated"
          style={{ padding: `8px 0` }}
        >
          <SvgCustom
            icon={'filters-fully-integrated'}
            color={theme.colors.main}
            height={28}
            width={40}
          />
          Fully <br />
          Integrated
        </Label>

        <RadioButton
          type="radio"
          onChange={handleButtonCheck}
          id="vehicle-type-alcove"
          name="vehicle-type"
          value="alcove"
        />
        <Label htmlFor="vehicle-type-alcove">
          <SvgCustom
            icon={'filters-alcove'}
            color={theme.colors.main}
            height={28}
            width={40}
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
    </Form>
  );
};
