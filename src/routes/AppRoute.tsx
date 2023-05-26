import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

export const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  );
};
