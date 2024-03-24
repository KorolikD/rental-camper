import { useEffect, useState } from 'react';
import {
  Filters,
  CamperCards,
  Loader,
  ButtonLoadMore,
} from '../../components/';
import {
  CamperCardsWrapper,
  ContentWrapper,
  PageWrapper,
} from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/operators';
import { selectCampers } from '../../redux/selectors';

const Catalog = () => {
  const [limit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  const { campersData, isLoading } = useSelector(selectCampers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    setItems((prevItems) => [
      ...prevItems,
      ...campersData.slice(currentPage * limit - limit, currentPage * limit),
    ]);
  }, [currentPage, limit, campersData]);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <PageWrapper>
      <Filters />

      <ContentWrapper>
        {isLoading && <Loader />}
        {campersData.length > 0 && (
          <CamperCardsWrapper>
            <CamperCards campers={items} />
            {currentPage * limit < campersData.length && (
              <ButtonLoadMore onClick={handleLoadMore} />
            )}
          </CamperCardsWrapper>
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Catalog;
