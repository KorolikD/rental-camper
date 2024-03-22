import { Field, FormGroup, Icon } from './LocationInput.styled';
import sprite from '../../img/sprite.svg';

export const LocationInput = () => {
  return (
    <FormGroup htmlFor={'location'}>
      Location
      <Field type={'text'} name={'location'} placeholder={'City'} />
      <Icon>
        <use href={`${sprite}#location`} />
      </Icon>
    </FormGroup>
  );
};
