import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import {
  FormTitle,
  InputsWrapper,
  Text,
  TextArea,
} from './CamperBookingForm.styled';

export const CamperBookingForm = () => {
  return (
    <>
      <div>
        <FormTitle>Book your campervan now</FormTitle>
        <Text>Stay connected! We are always ready to help you.</Text>
      </div>

      <form>
        <InputsWrapper>
          <Input
            type={'text'}
            name={'booking-form'}
            placeholder={'Name'}
            $width="100%"
          />

          <Input
            type={'email'}
            name={'booking-form'}
            placeholder={'Email'}
            $width="100%"
          />

          <Input
            type={'date'}
            name={'booking-form'}
            placeholder={'Booking date'}
            $width="100%"
          />

          <label htmlFor="">
            <TextArea
              name="booking-form"
              placeholder={'Comment'}
              // rows="4"
              // cols="50"
            ></TextArea>
          </label>
        </InputsWrapper>

        <Button type="submit">Send</Button>
      </form>
    </>
  );
};
