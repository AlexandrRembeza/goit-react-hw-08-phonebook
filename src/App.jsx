import { currentUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { ContactsSpinner } from 'components/ContactsPage/ContactsSpinner';
import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import SharedLayout from 'components/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'components/Box';

const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Box display="flex" justifyContent="center" mt="150px">
          <ContactsSpinner size={'80'} />
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={<PublicRoute redirectTo="/contacts" component={<LoginPage />} />}
            />
            <Route
              path="register"
              element={<PublicRoute redirectTo="/contacts" component={<RegisterPage />} />}
            />
            <Route
              path="contacts"
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </>
  );
}
