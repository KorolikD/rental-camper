import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavList, NavigateLink, Header } from './SharedLayout.styled';
import { MaimLoader, Container } from '../../components';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <li>
                <NavigateLink to={'/'}>Home</NavigateLink>
              </li>
              <li>
                <NavigateLink to={'/catalog'}>Catalog</NavigateLink>
              </li>
              <li>
                <NavigateLink to={'/favorites'}>Favorites</NavigateLink>
              </li>
            </NavList>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<MaimLoader />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
