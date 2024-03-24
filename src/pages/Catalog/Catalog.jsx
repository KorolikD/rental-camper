import { useEffect, useState } from 'react';
import {
  Filters,
  CamperCards,
  Loader,
  ButtonLoadMore,
} from '../../components/';
import { getAllCampers } from '../../utils';
import {
  CamperCardsWrapper,
  ContentWrapper,
  PageWrapper,
} from './Catalog.styled';

const Catalog = () => {
  const [campersData, setCampersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [limit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getCampers = async () => {
      try {
        setIsLoading(true);
        const response = await getAllCampers();
        console.log('🤬>>>  response:\n', response);
        setCampersData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCampers();
  }, []);

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
