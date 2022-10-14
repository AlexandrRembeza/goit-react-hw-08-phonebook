import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';

const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<SharedLayout />} />
    </Routes>
  );
}
