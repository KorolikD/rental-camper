import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CamperCardsWrapper, NavigateLink, Text } from './Favorites.styled';
import { ButtonLoadMore, CamperCards } from '../../components';
import {
  selectCurrentPage,
  selectFavorites,
  selectFavoritesPaginate,
  selectLimit,
} from '../../redux/selectors';
import {
  paginateFavorite,
  renderFirstFavoritePage,
  setCurrentPage,
} from '../../redux/campersSlice';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  const limit = useSelector(selectLimit);
  const currentPage = useSelector(selectCurrentPage);
  const favoritesPaginate = useSelector(selectFavoritesPaginate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [dispatch]);

  useEffect(() => {
    if (currentPage > 1) return;
    dispatch(renderFirstFavoritePage(favorites));
  }, [dispatch, favorites, currentPage]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(paginateFavorite(favorites));
  };

  return (
    <>
      {favorites.length === 0 && (
        <CamperCardsWrapper>
          <Text>It seems you have not added anything to favorites...</Text>
          <NavigateLink to={'/catalog'}> {`> Go to catalog <`}</NavigateLink>
        </CamperCardsWrapper>
      )}
      {favorites.length > 0 && (
        <CamperCardsWrapper>
          <CamperCards campers={favoritesPaginate} />
          {currentPage * limit < favorites.length && (
            <ButtonLoadMore onClick={handleLoadMore} />
          )}
        </CamperCardsWrapper>
      )}
    </>
  );
};

export default Favorites;
