import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CamperCardsWrapper } from './Favorites.styled';
import { ButtonLoadMore, CamperCards } from '../../components';
import { selectFavorites } from '../../redux/selectors';

const Favorites = () => {
  const [limit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...favorites.slice(currentPage * limit - limit, currentPage * limit),
    ]);
  }, [currentPage, limit, favorites]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {favorites.length > 0 && (
        <CamperCardsWrapper>
          <CamperCards campers={items} />
          {currentPage * limit < favorites.length && (
            <ButtonLoadMore onClick={handleLoadMore} />
          )}
        </CamperCardsWrapper>
      )}
    </>
  );
};

export default Favorites;
