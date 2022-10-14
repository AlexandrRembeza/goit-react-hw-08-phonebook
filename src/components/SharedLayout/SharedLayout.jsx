import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';

export function SharedLayout() {
  return (
    <>
      <Navigation />
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
}
