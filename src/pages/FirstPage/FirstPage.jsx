// import { Container } from './FirstPage.styled';
import { Button } from '../../components/Button';
import { ButtonLoadMore } from '../../components/ButtonLoadMore';
import { LocationInput } from '../../components/LocationInput';
import { Input } from '../../components/Input';
import { Categories } from '../../components/Categories';
import data from '../../campers.json';
console.log('🤬>>>  data:\n', data);

const FirstPage = () => {
  return (
    <div>
      <Button>Custom Btn</Button>
      <ButtonLoadMore />
      <br />
      <Input
        type={'text'}
        name={'name'}
        placeholder={'Name'}
        $width={'400px'}
        $height={'56px'}
      />
      <LocationInput />
      <Categories camper={data[0]} />
    </div>
  );
};

export default FirstPage;
