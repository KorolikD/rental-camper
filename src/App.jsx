import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="catalog" element={<Catalog />} />

        <Route path="favorites" element={<Favorites />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
