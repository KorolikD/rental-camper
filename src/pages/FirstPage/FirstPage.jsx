import { Container } from './FirstPage.styled';
import { Button } from '../../components/Button';
import { ButtonLoadMore } from '../../components/ButtonLoadMore';

const FirstPage = () => {
  return (
    <Container>
      <Button>Custom Btn</Button>
      <ButtonLoadMore />
    </Container>
  );
};

export default FirstPage;
