import { Container } from './FirstPage.styled';
import { Button } from '../../components/Button';
import { ButtonLoadMore } from '../../components/ButtonLoadMore';
import { Input } from '../../components/Input';

const FirstPage = () => {
  return (
    <Container>
      <Button>Custom Btn</Button>
      <ButtonLoadMore />
      <br />
      <Input
        type={'text'}
        name={'name'}
        placeholder={'Name'}
        $width={'400px'}
        $height={'56px'}
      >
        Location
      </Input>
    </Container>
  );
};

export default FirstPage;
