import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
}
