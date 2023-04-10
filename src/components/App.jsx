import { Route, Routes } from 'react-router-dom';

import SharedLayout from './index';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path=":moviesId" element={<div></div>}>
            <Route path="cast" element={<div></div>} />
            <Route path="reviews" element={<div></div>} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
