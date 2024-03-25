import { useEffect } from 'react';
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
import {
  selectCampersData,
  selectCurrentPage,
  selectIsLoading,
  selectLimit,
  selectPaginate,
} from '../../redux/selectors';
import {
  paginateCampers,
  renderFirstPaginatePage,
  setCurrentPage,
} from '../../redux/campersSlice';

const Catalog = () => {
  const campersData = useSelector(selectCampersData);
  const isLoading = useSelector(selectIsLoading);
  const limit = useSelector(selectLimit);
  const currentPage = useSelector(selectCurrentPage);
  const paginateData = useSelector(selectPaginate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(renderFirstPaginatePage(campersData));
  }, [dispatch, campersData]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(paginateCampers(campersData));
  };

  return (
    <PageWrapper>
      <Filters />

      <ContentWrapper>
        {(isLoading && <Loader />) ||
          (campersData.length > 0 && (
            <CamperCardsWrapper>
              <CamperCards campers={paginateData} />
              {currentPage * limit < campersData.length && (
                <ButtonLoadMore onClick={handleLoadMore} />
              )}
            </CamperCardsWrapper>
          ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Catalog;
